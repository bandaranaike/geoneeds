import {Awaitable, DefaultSession, NextAuthOptions, Session, SessionStrategy} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb"; // MongoDB connection
import {connectDB} from "@/lib/mongodbConnect";
import {User} from "@/models/User";
// @ts-expect-error: bcrypt is not typed
import bcrypt from "bcrypt";
import {JWT} from "next-auth/jwt";
import {AdapterUser} from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required");
                }
                await connectDB();
                const user = await User.findOne({
                    email: {$regex: new RegExp("^" + credentials.email + "$", "i")}
                }).select("password name email role");
                if (!user) throw new Error("User not found");
                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (!isValid) throw new Error("Invalid password");
                return {id: user.id, name: user.name, email: user.email, role: user.role};
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    adapter: MongoDBAdapter(clientPromise),
    session: {strategy: "jwt" as SessionStrategy},
    callbacks: {
        async jwt({token}: { token: JWT }) {
            return token;
        },
        session(params: { session: Session; token: JWT, user: AdapterUser }): Awaitable<Session | DefaultSession> {
            return {...params.session, user: params.user};
        }
    },
    pages: {signIn: "/auth/signin", error: "/auth/error"},
};
