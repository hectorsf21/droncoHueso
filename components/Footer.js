import React from 'react'
import Image from 'next/image'
import twitter from '@/image/twitter-white.png'
import instagram from '@/image/instagram-white.png'
import facebook from '@/image/facebook-white.png'
import logo from '@/image/logo.png'


export default function Footer() {
    return (
        <>
            <div className='bg-black pb-1 pt-10'>
                <div className=' flex items-center mb-5 justify-between m-auto w-10/12'>
                    <div className='flex gap-1'>
                    <Image className='max-w-none' src={logo} width={'150'} height={'auto'} alt='logo-icon' />
                    </div>
                    <div className='flex gap-2'>
                        <Image className='object-contain' src={twitter} alt='icon-twitter' />
                        <Image className='object-contain' src={instagram} alt='icon-instagram' />
                        <Image className='object-contain' src={facebook} alt='icon-facebook' />
                    </div>
                </div>
                <div className='text-white text-center'>
                    <p className='text-sm'>© DroncoHueso  2023. Todos los Derechos Reservados</p>
                </div>
            </div>
        </>
    )
}