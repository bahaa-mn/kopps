import type { AvatarProps } from '@nuxt/ui'

declare module '#auth-utils' {
  interface User {
    id: number
    username: string
    email: string
    avatar?: AvatarProps
    status: UserStatus
    location: string
  }

  interface UserSession {
  }

  interface SecureSessionData {
  }
}

export {}
