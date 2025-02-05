import React, { memo, useMemo } from 'react'

export const ContadorHijo = memo(({sumar, restar, contador}) => {
    console.log('Hijo contador se renderiza'); 


    const superNumero = useMemo( () => { // uso del useMemo() 
        let numero = 0; 
        for (let i = 0; i < 1000000000; i++) {
            numero++; 
        }

        return numero;
    }, [])


  return (
    <div style={{ border: '1px solid #000', margin: '10px', padding: '10px' }}>
        
        <h2>Hijo del contador</h2>

        <h3>superNumero: {superNumero}</h3>


        <h3>{contador}</h3>
        
        <nav>
        <button onClick={sumar}>
            +
        </button>
        <button onClick={restar}>
            -
        </button>
        </nav>

        


    </div>
  )
}
)

