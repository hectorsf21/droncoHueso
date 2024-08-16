import React from 'react'
import Image from 'next/image'
import tMalignos from '@/image/servicio/tmalignos.jpg'
export default function TumoresMalignos({handleClose6, closeCard6}) {
    return (
        <>
            <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 transition-all duration-500 ${closeCard6 ? 'opacity-100':'opacity-0 pointer-events-none'}`}>
                <div className={`bg-white w-2/3 md:w-1/2 lg:w-1/3 h-[500px] rounded-lg p-6 overflow-y-auto transition-all duration-500 ${closeCard6 ? 'translate-y':'-translate-y-[1000px]'}`}>
                    <button onClick={handleClose6} className="absolute top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>

                    {/* Card Content */}
                    <div className='flex justify-center mb-7'>
                        <Image src={tMalignos} width={'auto'} height={'auto'} alt='tumores malignos' />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">¡Sarcomas!</h1>
                    <p className="text-gray-700 mb-4">&#9679; &nbsp;Los sarcomas son tumores malignos (cáncer) que se origina en tejidos óseos y muscular, en el caso de los sarcomas de partes blandas se originan en tejidos adiposos, musculoso, nerviosos,fibrosos y vasos sanguíneos.</p>
                    <p className="text-gray-700 mb-4">&#9679; &nbsp;Estos pueden encontrarse en cualquier parte del cuerpo , existen más de 50 subtipos diferentes de sarcomas de tejidos blandos, los cuales dependiendo antecedentes (oncológicos, familiares, exposición a radiación), edad, sexo son más frecuentes que otros. Teniendo en cuenta que por ser lesiones de partes blandas la resonancia magnética nuclear es un estudio de gran ayuda para la planificación quirúrgica.</p>
                </div>
            </div>
        
        </>
    )
}
