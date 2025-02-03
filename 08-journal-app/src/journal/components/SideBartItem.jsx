import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote, setNotes } from '../../store/journal'

export const SideBartItem = ({ title = '', body, id, date, imageUrls }) => {

    const dispatch = useDispatch(); // usar el dispatch 

    const onClickNote = () => { // con esto activamos la nota que elegimos en el sidebar
        dispatch( setActiveNote({title, body, id, date, imageUrls}) )
    }

    const newTitle = useMemo( () => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title; 
    }, [ title ])


  return (
    <ListItem disablePadding>
        <ListItemButton onClick={onClickNote}>
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={ newTitle } />
                <ListItemText secondary={ body } />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}

