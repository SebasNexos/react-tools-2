import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onLoadEvent, onSetActiveEvent, onUpdateEvent } from '../store';
import calendarApi from '../api/calendarApi';
import { convertEventsToDateEvents } from '../helpers';
import Swal from 'sweetalert2';


export const useCalendarStore = () => {
  
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );
    const { user } = useSelector( state => state.auth );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) )
    }

    const startSavingEvent = async( calendarEvent ) => {
        // TODO: llegar al backend
        try {

            // Todo bien
        if( calendarEvent.id ) {
            // Actualizando
            const { data } = await calendarApi.put(`/events/${ calendarEvent.id }`, calendarEvent); 
            dispatch( onUpdateEvent({ ...calendarEvent, user }) );
            return; 
        }


        const { data } = await calendarApi.post('/events'); 
        dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id }) );
            
        } catch (error) {

            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error'); 
            
        }

        
    }

    const startDeletingEvent = async() => {
        // Todo: Llegar al backend
        try {
            await calendarApi.delete(`/events/${ calendarEvent.id }`);
            dispatch( onDeleteEvent() ); 
        } catch (error) {
            console.log(error); 
            Swal.fire('Error al eliminar', error.response.data.msg, 'error'); 
        }

        
    }
    

    const starLoadingEvents = async() => {

        try {

            const {data} = await calendarApi.get('/events'); 
            const events = convertEventsToDateEvents(data.eventos); 
            dispatch( onLoadEvent( events ) ); 
            console.log(events)

        } catch (error) {
            console.log('Error cargando eventos'); 
            console.log(error)
        }
    }

    return {
        //* Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        //* Métodos
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent,
        starLoadingEvents, 
    }
}
