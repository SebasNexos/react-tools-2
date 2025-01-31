import { authReducer } from "../../src/auth/context/authReducer"

describe('Pruebas en authReducer', () => {

    test('Debe retornar el estado por defecto', () => {

        const state = authReducer({logged: false}, {}); 
        expect( state ).toEqual({logged: false})  

    })

    test('debe de (login) llamar el login autenticar y establecer el usuario ', () => {

    })

    test('debe de (logout) borrar el name del usuario y logged en false ', () => {

    })
})

