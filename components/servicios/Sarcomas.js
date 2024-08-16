import React from 'react'
import Image from 'next/image'
import tumorOseo from '@/image/servicio/tumoroseo.jpeg'
export default function Sarcomas({handleClose1, closeCard1}) {
    return (
        <>
            <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 transition-all duration-500 ${closeCard1 ? 'opacity-100':'opacity-0 pointer-events-none'}`}>
                <div className={`bg-white w-2/3 md:w-1/2 lg:w-1/3 h-[500px] rounded-lg p-6 overflow-y-auto transition-all duration-500 ${closeCard1 ? 'translate-y':'-translate-y-[1000px]'}`}>
                    <button onClick={handleClose1} className="absolute top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>

                    {/* Card Content */}
                    <div className='flex justify-center mb-7'>
                        <Image src={tumorOseo} width={'auto'} height={'auto'} alt='tumor-oseo' />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo detectar un tumor óseo?</h1>
                    <p className="text-gray-700 mb-4">&#9679; &nbsp;Los pasos para diagnosticar un tumor óseo van desde una buena anamnesis, tomando en cuenta antecedentes, síntomas, signos. Acompañado de la adecuada prescripción de los estudios de imágenes, sumándosele exámenes de laboratorio como fosfatasa alcalina, calcio, PTh entre otros.</p>   
                    <p className="text-gray-700 mb-4">&#9679; &nbsp;Al tener todo esto se procede a la toma de biopsias muchos diagnóstico son epidemiológico - imagenologicos en el caso de tumores en la infancia otros si deben pasar previo un estudio histopatologico.</p>
                    <p className="text-gray-700 mb-4">&#9679; &nbsp;Es importante tener en cuenta la presentación de la enfermedad, ya que muchas lesiones pueden parecer un tumor y no lo son. Hay infecciones, enfermedades metabólicas.</p>
                    <p className="text-gray-700 mb-4">&#9679; &nbsp;Por eso la combinación de todos los factores darán excelentes resultados para el manejo de esta patología.</p>
                </div>
            </div>
        
        </>
    )
}
