import { IconButton } from "@mui/material"
import { JournalLeyaout } from "../layout/JournalLeyaout"
import { NoteView } from "../view"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <JournalLeyaout>
      
      {/** <NothingSelectedView/> */} 

      <NoteView/> 

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >

        <AddOutlined sx={{ fontSize: 30 }}/>

      </IconButton>

    </JournalLeyaout>
  )
}
