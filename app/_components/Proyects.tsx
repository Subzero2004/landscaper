import React from "react"

type Props = {}

const Proyects = (props: Props) => {
    return (
        <section className="m-auto py-8 h-auto max-w-[1200px]">
            <div className="w-full px-16 pt-16 pb-12 flex flex-col justify-center items-center">
                <p className="font-poppins text-[18px] font-normal w-full text-center tracking-[0.12rem]">Experto en Jardines</p>
                <h2 className="font-poppins h-[70%] w-full p-[0.8rem] font-bold justify-center items-center flex text-5xl">Algunos Trabajos</h2>
            </div>
            <div className="h-4/5 w-full py-4 grid gap-y-6 grid-cols-3 grid-rows-2">
                <div className="bg-slate-400 row-start-1 columns-1 w-[23rem] h-[22rem] mx-auto rounded-[5px]"></div>
                <div className="bg-slate-400 row-start-1 columns-2 w-[23rem] h-[22rem] mx-auto rounded-[5px]"></div>
                <div className="bg-slate-400 row-start-1 row-end-3 columns-2 w-[23rem] h-[45.5rem] mx-auto rounded-[5px]"></div>
                <div className="bg-slate-400 row-start-2 columns-1 w-[23rem] h-[22rem] mx-auto rounded-[5px]"></div>
                <div className="bg-slate-400 row-start-2 columns-2 w-[23rem] h-[22rem] mx-auto rounded-[5px]"></div>
            </div>
            <div className="h-40 flex w-full flex-col justify-center items-center">
                <button className="w-[2.8rem] h-[2.8rem] bg-slate-400 rounded-sm"></button>
            </div>
        </section>
    )
}

export default Proyects