import React, { useState, useEffect } from 'react';
import styleTesti from '@/styles/Testi.module.css';
import Image from 'next/image';
import imgQuota from '../image/icon-quota.png';
// MORE
import MoreTestimoMarla from './more/MoreTestimoMarla';
import MoreTestimoEric from './more/MoreTestimoEric';
import MoreTestimoAdrian from './more/MoreTestimoAdrian';
import MoreTestimoEva from './more/MoreTestimoEva';
import MoreTestimoDaniela from './more/MoreTestimoDaniela';
import MoreTestimoJason from './more/MoreTestimoJason';
import MoreTestimoWilliam from './more/MoreTestimoWilliam'

export default function Testimonio() {
    // VARIABLES
    const [margin, setmargin] = useState('0px')
    const [counter, setCounter] = useState(0)
    const [hover, sethover] = useState(false)
    const [line1Active, setline1Active] = useState(true)
    const [line2Active, setline2Active] = useState(false)
    const [line3Active, setline3Active] = useState(false)
    const [line4Active, setline4Active] = useState(false)
    const [line5Active, setline5Active] = useState(false)
    const [line6Active, setline6Active] = useState(false)
    const [showMarla, setshowMarla] = useState(false)
    const [showAdrian, setshowAdrian] = useState(false)
    const [showDaniela, setshowDaniela] = useState(false)
    const [showEric, setshowEric] = useState(false)
    const [showEva, setshowEva] = useState(false)
    const [showJason, setshowJason] = useState(false)
    const [showWilliam, setshowWilliam] = useState(false)
    // FUNCIONES
    const line1 = () => {
        setmargin('0px')
        setline1Active(true)
        setline2Active(false)
        setline3Active(false)
        setline4Active(false)
        setline5Active(false)
        setline6Active(false)
    }
    const line2 = () => {
        setmargin('-800px')
        setline1Active(false)
        setline2Active(true)
        setline3Active(false)
        setline4Active(false)
        setline5Active(false)
        setline6Active(false)
    }
    const line3 = () => {
        setmargin('-1600px')
        setline1Active(false)
        setline2Active(false)
        setline3Active(true)
        setline4Active(false)
        setline5Active(false)
        setline6Active(false)
    }
    // const line4 = () => {
    //     setmargin('-1633px')
    //     setline1Active(false)
    //     setline2Active(false)
    //     setline3Active(false)
    //     setline4Active(true)
    //     setline5Active(false)
    //     setline6Active(false)
    // }
    // const line5 = () => {
    //     setmargin('-2168px')
    //     setline1Active(false)
    //     setline2Active(false)
    //     setline3Active(false)
    //     setline4Active(false)
    //     setline5Active(true)
    //     setline6Active(false)
    // }
    // const line6 = () => {
    //     setmargin('-2703px')
    //     setline1Active(false)
    //     setline2Active(false)
    //     setline3Active(false)
    //     setline4Active(false)
    //     setline5Active(false)
    //     setline6Active(true)
    // }
    // TIME 1

    useEffect(() => {
        if (!hover) {
            const time = setInterval(() => {
                setCounter(counter + 1)
                if (counter === 3) {
                    setCounter(0)
                }
            }, 3000)
            // TIME 1
            if (counter === 0) {
                setmargin('0px')
                setline1Active(true)
                setline2Active(false)
                setline3Active(false)
                setline4Active(false)
                setline5Active(false)
                setline6Active(false)
            }
            // TIME 1
            if (counter === 1) {
                setmargin('-800px')
                setline1Active(false)
                setline2Active(true)
                setline3Active(false)
                setline4Active(false)
                setline5Active(false)
                setline6Active(false)
            }
            // TIME 2
            if (counter == 2) {
                setmargin('-1600px')
                setline1Active(false)
                setline2Active(false)
                setline3Active(true)
                setline4Active(false)
                setline5Active(false)
                setline6Active(false)
            }
            // // TIME 3
            // if (counter == 3) {
            //     setmargin('-1633px')
            //     setline1Active(false)
            //     setline2Active(false)
            //     setline3Active(false)
            //     setline4Active(true)
            //     setline5Active(false)
            //     setline6Active(false)
            // }
            // TIME 4
            // if (counter == 4) {
            //     setmargin('-2168px')
            //     setline1Active(false)
            //     setline2Active(false)
            //     setline3Active(false)
            //     setline4Active(false)
            //     setline5Active(true)
            //     setline6Active(false)
            // }
            // TIME 5
            // if (counter == 5) {
            //     setmargin('-2703px')
            //     setline1Active(false)
            //     setline2Active(false)
            //     setline3Active(false)
            //     setline4Active(false)
            //     setline5Active(false)
            //     setline6Active(true)
            // }
            return () => clearInterval(time)
        }


    }, [hover, counter])
    const show = (e) => {
        e.preventDefault()
    }
    return (
        <>

            <div onMouseEnter={() => sethover(true)} onMouseLeave={() => { sethover(false) }} className='py-[90px] m-auto w-10/12 border-gray-700'>
                <div>
                    <div id='testimonio' className='flex gap-3 items-center'>
                        <p className='text-gray-600 font-semibold text-lg'>TESTIMONIOS</p>
                        <div className='bg-naranja w-[40px] h-[3px]'></div>
                    </div>
                    <div>
                        <p className='text-gray-600 my-4 max-w-[480px]'>Hemos mejorado la vida de muchas personas gracias a nuestra atencion y nuestro profesionalismo en el area. Nuestro objetivo es causar un gran impacto positivo en la salud de nuestros pacientes he aqui la evidencia de ello  </p>
                    </div>
                    {/* DINAMIC */}
                    <div className={styleTesti.quotesRow}>
                        <div className={styleTesti.dinamic} style={{ marginLeft: margin, transition: '.7s ease-in-out all' }}>
                            {/* ANONIMO */}
                            <div className='col col-12 col-sm-7 col-md-6 col-lg-6 col-xl-5'>
                                <div className={styleTesti.quote}>
                                    <div className={styleTesti.contentImgQuote}>
                                        <Image src={imgQuota} alt='img-quota' />
                                    </div>
                                    <p className='mt-4 text-sm'>"Soy la Coordinadora del Centro De Diagnóstico y Rehabilitación Santa Ana C.A, mi experiencia con el Dr. Luis Wilians ha sido un poco compleja, debido a su carácter y peculiar forma de ser, la cual hace que choquemos en varias ocasiones. Sin embargo, es uno de los doctores que respeto y admiro, porque pese al trabajo que realiza y lo complejo de los casos que ha abordado siempre busca brindarle una solución que beneficie al paciente por sobre todas las cosas o factores económicos. Luis Willians representa testarudez pero también representa el lado humano de la medicina que se ha perdido. Hablo en nombre del CDR Santa Ana cuando digo que estamos agradecido con él por habernos enseñado el porque nos debemos a nuestros pacientes. Lo bendigo en Nombre de Dios a él y a cada uno de sus proyectos que sé que van alineados a los valores y principios de su hogar. Sin más que decir esta en resumidas líneas está es mi experiencia con el Dr. Luis Willians"<br />
                                        {/* <a onClick={(e) => { e.preventDefault(); setshowMarla(true) }} href=''>ver mas</a> */}
                                    </p>

                                    <h4>Anonimo</h4>
                                </div>
                            </div>
                            {/* Sergio Ramirez */}
                            <div className='col col-12 col-sm-7 col-md-6 col-lg-6 col-xl-5'>
                                <div className={styleTesti.quote}>
                                    <div className={styleTesti.contentImgQuote}>
                                        <Image src={imgQuota} alt='img-quota' />
                                    </div>
                                    <p className='mt-4 text-sm'>"Todo ha sido bien tanto en el trato como la atención con el niño, lo conocí por medio de amistades que había tratado a otros pacientes, pero en general todo ha sido muy bien"<br />
                                        {/* <a onClick={(e) => { e.preventDefault(); setshowMarla(true) }} href=''>ver mas</a> */}
                                    </p>

                                    <h4>Sergio Ramirez</h4>
                                </div>
                            </div>
                            {/* Dorka Rodriguez */}
                            <div className='col col-12 col-sm-7 col-md-6 col-lg-6 col-xl-5'>
                                <div className={styleTesti.quote}>
                                    <div className={styleTesti.contentImgQuote}>
                                        <Image src={imgQuota} alt='img-quota' />
                                    </div>
                                    <p className='mt-4 text-sm'>"Mi nombre es Lcda. Dorka Rodríguez, mi experiencia con el Dr. Luis Willians ha sido muy amena en vista de que aprendí de su persona y como médico que la vida de un ser humano es importante y que el profesionalismo es primordial para desenvolvernos en cualquier ambiente o situación que se nos presente. Como persona es lo máximo y como profesional no tengo un número que lo califique porque es un doctor que se dedica a sus pacientes"<br />
                                        {/* <a onClick={(e) => { e.preventDefault(); setshowMarla(true) }} href=''>ver mas</a> */}
                                    </p>

                                    <h4>Dorka Rodriguez</h4>
                                </div>
                            </div>
                            {/*Angelica */}
                            <div className='col col-12 col-sm-7 col-md-6 col-lg-6 col-xl-5'>
                                <div className={styleTesti.quote}>
                                    <div className={styleTesti.contentImgQuote}>
                                        <Image src={imgQuota} alt='img-quota' />
                                    </div>
                                    <p className='mt-4 text-sm'>"Mi experiencia con el doctor Willians fue excelente. Yo conocí al doctor por medio de Instagram, en una entrevista que le hizo la doctora Francesca. Lo conocí, gracias a Dios, porque en mi estado no había médicos oncólogos ortopédicos de tumores óseos. Desde el primer momento su receptividad fue agradable. Me vio por primera vez en Maracay, gracias a Dios. Comenzamos a vernos en el Hospital Oncológico Padre Machado y desde el primer momento él me hizo todos los exámenes, muy receptivo, gracias a Dios. Me tocó el mejor médico que he podido tener. Me pusieron una prótesis en rodilla derecha, prótesis convencional en rodilla derecha. Actualmente ya tengo un año de operada con excelentes condiciones. Todavía en el proceso de tratamiento de cáncer, pero muy bien. Gracias a Dios camino. No sé qué más puedo decirte. El mejor médico, gracias a Dios, está ahí en sus manos. Es una bendición para mí tener ese médico"<br />
                                        {/* <a onClick={(e) => { e.preventDefault(); setshowMarla(true) }} href=''>ver mas</a> */}
                                    </p>

                                    <h4>Angelica</h4>
                                </div>
                            </div>
                            {/* Belky Álvarez */}
                            <div className='col col-12 col-sm-7 col-md-6 col-lg-6 col-xl-5'>
                                <div className={styleTesti.quote}>
                                    <div className={styleTesti.contentImgQuote}>
                                        <Image src={imgQuota} alt='img-quota' />
                                    </div>
                                    <p className='mt-4 text-sm'>"Mi nombre es Belky Álvarez, de profesión enfermera. Conocí al doctor Luis Willians trabajando en una clínica en el estado de La Guaira, en donde él ejercía como médico especialista en traumatología. Allí fui tratada por él.  Mi caso fue dolor en el nervio asiático, el cual el doctor me trató con una punción, me la infiltró y con unos medicamentos que me recetó. Luego de eso, estuve en control, él estuvo muy pendiente a ver mi evolución y al sol de hoy, puedo garantizarte que no he tenido más inconvenientes con ese problema de la asiática. Luego de eso, un familiar, específicamente mi suegro, tuvo una caída. Él era un paciente oncológico y tuvo una caída donde se fracturó la cadera. A raíz de eso, él también vivía aquí en el estado de La Guaira. A raíz de eso, yo llamé al doctor Luis Willians para consultar su caso y él me refirió en ese momento al hospital del seguro social. Allí lo trató. Luego me lo refirió a la Clínica Alfa para poder intervenirlo quirúrgicamente ya que su lesión ameritaba cirugía. Cuando el doctor lo intervino, me indicó que iba a realizar, yo le di su historial, evidentemente yo le di el historial del paciente que era oncológico y cuando él lo ingresó a quirófano, me pidió autorización para hacerle biopsia de lo que él consiguiera y efectivamente gracias a eso descubrimos que el cáncer que en primera instancia se le había detectado en el colon, había migrado a huesos y a otros órganos principales. Luego de esa intervención, mi suegro pues estuvo en cama y se esperaba con mucha esperanza de que se recuperara para poder someterlo a quimioterapia que era el tratamiento que se le iba a realizar, pero su condición fue empeorando, se fue deteriorando a raíz de la metástasis y pues lamentablemente falleció unos meses después de la metástasis. Durante todo el proceso, a pesar de que el doctor Luis Willians solamente había sido su médico por la lesión de la caída, su médico traumatólogo, estuvo muy al pendiente de todo el proceso. Mi suegro estuvo también hospitalizado en la clínica San José, hasta allí fue a verlo el doctor Luis Willians, luego de allí lo llevaron a su casa y a su casa también fue en varias oportunidades el doctor a hacerle las curas, a ver cómo iba su evolución, pero como le refería anteriormente, lamentablemente su condición fue deteriorándose cada día, por la cual nunca pudimos hacerle las quimioterapia y terminó falleciendo. Puedo dar fe de que el comportamiento del doctor Luis Willians respecto al caso de mi suegro fue excelente, estuvo en todo momento pendiente de su proceso, incluso hizo visitas a domicilio y quedamos muy complacidos con su trato y la intervención que le realizó fue muy buena, fue exitoso, solo que bueno su condición no lo ayudó. Del resto, pues he tenido varias personas que me han solicitado recomendaciones para un traumatólogo y siempre les doy el número y el contacto al Doctor Willians porque me parece que es un profesional con muchísimo conocimiento en la parte oncológica, sobre todo en este momento que fue lo que él se ha estado especializando."<br />
                                        {/* <a onClick={(e) => { e.preventDefault(); setshowMarla(true) }} href=''>ver mas</a> */}
                                    </p>

                                    <h4>Belky Álvarez</h4>
                                </div>
                            </div>
                            {/* Brian Alvarez */}
                            <div className='col col-12 col-sm-7 col-md-6 col-lg-6 col-xl-5'>
                                <div className={styleTesti.quote}>
                                    <div className={styleTesti.contentImgQuote}>
                                        <Image src={imgQuota} alt='img-quota' />
                                    </div>
                                    <p className='mt-4 text-sm'>
                                    "Mi nombre es Brian Álvarez, paciente del Dr. Luis Willians. Bueno, yo contacté al doctor por medio de Dayana. Ella es una trabajadora que trabaja con una Casa Comercial que trabaja directamente con el Dr. Luis Willians. Me hizo referencia con el doctor, me dijo que era un doctor de gran calidad, que trabaja con la Vinotinto y me tomó de gran interés ir hacia el Dr. Luis, por lo que fui a consulta con él en Fénix Salud. Yo tuve una fractura de tibia y peroné, por la cual he sido ingresado ya varias veces. La primera vez con un clavo medular en el hospital Vargas, la segunda vez en el hospital de coche para retirarme el clavo y ponerme unos tutores hacia afuera. Luego de los tutores fueron retirados por otro doctor, en la cual me hicieron el recorte de 8 centímetros de hueso. Y yo indagando e indagando por medio de la amiga que le estoy contando, que es Dayana, me dijo que había una nueva operación, que se hacía un injerto de hueso y que el doctor sabía trabajar de eso. Bueno, luego de eso fui a él. Él me dijo de que sí, que la operación era totalmente un éxito, que era lo que se estaba tratando ahorita, pero que él no me iba a operar a mí ni me iba a hacer un injerto sin saber si que la bacteria ya existía allí. Yo dije, bueno, wow, este, nada doctor, usted es el que sabe, vamos a eso. Vamos a la limpieza de la zona afectada, se agarraron las muestras y bueno, se vio que si la bacteria todavía seguía allí, que la staphylococcus aureus. Luego de eso procedimos a hacer una limpieza nuevamente para proceder a los infectólogos correspondientes que tienen que ser. Este, de verdad que el trato del doctor ha sido espectacular, claro, con su carácter como todo doctor, porque yo pienso que si un doctor no tiene carácter, piensa a veces que uno, no es que uno como paciente juegue con eso, pero si uno tiene que estar más pendiente y ser más disciplinado con esa parte. Bueno, tuve una operación hace poco que fue la limpieza de osteomelitis, el trato fue espectacular, el doctor trabaja impecable, siempre está pendiente de cuando le escribo, me dice que si estoy tratando los tratamientos como tienen que ser, estamos trabajando disciplinadamente como él me dice, guardando reposo, tratando los antibióticos, estamos tratando directamente con un infectólogo compañero o cercano al doctor que saben trabajar y trabajan en conjunto. Y bueno, estamos esperando las muestras, Dios quiere esperando que los resultados sean positivos, para que se pueda hacer el injerto de hueso y bueno, trabajando disciplinadamente conjuntamente con el doctor para que todo pueda salir impecable. Eso es lo que puedo decir del doctor, me parece una persona que cumple su trabajo, que hace lo que tiene que hacer y como tiene que ser.” 
                                    <br />
                                        {/* <a onClick={(e) => { e.preventDefault(); setshowMarla(true) }} href=''>ver mas</a> */}
                                    </p>

                                    <h4>Brian Alvarez</h4>
                                </div>
                            </div>
                            {/* Carmen López */}
                            <div className='col col-12 col-sm-7 col-md-6 col-lg-6 col-xl-5'>
                                <div className={styleTesti.quote}>
                                    <div className={styleTesti.contentImgQuote}>
                                        <Image src={imgQuota} alt='img-quota' />
                                    </div>
                                    <p className='mt-4 text-sm'>"El Dr. Willians es un médico altamente competente y empático. Después de años de lidiar con dolor crónico en las articulaciones, finalmente encontré al médico adecuado. Su enfoque integral y su comprensión de mis necesidades individuales me llevaron a un tratamiento personalizado que mejoró significativamente mi calidad de vida. No puedo agradecerle lo suficiente."<br />
                                        {/* <a onClick={(e) => { e.preventDefault(); setshowMarla(true) }} href=''>ver mas</a> */}
                                    </p>

                                    <h4>Carmen López</h4>
                                </div>
                            </div>
                        </div>
                        {/* FIN */}

                    </div>
                    {/* COMIENZA NAV */}
                    <div className={styleTesti.testimoNav}>
                        <div className='row'>
                            <div className='col col-10'>
                                <ul>
                                    <li className={line1Active ? styleTesti.lineOn : styleTesti.lineOf} onClick={line1}></li>
                                    <li className={line2Active ? styleTesti.lineOn : styleTesti.lineOf} onClick={line2}></li>
                                    <li className={line3Active ? styleTesti.lineOn : styleTesti.lineOf} onClick={line3}></li>
                                    {/* <li className={line4Active ? styleTesti.lineOn : styleTesti.lineOf} onClick={line4}></li>
                                    <li className={line5Active ? styleTesti.lineOn : styleTesti.lineOf} onClick={line5}></li>
                                    <li className={line6Active ? styleTesti.lineOn : styleTesti.lineOf} onClick={line6}></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* TERMINA NAV */}
                </div>
            </div>
            <MoreTestimoMarla
                showMarla={showMarla}
                setshowMarla={setshowMarla}
            />
            <MoreTestimoEric
                showEric={showEric}
                setshowEric={setshowEric}
            />
            <MoreTestimoEva
                showEva={showEva}
                setshowEva={setshowEva}
            />
            <MoreTestimoJason
                showJason={showJason}
                setshowJason={setshowJason}
            />
            <MoreTestimoDaniela
                showDaniela={showDaniela}
                setshowDaniela={setshowDaniela}
            />
            <MoreTestimoAdrian
                showAdrian={showAdrian}
                setshowAdrian={setshowAdrian}
            />
            <MoreTestimoWilliam
                showWilliam={showWilliam}
                setshowWilliam={setshowWilliam}
            />
        </>
    )
}
