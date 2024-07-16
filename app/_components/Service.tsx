import React from "react"
import Image from 'next/image'
import Fumigacion from '@/asset/fumigacion.webp'

type Props = {}

const Service = (props: Props) => {
    return (
        <section className="h-auto mx-auto text-center max-w-[1200px]">
            <div className="flex h-72 w-full mx-auto my-20 flex-col justify-center">
                <h2 className="p-4 text-5xl text-black font-poppins font-bold">Servicios</h2>
                <p className="px-28 py-6 tracking-wide text-gray-600 font-normal font-poppins leading-9">
                    CÉSPED y NIVELACIÓN. RIEGO AUTOMÁTICO. PODAS Y TRATAMIENTO DE LATIFOLIADOS.
                    <br/>
                    MANTENIMIENTO DE ÁREAS VERDES. TECHOS VERDES. PAISAJISMO.
                    <br/>
                    DISEÑO DE PARQUES Y JARDINES. ART-DECÓ. RENOVACIÓN Y MANTENIMIENTO DE ESPACIOS VERDES.
                    <br/>
                    BALCONES, TERRAZAS E INTERIORES. JARDINES VERTICALES.
                </p>
            </div>
        </section>
    )
}

export default Service