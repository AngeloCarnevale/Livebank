import { Metadata } from "next"

export const metadata:Metadata = {
    title: 'About'
}

export default function AboutLayout({ children }) {
    return (
        <main>{children}</main>
    )
}
