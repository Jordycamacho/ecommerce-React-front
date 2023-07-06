import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
<Auth0Provider 
            domain='dev-d3wsd056ae53o2ai.us.auth0.com' 
            clientId='nUUZBudR1mB7aCUi3VjNof2OuiV1Z9Gf'
            redirectUri={window.location.origin}
            
>    
<App/>
</Auth0Provider>
)
 