"use client";

import { useEffect, useState } from "react";

interface TransitionPageProps {
  onTransitionComplete: () => void;
}

// 葉子 SVG 組件 - 更優雅的設計
const CircleParticle = ({ className }: { className: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2C8.5 2 6 4.5 6 8C6 11.5 8.5 14 12 14C15.5 14 18 11.5 18 8C18 4.5 15.5 2 12 2Z" />

    <path
      d="M12 4C13.1 4 14 4.9 14 6C14 7.1 13.1 8 12 8C10.9 8 10 7.1 10 6C10 4.9 10.9 4 12 4Z"
      fill="rgba(255,255,255,0.3)"
    />
    <path
      d="M10 8C10.6 8 11 8.4 11 9C11 9.6 10.6 10 10 10C9.4 10 9 9.6 9 9C9 8.4 9.4 8 10 8Z"
      fill="rgba(255,255,255,0.2)"
    />
    <path
      d="M14 8C14.6 8 15 8.4 15 9C15 9.6 14.6 10 14 10C13.4 10 13 9.6 13 9C13 8.4 13.4 8 14 8Z"
      fill="rgba(255,255,255,0.2)"
    />
  </svg>
);

export default function TransitionPage({
  onTransitionComplete,
}: TransitionPageProps) {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // 第一階段：淡出 WelcomePage
    const timer1 = setTimeout(() => {
      setAnimationPhase(1);
    }, 100);

    // 第二階段：顯示轉場動畫
    const timer2 = setTimeout(() => {
      setAnimationPhase(2);
    }, 600);

    // 第三階段：完成轉場
    const timer3 = setTimeout(() => {
      onTransitionComplete();
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onTransitionComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 背景遮罩 */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 transition-opacity duration-500 ${
          animationPhase >= 1 ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* 轉場動畫內容 */}
      <div
        className={`relative z-10 text-center transition-all duration-700 ${
          animationPhase >= 1 ? "scale-110 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <div className="mb-8 animate-fade-in-scale">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-green-300 to-yellow-200 flex items-center justify-center mb-6 animate-pulse-glow">
            <div className="text-6xl">👤</div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">賴彥明</h2>
          <p className="text-gray-600">Murray Lai</p>
        </div>

        {/* 動畫圓圈 */}
        <div className="relative">
          <div
            className={`w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto ${
              animationPhase >= 2 ? "opacity-0" : "opacity-100"
            } transition-opacity duration-300`}
          />

          {/* 歡迎文字 */}
          <div
            className={`mt-6 text-xl font-semibold text-gray-700 transition-all duration-500 animate-slide-in ${
              animationPhase >= 2
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75"
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <span>歡迎</span>
              <span className="text-gray-600 font-bold">Welcome</span>
              <span>✨</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-1000 animate-leaf-float ${
              animationPhase >= 1
                ? "opacity-0 scale-0 rotate-180"
                : "opacity-100 scale-100 rotate-0"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2000}ms`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <CircleParticle className="text-green-400 drop-shadow-sm animate-leaf-sway" />
          </div>
        ))}

        {[...Array(10)].map((_, i) => (
          <div
            key={`extra-${i}`}
            className={`absolute transition-all duration-1200 animate-leaf-float ${
              animationPhase >= 1
                ? "opacity-0 scale-0 -rotate-180"
                : "opacity-100 scale-100 rotate-0"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2500}ms`,
              animationDuration: `${3.5 + Math.random() * 2}s`,
            }}
          >
            <CircleParticle className="text-yellow-400 drop-shadow-sm animate-leaf-sway" />
          </div>
        ))}

        {[...Array(8)].map((_, i) => (
          <div
            key={`small-${i}`}
            className={`absolute transition-all duration-1000 animate-leaf-float ${
              animationPhase >= 1
                ? "opacity-0 scale-0 rotate-90"
                : "opacity-100 scale-100 rotate-0"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3000}ms`,
              animationDuration: `${4 + Math.random() * 1}s`,
            }}
          >
            <CircleParticle className="text-green-300 drop-shadow-sm animate-leaf-sway" />
          </div>
        ))}
      </div>
    </div>
  );
}
