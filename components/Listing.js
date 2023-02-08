import { TrashIcon } from "@heroicons/react/24/outline"

export default function Listing({ items, title, buttonClick, deleteAllowed }) {
    return (
        <div className="w-full pb-5">
            <div
                className="bg-slate-200 border rounded-xl px-1
                sm:px-2 md:px-5 py-1 sm:py-2 focus:outline-none focus:border-slate-400
                focus:border drop-shadow-lg space-y-5"
            >
                <div className="flex justify-between">
                    <div className="text-slate-600 font-mono text-xs sm:text-sm md:text-lg">
                        {title}
                    </div>
                    {deleteAllowed && (
                        <div className="flex items-center">
                            <button onClick={buttonClick}>
                                <TrashIcon className="w-6 text-slate-600 hover:cursor-pointer hover:text-black" />
                            </button>
                        </div>
                    )}
                </div>
                <div className="flex flex-col space-y-2">
                    {items.map((item, index) => (
                        <div key={index}>
                            <p className="text-slate-500 font-mono">{item.title}</p>
                            <p className="text-lg font-bold">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
