import React from 'react'
import Image from 'next/image'
import BGHeader from '@/asset/bg-header.jpg'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='flex justify-center items-center flex-col overflow-hidden'>
            { /*<Image src={BGHeader} alt='' quality={100} className='w-full h-screen bg-cover bg-center absolute'></Image> */}
            <nav className='flex h-[120px] w-full px-28 justify-center items-center relative'>
                <div className='h-full w-[1440px] flex items-center justify-between'>
                    <div className='h-[120px] w-[216px] bg-slate-400'></div>
                    <ul className='flex w-[512px] flex-wrap items-center justify-between h-full'>
                        <li className='h-full w-[15%] justify-center items-center'>
                            <a className='w-full h-full text-xl flex justify-center items-center tracking-wider font-normal font-poppins'>Nosotros</a>
                        </li>
                        <li className='h-full w-[15%] justify-center items-center'>
                            <a className='w-full h-full text-xl flex justify-center items-center tracking-wider font-normal font-poppins'>Servicios</a>
                        </li>
                        <li className='h-full w-[15%] justify-center items-center'>
                            <a className='w-full h-full text-xl flex justify-center items-center tracking-wider font-normal font-poppins'>Proyectos</a>
                        </li>
                        <li className='h-full w-[15%] justify-center items-center'>
                            <a className='w-full h-full text-xl flex justify-center items-center tracking-wider font-normal font-poppins'>Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header