import React, { useState } from "react";
import { updateName } from "../../utils/fetch";
import { useTransition } from "react";
const UseTransitions = () => {
    const [name, setname] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    // useTransition -> isPending (true - false) y startTransition (funcion asincrona)
    const [isPending, startTransition] = useTransition();
    // const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        startTransition(async () => {
            const err = await updateName(name);

            if (err) {
                setError(err);
                setResult("");
            } else {
                setResult(name);
                setError(null);
            }

            setname("");
        });
    };

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    onChange={(e) => setname(e.target.value)}
                    type="text"
                    placeholder="name"
                    value={name}
                    disabled={isPending}
                />
                <button type="submit" disabled={isPending}>
                    {isPending ? "Cargando..." : "Actualizar"}
                </button>

                {error && <p>❌{error}</p>}

                {result && !error && <p>✔ El nombre guardado es: {result}</p>}
            </form>
        </>
    );
};

export default UseTransitions;
