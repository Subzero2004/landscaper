import React from "react"
import Image from "next/image"
import Proyect1 from '@/asset/Proyects/Proyect1.jpg'
import Proyect2 from '@/asset/Proyects/Proyect2.jpg'
import Proyect3 from '@/asset/Proyects/Proyect3.jpg'
import Proyect4 from '@/asset/Proyects/Proyect4.jpg'
import Proyect5 from '@/asset/Proyects/Proyect5.jpg'
import Plus from '@/asset/Proyects/plus.png'
type Props = {}

const Proyects = (props: Props) => {
    return (
        <section className="mobile:m-0 m-auto tablet:mx-auto tablet:my-0 tablet:pt-8 py-8 h-auto max-w-[1200px] tablet:w-full">
            <div className="w-full mobile:py-16 pt-16 pb-12 mobile:px-4 px-16 flex flex-col justify-center items-center tracking-[0.12rem]">
                <p className="font-poppins mobile:text-[19px] text-[18px] mobile:leading-7 mobile:tracking-[0.3px] font-normal text-center w-full mobile:py-4 text-[rgb(248,187,42)]">Experto en Jardines</p>
                <h2 className="font-poppins h-[70%] w-full mobile:p-0 p-[0.8rem] mobile:text-[2.4rem] mobile:leading-[3rem] font-bold text-center justify-center items-center flex text-5xl text-[rgb(53,53,53)]">Algunos Trabajos</h2>
            </div>
            <div className="tablet:h-auto h-4/5 w-full mobile:mb-4 mobile:px-0 tablet:px-12 tablet:m-0 mx-auto tablet:py-0 py-4 mobile:flex mobile:flex-col mobile:flex-wrap mobile:justify-start mobile:content-center mobile:items-center grid tablet:gap-[1.2rem] gap-y-6 grid-cols-3 grid-rows-2">
                <div className="row-start-1 columns-1 tablet:w-full mobile:w-[90%] w-[23rem] mobile:h-80 tablet:h-[19rem] h-[22rem] mx-auto self-stretch justify-self-stretch relative">
                    <Image src={Proyect1} alt="" objectFit="cover" fill className="z-10 rounded-[5px]"/>
                </div>
                <div className="row-start-1 columns-2 tablet:w-full mobile:w-[90%] w-[23rem] mobile:h-80 tablet:h-[19rem] h-[22rem] mx-auto self-stretch justify-self-stretch relative">
                    <Image src={Proyect2} alt="" objectFit="cover" fill className="z-10 rounded-[5px]"/>
                </div>
                <div className="row-start-1 row-end-3 columns-2 mobile:w-[90%] tablet:w-full w-[23rem] mobile:h-[38rem] tablet:h-[39rem] h-[45.5rem] mx-auto self-stretch justify-self-stretch relative">
                    <Image src={Proyect5} alt="" objectFit="cover" fill className="z- rounded-[5px]"/>
                </div>
                <div className="row-start-2 columns-1 tablet:w-full mobile:w-[90%] w-[23rem] mobile:h-80 tablet:h-[19rem] h-[22rem] mx-auto self-stretch justify-self-stretch relative">
                    <Image src={Proyect3} alt="" objectFit="cover" fill className="z-10 rounded-[5px]"/>
                </div>
                <div className="row-start-2 columns-2 tablet:w-full mobile:w-[90%] w-[23rem] mobile:h-80 tablet:h-[19rem] h-[22rem] mx-auto self-stretch justify-self-stretch relative">
                    <Image src={Proyect4} alt="" objectFit="cover" fill className="z-10 rounded-[5px]"/>
                </div>
            </div>
            <div className="mobile:h-24 tablet:h-32 h-40 flex w-full flex-col justify-center items-center">
                <button className="tablet:size-10 w-[2.8rem] h-[2.8rem]">
                    <Image src={Plus} alt="" className="tablet:size-8" />
                </button>
            </div>
        </section>
    )
}

export default Proyects