import React, { use } from "react";
import { UserContext } from "./usecontext";
import { useContext } from "react";

const User = ({ show = true }) => {
    if (!show) return null;

    // el hook usecontext no es condicional este si.
    const { name, isLogged, UpdateName } = use(UserContext);

    return (
        <>
            {isLogged ? (
                <div>
                    <h1>{name}</h1>
                    <button
                        onClick={() =>
                            UpdateName({ name: "", isLogged: false })
                        }
                    >
                        logaut
                    </button>
                </div>
            ) : (
                <div style={{ width: "100%" }}>
                    <button
                        style={{ width: "100%" }}
                        onClick={() =>
                            UpdateName({
                                name: "Albano Jose Boschi",
                                isLogged: true,
                            })
                        }
                    >
                        login
                    </button>
                </div>
            )}
        </>
    );
};

export default User;
