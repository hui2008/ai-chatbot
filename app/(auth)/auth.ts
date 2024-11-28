import NextAuth from "next-auth"
import Keycloak from "next-auth/providers/keycloak"

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
  providers: [Keycloak],
  // trustHost: true,
  callbacks: {
    async session({ session, token }) {
      console.log('session', session)
      console.log('token', token)
      if (token) {
        const { user } = session
        session = { ...session, user: { ...user, id: token.sub! } }
      }

      console.log('enriched session', session)
      return session
    },
    authorized({ auth, request: { nextUrl } }) {
      console.log('authorized', auth, nextUrl)
      return !!auth?.user;
    }
  },
});
