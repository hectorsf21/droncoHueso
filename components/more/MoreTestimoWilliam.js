import React from "react";
import style from "@/styles/MoreTestimo.module.css";
import closeModal from "@/image/close-modal.png";
import comillas from "@/image/icon-quote.png";
import Image from "next/image";
export default function MoreTestimo({ showWilliam, setshowWilliam }) {
  
  return (
    <>
    {showWilliam ?
      <div>
        <div className={style.ContentQuota}>
          <div className={style.quoteBody}>
            <div onClick={()=>setshowWilliam(false)} className={style.contentCloseModal}>
              <Image src={closeModal} alt="icon-close-modal" />
            </div>
            <div className={style.contentContentComillas}>
              <Image src={comillas} alt="icon-comillas" />
            </div>
            <p>{}</p>
            <p>
              <strong>William S</strong>
            </p>
          </div>
        </div>
      </div>
      :null}
    </>
  );
}
