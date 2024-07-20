import React from 'react'
import Image from 'next/image'
import BGHeader from '@/asset/Header/bg-header.jpg'
import Logo from '@/asset/Header/logoDefinitivo.png'
import Menu from '@/asset/BasicLogo/MenuBurger.png'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='mobileS:h-[37rem] tabletS:h-[55rem] laptopL:h-[75vh] h-screen w-full flex flex-col justify-center items-center font-poppins'>
            <Image src={BGHeader} alt='BGHerobanner' quality={100} className='mobileS:h-[37rem] tabletS:h-[55rem] laptopL:h-[75vh] h-screen w-full bg-cover bg-center absolute'/>
            <nav className='mobileS:h-[5rem] laptopL:h-[6.5rem] h-[7.5rem] w-full relative mobileS:p-0 tablet:px-8 laptopL:px-12 px-28 flex z-[900] mobileS:top-0 tablet:left-0 flex-nowrap flex-row justify-center items-center laptopL:bg-[rgb(0,0,0,0.41)] bg-[rgb(72,70,70,0.378)]'>
                <div className='h-full mobileS:w-full w-[1440px] mobileS:pr-6 mobileS:pl-4 flex flex-row flex-nowrap justify-between items-center'>
                    <div className='mobileS:h-20 laptopL:h-auto mobileL:h-[5.5rem] h-[7.5rem] mobileS:w-36 w-[13.5rem] mobileS:m-0 my-auto flex flex-col justify-center items-center'>
                        <Image src={Logo} alt='LogoNav' quality={100} className='mobileS:h-12 h-[4.5rem] mobileS:w-full text-[22px] bg-center flex justify-center items-center bg-contain w-full mx-auto bg-transparent'/>
                    </div>
                    <ul className='tablet:hidden h-full w-[32rem] laptopL:pr-8 flex flex-row flex-wrap justify-between items-center content-center text-white'>
                        <li className='z-[580] h-full w-[15%] flex flex-col justify-center items-center'>
                            <a className='w-full h-full laptopL:text-base text-xl tracking-[1.2px] flex flex-col items-center justify-center z-[600]'>Nosotros</a>
                        </li>
                        <li className='z-[580] h-full w-[15%] flex flex-col justify-center items-center'>
                            <a className='w-full h-full laptopL:text-base text-xl tracking-[1.2px] flex flex-col items-center justify-center z-[600]'>Servicios</a>
                        </li>
                        <li className='z-[580] h-full w-[15%] flex flex-col justify-center items-center'>
                            <a className='w-full h-full laptopL:text-base text-xl tracking-[1.2px] flex flex-col items-center justify-center z-[600]'>Proyectos</a>
                        </li>
                        <li className='z-[580] h-full w-[15%] flex flex-col justify-center items-center'>
                            <a className='w-full h-full laptopL:text-base text-xl tracking-[1.2px] flex flex-col items-center justify-center z-[600]'>Contacto</a>
                        </li>
                    </ul>
                    <button className='h-full mobileS:w-[10%] tabletS:w-[10%] w-[14%] tablet:flex hidden flex-col justify-center items-center bg-transparent'>
                        <Image src={Menu} alt='' className='mobileS:size-[3.2rem] tabletS:size-[3.5rem] size-[4.3rem] absolute' />
                    </button>
                </div>
            </nav>
            <section className='mobileS:h-[91%] tabletS:h-[90%] tablet:h-[91vh] laptopL:h-[94%] w-full h-full z-[900] flex flex-col flex-wrap tablet:justify-start mobileS:justify-between justify-center text-center laptopL:bg-[rgb(0,0,0,0.41)] bg-[rgb(72,70,70,0.378)]'>
                <div className='h-[30%] mobileS:w-[95%] tablet:w-[96%] laptopL:w-[90%] w-[75%] mobileS:-mt-2 tablet:mt-8 mobileS:mb-0 tablet:mb-4 laptopL:-mt-8 -mt-24 mx-auto laptopL:mb-0 mb-8 flex content-center'>
                    <h1 className='mobileS:w-[97%] w-full h-full mobileS:p-0 py-4 tablet:px-4 px-24 mobileS:mx-auto flex flex-col flex-wrap justify-center items-center content-center font-bold mobileS:text-3xl tabletS:text-[53px] tablet:text-[60px] text-[65px] mobileS:leading-[37px] tablet:leading-[58px] leading-[75px] mobileS:tracking-[2.3px] tabletS:tracking-[2.8px] tablet:tracking-[6px] tracking-[1.5px] text-white'>Diseño y Construccion de Espacios Verdes</h1>
                </div>
                <div className='tablet:w-full laptopL:w-[85%] w-[75%] mobileS:h-[35%] tablet:h-[32%] laptopL:h-[27%] h-[23%] mobileS:mt-4 laptopL:mt-8 mx-auto tablet:m-0 mobileS:mb-0 mb-12 tablet:px-2 grid tablet:grid-cols-2 grid-cols-4 tablet:grid-rows-4 grid-rows-2 text-white'>
                    <div className='w-full h-full laptopL:px-2 px-4 m-auto border-white mobileS:p-[0.4rem] tabletS:p-[0.7rem] mobileS:mx-auto flex flex-col justify-center mobileS:text-[13px] tabletS:text-base tablet:text-2xl laptopL:text-[17px] text-xl tracking-[0.7px] border-r-2 tablet:border-b-[1.7px] border-b-2 '>Jardines Verticales</div>
                    <div className='w-full h-full laptopL:px-2 px-4 m-auto border-white mobileS:p-[0.4rem] tabletS:p-[0.7rem] mobileS:mx-auto flex flex-col justify-center mobileS:text-[13px] tabletS:text-base tablet:text-2xl laptopL:text-[17px] text-xl tracking-[0.7px] border-r-2 tablet:border-b-[1.7px] tablet:border-r-0 border-b-2 '>Césped</div>
                    <div className='w-full h-full laptopL:px-2 px-4 m-auto border-white mobileS:p-[0.4rem] tabletS:p-[0.7rem] mobileS:mx-auto flex flex-col justify-center mobileS:text-[13px] tabletS:text-base tablet:text-2xl laptopL:text-[17px] text-xl tracking-[0.7px] border-r-2 tablet:border-b-[1.7px] border-b-2 '>Sistema de Riego</div>
                    <div className='w-full h-full laptopL:px-2 px-4 m-auto border-white mobileS:p-[0.4rem] tabletS:p-[0.7rem] mobileS:mx-auto flex flex-col justify-center mobileS:text-[13px] tabletS:text-base tablet:text-2xl laptopL:text-[17px] text-xl tracking-[0.7px] tablet:border-b-[1.7px] border-b-2'>Desmalezado</div>
                    <div className='w-full h-full laptopL:px-2 px-4 m-auto border-white mobileS:p-[0.4rem] tabletS:p-[0.7rem] mobileS:mx-auto flex flex-col justify-center mobileS:text-[13px] tabletS:text-base tablet:text-2xl laptopL:text-[17px] text-xl tracking-[0.7px] border-r-2 tablet:border-b-[1.7px]'>Fumigaciones</div>
                    <div className='w-full h-full laptopL:px-2 px-4 m-auto border-white mobileS:p-[0.4rem] tabletS:p-[0.7rem] mobileS:mx-auto flex flex-col justify-center mobileS:text-[13px] tabletS:text-base tablet:text-2xl laptopL:text-[17px] text-xl tracking-[0.7px] border-r-2 tablet:border-b-[1.7px] tablet:border-r-0'>Poda en Altura</div>
                    <div className='w-full h-full laptopL:px-2 px-4 m-auto border-white mobileS:p-[0.4rem] tabletS:p-[0.7rem] mobileS:mx-auto flex flex-col justify-center mobileS:text-[13px] tabletS:text-base tablet:text-2xl laptopL:text-[17px] text-xl tracking-[0.7px] border-r-2 '>Manteniemiento</div>
                    <div className='w-full h-full laptopL:px-2 px-4 m-auto border-white mobileS:p-[0.4rem] tabletS:p-[0.7rem] mobileS:mx-auto flex flex-col justify-center mobileS:text-[13px] tabletS:text-base tablet:text-2xl laptopL:text-[17px] text-xl tracking-[0.7px]'>Paisajismo</div>
                </div>
                <div className='w-full flex tabletS:mt-0 tablet:mt-16 mobileS:mb-8 tabletS:mb-10 tabletS:flex-col flex-row flex-wrap justify-center'>
                    <a>
                        <input type='button' value="PEDIR PRESUPUESTO"
                        className='mobileS:w-3/5 tabletS:w-[55%] tablet:w-[19.3rem] laptopL:w-64 w-[18.5rem] mobileS:h-[2.4rem] tabletS:h-12 tablet:h-[3.6rem] laptopL:h-12 h-14 mobileS:mx-[0.2rem] laptopL:mx-2 mobileS:my-[0.4rem] laptopL:my-4 m-4 rounded-[5px] mobileS:text-xs tabletS:text-base tablet:text-[22px] laptopL:text-base text-xl tracking-[0.5px] text-white bg-[rgb(91,193,32)]'></input>
                    </a>
                    <a>
                        <input type='button' value="COTIZAR POR WHATSAPP"
                        className='mobileS:w-3/5 tabletS:w-[55%] tablet:w-[19.3rem] laptopL:w-64 w-[18.5rem] mobileS:h-[2.4rem] tabletS:h-12 tablet:h-[3.6rem] laptopL:h-12 h-14 mobileS:mx-[0.2rem] laptopL:mx-2 mobileS:my-[0.4rem] laptopL:my-4 m-4 rounded-[5px] mobileS:text-xs tabletS:text-base tablet:text-[22px] laptopL:text-base text-xl tracking-[0.5px] text-[rgb(91,193,32)] bg-white'></input>
                    </a>
                </div>
            </section>
            <div className='laptopL:flex tablet:hidden mobileS:-bottom-[7%] tabletS:-bottom-[3.5%] mobileS:top-[35.8rem] laptopL:bottom-[22%] -bottom-[4.8%] tabletS:top-[53rem] absolute left-[50%] bg-[rgb(91,193,32)] z-[700] w-[3px] mobileS:h-[2.3rem] h-16'/>
        </header>
    )
}

export default Header