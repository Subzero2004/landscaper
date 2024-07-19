import React from "react"
import Image from "next/image"
import Whatsapp from '@/asset/BasicLogo/whatsapp.png'
import Facebook from '@/asset/BasicLogo/Facebook.png'
import Instagram from '@/asset/BasicLogo/Instagram.png'
import Email from '@/asset/BasicLogo/Email.png'

type Props = {}

const Contact = (props: Props) => {
    return (
    <section className="tablet:w-full max-w-[1200px] tablet:h-auto tablet:mt-24 mt-8 mx-auto text-center">
        <div className="w-full h-28 mt-4 mb-12 flex flex-col justify-center">
            <a className="tablet:h-[3.8rem] h-16 w-[99%] mx-auto flex flex-row justify-center items-center rounded-[7px] bg-green-600 uppercase text-lg font-poppins font-bold tracking-[0.118rem] text-white">
                <Image src={Whatsapp} alt="" quality={100} className="w-[1.6rem] h-[1.6rem] mx-[0.6rem]" />
                Consultanos por Whatsapp
            </a>
        </div>
        <div className="w-full tablet:h-auto h-full mx-auto flex flex-row-reverse justify-between bg-[rgb(53,53,53)] border-t-white border-b-gray-700">
            <footer className="h-[90%] w-2/5 pt-8 items-center flex flex-col justify-evenly bg-white">
                <div className="min-w-32 min-h-32 mx-auto mb-2 flex flex-col justify-start items-center">
                    <Image src={Whatsapp} alt="" quality={100} className="tablet:size-[2.2rem] size-10 mb-4" />
                    <p className="tracking-[0.8px] font-poppins font-bold text-base text-gray-500">XX-XXXX-XXXX</p>
                </div>
                <div className="min-w-32 min-h-32 mx-auto mb-2 flex flex-col justify-start items-center">
                    <Image src={Email} alt="" quality={100} className="tablet:size-[2.2rem] size-10 mb-4 " />
                    <p className="tracking-[0.8px] font-poppins font-bold text-base text-gray-500">contacto@botanico.com.ar</p>
                </div>
                <div className="min-w-32 min-h-32 mx-auto mb-2 flex flex-col justify-start items-center">
                    <div className="w-full flex flex-row flex-nowrap -mt-[10%] mb-4 items-center tablet:justify-evenly justify-between">
                        <a className="h-auto w-1/2 pt-[10%] flex flex-col items-center justify-center">
                            <Image src={Facebook} alt="" quality={100} className="tablet:size-[2.2rem] size-10 mb-4 tablet:mb-6" />
                        </a>
                        <a className="h-auto w-1/2 pt-[10%] flex flex-col items-center justify-center">
                            <Image src={Instagram} alt="" className="tablet:size-[2.2rem] size-10 mb-4 tablet:mb-6" />
                        </a>
                    </div>
                    <p className="tracking-[0.8px] -mt-4 font-poppins font-bold text-base text-gray-500">Seguinos</p>
                </div>
            </footer>
            <form className="h-full w-3/5 tablet:pt-8 py-8 tablet:pb-16 px-12 flex flex-col justify-start bg-green-600">
                <h3 className="h-20 mb-2 text-start tablet:text-[32px] text-[33px] tablet:leading-[39px] tablet:text-start tracking-[2px] font-poppins text-white">Envianos tu consulta</h3>
                <input id="name" type="name" name="name" autoComplete="off" required placeholder="Nombre" 
                className="h-20 tablet:w-[85%] text-base mb-2 pl-4 w-4/5 border-solid border-white border-b-[1px] bg-transparent text-white"></input>
                <input id="email" type="email" name="email" autoComplete="off" required placeholder="Email" 
                className="h-20 tablet:w-[85%] text-base mb-2 pl-4 w-4/5 border-solid border-white border-b-[1px] bg-transparent text-white"></input>
                <textarea id="message" name="message" autoComplete="off" required maxLength={450} placeholder="Consulta" 
                className="min-h-24 tablet:w-[85%] text-base mb-2 pt-3 pl-4 w-4/5 border-solid border-white border-b-[1px] bg-transparent text-white"></textarea>
                <input id="btn-submit" name="submit" type="submit" 
                className="aspect-[8/1.7] h-auto tablet:w-48 w-52 tracking-[0.18rem] border-solid border-2 border-white tablet:mt-10 mt-[1.8rem] rounded-[5px] text-white"></input>
            </form>
        </div>
    </section>
    )
}

export default Contact