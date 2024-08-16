import React from 'react'
import Image from 'next/image'
import osteomilitis from '@/image/servicio/osteomilitis.jpeg'
export default function Osteomielitis({handleClose8, closeCard8}) {
    return (
        <>
            <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 transition-all duration-500 ${closeCard8 ? 'opacity-100':'opacity-0 pointer-events-none'}`}>
                <div className={`bg-white w-2/3 md:w-1/2 lg:w-1/3 h-[500px] rounded-lg p-6 overflow-y-auto transition-all duration-500 ${closeCard8 ? 'translate-y':'-translate-y-[1000px]'}`}>
                    <button onClick={handleClose8} className="absolute top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>

                    {/* Card Content */}
                    <div className='flex justify-center mb-7'>
                        <Image src={osteomilitis} width={'auto'} height={'auto'} alt='que es osteosarcoma' />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">¿Que es un osteosarcoma?</h1>
                    <p className="text-gray-700 mb-4">&#9679; &nbsp;Es un tumor  primario Óseo maligno , que afecta principalmente a niños y adolescentes. Este tipo de tumor se puede localizar en cualquier hueso largo , siendo más habitual la presencia en tibia y fémur en su metafisis distal y próximal , el mismo constituye el 20% de todos los tumores Óseos primarios malignos.</p>
                    <p className="text-gray-700 mb-4">&#9679; &nbsp;Su tratamiento es de manejo multidisciplinario, siendo la cirugía el tratamiento local y debe complementarse con quimioterapia antes y después de la cirugía , debido que tiene altas tasas de diseminación a pulmón , si no se realiza en tratamiento adecuado.</p>
                </div>
            </div>
        
        </>
    )
}