interface SkillLevelProps {
  level: number; // 0-5 的數值
  color?: string; // 可選的顏色，預設為藍色
  size?: "sm" | "md" | "lg"; // 可選的尺寸
}

export default function SkillLevel({
  level,
  color = "blue",
  size = "md",
}: SkillLevelProps) {
  // 確保 level 在 0-5 範圍內
  const normalizedLevel = Math.max(0, Math.min(5, Math.floor(level)));

  // 顏色映射
  const colorMap = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    indigo: "bg-indigo-500",
    teal: "bg-teal-500",
    orange: "bg-orange-500",
    gray: "bg-gray-500",
  };

  // 尺寸映射
  const sizeMap = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4",
  };

  const selectedColor =
    colorMap[color as keyof typeof colorMap] || colorMap.blue;
  const selectedSize = sizeMap[size];

  return (
    <div className="flex w-32 gap-0.5">
      {[1, 2, 3, 4, 5].map((index) => (
        <div
          key={index}
          className={`flex-1 ${index === 1 ? "rounded-l-full" : ""} ${
            index === 5 ? "rounded-r-full" : ""
          } ${selectedSize} border-2 border-gray-300 transition-all duration-200 shadow ${
            index <= normalizedLevel
              ? `${selectedColor} border-transparent`
              : "bg-gray-100"
          }`}
        />
      ))}
    </div>
  );
}
