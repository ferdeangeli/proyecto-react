import { createContext } from "react";

const userContext = createContext()

const UserContextProvider = (props) => {
    let user = "Rogelio";

    return(
        <userContext.Provider value={{user: user}}>
            {props.children}
        </userContext.Provider>
    )
}

export {UserContextProvider, userContext}