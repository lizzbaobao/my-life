"use client";

import { useEffect, useState } from "react";
import SkillLevel from "./SkillLevel";

export default function MainPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 延遲一點時間讓轉場動畫完成
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 導航欄 */}
      <nav
        className={`bg-white shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-800">Lai's space</h1>
            <div className="flex space-x-6">
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                關於我
              </a>
              <a
                href="#skills"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                技能
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                聯絡
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要內容 */}
      <main
        className={`max-w-6xl mx-auto px-4 py-12 mt-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* 關於我區塊 */}
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            關於我
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-300 to-yellow-200 flex items-center justify-center overflow-hidden">
                  {/* 如果你有照片，取消註釋下面的 Image 組件並註釋掉 emoji */}
                  {/* <Image
                    src="/profile.jpg"
                    alt="個人照片"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  /> */}
                  <div className="text-4xl">👤</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">賴彥明</h3>
                <p className="text-gray-600">Murray Lai</p>
              </div>
              <div className="space-y-4">
                <div className="">
                  <p className="text-gray-700 leading-relaxed">
                    你好，我是Murray！一位喜歡使用小工具來優化電腦體驗的人，畢業於國立臺北科技大學電子工程系。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    在校期間除了扎實的電子工程基礎，我也特別投入程式相關課程，並在叡揚資訊的實習中，在產品維護程式，了解程式裡面產品以及專案的區別。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    畢業後，我嘗試不同類型的工作，也利用閒暇時間在家裡寫程式，跟朋友寫一些有趣的小工具。
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  喜歡在閒暇時間弄一些小程式來滿足自己的想法，此外我也喜歡閱讀各式書籍。當需要放鬆時，我會出門散心，讓自己充電。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 技能區塊 */}
        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            我的技能
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                技術技能
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">TypeScript</span>
                  <SkillLevel level={4} color="green" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">React</span>
                  <SkillLevel level={4} color="red" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">HTML/CSS</span>
                  <SkillLevel level={4} color="blue" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Python</span>
                  <SkillLevel level={3} color="purple" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Node.js</span>
                  <SkillLevel level={3} color="yellow" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">C++</span>
                  <SkillLevel level={2} color="pink" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                其他能力
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Git</span>
                  <SkillLevel level={4} color="green" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">AI工具使用</span>
                  <SkillLevel level={4} color="red" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">stable diffusion</span>
                  <SkillLevel level={4} color="blue" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">photoshop</span>
                  <SkillLevel level={4} color="purple" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Illustrator</span>
                  <SkillLevel level={3} color="yellow" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Figma</span>
                  <SkillLevel level={2} color="pink" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 聯絡區塊 */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            聯絡我
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-center px-8">
              <div
                className="flex items-center space-x-3 cursor-pointer group hover:text-blue-600 transition-colors"
                onClick={() =>
                  window.open("mailto:murray@pearliz.cc", "_blank")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700 group-hover:text-blue-600 transition-colors"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                  <polyline points="3,7 12,13 21,7" />
                </svg>
                <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                  murray@pearliz.cc
                </span>
              </div>
              <div
                className="flex items-center space-x-3 cursor-pointer group hover:text-purple-600 transition-colors"
                onClick={() =>
                  window.open("https://www.instagram.com/pear.0213/", "_blank")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700 group-hover:text-purple-600 transition-colors"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="text-gray-700 group-hover:text-purple-600 transition-colors">
                  Instagram
                </span>
              </div>
              <div className="flex items-center space-x-3  group hover:text-green-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700 group-hover:text-green-600 transition-colors"
                >
                  <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-gray-700 group-hover:text-green-600 transition-colors">
                  台中市, 台灣
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className={`bg-gray-800 text-white py-8 transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Yen-Ming Lai. 保留所有權利.</p>
        </div>
      </footer>
    </div>
  );
}
