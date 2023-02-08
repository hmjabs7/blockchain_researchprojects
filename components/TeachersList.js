import { useAddress } from "@thirdweb-dev/react"
import { useNotification } from "@web3uikit/core"
import { useGetTeacher, useGetAdmin, useRemoveTeacher } from "../hooks/educationManager"
import Listing from "./Listing"

import { timeout } from "../helpers/helpers"

export default function TeachersList({ lastIndex, searchingFor }) {
    const dispatch = useNotification()
    const admin = useGetAdmin()
    const address = useAddress()

    let teachers = []
    if (lastIndex !== -1) {
        for (let i = 0; i <= lastIndex; i++) {
            const thisTeacher = useGetTeacher(i)
            teachers.push(thisTeacher)
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

    const sendRemoveTeacher = useRemoveTeacher()

    return (
        <section name="teachersList">
            <div>
                {teachers.map((teacher, index) => {
                    if (teacher == undefined) return

                    const items = [
                        {
                            title: "ID",
                            content: teacher.id.toString(),
                        },
                        {
                            title: "Name",
                            content: teacher.name,
                        },
                        {
                            title: "Department",
                            content: teacher.department,
                        },
                        {
                            title: "Address",
                            content: teacher.customAddress,
                        },
                        {
                            title: "Contact",
                            content: teacher.contact,
                        },
                    ]

                    if (searchingFor != "" && !teacher.addr.includes(searchingFor)) return

                    return (
                        <Listing
                            items={items}
                            title={teacher.addr}
                            deleteAllowed={address == admin}
                            buttonClick={() => {
                                sendRemoveTeacher([index], {
                                    onError: handleTxError,
                                    onSuccess: async () => {
                                        await timeout(6000)
                                        handleTxSuccess(
                                            "Teacher removed successfully, reload the page"
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
