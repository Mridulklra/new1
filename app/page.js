// "use client";
// import { supabase } from "@/utils/supabase";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Bookmark, Search, Shield, ArrowRight, Zap, Globe, Layers } from "lucide-react";

// export default function Home() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   const [authLoading, setAuthLoading] = useState(false);

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       if (session) {
//         router.push("/dashboard");
//       }
//       setLoading(false);
//     });
//   }, [router]);

//   const handleGoogleLogin = async () => {
//     if (authLoading) return;
//     setAuthLoading(true);
//     try {
//       const baseUrl =
//         process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
//         window.location.origin;
//       const redirectTo = new URL("/auth/callback", baseUrl).toString();

//       const { error } = await supabase.auth.signInWithOAuth({
//         provider: "google",
//         options: {
//           redirectTo,
//         },
//       });
//       if (error) {
//         console.error("Error logging in:", error.message);
//         alert(`Google sign-in failed: ${error.message}`);
//       }
//     } catch (error) {
//       console.error("Google sign-in failed:", error);
//       alert(`Google sign-in failed: ${error?.message || "Unknown error"}`);
//     } finally {
//       setAuthLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-full flex items-center justify-center">
//         <div className="relative">
//           <div className="w-16 h-16 border-4 border-neon-blue/30 border-t-neon-blue rounded-full animate-spin"></div>
//           <div className="absolute inset-0 flex items-center justify-center">
//             <Zap className="w-6 h-6 text-neon-purple animate-pulse" />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 overflow-hidden">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//           {/* Left Column: Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-left"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex items-center gap-2 rounded-full border border-neon-blue/30 bg-white/5 px-4 py-1.5 text-sm text-neon-blue shadow-[0_0_15px_rgba(0,243,255,0.2)] backdrop-blur mb-6"
//             >
//               <Zap size={16} className="text-neon-pink" />
//               <span className="font-mono tracking-wide">NEXT-GEN BOOKMARKING</span>
//             </motion.div>

//             <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
//               Smart bookmarking, simplified.
//             </h1>

//             <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-lg leading-relaxed">
//               Save, search, and sync your links with secure Google sign-in.
//             </p>

//             <div className="mt-10 flex flex-col sm:flex-row gap-4">
//               <motion.button
//                 whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 243, 255, 0.4)" }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleGoogleLogin}
//                 disabled={authLoading}
//                 className="group relative inline-flex items-center justify-center gap-3 rounded-xl bg-white/10 px-8 py-4 font-bold text-white transition-all duration-300 border border-white/20 hover:bg-white/20 hover:border-neon-blue overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <svg
//                   className="w-5 h-5 relative z-10"
//                   viewBox="0 0 48 48"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fill="#FFC107"
//                     d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.093 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.047 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
//                   />
//                   <path
//                     fill="#FF3D00"
//                     d="M6.306 14.691l6.571 4.819C14.655 16.108 19.027 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.047 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
//                   />
//                   <path
//                     fill="#4CAF50"
//                     d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.183 0-9.613-3.317-11.303-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
//                   />
//                   <path
//                     fill="#1976D2"
//                     d="M43.611 20.083H42V20H24v8h11.303c-.802 2.11-2.3 3.89-4.087 5.173h.003l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
//                   />
//                 </svg>
//                 <span className="relative z-10">Continue with Google</span>
//                 {authLoading ? (
//                   <div className="relative z-10 w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                 ) : (
//                   <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
//                 )}
//               </motion.button>
//             </div>

//             <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
//               {[
//                 { label: "Synced", icon: Globe, value: "Real-time" },
//                 { label: "Speed", icon: Zap, value: "Instant" },
//                 { label: "Secure", icon: Shield, value: "Enterprise-grade" },
//               ].map((stat, i) => (
//                 <div key={i}>
//                   <div className="flex items-center gap-2 text-neon-blue mb-1">
//                     <stat.icon size={14} />
//                     <span className="text-xs font-mono uppercase tracking-wider">{stat.label}</span>
//                   </div>
//                   <p className="text-2xl font-bold text-white">{stat.value}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right Column: Visuals */}
//           <div className="relative h-[500px] hidden lg:block perspective-1000">
//             <motion.div
//               animate={{
//                 y: [0, -10, 0],
//               }}
//               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute inset-0 flex items-center justify-center"
//             >
//               <div className="relative w-full max-w-md aspect-[3/4]">
//                 {/* Decorative Orbs */}
//                 <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon-purple/20 rounded-full blur-3xl animate-pulse" />
//                 <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl animate-pulse delay-1000" />

//                 {/* Glass Cards Stack */}
//                 <div className="relative w-full h-full">
//                   {[
//                     { title: "Design Resources", count: "12 links", color: "from-pink-500/20 to-purple-600/20" },
//                     { title: "Dev Tools", count: "8 links", color: "from-blue-500/20 to-cyan-400/20" },
//                     { title: "Inspiration", count: "24 links", color: "from-amber-400/20 to-orange-500/20" }
//                   ].map((card, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 50, scale: 0.9 }}
//                       animate={{ opacity: 1, y: index * 60, scale: 1 - index * 0.05 }}
//                       transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
//                       className={`absolute top-0 left-0 right-0 h-48 rounded-2xl border border-white/10 bg-gradient-to-br ${card.color} backdrop-blur-md p-6 shadow-xl z-${30 - index * 10}`}
//                       style={{ top: index * 80, willChange: 'transform' }}
//                     >
//                       <div className="flex justify-between items-start mb-4">
//                         <div className="p-3 rounded-lg bg-white/10">
//                           <Layers className="text-white" size={24} />
//                         </div>
//                         <span className="text-xs font-mono text-white/50">{card.count}</span>
//                       </div>
//                       <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
//                       <div className="flex gap-2">
//                         <div className="h-2 w-12 rounded-full bg-white/20" />
//                         <div className="h-2 w-8 rounded-full bg-white/10" />
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }







