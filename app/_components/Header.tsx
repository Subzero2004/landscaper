import React from 'react'
import Image from 'next/image'
import BGHeader from '@/asset/Header/bg-header.jpg'
import Logo from '@/asset/Header/logoDefinitivo.png'
import Menu from '@/asset/BasicLogo/MenuBurger.png'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='h-screen w-full flex flex-col justify-center items-center font-poppins'>
            <Image src={BGHeader} alt='BGHerobanner' quality={100} className='h-screen w-full bg-cover bg-center absolute'/>
            <nav className='tablet:h-[6.5rem] h-[7.5rem] w-full relative tablet:px-8 px-28 flex z-[900] flex-nowrap flex-row justify-center items-center bg-[rgb(72,70,70,0.378)]'>
                <div className='h-full w-[1440px] flex flex-row flex-nowrap justify-between items-center'>
                    <div className='h-[7.5rem] w-[13.5rem] my-auto flex flex-col justify-center items-center'>
                        <Image src={Logo} alt='LogoNav' quality={100} className='h-[4.5rem] bg-center flex justify-center items-center bg-contain w-full mx-auto bg-transparent'/>
                    </div>
                    <ul className='tablet:hidden h-full w-[32rem] flex flex-row flex-wrap justify-between items-center content-center text-white'>
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
                    <button className='h-full w-[14%] tablet:flex hidden flex-col justify-center items-center bg-transparent'>
                        <Image src={Menu} alt='' className='size-[4.3rem]' />
                    </button>
                </div>
            </nav>
            <section className='tablet:h-[91vh] w-full h-full z-[900] flex flex-col flex-wrap tablet:justify-start justify-center text-center bg-[rgb(72,70,70,0.378)]'>
                <div className='h-[30%] tablet:w-[96%] w-[75%] tablet:mt-8 tablet:mb-4 -mt-24 mx-auto mb-8 flex content-center'>
                    <h1 className='w-full h-full py-4 tablet:px-4 px-24 flex flex-col flex-wrap justify-center items-center content-center font-bold tablet:text-[60px] text-[65px] tablet:leading-[58px] leading-[75px] tablet:tracking-[6px] tracking-[1.5px] text-white'>Diseño y Construccion de Espacios Verdes</h1>
                </div>
                <div className='tablet:w-full w-[75%] tablet:h-[32%] h-[23%] mx-auto target:m-0 mb-12 tablet:px-2 grid tablet:grid-cols-2 grid-cols-4 tablet:grid-rows-4 grid-rows-2 text-white'>
                    <div className='w-full h-full px-4 m-auto border-white border-r-2 tablet:border-b-[1.7px] border-b-2 flex flex-col justify-center tablet:text-2xl text-xl tracking-[0.7px] '>Jardines Verticales</div>
                    <div className='w-full h-full px-4 m-auto border-white tablet:border-r-0 border-r-2 tablet:border-b-[1.7px] border-b-2 flex flex-col justify-center tablet:text-2xl text-xl tracking-[0.7px] '>Césped</div>
                    <div className='w-full h-full px-4 m-auto border-white border-r-2 tablet:border-b-[1.7px] border-b-2 flex flex-col justify-center tablet:text-2xl text-xl tracking-[0.7px] '>Sistema de Riego</div>
                    <div className='w-full h-full px-4 m-auto border-white tablet:border-b-[1.7px] border-b-2 flex flex-col justify-center tablet:text-2xl text-xl tracking-[0.7px]'>Desmalezado</div>
                    <div className='w-full h-full px-4 m-auto border-white border-r-2 tablet:border-b-[1.7px] flex flex-col justify-center tablet:text-2xl text-xl tracking-[0.7px]'>Fumigaciones</div>
                    <div className='w-full h-full px-4 m-auto border-white tablet:border-r-0 border-r-2 tablet:border-b-[1.7px] flex flex-col justify-center tablet:text-2xl text-xl tracking-[0.7px]'>Poda en Altura</div>
                    <div className='w-full h-full px-4 m-auto border-white border-r-2 flex flex-col justify-center tablet:text-2xl text-xl tracking-[0.7px]'>Manteniemiento</div>
                    <div className='w-full h-full px-4 m-auto border-white flex flex-col justify-center tablet:text-2xl text-xl tracking-[0.7px]'>Paisajismo</div>
                </div>
                <div className='w-full flex tablet:mt-16 flex-row flex-wrap justify-center'>
                    <a>
                        <input type='button' value="PEDIR PRESUPUESTO"
                        className='tablet:w-[19.3rem] w-[18.5rem] tablet:h-[3.6rem] h-14 tablet:mx-2 tablet:my-4 m-4 rounded-[5px] tablet:text-[22px] text-xl tracking-[0.5px] text-white bg-[rgb(91,193,32)]'></input>
                    </a>
                    <a>
                        <input type='button' value="COTIZAR POR WHATSAPP"
                        className='tablet:w-[19.3rem] w-[18.5rem] tablet:h-[3.6rem] h-14 tablet:mx-2 tablet:my-4 m-4 rounded-[5px] tablet:text-[22px] text-xl tracking-[0.5px] text-[rgb(91,193,32)] bg-white'></input>
                    </a>
                </div>
            </section>
            <div className='tablet:hidden -bottom-[4.8%] absolute left-[50%] bg-[rgb(91,193,32)] z-[700] w-[3px] h-16'/>
        </header>
    )
}

export default Header