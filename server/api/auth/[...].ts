import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  secret: useRuntimeConfig().authSecret,

  pages: {
    signIn: '/login',
    error: '/login',
    signOut: '/login'
  },

  providers: [
    // @ts-expect-error
    GithubProvider.default({
      clientId: '3e784407d464565b7dde',
      clientSecret: '49f1a5765ceb679c8ea26c0f058456a4edcd4a09'
    }),
    // @ts-expect-error
    CredentialsProvider.default({
      name: 'credentials',
      credentials: {},
      authorize (credentials: { username: string; password: string }) {
        // TODO: Fetch user from database

        const user = { id: '1', name: 'J Smith', username: 'jsmith', password: 'hunter2' }

        if (credentials?.username === user.username && credentials?.password === user.password) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized'
          })

          // If you return null then an error will be displayed advising the user to check their details.

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ],

  session: {
    strategy: 'jwt'
  },

  callbacks: {
    jwt ({ token, user /* account */ }) {
      if (user) {
        token = {
          ...token,
          ...user
        }
      }
      return token
    },

    session ({ session, token }) {
      session.user = {
        ...token,
        ...session.user
      }

      return session
    }
  }
})
