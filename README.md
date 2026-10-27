# NovaSocial

Instagram tarzı bir sosyal medya uygulaması için başlangıç MVP projesi.

## Özellikler
- Anasayfa akışı
- Hikaye çubuğu
- Yeni gönderi oluşturma alanı
- Beğeni butonu
- Profil kartı ve önerilen hesaplar
- Supabase için hazır SQL schema

## Teknoloji
- Next.js 14
- React
- TypeScript
- Supabase

## Kurulum

1. Bağımlılıkları yükle:

```bash
npm install
```

2. `.env.local` dosyasını oluştur:

```bash
cp .env.example .env.local
```

3. Supabase proje değerlerini ekle:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

4. Supabase SQL Editor içinde `supabase/schema.sql` dosyasını çalıştır.

5. Geliştirme sunucusunu başlat:

```bash
npm run dev
```

6. Tarayıcıda aç:

```bash
http://localhost:3000
```

## Hedef ürün
Bu proje ilk aşamada çalışan bir MVP. Aşağıdaki özellikler sonra eklenebilir:
- kullanıcı kaydı / giriş
- profil düzenleme
- gönderi yükleme (Supabase Storage)
- takip sistemi
- yorum ekleme
- arama ve keşfet
- story ekleme

## Not
Bu başlangıç sürümü, Supabase ayarları yapılmadan da çalışır; ama üretim kullanımında `.env.local` doldurulmalı ve Supabase tablosu oluşturulmalıdır.
