import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Nav from '@/components/Nav';
import Head from '@/components/Head';
import Horario from '@/components/Horario';
import SobreMi from '@/components/SobreMi';
import Footer from '@/components/Footer';
import Contacto from '@/components/Contacto';
import Testimonio from '@/components/Testimonios';
import Sarcomas from '@/components/servicios/Sarcomas';
import TumoresMb from '@/components/servicios/TumoresMb';
import ProcesOseo from '@/components/servicios/ProcesOseo';
import Traumatologia from '@/components/servicios/Traumatologia';
import Mfc from '@/components/servicios/Mfc';
import TumoresMalignos from '@/components/servicios/Tmalignos';
import TumoresBenignos from '@/components/servicios/Tbenignos';
import Osteomielitis from '@/components/servicios/Osteomielitis';
import Vermas from '@/components/Vermas';

const fadeInVariants = {
  hidden: { opacity: 0, translateY: -120 },
  visible: { opacity: 1, translateY: 0 },
};

const fadeInTransition = {
  duration: 0.8, // Ajusta la duración de la transición según tus preferencias
};

export default function Home() {

  const [closeCard1, setCloseCard1] = useState(false)
  const [closeCard2, setCloseCard2] = useState(false)
  const [closeCard3, setCloseCard3] = useState(false)
  const [closeCard4, setCloseCard4] = useState(false)
  const [closeCard5, setCloseCard5] = useState(false)
  const [closeCard6, setCloseCard6] = useState(false)
  const [closeCard7, setCloseCard7] = useState(false)
  const [closeCard8, setCloseCard8] = useState(false)
  const [closeCard9, setCloseCard9] = useState(false)

  // CARD #1

  const handleClose1 = () => {
    setCloseCard1(!closeCard1)
  }
  const handleCard1 = () => {
    setCloseCard1(!closeCard1)
  }

  // CARD #2

  const handleClose2 = () => {
    setCloseCard2(!closeCard2)
  }
  const handleCard2 = () => {
    setCloseCard2(!closeCard2)
  }

  // CARD #3

  const handleClose3 = () => {
    setCloseCard3(!closeCard3)
  }
  const handleCard3 = () => {
    setCloseCard3(!closeCard3)
  }

  // CARD #4

  const handleClose4 = () => {
    setCloseCard4(!closeCard4)
  }
  const handleCard4 = () => {
    setCloseCard4(!closeCard4)
  }

  // CARD #5

  const handleClose5 = () => {
    setCloseCard5(!closeCard5)
  }
  const handleCard5 = () => {
    setCloseCard5(!closeCard5)
  }

    // CARD #6

    const handleClose6 = () => {
      setCloseCard6(!closeCard6)
    }
    const handleCard6 = () => {
      setCloseCard6(!closeCard6)
    }

     // CARD #7

     const handleClose7 = () => {
      setCloseCard7(!closeCard7)
    }
    const handleCard7 = () => {
      setCloseCard7(!closeCard7)
    }

     // CARD #8

     const handleClose8 = () => {
      setCloseCard8(!closeCard8)
    }
    const handleCard8 = () => {
      setCloseCard8(!closeCard8)
    }

    
     // CARD #9

     const handleClose9 = () => {
      setCloseCard9(!closeCard9)
    }
    const handleCard9 = () => {
      setCloseCard9(!closeCard9)
    }

  const controlsNav = useAnimation();
  const [refNav, inViewNav] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controlsHead = useAnimation();
  const [refHead, inViewHead] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controlsHorario = useAnimation();
  const [refHorario, inViewHorario] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controlsSobreMi = useAnimation();
  const [refSobreMi, inViewSobreMi] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controlsTestimonio = useAnimation();
  const [refTestimonio, inViewTestimonio] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controlsContacto = useAnimation();
  const [refContacto, inViewContacto] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inViewNav) {
      controlsNav.start('visible');
    }
  }, [controlsNav, inViewNav]);

  useEffect(() => {
    if (inViewHead) {
      controlsHead.start('visible');
    }
  }, [controlsHead, inViewHead]);

  useEffect(() => {
    if (inViewHorario) {
      controlsHorario.start('visible');
    }
  }, [controlsHorario, inViewHorario]);

  useEffect(() => {
    if (inViewSobreMi) {
      controlsSobreMi.start('visible');
    }
  }, [controlsSobreMi, inViewSobreMi]);

  useEffect(() => {
    if (inViewTestimonio) {
      controlsTestimonio.start('visible');
    }
  }, [controlsTestimonio, inViewTestimonio]);

  useEffect(() => {
    if (inViewContacto) {
      controlsContacto.start('visible');
    }
  }, [controlsContacto, inViewContacto]);

  return (
    <>
      {/* SARCOMAS */}
      <Sarcomas
        handleClose1={handleClose1}
        closeCard1={closeCard1}
      />
      {/* TUMORES MUSCULOESQUELETICOS BENIGNOS */}
      <TumoresMb
        handleClose2={handleClose2}
        closeCard2={closeCard2}
      />
      {/* PROCESOS INFECIOSOS OSEOS */}
      <ProcesOseo
        handleClose3={handleClose3}
        closeCard3={closeCard3}
      />
      {/* TRAUMATOLOGIA GENERAL */}
      <Traumatologia
        handleClose4={handleClose4}
        closeCard4={closeCard4}
      />
      {/* FRACTURA COMPLEJAS */}
      <Mfc
        handleClose5={handleClose5}
        closeCard5={closeCard5}
      />
       {/* TUMORES MALIGNOS */}
       <TumoresMalignos
        handleClose6={handleClose6}
        closeCard6={closeCard6}
       />
       {/* TUMORES BENIGNOS */}
       <TumoresBenignos
        handleClose7={handleClose7}
        closeCard7={closeCard7}
       />

       {/* OSTEOMIELITIS */}
       <Osteomielitis
       handleClose8={handleClose8}
       closeCard8={closeCard8}
       />
      {/* VER MAS */}
      <Vermas
       handleClose9={handleClose9}
       closeCard9={closeCard9}
      />
      <div>
        <nav>
          <Nav />
        </nav>
        <header>
          <motion.div
            ref={refHead}
            initial="hidden"
            animate={controlsHead}
            variants={fadeInVariants}
            transition={fadeInTransition}
          >
            <Head />
          </motion.div>
        </header>
        <main>
          <motion.div
            ref={refHorario}
            initial="hidden"
            animate={controlsHorario}
            variants={fadeInVariants}
            transition={fadeInTransition}
          >
            <Horario
              handleCard1={handleCard1}
              handleCard2={handleCard2}
              handleCard3={handleCard3}
              handleCard4={handleCard4}
              handleCard5={handleCard5}
              handleCard6={handleCard6}
              handleCard7={handleCard7}
              handleCard8={handleCard8}
            />
          </motion.div>
          <motion.div
            ref={refSobreMi}
            initial="hidden"
            animate={controlsSobreMi}
            variants={fadeInVariants}
            transition={fadeInTransition}
          >
            <SobreMi
            handleCard9={handleCard9}
             />
          </motion.div>
          <motion.div
            ref={refTestimonio}
            initial="hidden"
            animate={controlsTestimonio}
            variants={fadeInVariants}
            transition={fadeInTransition}
          >
            <Testimonio />
          </motion.div>
          <motion.div
            ref={refContacto}
            initial="hidden"
            animate={controlsContacto}
            variants={fadeInVariants}
            transition={fadeInTransition}
          >
            <Contacto />
          </motion.div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
