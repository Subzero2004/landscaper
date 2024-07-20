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
        <section className="mobileS:m-0 laptop:my-0 m-auto tablet:mx-auto tablet:my-0 laptop:pb-0 laptop:pt-8 py-8 h-auto laptop:max-w-none max-w-[1200px]">
            <div className="w-full mobileS:py-16 pt-16 pb-12 mobileS:px-4 px-16 flex flex-col justify-center items-center tracking-[0.12rem]">
                <p className="font-poppins mobileS:text-[19px] text-[18px] mobileS:leading-7 mobileS:tracking-[0.3px] font-normal text-center w-full mobileS:py-4 text-[rgb(248,187,42)]">Experto en Jardines</p>
                <h2 className="font-poppins h-[70%] w-full mobileS:p-0 p-[0.8rem] mobileS:text-[2.4rem] mobileS:leading-[3rem] font-bold text-center justify-center items-center flex text-5xl text-[rgb(53,53,53)]">Algunos Trabajos</h2>
            </div>
            <div className="laptop:h-auto h-4/5 w-full mobileS:mb-4 tabletXS:px-0 laptop:mx-auto laptop:my-8 tablet:m-0 mx-auto tablet:px-12 laptopL:px-[3.5rem] laptop:px-[5.5rem] tablet:py-0 py-4 tabletXS:flex tabletXS:flex-col tabletXS:flex-wrap tabletXS:justify-start tabletXS:content-center tabletXS:items-center grid tablet:gap-[1.2rem] laptop:gap-x-4 gap-y-6 grid-cols-3 grid-rows-2">
                <div className="row-start-1 columns-1 laptop:w-full tabletXS:w-[90%] w-[23rem] mobileS:h-80 tablet:h-[19rem] h-[22rem] mx-auto self-stretch justify-self-stretch relative">
                    <Image src={Proyect1} alt="" objectFit="cover" fill className="z-10 rounded-[5px]"/>
                </div>
                <div className="row-start-1 columns-2 laptop:w-full tabletXS:w-[90%] w-[23rem] mobileS:h-80 tablet:h-[19rem] h-[22rem] mx-auto self-stretch justify-self-stretch relative">
                    <Image src={Proyect2} alt="" objectFit="cover" fill className="z-10 rounded-[5px]"/>
                </div>
                <div className="row-start-1 row-end-3 columns-2 tabletXS:w-[90%] laptopL:w-full w-[23rem] mobileS:h-[38rem] tablet:h-[39rem] h-[45.5rem] mx-auto self-stretch justify-self-stretch relative">
                    <Image src={Proyect5} alt="" objectFit="cover" fill className="z- rounded-[5px]"/>
                </div>
                <div className="row-start-2 columns-1 laptop laptop:w-full tabletXS:w-[90%] w-[23rem] mobileS:h-80 tablet:h-[19rem] h-[22rem] mx-auto self-stretch justify-self-stretch relative">
                    <Image src={Proyect3} alt="" objectFit="cover" fill className="z-10 rounded-[5px]"/>
                </div>
                <div className="row-start-2 columns-2 laptop:w-full tabletXS:w-[90%] w-[23rem] mobileS:h-80 tablet:h-[19rem] h-[22rem] mx-auto self-stretch justify-self-stretch relative">
                    <Image src={Proyect4} alt="" objectFit="cover" fill className="z-10 rounded-[5px]"/>
                </div>
            </div>
            <div className="mobileS:h-24 tablet:h-32 h-40 flex w-full flex-col justify-center items-center">
                <button className="tablet:size-10 w-[2.8rem] h-[2.8rem]">
                    <Image src={Plus} alt="" className="tablet:size-8" />
                </button>
            </div>
        </section>
    )
}

export default Proyects