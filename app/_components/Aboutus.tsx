import React from "react"
import Image from "next/image"
import About1 from '@/asset/AboutUs/About1.jpg'
type Props = {}

const Aboutus = (props: Props) => {
    return (
    <section className="h-auto w-full flex flex-col justify-center items-center">
        <div className="tablet:h-auto h-[45rem] w-full tablet:py-0 py-12 mobile:px-[1.7rem] tablet:px-8 tablet:my-8 mx-auto flex tablet:flex-col flex-row tablet:justify-center justify-between items-center content-center max-w-[1200px]">
            <div className="mobile:h-auto tablet:h-[36rem] h-[33rem] tablet:w-full w-1/2 flex flex-col tablet:justify-between justify-start items-center">
                <div className="mobile:h-auto tablet:h-1/4 h-[18%] w-full mobile:p-0 tablet:px-0 px-4 tablet:pb-2 flex flex-col tablet:justify-center justify-between tablet:items-center items-start">
                    <h5 className="w-full mobile:pb-[0.8rem] mobile:px-0 tablet:px-2 tablet:text-center text-left mobile:text-base tablet:text-xl text-base font-poppins font-normal text-green-500">Por que confiar en nosotros</h5>
                    <h3 className="w-full tablet:pt-2 tablet:text-center text-left mobile:text-[34px] tablet:text-[40px] text-[33px] mobile:leading-[45px] mobile:tracking-[2px] tracking-[0.125rem] font-poppins font-bold">Expertos en Áreas Verdes</h3>
                    <div className="h-[2.3px] w-[31%] bg-green-500 tablet:hidden"></div>
                </div>
                <div className="tablet:h-1/2 h-3/5 w-full mobile:pt-4 mobile:pb-0 tablet:py-8 mobile:px-0 p-4 flex flex-col justify-center items-center">
                    <p className="w-full tablet:text-center tablet:py-6 mobile:px-0 tablet:px-8 text-left leading-7 tablet:text-lg tablet:leading-[27px] mobile:text-[14px] text-[16px] tracking-[0.3px] text-gray-500 font-poppins">
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
                <div className="mobile:h-40 h-[20%] w-full tablet:px-0 px-4 tablet:py-4 flex mobile:flex-col tablet:flex-none flex-row mobile:justify-around tablet:justify-center justify-start items-center">
                    <a className="mobile:h-16 h-auto mobile:w-full tablet:w-[14.3rem] w-[13.8rem] tablet:aspect-[8/1.79] aspect-[8/1.8] mobile:my-2 mobile:mx-auto tablet:mx-4 mr-6 justify-center items-center flex">
                        <button className="w-full h-full rounded-[3px] uppercase mobile:text-sm tablet:text-lg text-base tracking-[1px] border-solid border-orange-400 border-[3px] text-gray-500">mirar obras</button>
                    </a>
                    <a className="mobile:h-16 h-auto mobile:w-full tablet:w-[14.3rem] w-[13.8rem] tablet:aspect-[8/1.79] aspect-[8/1.8] mobile:my-2 mobile:mx-auto tablet:mx-4 mr-6 justify-center items-center flex">
                        <button className="w-full h-full rounded-[3px] uppercase mobile:text-sm tablet:text-lg text-base tracking-[1px] border-solid border-green-500 bg-green-500 border-[3px] text-white">pedir presupuesto</button>
                    </a>
                </div>
            </div>
            <div className="tablet:w-full w-[45%] tablet:h-[28rem] h-[33rem] mobile:p-0 tablet:px-4 mobile:mt-14 tablet:mt-6 flex flex-col tablet:items-center items-end tablet:justify-center justify-start">
                <div className="mobile:aspect-[2/3] tablet:aspect-[3.2/2] aspect-square relative tablet:h-auto h-[83%] tablet:w-full">
                    <Image src={About1} alt="" className="object-cover mobile:w-auto tablet:w-[90%] mobile:h-[93%] size-[85%] tablet:h-auto mobile:aspect-[2/3] tablet:aspect-[3.2/2] z-[12] tablet:top-0 right-0 tablet:left-auto left-0 tablet:bottom-auto bottom-0 absolute bg-center rounded-[5px]"/>
                    <div className="border-solid border-[3px] border-[rgb(63,93,125,0.75)] rounded-[5px] mobile:w-auto tablet:w-[90%] mobile:h-[93%] size-[85%] tablet:h-auto mobile:aspect-[2/3] aspect-[3.2/2] tablet:bottom-0 tablet:left-0 tablet:right-auto right-0 tablet:top-auto top-0 z-[11] absolute"></div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Aboutus