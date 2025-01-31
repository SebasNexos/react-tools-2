// manera de importar properties 

import PropTypes from 'prop-types'; // definir el tipo de las propiedades 


export const FirstApp = ( { title, subTitle, name } ) => {

    return (

        <>
            <h1> { title } </h1>
            {/**<h1> { JSON.stringify(newMessage) } </h1> */}
            <p> { subTitle } </p>
            <p> { name } </p>
        </>

    )

}

FirstApp.propTypes = { // Esto es como si fuera una interfas en C# donde hacemos que los properties sean obligatorios o no 
    title: PropTypes.string.isRequired, 
    subTitle: PropTypes.str.isRequired
}; 

// Como definir propiedades ya definidas 

FirstApp.defaultProps = {
    title: 'no hay titulo',
    subTitle: 'no hay subtitulo',
    name: 'Sebastian Urrego'
}