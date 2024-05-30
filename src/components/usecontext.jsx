import { createContext, useCallback, useState } from "react";

export const UserContext = createContext({ name: null, islogged: false });

export function UserContextProvider({ children }) {
    const [name, setName] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    const UpdateName = useCallback(({ name, isLogged }) => {
        console.log(name, isLogged);
        setName(name);
        setIsLogged(isLogged);
    }, []);

    return (
        // userContext.Provider -> no es necesario
        <UserContext value={{ name, isLogged, UpdateName }}>
            {children}
        </UserContext>
    );
}
