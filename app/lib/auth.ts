import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./db";
import { compare } from "bcrypt";

export const authOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/pages/user/login'
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { type: "email" },
                password: { type: "password" }
            },
            async authorize(credentials, req) {

                if (!credentials?.email || !credentials?.password) {
                    console.log("입력 x");
                    return null;
                }

                const existingUser = await db.user.findUnique({
                    where: { email: credentials?.email }
                })
                if (!existingUser) {
                    console.log("존재하지 않는 회원");
                    return null;
                }

                const passwordMatch = await compare(credentials.password, existingUser.password);

                if (!passwordMatch) {
                    console.log("비밀번호 불일치");
                    return null;
                }

                return {
                    id: `${existingUser.id}`
                    , username: existingUser.username
                    , email: existingUser.email
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }:{ token:any, user:any }) {
            console.log(token, user);

            if (user) {
                return {
                    ...token
                    , username: user.username
                }
            }
            return token;
        },
        async session({ session, user, token }:{ session:any, user:any, token:any }) {
            return {
                ...session
                , user: {
                    ...session.user
                    , username: token.username
                }
            }
        }
    }
};