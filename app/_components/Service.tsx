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
        <section className="h-auto mx-auto max-w-[1200px]">
            <div className="flex mobile:h-[30rem] tablet:h-[29rem] h-72 w-full mobile:p-0 tablet:pt-32 tablet:pb-16 mobile:mx-0 mx-auto mobile:my-4 my-20 flex-col items-center justify-center">
                <h2 className="mobile:w-full mobile:mt-4 mobile:px-4 mobile:pb-[0.6rem] p-4 tablet:tracking-[1.5px] text-center mobile:text-[2.4rem] tablet:text-[3.2rem] text-5xl text-black font-poppins font-bold">Servicios</h2>
                <p className="mobile:w-full mobile:mt-4 mobile:pb-[0.6rem] px-28 py-6 mobile:px-4 tablet:px-[5.5rem] tablet:tracking-[0.3px] tracking-wide text-gray-600 font-normal mobile:text-sm tablet:text-[17px] text-center font-poppins mobile:leading-7 tablet:leading-8 leading-9">
                    CÉSPED y NIVELACIÓN. RIEGO AUTOMÁTICO. PODAS Y TRATAMIENTO DE LATIFOLIADOS.
                    <br/>
                    MANTENIMIENTO DE ÁREAS VERDES. TECHOS VERDES. PAISAJISMO.
                    <br/>
                    DISEÑO DE PARQUES Y JARDINES. ART-DECÓ. RENOVACIÓN Y MANTENIMIENTO DE ESPACIOS VERDES.
                    <br/>
                    BALCONES, TERRAZAS E INTERIORES. JARDINES VERTICALES.
                </p>
            </div>
            <div className="tablet:flex tablet:justify-center tablet:items-center tablet:flex-col grid grid-cols-3 grid-rows-3 mobile:gap-8 gap-y-8 h-[97%] tablet:h-auto w-full rounded-[10px] mobile:p-0 tablet:px-8 tablet:my-12 my-8 mobile:my-16 mobile:mx-0 tablet:mx-auto">
                <div className="flex flex-col mobile:justify-center justify-start mobile:w-[90%] tablet:w-[42rem] w-[23rem] mobile:h-72 h-96 tablet:m-0 m-auto rounded-[5px] relative">
                    <Image src={Fumigacion} alt="Image1" objectFit="cover" className="absolute bg-center z-[-10]" fill/>
                    <div className="mobile:h-[36%] h-[28%] w-full py-[0.3rem] mobile:px-[0.2rem] px-[0.5rem] mobile:my-0 tablet:mt-[15%] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)] ">
                        <h4 className="w-full mobile:text-[2.1rem] text-[35px] mobile:leading-8 tablet:leading-[29px] font-poppins font-normal mobile:tracking-[1.5px] tracking-[1px] text-[rgb(240,240,240)]">Fumigación</h4>
                        <div className="w-full mobile:text-[1.2rem] text-xl mobile:leading-8 mobile:tracking-[1.5px] tracking-[1px] font-poppins text-[rgb(240,240,240)]">Áreas Verdes</div>
                    </div>
                </div>
                <div className="flex flex-col mobile:justify-center justify-start mobile:w-[90%] tablet:w-[42rem] w-[23rem] mobile:h-72 h-96 tablet:m-0 m-auto rounded-[5px] relative">
                    <Image src={Mantenimiento} alt="Image1" objectFit="cover" className="absolute bg-center z-[-10]" fill/>
                    <div className="mobile:h-[36%] h-[28%] w-full py-[0.3rem] mobile:px-[0.2rem] px-[0.5rem] mobile:my-0 tablet:mt-[15%] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full mobile:text-[2.1rem] text-[35px] mobile:leading-8 tablet:leading-[29px] font-poppins font-normal mobile:tracking-[1.5px] tracking-[1px] text-[rgb(240,240,240)]">Mantenimiento</h4>
                        <div className="w-full mobile:text-[1.2rem] text-xl mobile:leading-8 mobile:tracking-[1.5px] tracking-[1px] font-poppins text-[rgb(240,240,240)]">Grandes Superficies</div>
                    </div>
                </div>
                <div className="flex flex-col mobile:justify-center justify-start mobile:w-[90%] tablet:w-[42rem] w-[23rem] mobile:h-72 h-96 tablet:m-0 m-auto rounded-[5px] relative">
                    <Image src={Paisajismo} alt="Image1" objectFit="cover" className="absolute bg-center z-[-10]" fill/>
                    <div className="mobile:h-[36%] h-[28%] w-full py-[0.3rem] mobile:px-[0.2rem] px-[0.5rem] mobile:my-0 tablet:mt-[15%] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full mobile:text-[2.1rem] text-[35px] mobile:leading-8 tablet:leading-[29px] font-poppins font-normal mobile:tracking-[1.5px] tracking-[1px] text-[rgb(240,240,240)]">Paisajismo</h4>
                        <div className="w-full mobile:text-[1.2rem] text-xl mobile:leading-8 mobile:tracking-[1.5px] tracking-[1px] font-poppins text-[rgb(240,240,240)]">Diseños</div>
                    </div>
                </div>
                <div className="flex flex-col mobile:justify-center justify-start mobile:w-[90%] tablet:w-[42rem] w-[23rem] mobile:h-72 h-96 tablet:m-0 m-auto rounded-[5px] relative">
                    <Image src={Césped} alt="Image1" objectFit="cover" className="absolute bg-center z-[-10]" fill/>
                    <div className="mobile:h-[36%] h-[28%] w-full py-[0.3rem] mobile:px-[0.2rem] px-[0.5rem] mobile:my-0 tablet:mt-[15%] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full mobile:text-[2.1rem] text-[35px] mobile:leading-8 tablet:leading-[29px] font-poppins font-normal mobile:tracking-[1.5px] tracking-[1px] text-[rgb(240,240,240)]">Césped</h4>
                        <div className="w-full mobile:text-[1.2rem] text-xl mobile:leading-8 mobile:tracking-[1.5px] tracking-[1px] font-poppins text-[rgb(240,240,240)]">Colocación</div>
                    </div>
                </div>
                <div className="flex flex-col mobile:justify-center justify-start mobile:w-[90%] tablet:w-[42rem] w-[23rem] mobile:h-72 h-96 tablet:m-0 m-auto rounded-[5px] relative">
                    <Image src={JardinVertical} alt="Image1" objectFit="cover" className="absolute bg-center z-[-10]" fill/>
                    <div className="mobile:h-[36%] h-[28%] w-full py-[0.3rem] mobile:px-[0.2rem] px-[0.5rem] mobile:my-0 tablet:mt-[15%] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full mobile:text-[2.1rem] text-[35px] mobile:leading-8 tablet:leading-[29px] font-poppins font-normal mobile:tracking-[1.5px] tracking-[1px] text-[rgb(240,240,240)]">Jardin Vertical</h4>
                        <div className="w-full mobile:text-[1.2rem] text-xl mobile:leading-8 mobile:tracking-[1.5px] tracking-[1px] font-poppins text-[rgb(240,240,240)]">Diseños</div>
                    </div>
                </div>
                <div className="flex flex-col mobile:justify-center justify-start mobile:w-[90%] tablet:w-[42rem] w-[23rem] mobile:h-72 h-96 tablet:m-0 m-auto rounded-[5px] relative">
                    <Image src={Riego} alt="Image1" objectFit="cover" className="absolute bg-center z-[-10]" fill/>
                    <div className="mobile:h-[36%] h-[28%] w-full py-[0.3rem] mobile:px-[0.2rem] px-[0.5rem] mobile:my-0 tablet:mt-[15%] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full mobile:text-[2.1rem] text-[35px] mobile:leading-8 tablet:leading-[29px] font-poppins font-normal mobile:tracking-[1.5px] tracking-[1px] text-[rgb(240,240,240)]">Riego</h4>
                        <div className="w-full mobile:text-[1.2rem] text-xl mobile:leading-8 mobile:tracking-[1.5px] tracking-[1px] font-poppins text-[rgb(240,240,240)]">Sistemas</div>
                    </div>
                </div>
                <div className="flex flex-col mobile:justify-center justify-start mobile:w-[90%] tablet:w-[42rem] w-[23rem] mobile:h-72 h-96 tablet:m-0 m-auto rounded-[5px] relative">
                    <Image src={Desmalezado} alt="Image1" objectFit="cover" className="absolute bg-center z-[-10]" fill/>
                    <div className="mobile:h-[36%] h-[28%] w-full py-[0.3rem] mobile:px-[0.2rem] px-[0.5rem] mobile:my-0 tablet:mt-[15%] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full mobile:text-[2.1rem] text-[35px] mobile:leading-8 tablet:leading-[29px] font-poppins font-normal mobile:tracking-[1.5px] tracking-[1px] text-[rgb(240,240,240)]">Desmalezado</h4>
                        <div className="w-full mobile:text-[1.2rem] text-xl mobile:leading-8 mobile:tracking-[1.5px] tracking-[1px] font-poppins text-[rgb(240,240,240)]">Terreno</div>
                    </div>
                </div>
                <div className="flex flex-col mobile:justify-center justify-start mobile:w-[90%] tablet:w-[42rem] w-[23rem] mobile:h-72 h-96 tablet:m-0 m-auto rounded-[5px] relative">
                    <Image src={PodaEnAltura} alt="Image1" objectFit="cover" className="absolute bg-center z-[-10]" fill/>
                    <div className="mobile:h-[36%] h-[28%] w-full py-[0.3rem] mobile:px-[0.2rem] px-[0.5rem] mobile:my-0 tablet:mt-[15%] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full mobile:text-[2.1rem] text-[35px] mobile:leading-8 tablet:leading-[29px] font-poppins font-normal mobile:tracking-[1.5px] tracking-[1px] text-[rgb(240,240,240)]">Poda en Altura</h4>
                        <div className="w-full mobile:text-[1.2rem] text-xl mobile:leading-8 mobile:tracking-[1.5px] tracking-[1px] font-poppins text-[rgb(240,240,240)]">Árboles</div>
                    </div>
                </div>
                <div className="flex flex-col mobile:justify-center justify-start mobile:w-[90%] tablet:w-[42rem] w-[23rem] mobile:h-72 h-96 tablet:m-0 m-auto rounded-[5px] relative">
                    <Image src={Construccion} alt="Image1" objectFit="cover" className="absolute bg-center z-[-10]" fill/>
                    <div className="mobile:h-[36%] h-[28%] w-full py-[0.3rem] mobile:px-[0.2rem] px-[0.5rem] mobile:my-0 tablet:mt-[15%] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full mobile:text-[2.1rem] text-[35px] mobile:leading-8 tablet:leading-[29px] font-poppins font-normal mobile:tracking-[1.5px] tracking-[1px] text-[rgb(240,240,240)]">Construcción</h4>
                        <div className="w-full mobile:text-[1.2rem] text-xl mobile:leading-8 mobile:tracking-[1.5px] tracking-[1px] font-poppins text-[rgb(240,240,240)]">Albañilería</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service