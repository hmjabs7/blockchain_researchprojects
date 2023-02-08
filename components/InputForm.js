import { Web3Button } from "@thirdweb-dev/react"

export default function InputForm({ header, inputObjects, buttonConfig }) {
    return (
        <div className="flex mt-5 space-y-5 flex-col bg-slate-100 px-5 py-5 rounded-xl shadow-lg">
            <div>
                <h1 className="text-slate-800 text-base sm:text-lg md:text-2xl font-bold drop-shadow-sm">
                    {header}
                </h1>
            </div>
            <div className="w-full pb-5">
                <div className="px-10">
                    {inputObjects.map((obj, index) => (
                        <div className="py-2" key={index}>
                            <input
                                className={`w-full bg-slate-100 border border-slate-200 rounded-xl
                                font-mono text-xs sm:text-sm md:text-lg px-1 sm:px-2 md:px-5 py-1 sm:py-2 focus:outline-none
                                focus:border-slate-300 focus:border drop-shadow-lg`}
                                placeholder={obj.placeHolder}
                                onChange={obj.onChange}
                                index={index}
                            ></input>
                        </div>
                    ))}
                    <div className="py-5">
                        <Web3Button
                            className="drop-shadow-lg"
                            contractAddress={buttonConfig.contractAddress}
                            contractAbi={buttonConfig.abi}
                            onSubmit={buttonConfig.onSubmit}
                            onError={buttonConfig.onError}
                            onSuccess={buttonConfig.onSuccess}
                            action={buttonConfig.action}
                        >
                            {buttonConfig.text}
                        </Web3Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
