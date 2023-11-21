import NextAuth from "next-auth/next";

declare module 'next-auth' {
    interface Session {
        refresh: string
        access: string
    }
}