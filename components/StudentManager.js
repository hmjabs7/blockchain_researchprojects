import { useState } from "react"
import { useChainId } from "@thirdweb-dev/react"
import { useNotification } from "@web3uikit/core"

import { abi, addresses } from "../constants"
import InputForm from "./InputForm"

export default function StudentManager() {
    const currentChainId = useChainId()
    const dispatch = useNotification()

    const [newStudent, setNewStudent] = useState({
        id: 0,
        name: "",
        department: "",
        batch: "",
        contact: "",
    })

    const inputObj = [
        {
            placeHolder: "ID",
            onChange: (props) => {
                let newStudentObj = newStudent
                newStudentObj.id = props.target.value
                setNewStudent(newStudentObj)
            },
        },
        {
            placeHolder: "Name",
            onChange: (props) => {
                let newStudentObj = newStudent
                newStudentObj.name = props.target.value
                setNewStudent(newStudentObj)
            },
        },
        {
            placeHolder: "Department",
            onChange: (props) => {
                let newStudentObj = newStudent
                newStudentObj.department = props.target.value
                setNewStudent(newStudentObj)
            },
        },
        {
            placeHolder: "Batch",
            onChange: (props) => {
                let newStudentObj = newStudent
                newStudentObj.batch = props.target.value
                setNewStudent(newStudentObj)
            },
        },
        {
            placeHolder: "Contact",
            onChange: (props) => {
                let newStudentObj = newStudent
                newStudentObj.contact = props.target.value
                setNewStudent(newStudentObj)
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
                            header={"Add new student"}
                            inputObjects={inputObj}
                            buttonConfig={{
                                contractAddress: addresses[currentChainId],
                                abi: abi,
                                onSubmit: () => {},
                                onError: handleTxError,
                                onSuccess: () => {
                                    handleTxSuccess("Student added succesfully")
                                },
                                action: async (contract) => {
                                    await contract.call("addStudent", newStudent)
                                    await timeout(6000)
                                },
                                text: "Add Student",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
