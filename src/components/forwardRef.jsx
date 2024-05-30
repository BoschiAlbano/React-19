import React, { useRef, forwardRef } from "react";

const ForwardRef = () => {
    const inputRef = useRef();

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <>
            {/* <Input ref={inputRef} type="text" /> */}
            <InputSinforwardRef ref={inputRef} type="text" />
            <button onClick={() => focusInput()}>Focus</button>
        </>
    );
};

export default ForwardRef;

// ❌ Componente -> las librerias de componentes hacen esto...
const Input = forwardRef((prop, ref) => {
    return <input ref={ref} placeholder="Ej. forwardRef" type="text"></input>;
});
Input.displayName = "Input";

// ✔ Componente -> ahora no hace falta usar ForwardRef
const InputSinforwardRef = ({ ref }) => {
    return <input ref={ref} placeholder="Ej. forwardRef" type="text"></input>;
};
