import React from "react"
import Image from "next/image"
import Whatsapp from '@/asset/BasicLogo/whatsapp.png'
import Facebook from '@/asset/BasicLogo/Facebook.png'
import Instagram from '@/asset/BasicLogo/Instagram.png'
import Email from '@/asset/BasicLogo/Email.png'

type Props = {}

const Contact = (props: Props) => {
    return (
    <section className="tablet:w-full max-w-[1200px] tablet:h-auto mobileS:mt-8 tabletS:mt-12 tablet:mt-24 mt-8 mx-auto text-center">
        <div className="w-full h-28 mobileS:mt-0 mt-4 mobileS:mb-[2.8rem] mb-12 flex flex-col justify-center">
            <a className="mobileS:h-[3.6rem] tablet:h-[3.8rem] h-16 mobileS:w-[97%] w-[99%] mobileS:px-2 mx-auto flex flex-row justify-center items-center rounded-[7px] bg-green-600 uppercase mobileS:text-[17px] text-lg font-poppins mobileS:font-light font-bold tracking-[0.118rem] text-white">
                <Image src={Whatsapp} alt="" quality={100} className="w-[1.6rem] h-[1.6rem] mx-[0.6rem]" />
                Consultanos por Whatsapp
            </a>
        </div>
        <div className="w-full tablet:h-auto h-full mx-auto flex tabletS:flex-col-reverse flex-row-reverse mobileS:justify-start justify-between bg-[rgb(53,53,53)] border-t-white border-b-gray-700">
            <footer className="h-[90%] tabletS:w-full w-2/5 pt-8 items-center flex tabletS:flex-row flex-col mobileL:flex-wrap justify-evenly bg-white">
                <div className="min-w-32 tabletS:min-h-24 min-h-32 mx-auto mb-2 flex flex-col tabletS:justify-center justify-start items-center">
                    <Image src={Whatsapp} alt="" quality={100} className="mobileS:size-8 tablet:size-[2.2rem] size-10 mb-4" />
                    <p className="mobileS:tracking-[0.5px] tracking-[0.8px] font-poppins font-bold tabletS:text-xs text-base text-gray-500">XX-XXXX-XXXX</p>
                </div>
                <div className="min-w-32 tabletS:min-h-24 min-h-32 mx-auto mb-2 flex flex-col tabletS:justify-center justify-start items-center">
                    <Image src={Email} alt="" quality={100} className="mobileS:size-8 tablet:size-[2.2rem] size-10 mb-4 " />
                    <p className="mobileS:tracking-[0.5px] tracking-[0.8px] font-poppins font-bold tabletS:text-xs text-base text-gray-500">contacto@botanico.com.ar</p>
                </div>
                <div className="min-w-32 tabletS:min-h-24 min-h-32 mx-auto mb-2 flex flex-col tabletS:justify-center justify-start items-center">
                    <div className="w-full flex flex-row flex-nowrap -mt-[10%] mb-4 items-center tabletS:justify-center tablet:justify-evenly justify-between">
                        <a className="h-auto tabletS:w-2/5 w-1/2 pt-[10%] flex flex-col items-center justify-center">
                            <Image src={Facebook} alt="" quality={100} className="mobileS:size-8 tablet:size-[2.2rem] size-10 mobileS:mb-4 mb-4 tablet:mb-6 mobileS:mx-[0.2rem]" />
                        </a>
                        <a className="h-auto tabletS:w-2/5 w-1/2 pt-[10%] flex flex-col items-center justify-center">
                            <Image src={Instagram} alt="" className="mobileS:size-8 tablet:size-[2.2rem] size-10 mobileS:mb-4 mb-4 tablet:mb-6 mobileS:mx-[0.2rem]" />
                        </a>
                    </div>
                    <p className="mobileS:tracking-[0.5px] tracking-[0.8px] font-poppins font-bold tabletS:text-xs text-base text-gray-500 tabletS:-mt-[1.6rem] -mt-4">Seguinos</p>
                </div>
            </footer>
            <form className="h-full tabletS:w-full w-3/5 mobileS:pt-[1.8rem] tablet:pt-8 py-8 mobileS:pb-14 tablet:pb-16 mobileS:px-4 px-12 flex flex-col tabletS:items-center mobileS:justify-center justify-start bg-green-600">
                <h3 className="flex flex-col justify-center items-center mobileS:min-h-20 h-20 mobileS:w-full mobileS:m-0 mb-2 mobileS:px-4 mobileS:text-center tablet:text-start text-start mobileS:text-[30px] tablet:text-[32px] text-[33px] tablet:leading-[39px] mobileS:tracking-[1.8px] tracking-[2px] font-normal font-poppins text-white">Envianos tu consulta</h3>
                <input id="name" type="name" name="name" autoComplete="off" required placeholder="Nombre" 
                className="h-20 mobileS:w-[95%] tablet:w-[85%] w-4/5 text-base mb-2 pl-4 border-solid border-white border-b-[1px] bg-transparent text-white"></input>
                <input id="email" type="email" name="email" autoComplete="off" required placeholder="Email" 
                className="h-20 mobileS:w-[95%] tablet:w-[85%] w-4/5 text-base mb-2 pl-4 border-solid border-white border-b-[1px] bg-transparent text-white"></input>
                <textarea id="message" name="message" autoComplete="off" required maxLength={450} placeholder="Consulta" 
                className="min-h-24 mobileS:w-[95%] tablet:w-[85%] w-4/5 text-base mb-2 pt-3 pl-4 border-solid border-white border-b-[1px] bg-transparent text-white"></textarea>
                <input id="btn-submit" name="submit" type="submit" 
                className="aspect-[8/1.7] h-auto tablet:w-48 w-52 tracking-[0.18rem] border-solid border-2 border-white tablet:mt-10 mt-[1.8rem] rounded-[5px] text-white"></input>
            </form>
        </div>
    </section>
    )
}

export default Contact