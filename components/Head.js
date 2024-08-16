import React from 'react'
import perfil from '@/image/perfil-web.jpg'
import Image from 'next/image'

export default function Head() {
  return (
    <>
    {/*  */}
        <div className='flex flex-col-reverse sm:flex-row py-10 md:pt-20 2xl:pt-32 m-auto w-10/12 justify-between'>
            <div className='lg:mt-5 xl:mt-16'>
                <h1 className=" font-bold text-xl lg:text-3xl xl:max-w-[600px] xl:text-4xl 2xl:max-w-[720px]  2xl:text-5xl">ESTAMOS PARA AYUDARTE, PODEMOS MEJORAR TU SALUD</h1>
                <p className='text-gray-700 xl:max-w-[700px] text-lg 2xl:max-w-[740px] mt-4 lg:mt-10'>Dr. Luis Willians, médico Traumatólogo, Oncólogo Ortopedista</p>
                <p className='text-gray-700 xl:max-w-[700px] text-lg 2xl:max-w-[740px]'>Especializado en manejo de tumores Musculoesqueléticos e infecciones óseas</p>
                <p className='text-gray-700 text-lg max-w-[740px]'>Soy miembro activo de la SVCOT Y AVETME</p>
                <div className='mt-[20px]'>
                  <button className='bg-naranja text-sm xl:text-xl text-white font-semibold py-2 px-4'><a href='#contacto'>CONTÁCTAME</a></button>
                </div>
            </div>
            <div className='mb-10 xl:mb-0'>
                <Image className='max-w-[80%] m-auto sm:max-w-[100%]' src={perfil} alt='perfil-photo'/>
            </div>
        </div>
    </>
  )
}