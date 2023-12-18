import React from 'react'
import './App.css'
import Get from './components/Get/Get'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Get />
      <ToastContainer />
    </>
  )
}

export default App
