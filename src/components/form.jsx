import React from "react";

const Form = () => {
    return (
        <>
            {/* Esc posible cargar css solo cuando el componente lo necesite */}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
            />

            <form action="">
                <button
                    type="button"
                    onClick={() => alert("Etiqueda link con la CDN")}
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default Form;
