import React, { useState, useActionState } from "react";
import { updateName } from "../../utils/fetch";
import { useFormStatus } from "react-dom";
// 😱 avanzado - Crea una funcion a partir de otra funcion
const createAction = (updateStateResult) => async (prevState, formData) => {
    const name = formData.get("UpdateName");
    console.log(name);
    const error = await updateName(name);

    if (error) return error;
    updateStateResult(name);
    return null;
};

const UseActionStateComponent = () => {
    const [result, setResult] = useState();

    // const ActionState = async (prevState, formData) => {
    //     const name = formData.get("UpdateName");
    //     console.log(name);
    //     const error = await updateName(name);

    //     if (error) return error;
    //     setResult(name);
    //     return null;
    // };

    // 😱 Pasar un estado a una funcion fura el componente
    const updateNameAction = createAction(setResult);

    const [error, submitAction, isPending] = useActionState(updateNameAction);

    return (
        <>
            <form action={submitAction}>
                <input
                    disabled={isPending}
                    type="text"
                    placeholder="name"
                    name="UpdateName"
                />
                <Boton />

                {error && <p>❌ {error}</p>}

                {result && !error && <p>✔ El nombre guardado es: {result}</p>}
            </form>
        </>
    );
};

export default UseActionStateComponent;

function Boton() {
    const { pending, data, method, action } = useFormStatus();

    console.log({ pending, data: data?.get("UpdateName"), method, action });

    return (
        <button disabled={pending} type="submit">
            {pending ? "Cargando..." : "Actualizar"}
        </button>
    );
}
