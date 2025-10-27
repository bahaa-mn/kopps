import type { AvatarProps } from '@nuxt/ui'

export interface User {
  id: number
  username: string
  email: string
  avatar?: AvatarProps
  status: UserStatus
  location: string
}
