import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";


const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                const user = await axios.post('http://127.0.0.1:8000/auth/login', {
                    email: credentials?.email,
                    password: credentials?.password
                }).then(data => { return data.data }).catch((e) => console.log(e))

                if (user == null) {
                    return null
                }
                return user
            }
        })
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async jwt({ token, user }) {
            user && (token.user = user)
            return token
        },
        async session({ session, token }) {
            session = token.user as any
            return session
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, authOptions }