import React, { useActionState, useState, useOptimistic } from "react";
import { UpdateMessage } from "../../utils/fetch";

const UseOptimisticComponent = () => {
    const [isSimulateError, setIsSimulateError] = useState(false);

    const [message, setMessage] = useState([
        { text: "¡Tarea Por Defecto!", sendig: false, key: 0 },
    ]);

    // Hook Optimistic
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        message,
        (state, newMessage) => [
            ...state,
            {
                text: newMessage,
                sendig: true,
                key: state.length + 1,
            },
        ]
    );

    // Actions
    const UpdatesetMessageAction = async (prevState, formData) => {
        const Mensaje = formData.get("Mensaje");
        addOptimisticMessage(Mensaje);

        try {
            // Demora 1 segundo - no hace nada
            await UpdateMessage(Mensaje, isSimulateError);
            // Estado de mensajes
            setMessage((message) => [
                ...message,
                { text: Mensaje, key: message.length + 1, sendig: false },
            ]);
            return { error: false, message: "Ok, Mensaje enviado..." };
        } catch (error) {
            // Estado de mensajes
            setMessage(message);
            return { error: true, message: "Error, En el Servidor..." };
        }
    };

    const [data, action, isPending] = useActionState(UpdatesetMessageAction);

    return (
        <>
            <form action={action}>
                {optimisticMessages.map((item) => {
                    return (
                        <ul key={item.key}>
                            {item.text} {item.sendig && "(Enviando...)"}
                        </ul>
                    );
                })}

                <input
                    disabled={isPending}
                    type="text"
                    placeholder="Mensaje"
                    name="Mensaje"
                />

                <button disabled={isPending} type="submit">
                    {isPending ? "Cargando..." : "Enviar"}
                </button>

                {data?.error && <p>❌ {data?.message}</p>}
            </form>

            <input
                onChange={() => setIsSimulateError(!isSimulateError)}
                checked={isSimulateError}
                type="checkbox"
                name="Error en Servidor"
                value={"Error en Servidor"}
            />
            <p>Error en Servidor</p>
        </>
    );
};

export default UseOptimisticComponent;
