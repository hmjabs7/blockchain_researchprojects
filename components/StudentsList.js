import { useAddress } from "@thirdweb-dev/react"
import { useNotification } from "@web3uikit/core"
import { useGetStudent, useRemoveStudent, useIsTeacher } from "../hooks/educationManager"
import Listing from "./Listing"

import { timeout } from "../helpers/helpers"

export default function StudentsList({ lastIndex, searchingFor }) {
    const dispatch = useNotification()
    const address = useAddress()
    const isTeacher = useIsTeacher(address)

    let students = []
    if (lastIndex !== -1) {
        for (let i = 0; i <= lastIndex; i++) {
            const thisStudent = useGetStudent(i)
            students.push(thisStudent)
        }
    }

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

    const sendRemoveStudent = useRemoveStudent()

    return (
        <section name="studentsList">
            <div>
                {students.map((student, index) => {
                    if (student == undefined) return

                    const items = [
                        {
                            title: "ID",
                            content: student.id.toString(),
                        },
                        {
                            title: "Name",
                            content: student.name,
                        },
                        {
                            title: "Department",
                            content: student.department,
                        },
                        {
                            title: "Batch",
                            content: student.batch,
                        },
                        {
                            title: "Contact",
                            content: student.contact,
                        },
                    ]

                    if (searchingFor != "" && !student.name.includes(searchingFor)) return

                    return (
                        <Listing
                            items={items}
                            title={student.name}
                            deleteAllowed={isTeacher}
                            buttonClick={() => {
                                sendRemoveStudent([index], {
                                    onError: handleTxError,
                                    onSuccess: async () => {
                                        await timeout(6000)
                                        handleTxSuccess(
                                            "Student removed successfully, reload the page"
                                        )
                                    },
                                })
                            }}
                            key={index}
                        />
                    )
                })}
            </div>
        </section>
    )
}
