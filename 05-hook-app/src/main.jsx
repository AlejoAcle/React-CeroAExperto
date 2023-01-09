import React from 'react'
import ReactDOM from 'react-dom/client'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
import { Message } from './02-useEffect/Message.jsx'
import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
import { MultipleCustomHooks } from './03-example/MultipleCustomHooks.jsx'
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CounterWithCustomHook } from './CounterWithCustomHook.jsx'
// import { HooksApp } from './HooksApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustomHooks />
    {/* <FormWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <Message /> */}
  </React.StrictMode>,
)
