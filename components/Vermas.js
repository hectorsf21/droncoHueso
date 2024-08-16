import React from 'react'
import Image from 'next/image'
// import fractura from '@/image/servicio/fractura.jpg'
export default function Vermas({ handleClose9, closeCard9 }) {
    return (
        <>
            <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 transition-all duration-500 ${closeCard9 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`bg-white w-2/3 md:w-1/2 lg:w-1/3 h-[500px] rounded-lg p-6 overflow-y-auto transition-all duration-500 ${closeCard9 ? 'translate-y' : '-translate-y-[1000px]'}`}>
                    <button onClick={handleClose9} className="absolute top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>

                    {/* Card Content */}
                    {/* <div className='flex justify-center mb-7'>
                        <Image src={fractura} width={'auto'} height={'auto'} alt='fracturas' />
                    </div> */}
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Dr Luis Willians, Medico Traumatólogo</h1>

                    <p className="text-gray-700 mb-4">Soy el Dr. Luis Willians, médico Traumatólogo, Oncólogo Ortopedista, egrese como médico cirujano de la Universidad Rómulo Gallegos en el año 2010 , hice residencia asistencial en traumatología durante 2 años en el hospital José María Vargas , para optar al cargo de Postgrado en traumatología y ortopedia, ingresando en 2014 y egresando 2016 , realice curso de perfeccionamiento en Tumores Óseos en el antiguo Hospital Padre machado y Unidad de Tumores Musculoesqueléticos , en el Centro Docente la Trinidad de Caracas .
                        Actualmente me desempeño como adjunto 1 en el Servicio de tumores Óseos del hospital antes mencionado, así como en el centro clínico Fenix Salud y Grupo Médico Santa Paula.
                        -Me especializo en manejo de tumores Musculoesqueléticos e infecciones óseas.
                        -Mi experiencia a lo largo de estos años, me ha dado la oportunidad de llevar algunos casos en presentación de trabajos de investigación en la Sociedad Venezolana de Ortopedia y Traumatología.
                        -Soy miembro activo de la SVCOT Y AVETME.
                    </p>
                </div>
            </div>

        </>
    )
}
