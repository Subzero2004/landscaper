import React from "react"

type Props = {}

const Contact = (props: Props) => {
    return (
    <section className="max-w-[1200px] mt-8 mx-auto text-center">
        <div className="w-full h-28 mt-4 mb-12 flex flex-col justify-center">
            <a className="h-16 w-[99%] mx-auto flex flex-row justify-center items-center rounded-[7px] bg-green-600 uppercase text-lg font-poppins font-bold tracking-[0.118rem] text-white">
                <div className="w-[1.6rem] h-[1.6rem] mx-[0.6rem] bg-gray-500" />
                Consultanos por Whatsapp
            </a>
        </div>
        <div className="w-full mx-auto flex flex-row-reverse justify-between bg-gray-700 border-t-white border-b-gray-700">
            <footer className="h-[90%] w-2/5 pt-8 items-center flex flex-col justify-evenly bg-white">
                <div className="min-w-32 min-h-32 mx-auto mb-2 flex flex-col justify-start items-center">
                    <div className="w-10 h-10 mb-4 bg-slate-400" />
                    <p className="tracking-[0.8px] font-poppins font-bold text-base text-gray-500">XX-XXXX-XXXX</p>
                </div>
                <div className="min-w-32 min-h-32 mx-auto mb-2 flex flex-col justify-start items-center">
                    <div className="w-10 h-10 mb-4 bg-slate-400" />
                    <p className="tracking-[0.8px] font-poppins font-bold text-base text-gray-500">contacto@botanico.com.ar</p>
                </div>
                <div className="min-w-32 min-h-32 mx-auto mb-2 flex flex-col justify-start items-center">
                    <div className="flex flex-nowrap">
                        <div className="w-16 h-16 mb-4 bg-slate-400" />
                        <div className="w-16 h-16 mb-4 bg-slate-400" />
                    </div>
                    <p className="tracking-[0.8px] font-poppins font-bold text-base text-gray-500">Seguinos</p>
                </div>
            </footer>
            <form className="h-full w-3/5 py-8 px-12 flex flex-col justify-start bg-green-600">
                <h3 className="h-20 mb-2 text-start text-[33px] tracking-[2px] font-poppins text-white">Envianos tu consulta</h3>
                <input id="name" type="name" name="name" autoComplete="off" required placeholder="Nombre" 
                className="h-20 text-base mb-2 pl-4 w-4/5 border-solid border-white border-b-[1px] bg-transparent text-white"></input>
                <input id="email" type="email" name="email" autoComplete="off" required placeholder="Email" 
                className="h-20 text-base mb-2 pl-4 w-4/5 border-solid border-white border-b-[1px] bg-transparent text-white"></input>
                <textarea id="message" name="message" autoComplete="off" required maxLength={450} placeholder="Consulta" 
                className="min-h-24 text-base mb-2 pt-3 pl-4 w-4/5 border-solid border-white border-b-[1px] bg-transparent text-white"></textarea>
                <input id="btn-submit" name="submit" type="submit" 
                className="aspect-[8/1.7] h-auto w-52 tracking-[0.18rem] border-solid border-2 border-white mt-[1.8rem] rounded-[5px] text-white"></input>
            </form>
        </div>
    </section>
    )
}

export default Contact