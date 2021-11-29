import { useContext } from 'react'
import { ThemeContext } from './ParentContext'



export default function Layout() {
    const useTheme = useContext(ThemeContext)
    const ChangeTheme = () => {
          useTheme.setTheme({
          color:'black',
            background:'yellow',
            padding:'5%',
            margin:'2%'
        }
        )
      
      }
    return (
        <div>
<div style={useTheme.theme}>
         Welcome
        </div>
        <div className="d-inline-flex p-4">
        <button type="button" className="btn btn-outline-primary"
          onClick={ChangeTheme}
          
        >
          Change Theme
        </button>
      </div>
        </div>
    )

}
