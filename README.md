# 🧠 MyMind - Mindful Bookmark Manager

A beautiful, minimalist bookmark manager inspired by the "save everything, organize nothing" philosophy. Built with Next.js, Supabase, and Tailwind CSS.

![MyMind Preview](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)
![Supabase](https://img.shields.io/badge/Supabase-Latest-green?style=flat-square&logo=supabase)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

## ✨ Features

- 🎨 **Beautiful UI** - Clean, gradient-based design with smooth animations
- 🔐 **Secure Auth** - Google OAuth via Supabase
- ⚡ **Real-time Sync** - Instant updates across all devices
- 🎯 **Smart Search** - Find bookmarks by title or URL
- 🌈 **Color-coded Cards** - Visual organization without folders
- 🔌 **Browser Extension** - One-click saving from any webpage
- 📱 **Responsive** - Works perfectly on mobile and desktop

## 🚀 Quick Start

### Prerequisites

- Node.js 20.9.0 or higher
- A Supabase account
- npm or yarn

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/yourusername/mymind.git
   cd mymind
```

2. **Install dependencies**
```bash
   npm install
```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Run this SQL in your Supabase SQL editor:
```sql
   create table bookmarks (
     id uuid default gen_random_uuid() primary key,
     user_id uuid references auth.users not null,
     title text not null,
     url text not null,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null
   );

   alter table bookmarks enable row level security;

   create policy "Users can view their own bookmarks"
     on bookmarks for select
     using (auth.uid() = user_id);

   create policy "Users can insert their own bookmarks"
     on bookmarks for insert
     with check (auth.uid() = user_id);

   create policy "Users can delete their own bookmarks"
     on bookmarks for delete
     using (auth.uid() = user_id);
```

4. **Configure environment variables**
   
   Create `.env.local`:
```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. **Enable Google OAuth in Supabase**
   - Go to Authentication > Providers
   - Enable Google
   - Add authorized redirect URL: `http://localhost:3000/api/auth/callback`

6. **Run the development server**
```bash
   npm run dev
```

7. **Open [http://localhost:3000](http://localhost:3000)**

## 🔌 Chrome Extension Setup

1. Navigate to `chrome-extension/popup.js`
2. Update these constants:
```javascript
   const SUPABASE_URL = 'your_supabase_url';
   const SUPABASE_ANON_KEY = 'your_supabase_anon_key';
   const APP_URL = 'http://localhost:3000';
```

3. Load extension in Chrome:
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `chrome-extension` folder

## 📁 Project Structure
```
mymind/
├── app/
│   ├── (auth)/              # Auth-related pages
│   │   ├── page.js         # Landing page
│   │   └── signin/
│   │       └── page.js     # Sign in page
│   ├── (dashboard)/        # Dashboard
│   │   └── page.js         # Bookmarks dashboard
│   ├── api/
│   │   └── auth/
│   │       └── callback/
│   │           └── route.js # Auth callback
│   ├── globals.css
│   ├── layout.js
│   └── icon.svg
├── chrome-extension/        # Browser extension
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│   └── icons/
├── lib/
│   └── supabase.js         # Supabase client
├── public/
└── package.json
```

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1 (App Router)
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth (Google OAuth)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 🎨 Design Philosophy

MyMind follows a "mindful minimalism" approach:
- No folders or complex organization
- Visual, color-based categorization
- Instant save and search
- Zero cognitive load

## 📝 Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key |
| `NEXT_PUBLIC_SITE_URL` | Your app URL (for OAuth redirects) |

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

Update redirect URLs in Supabase:
- Production URL: `https://yourdomain.com/api/auth/callback`

### Other Platforms

Compatible with any platform supporting Next.js:
- Netlify
- Railway
- Render
- Digital Ocean

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project however you'd like.

## 🙏 Acknowledgments

- Inspired by the original [MyMind](https://mymind.com) app
- Design inspiration from modern web apps
- Built with amazing open-source tools

## 📧 Contact

For questions or feedback, reach out to [your@email.com]

---

Made with 💜 by [Your Name]