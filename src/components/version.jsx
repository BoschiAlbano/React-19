import React, { version } from "react";

const Version = () => {
    return (
        <>
            {/* title -> Pasar siempre una cadena de texto */}
            <title>{`Hola, React ${version}`}</title>
            <>
                <h1>React 19</h1>
                <strong>
                    <small style={{ color: "black" }}>Version: {version}</small>
                </strong>
            </>

            <section>
                <h1>DefaulProps</h1>
                <p>DefaulProps ya no funciona...</p>
                <Seo />
            </section>
        </>
    );
};

export default Version;

function Seo({ title = "React 19" }) {
    return (
        <>
            {/* title -> Pisa el titulo de arriba pero en el html no desaparese. */}
            <title>{`SEO ${title}`}</title>
        </>
    );
}
