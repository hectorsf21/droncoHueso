import React from 'react'
import Image from 'next/image'
import traumatologia from '@/image/servicio/traumatologia.jpeg'
export default function Traumatologia({handleClose4, closeCard4}) {
    return (
        <>
            <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 transition-all duration-500 ${closeCard4 ? 'opacity-100':'opacity-0 pointer-events-none'}`}>
                <div className={`bg-white w-2/3 md:w-1/2 lg:w-1/3 h-[500px] rounded-lg p-6 overflow-y-auto transition-all duration-500 ${closeCard4 ? 'translate-y':'-translate-y-[1000px]'}`}>
                    <button onClick={handleClose4} className="absolute top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>

                    {/* Card Content */}
                    <div className='flex justify-center mb-7'>
                        <Image src={traumatologia} width={'auto'} height={'auto'} alt='Metástasis ósea' />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">¡Metástasis ósea!</h1>
                    <p className="text-gray-700 mb-4">&#9679; &nbsp;Muchas muertes por cáncer se producen cuando el cáncer viaja desde el tumor principal no original y se disemina a otros tejidos y órganos.</p>
                    <p className="text-gray-700 mb-4">&#9679; &nbsp;A este proceso se le denomina Metástasis que es la propagación de un foco canceroso a un órgano distinto de aquel que se inició. .</p>
                    <p className="text-gray-700 mb-4">&#9679; &nbsp;Cada tumor metastásico es el mismo tipo de cáncer que el tumor primario. Por ejemplo: Si un carcinoma de mamá se disemina a el extremo proximal de húmero, el resultado histopatologico va corresponder con células de dicho carcinoma de mamá, más no de tejido óseo.</p>
                </div>
            </div>
        
        </>
    )
}
