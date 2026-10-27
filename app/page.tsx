import './globals.css'
import { profile, samplePosts, stories, suggestions } from '@/lib/data'
import { hasSupabaseConfig, supabase } from '@/lib/supabase'
import { useEffect, useMemo, useState } from 'react'

export default function HomePage() {
  const [posts, setPosts] = useState(samplePosts)
  const [draft, setDraft] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (!supabase) return

    const loadFromSupabase = async () => {
      const { data, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false })

      if (!error && data && data.length > 0) {
        const mapped = data.map((post: any) => ({
          id: post.id,
          user_id: post.user_id,
          author: post.author || profile.full_name,
          username: post.username || profile.username,
          avatar_url: post.avatar_url || profile.avatar_url,
          image_url: post.image_url || 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80',
          caption: post.caption || '',
          likes: post.likes || 0,
          comments: post.comments || 0,
          created_at: post.created_at ? new Date(post.created_at).toLocaleDateString('tr-TR') : 'Bugün'
        }))

        setPosts(mapped)
      }
    }

    loadFromSupabase()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!draft.trim()) return

    const newPost = {
      id: `local-${Date.now()}`,
      user_id: profile.id,
      author: profile.full_name,
      username: profile.username,
      avatar_url: profile.avatar_url,
      image_url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      caption: draft,
      likes: 0,
      comments: 0,
      created_at: 'Şimdi'
    }

    setPosts((prev) => [newPost, ...prev])
    setDraft('')

    if (supabase) {
      await supabase.from('posts').insert({
        id: newPost.id,
        user_id: newPost.user_id,
        author: newPost.author,
        username: newPost.username,
        avatar_url: newPost.avatar_url,
        image_url: newPost.image_url,
        caption: newPost.caption,
        likes: newPost.likes,
        comments: newPost.comments,
        created_at: new Date().toISOString()
      })
    }
  }

  const handleLike = (postId: string) => {
    setPosts((prev) => prev.map((post) => post.id === postId ? { ...post, likes: post.likes + 1 } : post))
  }

  const activeCount = useMemo(() => stories.filter((story) => !story.seen).length, [])

  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">N</div>
          <span>NovaSocial</span>
        </div>

        <nav className="nav-links">
          <span>🏠</span>
          <span>🔍</span>
          <span>➕</span>
          <span>💬</span>
          <span>👤</span>
        </nav>
      </header>

      <section className="story-row">
        <div className="story story-highlight">
          <div className="avatar large avatar-gradient">+</div>
          <small>Sen</small>
        </div>

        {stories.map((story) => (
          <div key={story.id} className="story">
            <div className={`avatar large ${story.seen ? '' : 'avatar-ring'}`}>
              <img src={story.avatar_url} alt={story.username} />
            </div>
            <small>{story.username}</small>
          </div>
        ))}

        <div className="story-counter">{activeCount} yeni</div>
      </section>

      <div className="content-grid">
        <section className="feed-column">
          <form className="composer" onSubmit={handleSubmit}>
            <div className="composer-header">
              <img className="avatar small" src={profile.avatar_url} alt={profile.username} />
              <strong>{profile.full_name}</strong>
            </div>

            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Bugün ne paylaşmak istiyorsun?"
            />

            <div className="composer-actions">
              <span>📷 Fotoğraf</span>
              <button type="submit" className="primary-btn">Paylaş</button>
            </div>
          </form>

          {posts.map((post) => (
            <article key={post.id} className="post-card">
              <div className="post-header">
                <div className="user-mini">
                  <img className="avatar small" src={post.avatar_url} alt={post.username} />
                  <div>
                    <strong>{post.author}</strong>
                    <small>@{post.username}</small>
                  </div>
                </div>
                <span className="time">{post.created_at}</span>
              </div>

              <img className="post-image" src={post.image_url} alt={post.caption} />

              <div className="post-actions">
                <button type="button" onClick={() => handleLike(post.id)}>❤️ {post.likes}</button>
                <button type="button">💬 {post.comments}</button>
                <button type="button">📤</button>
              </div>

              <div className="post-caption">
                <strong>{post.username}</strong> {post.caption}
              </div>
            </article>
          ))}
        </section>

        <aside className="sidebar">
          <div className="profile-card">
            <img className="avatar large" src={profile.avatar_url} alt={profile.username} />
            <div>
              <strong>{profile.full_name}</strong>
              <small>@{profile.username}</small>
            </div>
            <p>{profile.bio}</p>
          </div>

          <div className="suggestions">
            <div className="section-title-row">
              <strong>Senin için öneriler</strong>
              <span>Tümü</span>
            </div>

            {suggestions.map((user) => (
              <div key={user.id} className="suggestion-item">
                <div className="user-mini">
                  <div className="avatar small avatar-gradient">{user.username[0].toUpperCase()}</div>
                  <div>
                    <strong>{user.username}</strong>
                    <small>{user.reason}</small>
                  </div>
                </div>
                <button className="follow-btn" type="button">Takip et</button>
              </div>
            ))}
          </div>

          <div className="status-box">
            <strong>Supabase hazır mı?</strong>
            <p>
              {mounted && hasSupabaseConfig() ? 'Şimdi Supabase bağlantısı aktif.' : 'İlk önce .env.local dosyasını doldur.'}
            </p>
          </div>
        </aside>
      </div>
    </main>
  )
}
