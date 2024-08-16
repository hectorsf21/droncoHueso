import React from 'react'
import Image from 'next/image'
import tumoresmb from '@/image/servicio/tumormb.jpeg'
export default function TumoresMb({handleClose2, closeCard2}) {
    return (
        <>
            <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 transition-all duration-500 ${closeCard2 ? 'opacity-100':'opacity-0 pointer-events-none'}`}>
                <div className={`bg-white w-2/3 md:w-1/2 lg:w-1/3 h-[500px] rounded-lg p-6 overflow-y-auto transition-all duration-500 ${closeCard2 ? 'translate-y':'-translate-y-[1000px]'}`}>
                    <button onClick={handleClose2} className="absolute top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>

                    {/* Card Content */}
                    <div className='flex justify-center mb-7'>
                        <Image src={tumoresmb} width={'auto'} height={'auto'} alt='tumor oseo cancer' />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">¿Todo tumor óseo es cáncer?</h1>
                    <p className="text-gray-700 mb-4">&#9679; &nbsp;Esta es una pregunta que me hacen mucho pacientes y familiares en consulta.</p>   
                    <p className="text-gray-700 mb-4">&#9679; &nbsp;Pues NO todos los tumores Óseos son CÁNCER.</p>
                    <p className="text-gray-700 mb-4">&#9679; &nbsp;Cuando te dicen debes ir a un Oncólogo Ortopedista porque tienes un tumor óseo, no siempre se refieren a qué tienes cáncer en alguna extremidad de tu cuerpo, ya que existen algunos TUMORES los cuales deforman, debilitan y pueden hasta presentar una masa, pero no son lesiones malignas, ni todas se operan.</p>
                    <p className="text-gray-700 mb-4">&#9679; &nbsp;Pero si es muy importante saber cómo tratarlos, y para eso debes acudir con un Oncólogo Ortopedista o Especialista en Tumores Musculoesqueléticos.</p>
                </div>
            </div>
        
        </>
    )
}
