// Create a context which basically a store in which we will defines things that ll be common need 
// Themeprovider 
// useContext(ThemeContext)


import {  createContext, useContext, useState ,ReactNode} from "react"
type ThemeProviderProps = {
  children: ReactNode;
};
export const ThemeContext=createContext({
  theme:"light",
  setTheme:(theme:string)=>{}
})

export const ThemeProvider=({children}:ThemeProviderProps)=>{
  const [theme,setTheme]=useState("light")
  return(
    <ThemeContext.Provider value={{theme,setTheme}}>
     {children}
    </ThemeContext.Provider>
  )
}

export const useTheme=()=>{
  const context=useContext(ThemeContext)

  if(!context){
    throw new Error("useTheme must be used within ThemeProvider")
  }

  return context
}