import { useGetTeachersCount } from "../hooks/educationManager"
import Head from "next/head"
import NavBar from "../components/NavBar"
import { linkItems } from "../constants"
import TeachersList from "../components/TeachersList"
import { useState } from "react"

export default function Teachers() {
    const [searchAddress, setSearchAddress] = useState("")

    const teachersCount = useGetTeachersCount()
    const lastIndex = teachersCount ? teachersCount.toNumber() - 1 : -1

    return (
        <section name="teachers">
            <Head>
                <title>Teachers</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar items={linkItems} activeItem={1} />

            <div className="w-full h-full">
                <div className="flex mt-32">
                    <div
                        className="mx-auto w-[300px] sm:w-[450px] md:w-[550px]
                        lg:w-[750px] rounded-2xl drop-shadow-xl bg-white px-10 mb-10 pb-10"
                    >
                        <div className="py-7 flex">
                            <div>
                                <h1 className="text-slate-800 text-xl sm:text-2xl md:text-3xl font-bold">
                                    Teachers
                                </h1>
                            </div>
                        </div>
                        <div className="flex my-10 space-y-5 flex-col bg-slate-100 px-5 py-5 rounded-xl shadow-lg">
                            <div className="flex justify-between mb-5">
                                <div>
                                    <h1 className="text-slate-800 text-base sm:text-lg md:text-2xl font-bold drop-shadow-sm">
                                        All teachers{" "}
                                        <span className="text-slate-400">({lastIndex + 1})</span>
                                    </h1>
                                </div>
                                <div>
                                    <input
                                        className={`w-full bg-slate-100 border border-slate-200 rounded-xl
                                        font-mono text-xs sm:text-sm md:text-base px-1 sm:px-2 md:px-5 py-1 sm:py-2 
                                        focus:outline-none focus:border-slate-300 focus:border drop-shadow-lg`}
                                        placeholder={"Search address..."}
                                        onChange={(props) => {
                                            setSearchAddress(props.target.value)
                                        }}
                                    ></input>
                                </div>
                            </div>
                            {lastIndex !== -1 && (
                                <TeachersList lastIndex={lastIndex} searchingFor={searchAddress} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
