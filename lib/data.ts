export const profile = {
  id: 'demo-user',
  username: 'poyraz',
  full_name: 'Poyraz Ağiş',
  avatar_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
  bio: 'Yazılım öğreniyorum ✨ • Supabase + Next.js ile sosyal medya app geliştiriyorum.'
}

export const stories = [
  { id: '1', username: 'selin', avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80', seen: false },
  { id: '2', username: 'ali', avatar_url: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80', seen: true },
  { id: '3', username: 'zeynep', avatar_url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80', seen: false },
  { id: '4', username: 'mert', avatar_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80', seen: true },
  { id: '5', username: 'deniz', avatar_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80', seen: false }
]

export const samplePosts = [
  {
    id: 'post-1',
    user_id: 'user-1',
    author: 'Selin',
    username: 'selin',
    avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    image_url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
    caption: 'Günaydın! Bugün yeni bir fikir için hazırız ✨',
    likes: 132,
    comments: 18,
    created_at: '2 saat önce'
  },
  {
    id: 'post-2',
    user_id: 'user-2',
    author: 'Ali',
    username: 'ali',
    avatar_url: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80',
    image_url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    caption: 'Yazılım öğrenirken en önemli şey düzenli pratik. #nextjs #supabase',
    likes: 245,
    comments: 27,
    created_at: '5 saat önce'
  },
  {
    id: 'post-3',
    user_id: 'user-3',
    author: 'Zeynep',
    username: 'zeynep',
    avatar_url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80',
    image_url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    caption: 'ofis ortamı çok iyi hissettiriyor 😌',
    likes: 98,
    comments: 11,
    created_at: '1 gün önce'
  }
]

export const suggestions = [
  { id: 's1', username: 'aysu', reason: 'Seni takip ediyor' },
  { id: 's2', username: 'berkay', reason: 'Popüler hesap' },
  { id: 's3', username: 'emre', reason: 'Yeni takip edilenler' }
]
