import React from "react"
import Image from "next/image"
import Trayectory1 from '@/asset/Trayectory/Trayectory1.jpg'
type Props = {}

const Trayectory = (props: Props) => {
    return (
        <section className="w-full h-[480px] tablet:mt-8 relative">
            <Image src={Trayectory1} alt="" objectFit="cover" quality={100} fill className="absolute bg-center z-[-10]"/>
            <div className="w-full h-full tablet:my-0 tablet:mx-auto m-auto bg-[rgb(0,0,0,0.408)]">
                <div className="w-full h-full tablet:my-0 tablet:mx-auto m-auto flex flex-row flex-wrap justify-around content-evenly items-center">
                    <div className="tablet:w-1/2 w-48 flex flex-col items-center justify-evenly">
                        <div className="font-poppins font-semibold tablet:text-[2.8rem] text-5xl tablet:tracking-[5px] tracking-[6px] text-[rgb(248,187,42)]">800</div>
                        <div className="pt-4 border-t-[1px] border-solid border-[rgb(248,187,42)] tablet:text-lg text-xl tracking-[0.8px] text-white font-poppins text-center">Obras de Parquización</div>
                    </div>
                    <div className="tablet:w-1/2 w-48 flex flex-col items-center justify-evenly">
                        <div className="font-poppins font-semibold tablet:text-[2.8rem] text-5xl tablet:tracking-[5px] tracking-[6px] text-[rgb(248,187,42)]">23</div>
                        <div className="pt-4 border-t-[1px] border-solid border-[rgb(248,187,42)] tablet:text-lg text-xl tracking-[0.8px] text-white font-poppins text-center">Años de Experiencia</div>
                    </div>
                    <div className="tablet:w-1/2 w-48 flex flex-col items-center justify-evenly">
                        <div className="font-poppins font-semibold tablet:text-[2.8rem] text-5xl tablet:tracking-[5px] tracking-[6px] text-[rgb(248,187,42)]">672</div>
                        <div className="pt-4 border-t-[1px] border-solid border-[rgb(248,187,42)] tablet:text-lg text-xl tracking-[0.8px] text-white font-poppins text-center">Sistemas de Riego</div>
                    </div>
                    <div className="tablet:w-1/2 w-48 flex flex-col items-center justify-evenly">
                        <div className="font-poppins font-semibold tablet:text-[2.8rem] text-5xl tablet:tracking-[5px] tracking-[6px] text-[rgb(248,187,42)]">960</div>
                        <div className="pt-4 border-t-[1px] border-solid border-[rgb(248,187,42)] tablet:text-lg text-xl tracking-[0.8px] text-white font-poppins text-center">Obras de Paisajismo</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trayectory