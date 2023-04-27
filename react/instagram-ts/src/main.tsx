import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import  {Shop}  from './components/shop/Shop'
import { Barbershop } from './components/barbershop/Barbershop'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
.render( <Barbershop />)
