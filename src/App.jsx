import "./App.css";
import React, { useState, use } from "react";
import Form from "./components/form";
import Version from "./components/version";
import { preload } from "react-dom";
import ForwardRef from "./components/forwardRef";
import UseFetch from "./components/useFetch";
import User from "./components/user";
import UseTransitions from "./components/useTransitions";
import UseActionState from "./components/useActionState";
import UseOptimistic from "./components/useOptimistic";

function App() {
    const [show, setShow] = useState(false);

    // Preload para cargar el css y evitar parpadeos. Primero carga el js y luego css
    // por otro lado si estaria en el html se cargaria primero
    preload("https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css", {
        as: "style",
        priority: "low",
    });

    return (
        <main class="center">
            {!show && (
                <button
                    style={{ height: "50px" }}
                    onClick={() => {
                        setShow(true);
                    }}
                >
                    Cargar CDN Pico Css
                </button>
            )}

            {show && (
                <div class="center gap">
                    <Version />

                    <section>
                        <h1>link CDN Preload</h1>
                        <p>
                            title Dinamico por componentes - Preload - para
                            mayor rendimiento se realiza una pre-carga y luego
                            se la usa cundo sea necesario. de esta manera se
                            carga primero el js y depues el css (recurso)
                        </p>
                        <Form />
                    </section>
                    <section>
                        <h1>ForwardRef</h1>
                        <p>
                            ForwardRef ya no se usa, es posible pasar la ref de
                            un componente por parametro.
                        </p>
                        <ForwardRef />
                    </section>
                    <section>
                        <h1>Api "Use" with Fetch</h1>
                        <p>
                            es posible pasar una promesa a un componente y
                            tomarlo con "Use" y "Suspense" hasta que se
                            resuelva.
                        </p>
                        <UseFetch />
                    </section>

                    <section>
                        <h1>Api "Use" with Context</h1>
                        <p>
                            es posible usar el Api "Use" para el manejo de
                            context - remplazando useContext ademas el "Use"
                            puede ser condicional.
                        </p>
                        <User />
                    </section>

                    <section>
                        <h1> Hook useTransition</h1>
                        <p>
                            Hook UseTransition, usado para controlar si una
                            promesa esta pendiendo o no de ser resuelta.
                        </p>
                        <UseTransitions />
                    </section>

                    <section>
                        <h1> Hook UseActionState y useFormStatus</h1>
                        <p>
                            <strong>Hook UseActionState</strong>, Permite
                            controlar la accion de un formulario. (estado,
                            accion, pendiente)
                            <br />
                            <strong>Hook useFormStatus</strong>, Permite acceder
                            a los datos y estado de un formulario que use action
                            desde un compoente hijo
                        </p>
                        <UseActionState />
                    </section>

                    <section>
                        <h1> Hook useOptimistic</h1>
                        <p>
                            <strong>Hook useOptimistic</strong>, Permite ser
                            optimista con una promesa y dar por hecho que se
                            efectuo de manera correcta en caso contrario se
                            implementa un rollback
                        </p>
                        <UseOptimistic />
                    </section>
                </div>
            )}
        </main>
    );
}

export default App;
