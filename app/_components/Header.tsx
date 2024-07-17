import React from 'react'
import Image from 'next/image'
import BGHeader from '@/asset/bg-header.jpg'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='h-screen w-full flex flex-col justify-center items-center font-poppins'>
            <Image src={BGHeader} alt='' quality={100} className='h-screen w-full bg-cover bg-center absolute'/>
            <nav className='h-[7.5rem] w-full px-28 flex z-[900] flex-nowrap flex-row justify-center items-center bg-[rgb(72,70,70,0.378)]'>
                <div className='h-full w-[1440px] flex flex-row flex-nowrap justify-between items-center'>
                    <div className='h-[7.5rem] w-[13.5rem] my-auto bg-slate-100'>
                        <div className='w-full h-full my-auto'></div>
                    </div>
                    <ul className='h-full w-[32rem] flex flex-row flex-wrap justify-between items-center content-center text-white'>
                        <li className='z-[580] h-full w-[15%] flex flex-col justify-center items-center'>
                            <a className='w-full h-full text-xl tracking-[1.2px] flex flex-col items-center justify-center z-[600]'>Nosotros</a>
                        </li>
                        <li className='z-[580] h-full w-[15%] flex flex-col justify-center items-center'>
                            <a className='w-full h-full text-xl tracking-[1.2px] flex flex-col items-center justify-center z-[600]'>Servicios</a>
                        </li>
                        <li className='z-[580] h-full w-[15%] flex flex-col justify-center items-center'>
                            <a className='w-full h-full text-xl tracking-[1.2px] flex flex-col items-center justify-center z-[600]'>Proyectos</a>
                        </li>
                        <li className='z-[580] h-full w-[15%] flex flex-col justify-center items-center'>
                            <a className='w-full h-full text-xl tracking-[1.2px] flex flex-col items-center justify-center z-[600]'>Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className='w-full h-full z-[900] flex flex-col flex-wrap justify-center text-center bg-[rgb(72,70,70,0.378)]'>
                <div className='h-[30%] w-[75%] -mt-24 mx-auto mb-8 flex content-center'>
                    <h1 className='w-full h-full py-4 px-24 flex flex-col flex-wrap justify-center items-center content-center font-bold text-[65px] leading-[75px] tracking-[1.5px] text-white'>Diseño y Construccion de Espacios Verdes</h1>
                </div>
                <div className='w-[75%] h-[23%] mx-auto mb-12 grid grid-cols-4 grid-rows-2 text-white'>
                    <div className='w-full h-full px-4 m-auto border-r-2 border-b-2 flex flex-col justify-center text-xl tracking-[0.7px] '>Jardines Verticales</div>
                    <div className='w-full h-full px-4 m-auto border-r-2 border-b-2 flex flex-col justify-center text-xl tracking-[0.7px] '>Césped</div>
                    <div className='w-full h-full px-4 m-auto border-r-2 border-b-2 flex flex-col justify-center text-xl tracking-[0.7px] '>Sistema de Riego</div>
                    <div className='w-full h-full px-4 m-auto border-b-2 flex flex-col justify-center text-xl tracking-[0.7px]'>Desmalezado</div>
                    <div className='w-full h-full px-4 m-auto border-r-2 flex flex-col justify-center text-xl tracking-[0.7px]'>Fumigaciones</div>
                    <div className='w-full h-full px-4 m-auto border-r-2 flex flex-col justify-center text-xl tracking-[0.7px]'>Poda en Altura</div>
                    <div className='w-full h-full px-4 m-auto border-r-2 flex flex-col justify-center text-xl tracking-[0.7px]'>Manteniemiento</div>
                    <div className='w-full h-full px-4 m-auto flex flex-col justify-center text-xl tracking-[0.7px]'>Paisajismo</div>
                </div>
                <div className='w-full flex flex-row flex-wrap justify-center'>
                    <a>
                        <input type='button' value="PEDIR PRESUPUESTO"
                        className='w-[18.5rem] h-14 m-4 rounded-[5px] text-xl tracking-[0.5px] text-white bg-[rgb(91,193,32)]'></input>
                    </a>
                    <a>
                        <input type='button' value="COTIZAR POR WHATSAPP"
                        className='w-[18.5rem] h-14 m-4 rounded-[5px] text-xl tracking-[0.5px] text-[rgb(91,193,32)] bg-white'></input>
                    </a>
                </div>
            </section>
            <div className='-bottom-[4.8%] absolute left-[50%] bg-[rgb(91,193,32)] z-[700] w-[3px] h-16'/>
        </header>
    )
}

export default Header