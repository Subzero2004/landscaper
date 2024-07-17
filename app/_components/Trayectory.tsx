import React from "react"

type Props = {}

const Trayectory = (props: Props) => {
    return (
        <section className="max-w-full h-[480px] bg-gray-300">
            <div className="w-full h-full m-auto">
                <div className="max-w-[1200px] h-full m-auto flex flex-row justify-around items-center">
                    <div className="w-48 flex flex-col items-center justify-evenly">
                        <div className="font-poppins font-semibold text-5xl tracking-[6px] text-orange-400">800</div>
                        <div className="pt-4 border-t-[1px] border-solid border-orange-400 text-xl tracking-[0.8px] font-poppins text-center">Obras de Parquización</div>
                    </div>
                    <div className="w-48 flex flex-col items-center justify-evenly">
                        <div className="font-poppins font-semibold text-5xl tracking-[6px] text-orange-400">23</div>
                        <div className="pt-4 border-t-[1px] border-solid border-orange-400 text-xl tracking-[0.8px] font-poppins text-center">Años de Experiencia</div>
                    </div>
                    <div className="w-48 flex flex-col items-center justify-evenly">
                        <div className="font-poppins font-semibold text-5xl tracking-[6px] text-orange-400">672</div>
                        <div className="pt-4 border-t-[1px] border-solid border-orange-400 text-xl tracking-[0.8px] font-poppins text-center">Sistemas de Riego</div>
                    </div>
                    <div className="w-48 flex flex-col items-center justify-evenly">
                        <div className="font-poppins font-semibold text-5xl tracking-[6px] text-orange-400">960</div>
                        <div className="pt-4 border-t-[1px] border-solid border-orange-400 text-xl tracking-[0.8px] font-poppins text-center">Obras de Paisajismo</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trayectory