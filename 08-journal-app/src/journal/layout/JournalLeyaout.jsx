import { Box, Toolbar } from "@mui/material"
import { Navbar } from "../components";
import { SideBar } from "../components";


const draweWidth = 280; 

export const JournalLeyaout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}} className="animate__animated animate__fadeIn animate__faster">

      <Navbar draweWidth={ draweWidth }/> 

      <SideBar draweWidth={ draweWidth }/>
      

        <Box 
            component='main'
            sx={{flexGrow: 1, p: 3}}
        >

          <Toolbar/> 

            {children}

        </Box>
    </Box>
  )
}


