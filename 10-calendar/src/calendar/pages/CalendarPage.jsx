import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns'
import { Navbar } from '../'

import { localizer } from '../../helpers'; 

const events = [{
  title: 'Cumpleaños del jefe',
  notes: 'Hay que comprar el paste', 
  start: new Date(),
  end: addHours( new Date(), 2),
  bgcolor: '#fafafa',
  user: {
    _id: '123',
    name: 'Juan'
  }
}]

export const CalendarPage = () => {
  return (
    <>
      <Navbar /> 

      <Calendar
        localizer={ localizer }
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
    />

    </>
  )
}


