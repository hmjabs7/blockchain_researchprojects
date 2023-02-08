import { useAddress, useChainId } from "@thirdweb-dev/react"
import Head from "next/head"
import NavBar from "../components/NavBar"
import Admin from "../components/Admin"
import StudentManager from "../components/StudentManager"
import WelcomeHero from "../components/WelcomeHero"
import { useGetAdmin, useIsTeacher } from "../hooks/educationManager"
import { linkItems } from "../constants"

export default function Home() {
    const address = useAddress()
    const admin = useGetAdmin()
    const isTeacher = useIsTeacher(address)

    return (
        <div>
            <Head>
                <title>Student/Teacher manager</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar items={linkItems} activeItem={0} />
            {address == admin && admin !== undefined ? (
                <Admin />
            ) : isTeacher ? (
                <StudentManager />
            ) : (
                <WelcomeHero />
            )}
        </div>
    )
}
