
import { Grid, TextField, Typography, Button, Link, Alert } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo } from "react"
import { Google } from "@mui/icons-material"
import { checkingCredentials } from "../../store/auth"
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks"


export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth)
  
  const dispatch = useDispatch() // se lllama el Hook 

  const { email, password, onInputChange } = useForm({
    email: 'sebastianurre@gmail.com', 
    password: '123456'
  })

  const isAuthenticating = useMemo( () => status === 'checking', [status]) 

  const onSubmit = ( event ) => {
    event.preventDefault(); 

    //console.log({ email, password })
    dispatch( startLoginWithEmailPassword( { email, password } )) // este es la primera función que despacha funciones de arriba 
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() ) // esta es la segunda función que tenemos nosotros relacionada al thunks 
  }

  



  return (
    <AuthLayout title='Login'>

        <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">

          <Grid container>
            <Grid item xs={12} sx={{ mt: 3 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="surregograciano@gmailcom" 
                fullWidth 
                name="email"
                value={email}
                onChange={ onInputChange }
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 3 }}>
              <TextField 
                label="contraseña" 
                type="password" 
                placeholder="Contraseña" 
                fullWidth 
                name="password"
                value={password}
                onChange={ onInputChange }
              />
            </Grid>

            <Grid 
              container
              display={ !!errorMessage ? '': 'none'}
              sx={{ mt: 1}}
            >
              <Grid
                item 
                xs={ 12 }
              >
                <Alert severity="error">{ errorMessage }</Alert>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1}}>
              <Grid item xs={12} sm={6}>
                <Button 
                  disabled={ isAuthenticating }
                  type="submit" 
                  variant="contained" 
                  fullWidth>
                  login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  type="sumbit"
                  disabled={ isAuthenticating }
                  variant="contained" 
                  fullWidth 
                  onClick={onGoogleSignIn}>
                  <Google/>
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>

              <Link component={RouterLink} color="inherit" to='/auth/register'>
                Crear una cuenta 
              </Link>

            </Grid>

          </Grid>
          
        </form>

    </AuthLayout>

  )
}

