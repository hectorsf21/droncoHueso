import React from 'react'
import Image from 'next/image'
import tBenignos from '@/image/servicio/tbenignos.jpeg'
export default function TumoresBenignos({handleClose7, closeCard7}) {
    return (
        <>
            <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 transition-all duration-500 ${closeCard7 ? 'opacity-100':'opacity-0 pointer-events-none'}`}>
                <div className={`bg-white w-2/3 md:w-1/2 lg:w-1/3 h-[500px] rounded-lg p-6 overflow-y-auto transition-all duration-500 ${closeCard7 ? 'translate-y':'-translate-y-[1000px]'}`}>
                    <button onClick={handleClose7} className="absolute top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>

                    {/* Card Content */}
                    <div className='flex justify-center mb-7'>
                        <Image src={tBenignos} width={'auto'} height={'auto'} alt='Lesiones pseudotumorales' />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">¡Lesiones pseudotumorales!</h1>
                    <p className="text-gray-700 mb-4">&#9679; &nbsp;La denominación de seudotumores óseos corresponde a todas las lesiones no neoplásicas que pueden parecerse a una lesión maligna o benigna debido a que comparten con éstas algunas de sus características.</p>
                    <p className="text-gray-700 mb-4">&#9679; &nbsp;El diagnóstico suele ser fortuito y el origen a menudo es infeccioso, hormonal, metabólico o hematológico.</p>
                    <p className="text-gray-700 mb-4">&#9679; &nbsp;Clínicamente y radiológicamente parecen tumores pero histológicamente no lo son, en la última clasificacion de la OMS de este año, su nombre ha cambiado (otros tumores mesenquimales de hueso) y algunas entidades que formaban parte de este grupo ya no están como es el caso del Quiste Oseo Aneurismatico, Fibroma no Osificante los cuales forman parte de la Lesiones Ricas en Células Gigantes, otros tumores mesenquimales.</p>
                </div>
            </div>
        
        </>
    )
}
