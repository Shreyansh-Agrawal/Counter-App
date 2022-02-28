import React, {createContext, useContext} from "react";

const CountContext = createContext();

export default function CountContextProvider({children}){
    const [count, setCount] = React.useState(756);

    return (
        <CountContext.Provider
            value={{count, setCount}}>
            {children}
        </CountContext.Provider>
    );
}

export function useCountContext(){
    return useContext(CountContext);
}