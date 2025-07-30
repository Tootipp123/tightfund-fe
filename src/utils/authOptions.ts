import axios from "axios";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { parse } from "url";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // secret: process.env.NEXTAUTH_SECRET, // Uncomment and set this in production!
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      if (user?.email) {
        try {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVICE_URL}/auth/google/login`,
            {
              email: user.email,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (res?.data?.data) {
            const { accessToken } = res.data.data;
            user.accessToken = accessToken;
            return true;
          } else {
            throw new Error("Failed to signin");
          }
        } catch (error) {
          console.error("Failed to send email to API or get token:", error);
          return false; // Prevent sign-in if API call fails
        }
      }
      return false; // If no email, prevent sign-in
    },

    async jwt({ token, user, account }: any) {
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }: any) {
      if (token) {
        session.jwt = token;
        session.accessToken = token.accessToken;
        session.user.id = token.id;
      }
      return session;
    },

    redirect({ url, baseUrl }) {
      const parsedUrl = parse(url, true);
      const from = parsedUrl.query.from;

      if (from === "signout") {
        return `${baseUrl}`;
      } else if (from === "result") {
        return `${baseUrl}/dashboard?from=result`;
      }

      return url.startsWith(baseUrl) ? `${url}/dashboard` : baseUrl;
    },
  },
};
