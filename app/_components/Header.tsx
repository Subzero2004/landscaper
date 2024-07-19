import React from 'react'
import Image from 'next/image'
import BGHeader from '@/asset/Header/bg-header.jpg'
import Logo from '@/asset/Header/logoDefinitivo.png'
import Menu from '@/asset/BasicLogo/MenuBurger.png'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='mobile:h-[37rem] h-screen w-full flex flex-col justify-center items-center font-poppins'>
            <Image src={BGHeader} alt='BGHerobanner' quality={100} className='mobile:h-[37rem] h-screen w-full bg-cover bg-center absolute'/>
            <nav className='mobile:h-[5rem] tablet:h-[6.5rem] h-[7.5rem] w-full relative mobile:p-0 tablet:px-8 px-28 flex z-[900] mobile:top-0 tablet:left-0 flex-nowrap flex-row justify-center items-center mobile:bg-[rgb(0,0,0,0.41)] bg-[rgb(72,70,70,0.378)]'>
                <div className='h-full mobile:w-full w-[1440px] mobile:pr-6 mobile:pl-4 flex flex-row flex-nowrap justify-between items-center'>
                    <div className='mobile:h-20 h-[7.5rem] mobile:w-36 w-[13.5rem] mobile:m-0 my-auto flex flex-col justify-center items-center'>
                        <Image src={Logo} alt='LogoNav' quality={100} className='mobile:h-12 h-[4.5rem] mobile:w-full text-[22px] bg-center flex justify-center items-center bg-contain w-full mx-auto bg-transparent'/>
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
                    <button className='h-full mobile:w-[10%] w-[14%] tablet:flex hidden flex-col justify-center items-center bg-transparent'>
                        <Image src={Menu} alt='' className='mobile:size-[3.2rem] size-[4.3rem] absolute' />
                    </button>
                </div>
            </nav>
            <section className='mobile:h-[91%] tablet:h-[91vh] w-full h-full z-[900] flex flex-col flex-wrap tablet:justify-start mobile:justify-between justify-center text-center mobile:bg-[rgb(0,0,0,0.41)] bg-[rgb(72,70,70,0.378)]'>
                <div className='h-[30%] mobile:w-[95%] tablet:w-[96%] w-[75%] mobile:-mt-2 tablet:mt-8 mobile:mb-0 tablet:mb-4 -mt-24 mx-auto mb-8 flex content-center'>
                    <h1 className='mobile:w-[97%] w-full h-full mobile:p-0 py-4 tablet:px-4 px-24 mobile:mx-auto flex flex-col flex-wrap justify-center items-center content-center font-bold mobile:text-3xl tablet:text-[60px] text-[65px] mobile:leading-[37px] tablet:leading-[58px] leading-[75px] mobile:tracking-[2.3px] tablet:tracking-[6px] tracking-[1.5px] text-white'>Diseño y Construccion de Espacios Verdes</h1>
                </div>
                <div className='tablet:w-full w-[75%] mobile:h-[35%] tablet:h-[32%] h-[23%] mobile:mt-4 mx-auto tablet:m-0 mobile:mb-0 mb-12 tablet:px-2 grid tablet:grid-cols-2 grid-cols-4 tablet:grid-rows-4 grid-rows-2 text-white'>
                    <div className='w-full h-full px-4 m-auto border-white mobile:p-[0.4rem] mobile:mx-auto flex flex-col justify-center mobile:text-[13px] tablet:text-2xl text-xl tracking-[0.7px] border-r-2 tablet:border-b-[1.7px] border-b-2 '>Jardines Verticales</div>
                    <div className='w-full h-full px-4 m-auto border-white mobile:p-[0.4rem] mobile:mx-auto flex flex-col justify-center mobile:text-[13px] tablet:text-2xl text-xl tracking-[0.7px] border-r-2 tablet:border-b-[1.7px] tablet:border-r-0 border-b-2 '>Césped</div>
                    <div className='w-full h-full px-4 m-auto border-white mobile:p-[0.4rem] mobile:mx-auto flex flex-col justify-center mobile:text-[13px] tablet:text-2xl text-xl tracking-[0.7px] border-r-2 tablet:border-b-[1.7px] border-b-2 '>Sistema de Riego</div>
                    <div className='w-full h-full px-4 m-auto border-white mobile:p-[0.4rem] mobile:mx-auto flex flex-col justify-center mobile:text-[13px] tablet:text-2xl text-xl tracking-[0.7px] tablet:border-b-[1.7px] border-b-2'>Desmalezado</div>
                    <div className='w-full h-full px-4 m-auto border-white mobile:p-[0.4rem] mobile:mx-auto flex flex-col justify-center mobile:text-[13px] tablet:text-2xl text-xl tracking-[0.7px] border-r-2 tablet:border-b-[1.7px]'>Fumigaciones</div>
                    <div className='w-full h-full px-4 m-auto border-white mobile:p-[0.4rem] mobile:mx-auto flex flex-col justify-center mobile:text-[13px] tablet:text-2xl text-xl tracking-[0.7px] border-r-2 tablet:border-b-[1.7px] tablet:border-r-0'>Poda en Altura</div>
                    <div className='w-full h-full px-4 m-auto border-white mobile:p-[0.4rem] mobile:mx-auto flex flex-col justify-center mobile:text-[13px] tablet:text-2xl text-xl tracking-[0.7px] border-r-2 '>Manteniemiento</div>
                    <div className='w-full h-full px-4 m-auto border-white mobile:p-[0.4rem] mobile:mx-auto flex flex-col justify-center mobile:text-[13px] tablet:text-2xl text-xl tracking-[0.7px]'>Paisajismo</div>
                </div>
                <div className='w-full flex mobile:mt-0 tablet:mt-16 mobile:mb-8 mobile:flex-col flex-row flex-wrap justify-center'>
                    <a>
                        <input type='button' value="PEDIR PRESUPUESTO"
                        className='mobile:w-3/5 tablet:w-[19.3rem] w-[18.5rem] mobile:h-[2.4rem] tablet:h-[3.6rem] h-14 mobile:mx-[0.2rem] tablet:mx-2 mobile:my-[0.4rem] tablet:my-4 m-4 rounded-[5px] mobile:text-xs tablet:text-[22px] text-xl tracking-[0.5px] text-white bg-[rgb(91,193,32)]'></input>
                    </a>
                    <a>
                        <input type='button' value="COTIZAR POR WHATSAPP"
                        className='mobile:w-3/5 tablet:w-[19.3rem] w-[18.5rem] mobile:h-[2.4rem] tablet:h-[3.6rem] h-14 mobile:mx-[0.2rem] tablet:mx-2 mobile:my-[0.4rem] tablet:my-4 m-4 rounded-[5px] mobile:text-xs tablet:text-[22px] text-xl tracking-[0.5px] text-[rgb(91,193,32)] bg-white'></input>
                    </a>
                </div>
            </section>
            <div className='mobile:flex tablet:hidden mobile:-bottom-[7%] mobile:top-[35.8rem] -bottom-[4.8%] absolute left-[50%] bg-[rgb(91,193,32)] z-[700] w-[3px] mobile:h-[2.3rem] h-16'/>
        </header>
    )
}

export default Header