import NextAuth from "next-auth/next";

declare module 'next-auth' {
    interface Session {
        refresh: string
        access: string
    }
    interface IAccount {
        account_number: number
        balance: string
        number: string
        agency: string
    }
    interface IUser {
        id: number
        name: string
        email: string
        image: string
    }
}