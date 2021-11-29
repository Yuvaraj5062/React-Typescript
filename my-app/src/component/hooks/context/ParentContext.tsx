import React, { useState, createContext } from 'react'

type ThemeType = {
  color: string;
  background: string;
  padding: string;
  margin: string;
}

const themes = {
  color:'white',
  background:'black',
  padding:'5%',
  margin:'2%'
}

type SetThemeType = {
  theme: ThemeType 
  setTheme: React.Dispatch<React.SetStateAction<ThemeType >>
}

type SetThemeTypeProviderProps = {
  children: React.ReactNode
}

export const ThemeContext = createContext({} as SetThemeType)

export const ParentContextProvider = ({ children }: SetThemeTypeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(themes)
  console.log("Theme",theme)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
