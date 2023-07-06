import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

export const Button = () => {
  const { loginWithRedirect } = useAuth0();
  
  return  <button className='swing boton' onClick={() => loginWithRedirect()}>registrate</button>;
};
