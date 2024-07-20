import React from "react"
import Image from "next/image"
import About1 from '@/asset/AboutUs/About1.jpg'
type Props = {}

const Aboutus = (props: Props) => {
    return (
    <section className="h-auto w-full flex flex-col justify-center items-center">
        <div className="laptop:h-auto h-[45rem] tabletS:w-full laptop:w-[90%] w-full laptop:py-0 py-12 mobileS:px-[1.7rem] laptopS:px-8 my-8 mx-auto flex laptopS:flex-col flex-row laptopS:justify-center justify-between items-center content-center max-w-[1200px]">
            <div className="mobileS:h-auto tabletS:h-[38rem] laptopS:h-[36rem] laptop:h-[35rem] h-[33rem] laptopS:w-full w-1/2 flex flex-col laptopS:justify-between justify-start items-center">
                <div className="tabletXS:h-auto laptopS:h-1/4 laptop:h-1/5 h-[18%] w-full tabletXS:p-0 laptopS:px-0 px-4 tabletS:pb-8 laptop:pb-2 flex flex-col laptopS:justify-center justify-between laptopS:items-center items-start">
                    <h5 className="w-full tabletXS:pb-[0.8rem] tabletXS:px-0 laptop:px-2 laptopS:text-center text-left tabletXS:text-base laptopS:text-xl text-base font-poppins font-normal text-green-500">Por que confiar en nosotros</h5>
                    <h3 className="w-full laptopS:pt-2 laptopS:text-center text-left tabletXS:text-[34px] laptopS:text-[40px] text-[33px] tabletXS:leading-[45px] tracking-[0.125rem] font-poppins font-bold">Expertos en Áreas Verdes</h3>
                    <div className="h-[2.3px] w-[31%] bg-green-500 laptop:hidden"></div>
                </div>
                <div className="laptopS:h-1/2 laptop:h-[58%] h-3/5 w-full tabletXS:pt-4 tabletXS:pb-0 tabletS:pt-4 laptop:py-8 tabletXS:px-0 p-4 flex flex-col justify-center items-center">
                    <p className="w-full laptopS:text-center laptopS:py-6 tabletXS:px-0 tabletS:px-4 laptopS:px-8 text-left leading-7 laptopS:text-lg laptopS:leading-[27px] tablet:leading-[25px] tabletXS:text-[14px] text-[16px] tracking-[0.3px] text-gray-500 font-poppins">
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
                <div className="tabletXS:h-40 tabletS:h-1/5 laptop:h-[16%] h-[20%] w-full laptop:px-0 px-4 laptop:py-4 flex tabletXS:flex-col laptopS:flex-none flex-row tabletXS:justify-around laptopS:justify-center laptop:justify-around justify-start items-center">
                    <a className="tabletXS:h-16 h-auto tabletXS:w-full laptopS:w-[14.3rem] laptop:w-[12.5rem] w-[13.8rem] laptopS:aspect-[8/1.79] aspect-[8/1.8] tabletXS:my-2 tabletXS:mx-auto laptopS:mx-4 laptop:m-0 mr-6 justify-center items-center flex">
                        <button className="w-full h-full rounded-[3px] uppercase tabletXS:text-sm laptopS:text-lg text-base tracking-[1px] border-solid border-orange-400 border-[3px] text-gray-500">mirar obras</button>
                    </a>
                    <a className="tabletXS:h-16 h-auto tabletXS:w-full laptopS:w-[14.3rem] laptop:w-[12.5rem] w-[13.8rem] laptopS:aspect-[8/1.79] aspect-[8/1.8] tabletXS:my-2 tabletXS:mx-auto laptopS:mx-4 laptop:m-0 mr-6 justify-center items-center flex">
                        <button className="w-full h-full rounded-[3px] uppercase tabletXS:text-sm laptopS:text-lg text-base tracking-[1px] border-solid border-green-500 bg-green-500 border-[3px] text-white">pedir presupuesto</button>
                    </a>
                </div>
            </div>
            <div className="laptopS:w-full laptop:w-1/2 w-[45%] laptopS:h-[28rem] laptop:h-[35rem] h-[33rem] mobileS:p-0 laptopS:px-4 tabletS:mt-14 laptopS:mt-6 flex flex-col laptopS:items-center items-end laptopS:justify-center justify-start">
                <div className="mobileS:aspect-[2/3] tabletS:aspect-square laptopS:aspect-[3.2/2] aspect-square relative tabletXS:h-auto tabletS:h-full laptopS:h-auto h-[83%] tabletS:w-[90%] laptopS:w-full">
                    <Image src={About1} alt="" className="object-cover tabletS:w-auto laptopS:w-[90%] mobileS:h-[93%] tabletS:h-[90%] size-[85%] laptopS:h-auto mobileS:aspect-[2/3] tabletS:aspect-square aspect-[3.2/2] z-[12] tabletS:mx-0 laptop:mx-8 laptopS:top-0 right-0 laptopS:left-auto left-0 laptopS:bottom-auto bottom-0 absolute bg-center rounded-[5px]"/>
                    <div className="border-solid border-[3px] border-[rgb(63,93,125,0.75)] rounded-[5px] tabletS:w-auto laptopS:w-[90%] mobileS:h-[93%] tabletS:h-[90%] size-[85%] laptopS:h-auto mobileS:aspect-[2/3] tabletS:aspect-square aspect-[3.2/2] laptopS:bottom-0 laptopS:left-0 laptopS:right-auto right-0 laptopS:top-auto top-0 z-[11] absolute"></div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Aboutus