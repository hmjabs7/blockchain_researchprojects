import { useState } from "react"
import { ConnectWallet } from "@thirdweb-dev/react"
import Link from "next/link"

export default function NavBar(props) {
    const [switcherClicked, setSwitcherClicked] = useState(false)

    return (
        <section>
            <nav className="relative container mx-auto py-6">
                <div className="flex items-center justify-between mx-auto pt-5">
                    <div></div>
                    <div className="hidden lg:flex lg:scale-100 space-x-4 mx-auto text-base bg-gray-100 py-1 px-1 rounded-xl border-gray-800 drop-shadow-xl">
                        {props.items.map((item, index) => (
                            <Link
                                className={`${
                                    index == props.activeItem && "bg-gray-200"
                                } menuButton`}
                                key={index}
                                href={item.link}
                            >
                                {item.text}
                            </Link>
                        ))}
                    </div>

                    <div className="block">
                        <ConnectWallet className="shadow-xl border rounded-xl" />
                    </div>

                    <button
                        className={`${
                            switcherClicked && "open"
                        } hamburger px-5 mt-2 lg:hidden focus:outline-none`}
                        onClick={() => {
                            setSwitcherClicked(!switcherClicked)
                        }}
                    >
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>

                <div className="lg:hidden">
                    <div className={`${switcherClicked && "active"} dropdown`}>
                        {props.items.map((item, index) => (
                            <Link
                                className={`${
                                    index == props.activeItem && "bg-gray-200"
                                } menuButton`}
                                key={index}
                                href={item.link}
                            >
                                {item.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </section>
    )
}
