import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import axios from "axios";

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {label: 'Email', type: 'email'},
                password: {label: 'Password', type: 'password'}
            },
            async authorize(credentials){
                const user = await axios.post('http://localhost:8000/auth/login', {
                    email: credentials?.email,
                    password: credentials?.password
                }).then(data => {return data.data})
                
                if(user == null) {
                    return null
                }
                return user
            }
        })
    ],
    pages: {
        signIn: '/login'
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}