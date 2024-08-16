import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { CircularProgress, Snackbar, Alert  } from '@mui/material';
export default function Contacto() {
  const init = {
    name:'',
    lastname:'',
    email:'',
    mobile:'',
    message:''
  }
  const [dato, setDato] = useState(init)
  const [progres, setProgres] = useState(false)
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);

  useEffect(()=>{
    console.log(progres)
  },[progres])

  // FUNCIONES
  const handleChange = (e)=>{
    const {name, value} = e.target
    setDato({...dato, [name]:value})
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    setProgres(true)
    sendMenssage(dato)
    
  }
  const sendMenssage = async (dato)=>{
    try {
      const response = await axios.post('/api/contacto', dato)
      setProgres(false)
      setOpenSuccessSnackbar(true);
    } catch (error) {
      setProgres(false)
      setOpenErrorSnackbar(true);
      console.log(error)
    }
  }

  const handleCloseSuccessSnackbar = () => {
    setOpenSuccessSnackbar(false);
  };

  const handleCloseErrorSnackbar = () => {
    setOpenErrorSnackbar(false);
  };
  return (
    <>
    {/* MENSAJES */}
    <Snackbar open={openSuccessSnackbar} autoHideDuration={6000} onClose={handleCloseSuccessSnackbar}>
        <Alert onClose={handleCloseSuccessSnackbar} severity="success" sx={{ width: '100%' }}>
          ¡Mensaje enviado correctamente!
        </Alert>
      </Snackbar>

      <Snackbar open={openErrorSnackbar} autoHideDuration={6000} onClose={handleCloseErrorSnackbar}>
        <Alert onClose={handleCloseErrorSnackbar} severity="error" sx={{ width: '100%' }}>
          Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.
        </Alert>
      </Snackbar>
    {/* FORMULARIO */}
      <div id='contacto' className='bg-contact p-10'>
      <h1 className='text-white mb-6 text-center font-semibold text-4xl'>CONTACTO</h1>
        <form  onSubmit={handleSubmit} className='form bg-white p-8 flex flex-col sm:w-[350px] md:w-[550px] m-auto shadow-lg mb-6'>
          <label>Nombre</label>
          <input type='text' onChange={handleChange} name='name' />
          <label>Apellido</label>
          <input type='text' onChange={handleChange} name='lastname' />
          <label>Email</label>
          <input type='text' onChange={handleChange} name='email' />
          <label>Telefono</label>
          <input type='text' onChange={handleChange} name='mobile' />
          <label>Mensaje</label>
          <textarea onChange={handleChange} name='message'></textarea>
          <div className='text-center'>
            <button className='w-full bg-naranja text-white font-semibold py-2'>ENVIAR</button>
          </div>
          <div className={`${progres ? 'block':'hidden'} text-center my-3`}>
          <CircularProgress />
          </div>
          
        </form>
      </div>
    </>
  );
}