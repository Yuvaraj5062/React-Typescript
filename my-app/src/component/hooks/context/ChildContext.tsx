import { useContext } from 'react'
import Layout from './Layout'
import { ThemeContext } from './ParentContext'


export const ChildContext = () => {
  const useTheme = useContext(ThemeContext)
  console.log("user in user.tsx",useTheme.theme)
  const DefaultTheme = () => {
    
      useTheme.setTheme({
      color:'white',
  background:'black',
  padding:'5%',
  margin:'2%'
    })
  }
  
  return (
    <div>
      <h2> Context Example </h2>
      
      <div className="d-inline-flex p-4">
        <button type="button" className="btn btn-outline-primary"
          onClick={DefaultTheme}
        >
          Set Default Theme
        </button>

       
      </div>
    
      <Layout />
    </div>
  )
}
