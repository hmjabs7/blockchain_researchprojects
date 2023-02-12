export default function WelcomeHero() {
    return (
        <section name="welcomeHero">
            <div className="w-full h-full">
                <div className="flex mt-32">
                    <div
                        className={`mx-auto w-[300px] sm:w-[450px] md:w-[550px]
                        lg:w-[750px] rounded-2xl drop-shadow-xl bg-white px-10 mb-10 pb-10`}
                    >
                        <div className="py-7 flex">
                            <div>
                                <h1 className="text-slate-800 text-xl sm:text-2xl md:text-3xl font-bold">
                                    Welcome to the Education Manager <br> LOGIN TO YOUR ACCOUNT
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
