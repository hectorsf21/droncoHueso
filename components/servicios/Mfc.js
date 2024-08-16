import React from 'react'
import Image from 'next/image'
import fractura from '@/image/servicio/fractura.jpg'
export default function Mfc({handleClose5, closeCard5}) {
    return (
        <>
            <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 transition-all duration-500 ${closeCard5 ? 'opacity-100':'opacity-0 pointer-events-none'}`}>
                <div className={`bg-white w-2/3 md:w-1/2 lg:w-1/3 h-[500px] rounded-lg p-6 overflow-y-auto transition-all duration-500 ${closeCard5 ? 'translate-y':'-translate-y-[1000px]'}`}>
                    <button onClick={handleClose5} className="absolute top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>

                    {/* Card Content */}
                    <div className='flex justify-center mb-7'>
                        <Image src={fractura} width={'auto'} height={'auto'} alt='fracturas' />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">¿Que es un tumor óseo?</h1>
                    <p className="text-gray-700 mb-4">&#9679; &nbsp;Un tumor óseo es una proliferación anormal de células de una estirpe determinada dentro de un hueso.</p>
                    <p className="text-gray-700 mb-4">&#9679; &nbsp;Un tumor óseo puede causar la formación de una masa indolora, también puede causar una fractura patológica por la presencia del tumor. .</p>
                </div>
            </div>
        
        </>
    )
}
