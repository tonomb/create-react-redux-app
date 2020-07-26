import React from 'react'
import {Route, Redirect} from 'react-router-dom'


function PrivateRoute({children, ...rest}){
  return(
      <Route {...rest} render={ () => {
          if(JSON.parse(window.localStorage.getItem('token'))){
              if(children.length > 1){
                  return [...children]
              } else{
                  return {...children}
              }
              
          } else{
              return <Redirect to='/login' />
          }
      }}/>
  )
}

export default PrivateRoute;