// "use client";
// import { supabase } from "@/utils/supabase";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function Home() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   const [authLoading, setAuthLoading] = useState(false);

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       if (session) {
//         router.push("/dashboard");
//       }
//       setLoading(false);
//     });
//   }, [router]);

//   const handleGoogleLogin = async () => {
//     if (authLoading) return;
//     setAuthLoading(true);
//     try {
//       const baseUrl =
//         process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
//         window.location.origin;
//       const redirectTo = new URL("/auth/callback", baseUrl).toString();

//       const { error } = await supabase.auth.signInWithOAuth({
//         provider: "google",
//         options: {
//           redirectTo,
//         },
//       });
//       if (error) {
//         console.error("Error logging in:", error.message);
//         alert(`Google sign-in failed: ${error.message}`);
//       }
//     } catch (error) {
//       console.error("Google sign-in failed:", error);
//       alert(`Google sign-in failed: ${error?.message || "Unknown error"}`);
//     } finally {
//       setAuthLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#fef8f4]">
//         <div className="w-12 h-12 border-4 border-[#ff6b6b]/20 border-t-[#ff6b6b] rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#fef8f4] via-[#fff5f0] to-[#ffe8e0] overflow-hidden">
//       {/* Floating gradient orbs */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -100, 0],
//           }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#ff6b6b]/10 to-[#ffa07a]/10 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             x: [0, -100, 0],
//             y: [0, 100, 0],
//           }}
//           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//           className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-[#4ecdc4]/10 to-[#95e1d3]/10 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-16"
//         >
//           <div className="flex items-center gap-2 text-2xl font-light">
//             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff6b6b] to-[#ffa07a]" />
//             <span className="text-gray-800">mymind</span>
//           </div>
//         </motion.div>

//         {/* Hero Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-center max-w-4xl mx-auto mb-16"
//         >
//           <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-8 leading-tight">
//             Remember everything.
//             <br />
//             <span className="text-gray-600">Organize nothing.</span>
//           </h1>
          
//           <p className="text-xl md:text-2xl text-gray-600 font-light mb-4">
//             All your{" "}
//             <span className="px-3 py-1 bg-white/60 rounded-full text-[#ff6b6b] border border-[#ff6b6b]/20">
//               notes
//             </span>{" "}
//             <span className="px-3 py-1 bg-white/60 rounded-full text-[#ffa07a] border border-[#ffa07a]/20">
//               bookmarks
//             </span>{" "}
//             <span className="px-3 py-1 bg-white/60 rounded-full text-[#4ecdc4] border border-[#4ecdc4]/20">
//               inspiration
//             </span>
//           </p>
//           <p className="text-xl md:text-2xl text-gray-600 font-light mb-12">
//             <span className="px-3 py-1 bg-white/60 rounded-full text-[#95e1d3] border border-[#95e1d3]/20">
//               articles
//             </span>{" "}
//             and{" "}
//             <span className="px-3 py-1 bg-white/60 rounded-full text-[#f7b731] border border-[#f7b731]/20">
//               images
//             </span>{" "}
//             in one single, private place.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={handleGoogleLogin}
//               disabled={authLoading}
//               className="group relative px-8 py-4 bg-gray-900 text-white rounded-full font-light text-lg overflow-hidden transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b6b] to-[#ffa07a] opacity-0 group-hover:opacity-100 transition-opacity" />
//               <span className="relative flex items-center gap-3">
//                 {authLoading ? (
//                   <>
//                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                     <span>Signing in...</span>
//                   </>
//                 ) : (
//                   <>
//                     <svg className="w-5 h-5" viewBox="0 0 48 48">
//                       <path
//                         fill="#FFC107"
//                         d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.093 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.047 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
//                       />
//                       <path
//                         fill="#FF3D00"
//                         d="M6.306 14.691l6.571 4.819C14.655 16.108 19.027 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.047 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
//                       />
//                       <path
//                         fill="#4CAF50"
//                         d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.183 0-9.613-3.317-11.303-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
//                       />
//                       <path
//                         fill="#1976D2"
//                         d="M43.611 20.083H42V20H24v8h11.303c-.802 2.11-2.3 3.89-4.087 5.173l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
//                       />
//                     </svg>
//                     <span>Sign in with Google</span>
//                   </>
//                 )}
//               </span>
//             </motion.button>
//           </div>

//           {/* App platforms */}
//           <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
//             <div className="flex items-center gap-2">
//               <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
//                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
//                 </svg>
//               </div>
//               <span>iPhone app</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center text-white text-xs font-bold">
//                 C
//               </div>
//               <span>Browser Extension</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
//                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M17.523 15.341c-.538-.593-.858-1.376-.858-2.195 0-.819.32-1.602.858-2.195l2.572-2.833c.233-.257.23-.658-.008-.91-.238-.253-.64-.25-.873.007l-2.572 2.833c-.753.829-1.167 1.895-1.167 3.018s.414 2.189 1.167 3.018l2.572 2.833c.233.257.635.26.873.007.238-.252.241-.653.008-.91l-2.572-2.833z"/>
//                 </svg>
//               </div>
//               <span>Android app</span>
//             </div>
//           </div>
//         </motion.div>

//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 0.8 }}
//           className="absolute bottom-8"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="flex flex-col items-center gap-2 text-gray-400"
//           >
//             <span className="text-sm font-light">Scroll to explore</span>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//             </svg>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

"use client";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.push("/dashboard");
      }
      setLoading(false);
    });
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="w-12 h-12 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 px-6 md:px-12 py-6 bg-white/80 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 text-xl">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-pink-400" />
            <span className="font-medium text-gray-900">mymind</span>
            <span className="text-xs text-gray-400">®</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#" className="text-orange-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              What
            </a>
            <a href="#" className="text-yellow-600 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
              Why
            </a>
            <a href="#" className="text-pink-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500"></span>
              How
            </a>
            <a href="#" className="text-green-600 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              What's New
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push("/signin")}
              className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Log in
            </button>
            <button
              onClick={() => router.push("/signin")}
              className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-medium transition-all shadow-lg shadow-orange-500/30"
            >
              Sign up
            </button>
          </div>
        </div>
      </motion.header>

      {/* Gradient Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-5xl mx-auto mb-20"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-gray-900 mb-6 leading-[0.95]">
            Remember everything.
            <br />
            <span className="text-gray-500">Organize nothing.</span>
          </h1>
          
          <div className="mt-12 mb-8 flex flex-wrap items-center justify-center gap-3 text-lg md:text-xl text-gray-700">
            <span>All your</span>
            <span className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-orange-600 border border-orange-200 shadow-sm">
              
            </span>
            <span className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-pink-600 border border-pink-200 shadow-sm">
              bookmarks
            </span>
            <span className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-blue-600 border border-blue-200 shadow-sm">
              inspiration
            </span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3 text-lg md:text-xl text-gray-700 mb-12">
            <span className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-red-600 border border-red-200 shadow-sm">
              articles
            </span>
            <span>and</span>
            <span className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-yellow-600 border border-yellow-200 shadow-sm">
              images
            </span>
            <span>in one single, private place.</span>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push("/signin")}
            className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-lg font-medium transition-all shadow-xl shadow-orange-500/30 mb-16"
          >
            Get Started
          </motion.button>

          {/* App platforms */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
              </div>
              <span>iPhone app</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span>Browser Extension</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.43 11.43 0 00-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85l1.84 3.18C4.8 11.16 3.5 13.84 3.5 16.5h17c0-2.66-1.3-5.34-2.9-7.02zM7 14.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                </svg>
              </div>
              <span>Android app</span>
            </div>
          </div>
        </motion.div>

        {/* Orange Hero Section - Matching Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-full mx-auto mb-0"
        >
          <div className="bg-[#ff6347] py-24 px-6 md:px-12 text-center">
            <p className="text-sm tracking-widest text-gray-900 mb-8 uppercase font-medium">
              NO WASTED TIME OR ENERGY
            </p>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-black mb-8 leading-tight max-w-5xl mx-auto">
              Folders are dead. This is your personal search engine.
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              Search by color, keyword, brand, date – whatever you think of first. 
              Associative search & visual cues work with your brain to find it instantly.
            </p>
{/* 
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full text-base font-medium shadow-xl hover:shadow-2xl transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              WATCH THE VIDEO
            </motion.button> */}
          </div>
        </motion.div>
      </div>

      {/* Simple Footer Strip */}
      <footer className="relative z-10 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-pink-400" />
              <span className="font-medium">mymind</span>
              <span className="text-xs text-gray-400">®</span>
              <span className="ml-2 text-gray-400">© 2026 All rights reserved</span>
            </div>
            <div className="flex items-center gap-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}