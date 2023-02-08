import { useState } from "react"
import { useChainId } from "@thirdweb-dev/react"
import { useNotification } from "@web3uikit/core"

import { abi, addresses } from "../constants"
import InputForm from "./InputForm"
import { timeout } from "../helpers/helpers"

export default function AdminPanel() {
    const currentChainId = useChainId()
    const dispatch = useNotification()

    const [newTeacher, setNewTeacher] = useState({
        id: 0,
        addr: "",
        name: "",
        department: "",
        customAddress: "",
        contact: "",
    })

    const inputObj = [
        {
            placeHolder: "On-chain address",
            onChange: (props) => {
                let newTeacherObj = newTeacher
                newTeacherObj.addr = props.target.value
                setNewTeacher(newTeacherObj)
            },
        },
        {
            placeHolder: "ID",
            onChange: (props) => {
                let newTeacherObj = newTeacher
                newTeacherObj.id = props.target.value
                setNewTeacher(newTeacherObj)
            },
        },
        {
            placeHolder: "Name",
            onChange: (props) => {
                let newTeacherObj = newTeacher
                newTeacherObj.name = props.target.value
                setNewTeacher(newTeacherObj)
            },
        },
        {
            placeHolder: "Department",
            onChange: (props) => {
                let newTeacherObj = newTeacher
                newTeacherObj.department = props.target.value
                setNewTeacher(newTeacherObj)
            },
        },
        {
            placeHolder: "Address",
            onChange: (props) => {
                let newTeacherObj = newTeacher
                newTeacherObj.customAddress = props.target.value
                setNewTeacher(newTeacherObj)
            },
        },
        {
            placeHolder: "Contact",
            onChange: (props) => {
                let newTeacherObj = newTeacher
                newTeacherObj.contact = props.target.value
                setNewTeacher(newTeacherObj)
            },
        },
    ]

    const handleTxError = () => {
        dispatch({
            type: "error", // error, info, success, warning (orange)
            message: "Tx failed",
            title: "EducationManager",
            icon: undefined,
            position: "topR",
        })
    }

    const handleTxSuccess = (msg) => {
        dispatch({
            type: "success", // error, info, success, warning (orange)
            message: msg,
            title: "EducationManager",
            icon: undefined,
            position: "topR",
        })
    }

    return (
        <section name="adminPanel">
            <div className="w-full h-full">
                <div className="flex mt-32">
                    <div
                        className={`mx-auto w-[300px] sm:w-[450px] md:w-[550px]
                        lg:w-[750px] rounded-2xl drop-shadow-xl bg-white px-10 mb-10 pb-10`}
                    >
                        <div className="py-7 flex">
                            <div>
                                <h1 className="text-slate-800 text-xl sm:text-2xl md:text-3xl font-bold">
                                    Education Manager
                                </h1>
                            </div>
                        </div>
                        <InputForm
                            header={"Add new teacher"}
                            inputObjects={inputObj}
                            buttonConfig={{
                                contractAddress: addresses[currentChainId],
                                abi: abi,
                                onSubmit: () => {},
                                onError: handleTxError,
                                onSuccess: () => {
                                    handleTxSuccess("Teacher added succesfully")
                                },
                                action: async (contract) => {
                                    await contract.call("addTeacher", newTeacher)
                                    await timeout(6000)
                                },
                                text: "Add Teacher",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
