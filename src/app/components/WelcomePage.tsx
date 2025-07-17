"use client";

interface WelcomePageProps {
  onEnter: () => void;
}

const calculateAge = (birthday: string) => {
  const today = new Date();
  const birthDate = new Date(birthday);
  let age = today.getFullYear() - birthDate.getFullYear();
  let ageString = age.toString();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
    ageString = age.toString();
  }
  if (
    today.getMonth() === birthDate.getMonth() &&
    today.getDate() === birthDate.getDate()
  ) {
    ageString = ageString + "   🎊happy birthday🎊";
  }
  return ageString;
};

export default function WelcomePage({ onEnter }: WelcomePageProps) {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8 cursor-pointer flex-col gap-10"
      onClick={onEnter}
    >
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <div className="flex flex-col lg:flex-row">
          {/* 左側照片區域 */}
          <div className="lg:w-1/2 bg-gradient-to-br from-green-300 to-yellow-200 p-8 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                {/* 如果你有照片，取消註釋下面的 Image 組件並註釋掉 emoji */}
                {/* <Image
                  src="/profile.jpg"
                  alt="個人照片"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                /> */}
                <div className="text-6xl font-bold">👤</div>
              </div>
              <p className="text-2xl font-bold mb-2 text-gray-500">賴彥明</p>
              <p className="text-lg font-bold mb-2 text-gray-500">Murray Lai</p>
            </div>
          </div>

          {/* 右側簡介區域 */}
          <div className="lg:w-1/2 p-8 lg:p-12">
            <div className="h-full flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                My Philosophy
              </h1>

              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  你好！我是一個充滿熱情和創造力的人。我喜歡探索新事物，
                  我喜歡與人交流學習，並尋找機會來挑戰自己。
                </p>

                <p className="text-lg leading-relaxed">
                  在我成長的年頭，我不覺得我是一個特別的人，但我知道自己是一個努力的人。
                  我喜歡探索新事物，喜歡打遊戲，喜歡成就感，所以愛學習新技能。
                </p>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    基本資料
                  </h3>
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-600">生日： 2001/02/13</p>
                    <p className="text-gray-600">
                      年齡： {calculateAge("2001/02/13")}
                    </p>
                    <p className="text-gray-600">學歷： 國立台北科技大學</p>
                    <p className="text-gray-600"> 系所： 電子工程系</p>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    我的興趣
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      機械
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      旅行
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      音樂
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                      閱讀
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-lg text-gray-500 animate-pulse">
        💡 點擊任意位置繼續閱讀
      </p>
    </div>
  );
}
