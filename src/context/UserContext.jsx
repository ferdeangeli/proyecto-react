import { createContext, useState } from "react";

const userContext = createContext()

const UserContextProvider = (props) => {
    
    const [user, setUser] = useState("LOGIN");

    return(
        <userContext.Provider value={{user: user, setUser: setUser}}>
            {props.children}
        </userContext.Provider>
    )
}

export {UserContextProvider, userContext}