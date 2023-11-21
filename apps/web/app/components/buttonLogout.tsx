'use client'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function ButtonLogout() {
    const router = useRouter()
    async function logout() {
        await signOut({
            redirect: false
        })

        router.replace('/')

    }
    return (
        <button onClick={logout} className='bg-red-600 rounded-md p-2 text-white hover:bg-red-700'>Logout</button>
    )
}