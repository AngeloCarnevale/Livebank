import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Login'
}

export default function LoginLayout({ children }) {

    return (
        <main>{children}</main>
    )
}
