import React from "react";
import style from "@/styles/MoreTestimo.module.css";
import closeModal from "@/image/close-modal.png";
import comillas from "@/image/icon-quote.png";
import Image from "next/image";
export default function MoreTestimo({ showEva, setshowEva }) {
  
  return (
    <>
    {showEva ?
      <div>
        <div className={style.ContentQuota}>
          <div className={style.quoteBody}>
            <div onClick={()=>setshowEva(false)} className={style.contentCloseModal}>
              <Image src={closeModal} alt="icon-close-modal" />
            </div>
            <div className={style.contentContentComillas}>
              <Image src={comillas} alt="icon-comillas" />
            </div>
            <p>{}</p>
            <p>
              <strong>Eva Brenes Branch - Manager Ground Cargo Transportation</strong>
            </p>
          </div>
        </div>
      </div>
      :null}
    </>
  );
}
