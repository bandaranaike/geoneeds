import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { connectDB } from "@/lib/mongodb1";
import { User } from "@/models/User";
import bcrypt from "bcrypt";
import clientPromise from "@/lib/mongodb"; // For NextAuth MongoDB Adapter

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: { email: { label: "Email", type: "text" }, password: { label: "Password", type: "password" } },
            async authorize(credentials) {
                await connectDB();
                const user = await User.findOne({ email: credentials?.email }).select("+password");
                if (!user) throw new Error("User not found");

                const isValid = await bcrypt.compare(credentials?.password || "", user.password);
                if (!isValid) throw new Error("Invalid password");

                return { id: user.id, name: user.name, email: user.email, role: user.role };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    adapter: MongoDBAdapter(clientPromise),
    session: { strategy: "jwt" },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.role = user.role;
            return token;
        },
        async session({ session, token }) {
            if (session?.user) session.user.role = token.role;
            return session;
        },
    },
    pages: { signIn: "/auth/signin" },
});
