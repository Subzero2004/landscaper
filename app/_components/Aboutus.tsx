import React from "react"

type Props = {}

const Aboutus = (props: Props) => {
    return (
    <section className="h-auto w-full flex flex-col justify-center items-center">
        <div className="h-[45rem] w-full py-12 mx-auto flex flex-row justify-between items-center content-center max-w-[1200px]">
            <div className="h-[33rem] w-1/2 flex flex-col justify-start items-center">
                <div className="h-[18%] w-full px-4 flex flex-col justify-between items-start">
                    <h5 className="w-full text-left text-base font-poppins font-normal text-green-500">Por que confiar en nosotros</h5>
                    <h3 className="w-full text-left text-[33px] tracking-[0.125rem] font-poppins font-bold">Expertos en Áreas Verdes</h3>
                    <div className="h-[2.3px] w-[31%] bg-green-500"></div>
                </div>
                <div className="h-3/5 w-full p-4 flex flex-col justify-center items-center">
                    <p className="w-full text-left leading-7 text-[16px] tracking-[0.3px] text-gray-500 font-poppins">
                        Egresados de la Escuela Técnica Cristóbal María Hicken, del Jardín Botánico de la Ciudad de Buenos Aires.
                        <br/>
                        Con formación académica en ciencias naturales y formación técnica en el manejo integral de espacios naturales.
                        <br/>
                        En BOTANICOS nuestro compromiso es con el espacio verde y con la optimización del recurso.
                        <br/>
                        Destacamos nuestra trayectoria de 25 años al servicio de los Espacios Verdes.
                        <br/>
                        <br/>
                        Nuestra área de trabajo es el AMBA.
                    </p>
                </div>
                <div className="h-[20%] w-full px-4 flex flex-row justify-start items-center">
                    <a className="h-auto w-[13.8rem] aspect-[8/1.8] mr-6 justify-center items-center flex">
                        <button className="w-full h-full rounded-[3px] uppercase text-base tracking-[1px] border-solid border-orange-400 border-[3px] text-gray-500">mirar obras</button>
                    </a>
                    <a className="h-auto w-[13.8rem] aspect-[8/1.8] mr-6 justify-center items-center flex">
                        <button className="w-full h-full rounded-[3px] uppercase text-white text-base tracking-[1px] border-solid border-green-500 bg-green-500 border-[3px] ">pedir presupuesto</button>
                    </a>
                </div>
            </div>
            <div className="w-[45%] h-[33rem] flex flex-col items-end justify-start">
                <div className="aspect-square relative h-[83%]">
                    <div className="bg-gray-800 w-[372.48px] h-[372.48px] z-[12] left-0 bottom-0 absolute bg-center"></div>
                    <div className="border-solid border-2 border-gray-400 w-[372.48px] h-[372.48px] right-0 top-0 z-[11] absolute"></div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Aboutus