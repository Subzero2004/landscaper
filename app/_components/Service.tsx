import React from "react"
import Image from 'next/image'
import Fumigacion from '@/asset/fumigacion.webp'

type Props = {}

const Service = (props: Props) => {
    return (
        <section className="h-auto mx-auto max-w-[1200px]">
            <div className="flex h-72 w-full mx-auto my-20 flex-col items-center justify-center">
                <h2 className="p-4 text-5xl text-black font-poppins font-bold">Servicios</h2>
                <p className="px-28 py-6 tracking-wide text-gray-600 font-normal text-center font-poppins leading-9">
                    CÉSPED y NIVELACIÓN. RIEGO AUTOMÁTICO. PODAS Y TRATAMIENTO DE LATIFOLIADOS.
                    <br/>
                    MANTENIMIENTO DE ÁREAS VERDES. TECHOS VERDES. PAISAJISMO.
                    <br/>
                    DISEÑO DE PARQUES Y JARDINES. ART-DECÓ. RENOVACIÓN Y MANTENIMIENTO DE ESPACIOS VERDES.
                    <br/>
                    BALCONES, TERRAZAS E INTERIORES. JARDINES VERTICALES.
                </p>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-y-8 h-[97%] w-full rounded-[10px] my-8">
                <div className="flex flex-col justify-start w-[23rem] h-96 m-auto rounded-[5px] bg-slate-300">
                    <div className="bg-center bg-cover "/>
                    <div className="h-[28%] w-full py-[0.3rem] px-[0.5rem] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full text-[35px] font-poppins font-normal tracking-[1px] text-[rgb(240,240,240)]">Fumigación</h4>
                        <div className="w-full text-xl tracking-[1px] font-poppins text-[rgb(240,240,240)]">Áreas Verdes</div>
                    </div>
                </div>
                <div className="flex flex-col justify-start w-[23rem] h-96 m-auto rounded-[5px] bg-slate-300">
                    <div className="bg-center bg-cover "/>
                    <div className="h-[28%] w-full py-[0.3rem] px-[0.5rem] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full text-[35px] font-poppins font-normal tracking-[1px] text-[rgb(240,240,240)]">Mantenimiento</h4>
                        <div className="w-full text-xl tracking-[1px] font-poppins text-[rgb(240,240,240)]">Grandes Superficies</div>
                    </div>
                </div>
                <div className="flex flex-col justify-start w-[23rem] h-96 m-auto rounded-[5px] bg-slate-300">
                    <div className="bg-center bg-cover "/>
                    <div className="h-[28%] w-full py-[0.3rem] px-[0.5rem] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full text-[35px] font-poppins font-normal tracking-[1px] text-[rgb(240,240,240)]">Paisajismo</h4>
                        <div className="w-full text-xl tracking-[1px] font-poppins text-[rgb(240,240,240)]">Diseños</div>
                    </div>
                </div>
                <div className="flex flex-col justify-start w-[23rem] h-96 m-auto rounded-[5px] bg-slate-300">
                    <div className="bg-center bg-cover "/>
                    <div className="h-[28%] w-full py-[0.3rem] px-[0.5rem] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full text-[35px] font-poppins font-normal tracking-[1px] text-[rgb(240,240,240)]">Césped</h4>
                        <div className="w-full text-xl tracking-[1px] font-poppins text-[rgb(240,240,240)]">Colocación</div>
                    </div>
                </div>
                <div className="flex flex-col justify-start w-[23rem] h-96 m-auto rounded-[5px] bg-slate-300">
                    <div className="bg-center bg-cover "/>
                    <div className="h-[28%] w-full py-[0.3rem] px-[0.5rem] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full text-[35px] font-poppins font-normal tracking-[1px] text-[rgb(240,240,240)]">Jardin Vertical</h4>
                        <div className="w-full text-xl tracking-[1px] font-poppins text-[rgb(240,240,240)]">Diseños</div>
                    </div>
                </div>
                <div className="flex flex-col justify-start w-[23rem] h-96 m-auto rounded-[5px] bg-slate-300">
                    <div className="bg-center bg-cover "/>
                    <div className="h-[28%] w-full py-[0.3rem] px-[0.5rem] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full text-[35px] font-poppins font-normal tracking-[1px] text-[rgb(240,240,240)]">Riego</h4>
                        <div className="w-full text-xl tracking-[1px] font-poppins text-[rgb(240,240,240)]">Sistemas</div>
                    </div>
                </div>
                <div className="flex flex-col justify-start w-[23rem] h-96 m-auto rounded-[5px] bg-slate-300">
                    <div className="bg-center bg-cover "/>
                    <div className="h-[28%] w-full py-[0.3rem] px-[0.5rem] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full text-[35px] font-poppins font-normal tracking-[1px] text-[rgb(240,240,240)]">Desmalezado</h4>
                        <div className="w-full text-xl tracking-[1px] font-poppins text-[rgb(240,240,240)]">Terreno</div>
                    </div>
                </div>
                <div className="flex flex-col justify-start w-[23rem] h-96 m-auto rounded-[5px] bg-slate-300">
                    <div className="bg-center bg-cover "/>
                    <div className="h-[28%] w-full py-[0.3rem] px-[0.5rem] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full text-[35px] font-poppins font-normal tracking-[1px] text-[rgb(240,240,240)]">Poda en Altura</h4>
                        <div className="w-full text-xl tracking-[1px] font-poppins text-[rgb(240,240,240)]">Árboles</div>
                    </div>
                </div>
                <div className="flex flex-col justify-start w-[23rem] h-96 m-auto rounded-[5px] bg-slate-300">
                    <div className="bg-center bg-cover "/>
                    <div className="h-[28%] w-full py-[0.3rem] px-[0.5rem] mt-[40%] mx-auto flex flex-col justify-evenly items-center text-center bg-[rgb(20,53,107,0.62)]">
                        <h4 className="w-full text-[35px] font-poppins font-normal tracking-[1px] text-[rgb(240,240,240)]">Construcción</h4>
                        <div className="w-full text-xl tracking-[1px] font-poppins text-[rgb(240,240,240)]">Albañilería</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service