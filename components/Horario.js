import React from 'react'
import Image from 'next/image'
import contactame from '@/image/contactame.png';
import horarios from '@/image/horarios.png';
import servicios from '@/image/servicios.png';

export default function Horario({handleCard1, handleCard2, handleCard3, handleCard4, handleCard5, handleCard6, handleCard7, handleCard8 }) {
  return (
    <>
        {/* flex flex-col justify-start items-center lg:flex lg:justify-between m-auto my-[150px]   */}
        <div id='servicios' className='flex justify-between flex-wrap m-auto py-12 w-10/12'>
            <div className='flex gap-2 max-w-[300px] mb-10 sm:mb-0'>
                <div >
                    <Image className='max-w-none object-contain' src={contactame} width={'25px'} height={'25px'} alt='icon-contacto' />
                </div>
                <div>
                    <h1 className='font-semibold text-md text-gray-900'>CONTÁCTAME</h1>
                    <p className='my-4 font-semibold text-gray-700 text-lg'>+58 424 141 4994</p>
                    <p className='my-4 font-semibold text-gray-700 text-lg'>dronconhueso@gmail.com</p>
                </div>
            </div>
            <div className='flex gap-2 max-w-[300px] mb-10 sm:mb-0'>
                <div>
                    <Image className='max-w-none object-contain' src={horarios} alt='icon-horario' />
                </div>
                <div>
                    <h1 className='font-semibold text-md text-gray-900'>HORARIOS</h1>
                    <p className='my-4 font-semibold text-gray-700 text-lg'>Jueves a partir de las 8:00 AM en el Servicio de Tumores Óseos Y Servicios Oncológicos Hospitalarios IVSS, antiguo Hospital Padre machado, el cementerio, Caracas</p>
                    <p className='my-4 font-semibold text-gray-700 text-lg'>Viernes a partir de las 8:00 am hasta la 1:00 pm Unidad SANT, Grupo Médico Santa Paula, Urbanización Santa Paula, El Cafetal.</p>
                </div>
            </div>
            <div className='flex gap-2 max-w-[300px] mb-10 sm:mb-0'>
                <div>
                    <Image className='max-w-none object-contain' src={servicios}  alt='icon-servicios' />
                </div>
                <div>
                    <h1 className='font-semibold text-md text-gray-900'>PATOLOGÍAS</h1>
                    <ul className='cursor-pointer navDinamic'>
                        <li onClick={handleCard1} className='list-disc my-4 font-semibold text-gray-700 text-sm'>{"¿Cómo detectar un tumor óseo?".toUpperCase()}</li>
                        <li onClick={handleCard2} className='list-disc my-4 font-semibold text-gray-700 text-sm'>{"¿Todo tumor óseo es cáncer?".toUpperCase()}</li>
                        <li onClick={handleCard3} className='list-disc my-4 font-semibold text-gray-700 text-sm'>{"¡Osteomielitis!".toUpperCase()}</li>
                        <li onClick={handleCard4} className='list-disc my-4 font-semibold text-gray-700 text-sm'>{"¡Metástasis ósea!".toUpperCase()}</li>
                        <li onClick={handleCard5} className='list-disc my-4 font-semibold text-gray-700 text-sm'>{"¿Que es un tumor óseo?".toUpperCase()}</li>
                        <li onClick={handleCard6} className='list-disc my-4 font-semibold text-gray-700 text-sm'>{"¡Sarcomas!".toUpperCase()}</li>
                        <li onClick={handleCard7} className='list-disc my-4 font-semibold text-gray-700 text-sm'>{"¡lesiones pseudotumorales!".toUpperCase()}</li>
                        <li onClick={handleCard8} className='list-disc my-4 font-semibold text-gray-700 text-sm'>{"¿ Que es un osteosarcoma ? ".toUpperCase()}</li>
                    </ul>
                    {/* <h1 className='font-semibold text-md text-gray-900'>PATOLOGÍAS</h1>
                    <ul className='cursor-pointer navDinamic'>
                        <li onClick={handleCard6} className='list-disc my-4 font-semibold text-gray-700 text-sm'>TUMORES MALIGNOS</li>
                        <li onClick={handleCard7} className='list-disc my-4 font-semibold text-gray-700 text-sm'>TUMORES BENIGNOS</li>
                        <li onClick={handleCard8} className='list-disc my-4 font-semibold text-gray-700 text-sm'>OSTEOMIELITIS</li>
                    </ul> */}
                </div>
            </div>
        </div>
    </>
  )
}
