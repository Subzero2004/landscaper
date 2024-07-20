import React from "react"
import Image from 'next/image'
import Fumigacion from '@/asset/Service/fumigacion.webp'
import Mantenimiento from '@/asset/Service/mantenimiento.jpg'
import Paisajismo from '@/asset/Service/paisajismo.jpg'
import Césped from '@/asset/Service/colocacionCesped.jpeg'
import Desmalezado from '@/asset/Service/desmalezado.jpg'
import Riego from '@/asset/Service/riego.jpg'
import JardinVertical from '@/asset/Service/jardinVertical.jpg'
import PodaEnAltura from '@/asset/Service/podaAltura.jpeg'
import Construccion from '@/asset/Service/construccion.jpg'
import { describe } from "node:test"


type Props = {}

const Service = (props: Props) => {
    return (
        <section className="h-auto mx-auto max-w-[1200px] laptop:max-w-none">
            <div className="flex mobileS:h-[30rem] tabletS:h-[27rem] tablet:h-[29rem] laptop:h-[22rem] h-72 w-full mobileS:p-0 tablet:pt-32 tablet:pb-16 mobileS:mx-0 mx-auto mobileS:my-4 tabletS:my-0 my-20 flex-col items-center justify-center">
                <h2 className="mobileS:w-full mobileS:mt-4 mobileS:px-4 mobileS:pb-[0.6rem] tabletS:p-2 p-4 laptop:tracking-[1.5px] text-center mobileS:text-[2.4rem] tabletXS:text-[2.5rem] laptopS:text-[3.2rem] text-5xl text-black font-poppins font-bold">Servicios</h2>
                <p className="mobileS:w-full mt-4 mobileS:pb-[0.6rem] laptop:px-[5.5rem] px-28 py-6 mobileS:px-4 tablet:px-[5.5rem] tabletXS:p-4 tabletS:p-2 laptop:tracking-[0.3px] tracking-wide text-gray-600 font-normal mobileS:text-sm tabletXS:text-[15px] tabletS:text-base tablet:text-[17px] text-center font-poppins mobileS:leading-7 tabletXS:leading-[30px] laptop:leading-8 leading-9">
                    CÉSPED y NIVELACIÓN. RIEGO AUTOMÁTICO. PODAS Y TRATAMIENTO DE LATIFOLIADOS.
                    <br/>
                    MANTENIMIENTO DE ÁREAS VERDES. TECHOS VERDES. PAISAJISMO.
                    <br/>
                    DISEÑO DE PARQUES Y JARDINES. ART-DECÓ. RENOVACIÓN Y MANTENIMIENTO DE ESPACIOS VERDES.
                    <br/>
                    BALCONES, TERRAZAS E INTERIORES. JARDINES VERTICALES.
                </p>
            </div>
            <div className="tablet:h-auto w-full rounded-[10px] mobileS:p-0 laptopS:px-8 laptop:px-[5.5rem] tablet:my-12 laptopS:my-8 laptop:my-0 my-8 mobileS:my-16 mobileS:mx-0 tablet:mx-auto tablet:flex tablet:justify-center tablet:items-center tablet:flex-col grid laptopS:grid-cols-2 grid-cols-3 laptopS:grid-rows-5 grid-rows-3 mobileS:gap-8 laptopS:gap-x-0 laptop:gap-x-4 laptopS:gap-y-12 laptop:gap-y-6 gap-y-8 h-[97%] ">
                <div className="flex flex-col mobileS:justify-center justify-start mobileS:w-[90%] tabletS:w-full tablet:w-[42rem] laptopS:w-[23rem] laptopL:w-full laptop:w-[20rem] w-[23rem] mobileS:h-72 tabletS:h-[352px] laptop:h-[22rem] h-96 tablet:m-0 m-auto rounded-[5px] relative">
                    <Image src={Fumigacion} alt="Image1" objectFit="cover" className="absolute bg-center z-[-10]" fill/>
                    <div className="mobileS:h-[36%] tabletS:h-[32%] h-[28%] w-full py-[0.3rem] mobileS:px-[0.2rem] px-[0.5rem] mobileS:my-0 tabletS:mt-[20%] tablet:mt-[15%] laptopS:mt-[30%] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)] ">
                        <h4 className="w-full mobileS:text-[2.1rem] text-[30px] mobileS:leading-8 laptopL:leading-[29px] font-poppins font-normal mobileS:tracking-[1.5px] tracking-[1px] text-[rgb(240,240,240)]">Fumigación</h4>
                        <div className="w-full mobileS:text-[1.2rem] text-xl mobileS:leading-8 mobileS:tracking-[1.5px] tracking-[1px] font-poppins text-[rgb(240,240,240)]">Áreas Verdes</div>
                    </div>
                </div>
                <div className="flex flex-col mobileS:justify-center justify-start mobileS:w-[90%] tabletS:w-full tablet:w-[42rem] laptopS:w-[23rem] laptopL:w-full laptop:w-[20rem] w-[23rem] mobileS:h-72 tabletS:h-[352px] laptop:h-[22rem] h-96 tablet:m-0 m-auto rounded-[5px] relative">
                    <Image src={Mantenimiento} alt="Image1" objectFit="cover" className="absolute bg-center z-[-10]" fill/>
                    <div className="mobileS:h-[36%] tabletS:h-[32%] h-[28%] w-full py-[0.3rem] mobileS:px-[0.2rem] px-[0.5rem] mobileS:my-0 tabletS:mt-[20%] tablet:mt-[15%] laptopS:mt-[30%] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full mobileS:text-[2.1rem] text-[30px] mobileS:leading-8 laptopL:leading-[29px] font-poppins font-normal mobileS:tracking-[1.5px] tracking-[1px] text-[rgb(240,240,240)]">Mantenimiento</h4>
                        <div className="w-full mobileS:text-[1.2rem] text-xl mobileS:leading-8 mobileS:tracking-[1.5px] tracking-[1px] font-poppins text-[rgb(240,240,240)]">Grandes Superficies</div>
                    </div>
                </div>
                <div className="flex flex-col mobileS:justify-center justify-start mobileS:w-[90%] tabletS:w-full tablet:w-[42rem] laptopS:w-[23rem] laptopL:w-full laptop:w-[20rem] w-[23rem] mobileS:h-72 tabletS:h-[352px] laptop:h-[22rem] h-96 tablet:m-0 m-auto rounded-[5px] relative">
                    <Image src={Paisajismo} alt="Image1" objectFit="cover" className="absolute bg-center z-[-10]" fill/>
                    <div className="mobileS:h-[36%] tabletS:h-[32%] h-[28%] w-full py-[0.3rem] mobileS:px-[0.2rem] px-[0.5rem] mobileS:my-0 tabletS:mt-[20%] tablet:mt-[15%] laptopS:mt-[30%] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full mobileS:text-[2.1rem] text-[30px] mobileS:leading-8 laptopL:leading-[29px] font-poppins font-normal mobileS:tracking-[1.5px] tracking-[1px] text-[rgb(240,240,240)]">Paisajismo</h4>
                        <div className="w-full mobileS:text-[1.2rem] text-xl mobileS:leading-8 mobileS:tracking-[1.5px] tracking-[1px] font-poppins text-[rgb(240,240,240)]">Diseños</div>
                    </div>
                </div>
                <div className="flex flex-col mobileS:justify-center justify-start mobileS:w-[90%] tabletS:w-full tablet:w-[42rem] laptopS:w-[23rem] laptopL:w-full laptop:w-[20rem] w-[23rem] mobileS:h-72 tabletS:h-[352px] laptop:h-[22rem] h-96 tablet:m-0 m-auto rounded-[5px] relative">
                    <Image src={Césped} alt="Image1" objectFit="cover" className="absolute bg-center z-[-10]" fill/>
                    <div className="mobileS:h-[36%] tabletS:h-[32%] h-[28%] w-full py-[0.3rem] mobileS:px-[0.2rem] px-[0.5rem] mobileS:my-0 tabletS:mt-[20%] tablet:mt-[15%] laptopS:mt-[30%] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full mobileS:text-[2.1rem] text-[30px] mobileS:leading-8 laptopL:leading-[29px] font-poppins font-normal mobileS:tracking-[1.5px] tracking-[1px] text-[rgb(240,240,240)]">Césped</h4>
                        <div className="w-full mobileS:text-[1.2rem] text-xl mobileS:leading-8 mobileS:tracking-[1.5px] tracking-[1px] font-poppins text-[rgb(240,240,240)]">Colocación</div>
                    </div>
                </div>
                <div className="flex flex-col mobileS:justify-center justify-start mobileS:w-[90%] tabletS:w-full tablet:w-[42rem] laptopS:w-[23rem] laptopL:w-full laptop:w-[20rem] w-[23rem] mobileS:h-72 tabletS:h-[352px] laptop:h-[22rem] h-96 tablet:m-0 m-auto rounded-[5px] relative">
                    <Image src={JardinVertical} alt="Image1" objectFit="cover" className="absolute bg-center z-[-10]" fill/>
                    <div className="mobileS:h-[36%] tabletS:h-[32%] h-[28%] w-full py-[0.3rem] mobileS:px-[0.2rem] px-[0.5rem] mobileS:my-0 tabletS:mt-[20%] tablet:mt-[15%] laptopS:mt-[30%] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full mobileS:text-[2.1rem] text-[30px] mobileS:leading-8 laptopL:leading-[29px] font-poppins font-normal mobileS:tracking-[1.5px] tracking-[1px] text-[rgb(240,240,240)]">Jardin Vertical</h4>
                        <div className="w-full mobileS:text-[1.2rem] text-xl mobileS:leading-8 mobileS:tracking-[1.5px] tracking-[1px] font-poppins text-[rgb(240,240,240)]">Diseños</div>
                    </div>
                </div>
                <div className="flex flex-col mobileS:justify-center justify-start mobileS:w-[90%] tabletS:w-full tablet:w-[42rem] laptopS:w-[23rem] laptopL:w-full laptop:w-[20rem] w-[23rem] mobileS:h-72 tabletS:h-[352px] laptop:h-[22rem] h-96 tablet:m-0 m-auto rounded-[5px] relative">
                    <Image src={Riego} alt="Image1" objectFit="cover" className="absolute bg-center z-[-10]" fill/>
                    <div className="mobileS:h-[36%] tabletS:h-[32%] h-[28%] w-full py-[0.3rem] mobileS:px-[0.2rem] px-[0.5rem] mobileS:my-0 tabletS:mt-[20%] tablet:mt-[15%] laptopS:mt-[30%] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full mobileS:text-[2.1rem] text-[30px] mobileS:leading-8 laptopL:leading-[29px] font-poppins font-normal mobileS:tracking-[1.5px] tracking-[1px] text-[rgb(240,240,240)]">Riego</h4>
                        <div className="w-full mobileS:text-[1.2rem] text-xl mobileS:leading-8 mobileS:tracking-[1.5px] tracking-[1px] font-poppins text-[rgb(240,240,240)]">Sistemas</div>
                    </div>
                </div>
                <div className="flex flex-col mobileS:justify-center justify-start mobileS:w-[90%] tabletS:w-full tablet:w-[42rem] laptopS:w-[23rem] laptopL:w-full laptop:w-[20rem] w-[23rem] mobileS:h-72 tabletS:h-[352px] laptop:h-[22rem] h-96 tablet:m-0 m-auto rounded-[5px] relative">
                    <Image src={Desmalezado} alt="Image1" objectFit="cover" className="absolute bg-center z-[-10]" fill/>
                    <div className="mobileS:h-[36%] tabletS:h-[32%] h-[28%] w-full py-[0.3rem] mobileS:px-[0.2rem] px-[0.5rem] mobileS:my-0 tabletS:mt-[20%] tablet:mt-[15%] laptopS:mt-[30%] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full mobileS:text-[2.1rem] text-[30px] mobileS:leading-8 laptopL:leading-[29px] font-poppins font-normal mobileS:tracking-[1.5px] tracking-[1px] text-[rgb(240,240,240)]">Desmalezado</h4>
                        <div className="w-full mobileS:text-[1.2rem] text-xl mobileS:leading-8 mobileS:tracking-[1.5px] tracking-[1px] font-poppins text-[rgb(240,240,240)]">Terreno</div>
                    </div>
                </div>
                <div className="flex flex-col mobileS:justify-center justify-start mobileS:w-[90%] tabletS:w-full tablet:w-[42rem] laptopS:w-[23rem] laptopL:w-full laptop:w-[20rem] w-[23rem] mobileS:h-72 tabletS:h-[352px] laptop:h-[22rem] h-96 tablet:m-0 m-auto rounded-[5px] relative">
                    <Image src={PodaEnAltura} alt="Image1" objectFit="cover" className="absolute bg-center z-[-10]" fill/>
                    <div className="mobileS:h-[36%] tabletS:h-[32%] h-[28%] w-full py-[0.3rem] mobileS:px-[0.2rem] px-[0.5rem] mobileS:my-0 tabletS:mt-[20%] tablet:mt-[15%] laptopS:mt-[30%] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full mobileS:text-[2.1rem] text-[30px] mobileS:leading-8 laptopL:leading-[29px] font-poppins font-normal mobileS:tracking-[1.5px] tracking-[1px] text-[rgb(240,240,240)]">Poda en Altura</h4>
                        <div className="w-full mobileS:text-[1.2rem] text-xl mobileS:leading-8 mobileS:tracking-[1.5px] tracking-[1px] font-poppins text-[rgb(240,240,240)]">Árboles</div>
                    </div>
                </div>
                <div className="flex flex-col mobileS:justify-center justify-start mobileS:w-[90%] tabletS:w-full tablet:w-[42rem] laptopS:w-[23rem] laptopL:w-full laptop:w-[20rem] w-[23rem] mobileS:h-72 tabletS:h-[352px] laptop:h-[22rem] h-96 tablet:m-0 m-auto rounded-[5px] relative">
                    <Image src={Construccion} alt="Image1" objectFit="cover" className="absolute bg-center z-[-10]" fill/>
                    <div className="mobileS:h-[36%] tabletS:h-[32%] h-[28%] w-full py-[0.3rem] mobileS:px-[0.2rem] px-[0.5rem] mobileS:my-0 tabletS:mt-[20%] tablet:mt-[15%] laptopS:mt-[30%] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full mobileS:text-[2.1rem] text-[30px] mobileS:leading-8 laptopL:leading-[29px] font-poppins font-normal mobileS:tracking-[1.5px] tracking-[1px] text-[rgb(240,240,240)]">Construcción</h4>
                        <div className="w-full mobileS:text-[1.2rem] text-xl mobileS:leading-8 mobileS:tracking-[1.5px] tracking-[1px] font-poppins text-[rgb(240,240,240)]">Albañilería</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service