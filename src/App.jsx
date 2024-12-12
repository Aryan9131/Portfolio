
import './App.css'
import { Box } from '@mui/material'
import {Pages} from './Components/Pages'
function App() {

  return (
    <Box id="app" sx={{minHeight:"100vh", zIndex:"10", cursor:'none'}}>
       <Pages/>
    </Box>
  )
}

export default App
