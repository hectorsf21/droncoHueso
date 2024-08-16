import React from 'react'
import perfil2Web from '@/image/perfil2-web.png'
import Image from 'next/image'

export default function SobreMi({handleCard9}) {
  return (
    <>
    <div className='bg-gray-100 py-20 xl:py-32'>
        <div className='flex flex-col-reverse w-8/12 lg:flex-row gap-4 lg:w-10/12 m-auto lg:justify-between'>
            <div className='max-w-xl'>
                <div className='flex gap-3 items-center'>
                    <p className='text-gray-600 font-semibold text-lg'>SOBRE MI</p>
                    <div className='bg-naranja w-[40px] h-[3px]'></div>
                </div>
                <h1 className='my-6 text-xl xl:text-3xl 2xl:text-4xl font-semibold max-w-[450px]'>DEDICADO A MEJORAR LA SALUD DE MIS PACIENTES</h1>
                <p className='text-gray-700 text-sm lg:text-base max-w-[450px]'>Soy el Dr. Luis Willians, médico Traumatólogo, Oncólogo Ortopedista, egrese como médico cirujano de la Universidad Rómulo Gallegos en el año 2010 , hice residencia asistencial en traumatología durante 2 años en el hospital José María Vargas , para optar...</p>
                <div className='my-10'>
                    <button onClick={handleCard9} className='py-1 px-4 rounded-sm bg-naranja text-white font-semibold'>VER MAS..</button>
                </div>
            </div>
            <div>
                <Image src={perfil2Web} alt='perfil-sobre'/>
            </div>
        </div>

    </div>
    </>
  )
}