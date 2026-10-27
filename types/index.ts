export type Profile = {
  id: string
  username: string
  full_name: string
  avatar_url: string
  bio: string
}

export type Post = {
  id: string
  user_id: string
  author: string
  username: string
  avatar_url: string
  image_url: string
  caption: string
  likes: number
  comments: number
  created_at: string
}

export type Story = {
  id: string
  username: string
  avatar_url: string
  seen: boolean
}
