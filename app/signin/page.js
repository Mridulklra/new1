"use client";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.push("/dashboard");
      }
      setLoading(false);
    });
  }, [router]);

  const handleGoogleLogin = async () => {
    if (authLoading) return;
    setAuthLoading(true);
    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
        window.location.origin;
      const redirectTo = new URL("/auth/callback", baseUrl).toString();

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo,
        },
      });
      if (error) {
        console.error("Error logging in:", error.message);
        alert(`Google sign-in failed: ${error.message}`);
      }
    } catch (error) {
      console.error("Google sign-in failed:", error);
      alert(`Google sign-in failed: ${error?.message || "Unknown error"}`);
    } finally {
      setAuthLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #e0e7ff 0%, #fef3c7 25%, #fce7f3 50%, #ddd6fe 100%)' }}>
        <div className="w-12 h-12 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #e0e7ff 0%, #fef3c7 25%, #fce7f3 50%, #ddd6fe 100%)' }}>
      {/* Large circular white background - positioned on left */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4"
        style={{
          width: '65vw',
          height: '65vw',
          maxWidth: '1100px',
          maxHeight: '1100px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0) 100%)',
          borderRadius: '50%',
        }}
      />

      {/* Gradient overlay - orange to pink */}
      <div 
        className="absolute top-0 left-0"
        style={{
          width: '50%',
          height: '100%',
          background: 'radial-gradient(circle at 30% 50%, rgba(251,146,60,0.4) 0%, rgba(244,63,94,0.3) 30%, transparent 60%)',
        }}
      />

      <div className="relative z-10 min-h-screen flex items-center justify-end px-8 md:px-16 lg:px-24">
        {/* Sign in card - positioned on right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Thinker SVG */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <svg width="120" height="120" viewBox="0 0 200 200">
              <image
                href="https://static.accelerator.net/134/0.87.1/images/thinker.svg"
                width="200"
                height="200"
              />
            </svg>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl font-serif text-black leading-tight">
              Access
            </h1>
            <h2 className="text-6xl font-serif text-black leading-tight">
              your mind
            </h2>
          </motion.div>

          {/* Google Sign In Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <button
              onClick={handleGoogleLogin}
              disabled={authLoading}
              className="w-full text-white font-medium py-4 px-6 rounded-full flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: '#ff6347' }}
            >
              {authLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 48 48">
                    <path
                      fill="#FFC107"
                      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.093 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.047 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306 14.691l6.571 4.819C14.655 16.108 19.027 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.047 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.183 0-9.613-3.317-11.303-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611 20.083H42V20H24v8h11.303c-.802 2.11-2.3 3.89-4.087 5.173l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                    />
                  </svg>
                  <span>Sign in with Google</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Footer text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center space-y-4"
          >
            <p className="text-gray-700 text-sm">
              Don't have an account yet?{" "}
              <button
                onClick={handleGoogleLogin}
                className="font-medium"
                style={{ color: '#ff6347' }}
              >
                Sign up here.
              </button>
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-700">
                Terms of Use
              </a>
              <span>|</span>
              <a href="#" className="hover:text-gray-700">
                Privacy Policy
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}