import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/header.jsx'
import Form from './Form/form.jsx'
import Footer from './Footer/footer.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Form />
    <Footer/>
  </React.StrictMode>,
)
