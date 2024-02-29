import React, { useContext } from "react";

export const ThemeContext = React.createContext({
    themeMode: "light",
    lightTheme: ()=>{},
    darkTheme:()=>{},
})


export const ThemeContextProvider = ThemeContext.Provider

const useTheme = ()=>{
    return useContext(ThemeContext)
}

export default useTheme