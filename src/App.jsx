
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const[themeMode,setThememode]=useState("light")

  const lightTheme=()=>{
    setThememode("light")
  }
   const darkTheme=()=>{
    setThememode("dark")
   }

 
   useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
   },[themeMode])
  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
     <div className="flex flex-wrap items-center min-h-screen">
                <div className="w-full">
                    <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
     </div>
</ThemeProvider>
  )
}

export default App
