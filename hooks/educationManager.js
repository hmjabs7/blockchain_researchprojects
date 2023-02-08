import { useContract, useContractRead, useContractWrite, useSDKChainId } from "@thirdweb-dev/react"
import { abi, addresses } from "../constants"

export function useRemoveStudent() {
    const chainId = useSDKChainId()
    const { contract } = useContract(addresses[chainId], abi)
    const { mutate: remove } = useContractWrite(contract, "removeStudent")

    return remove
}

export function useRemoveTeacher() {
    const chainId = useSDKChainId()
    const { contract } = useContract(addresses[chainId], abi)
    const { mutate: remove } = useContractWrite(contract, "removeTeacher")

    return remove
}

export function useGetAdmin() {
    const chainId = useSDKChainId()
    const { contract } = useContract(addresses[chainId], abi)
    const { data } = useContractRead(contract, "owner")

    return data
}

export function useIsTeacher(addr) {
    const chainId = useSDKChainId()
    const { contract } = useContract(addresses[chainId], abi)
    const { data } = useContractRead(contract, "isAddressTeacher", addr)

    return data
}

export function useGetStudent(index) {
    const chainId = useSDKChainId()
    const { contract } = useContract(addresses[chainId], abi)
    const { data } = useContractRead(contract, "students", index)

    return data
}

export function useGetTeacher(index) {
    const chainId = useSDKChainId()
    const { contract } = useContract(addresses[chainId], abi)
    const { data } = useContractRead(contract, "teachers", index)

    return data
}

export function useGetTeachersCount() {
    const chainId = useSDKChainId()
    const { contract } = useContract(addresses[chainId], abi)
    const { data } = useContractRead(contract, "getTeachersCount")

    return data
}

export function useGetStudentsCount() {
    const chainId = useSDKChainId()
    const { contract } = useContract(addresses[chainId], abi)
    const { data } = useContractRead(contract, "getStudentsCount")

    return data
}
