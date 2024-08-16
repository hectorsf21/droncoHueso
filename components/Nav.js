import React, { useState } from 'react'
import phone from '@/image/phone.png'
import mail from '@/image/mail.png'
import facebook from '@/image/facebook.png'
import twitter from '@/image/twitter.png'
import instagram from '@/image/instagram.png'
// import logo from '@/image/logo.png'
import logo from '@/image/logo.svg'
import Image from 'next/image'
export default function Nav() {
    const [activeBurguer, setActiveBurguer]= useState(false)
    return (
        <>
            {/* FIRST */}
            <div id='inicio' className='hidden mobile:flex py-4 justify-between m-auto w-10/12'>
                <div className='flex gap-1 '>
                    <Image className='object-contain' src={phone} width={'auto'} height={'auto'} alt='phone-icon' />
                    <p>+58 424 141 4994</p>
                </div>
                <div className='flex gap-1'>
                    <Image className='object-contain' src={mail} width={'auto'} height={'auto'} alt='mail-icon' />
                    <p>dronconhueso@gmail.com</p>
                </div>
                <div className='flex gap-1'>
                
                    <Image className='object-contain' src={twitter} width={'auto'} height={'auto'} alt='twitter-icon' />
                    <Image className='object-contain' src={facebook} width={'auto'} height={'auto'} alt='facebook-icon' />
                    <Image className='object-contain' src={instagram} width={'auto'} height={'auto'} alt='instagram-icon' />
                </div>
            </div>
            {/* SECONDS */}
            <div className='flex py-5 mobile:py-0 justify-between items-center m-auto w-10/12'>
                <div className='flex gap-1'>
                    <Image className='max-w-none' src={logo} width={'150'} height={'auto'} alt='logo-icon' />
                </div>
                <div>
                    <ul className='navDinamic hidden mobile:inline-flex sm:gap-5 md:gap-10 lg:gap-20 font-semibold text-md'>
                        <li><a className='text-gray-700 hover:text-naranja text-lg' href='#inicio'>Home</a></li>
                        <li><a className='text-gray-700 hover:text-naranja text-lg' href='#servicios'>Servicios</a></li>
                        {/* <li><a className='text-gray-700 hover:text-naranja text-lg'>Conferencias</a></li> */}
                        <li><a className='text-gray-700 hover:text-naranja text-lg' href='#testimonio'>Testimonios</a></li>
                        <li><a className='text-gray-700 hover:text-naranja text-lg' href='#contacto'>Contacto</a></li>
                    </ul>
                </div>
                <div onClick={()=>setActiveBurguer(!activeBurguer)} className='relative z-20 cursor-pointer border px-2 block mobile:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

            </div>
            <div className={`${activeBurguer ?'opacity-100 translate-y':'fixed opacity-0 -translate-y-44'} sm:hidden w-full text-center transition-all duration-700 `}>
                <ul className='cursor-pointer'>
                    <li className='hover:bg-slate-100 border py-1'><a href='#inicio'>Inicio</a></li>
                    <li className='hover:bg-slate-100 border-b py-1'><a href='#servicios'>Servicios</a></li>
                    <li className='hover:bg-slate-100 border-b py-1'><a href='#testimonio'>Testimonios</a></li>
                    <li className='hover:bg-slate-100 border-b py-1'><a href='#contacto'>Contacto</a></li>
                </ul>
            </div>
        </>
    )
}