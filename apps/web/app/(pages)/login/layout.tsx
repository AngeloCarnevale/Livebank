import { getServerSession } from "next-auth"
import { authOptions } from "../../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { Metadata } from "next/types"

export const metadata: Metadata = {
    title: 'Login'
}
interface ProfileLayoutProps {
    children: React.ReactNode
}
export default async function ProfileLayout({ children }: ProfileLayoutProps) {
    const session = await getServerSession(authOptions)

    if (session) {
        redirect('/profile')
    }
    return <>{children}</>
}