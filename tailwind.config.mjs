/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // 启用手动切换黑夜模式
  theme: {
    extend: {
      colors: {
        // 自定义ACG配色
        'acg-blue': '#00e5ff',   // 电光蓝 (高亮)
        'acg-pink': '#ff0055',   // 赛博粉 (强调)
        'glass-day': 'rgba(255, 255, 255, 0.55)', // 白天玻璃
        'glass-night': 'rgba(15, 23, 42, 0.65)',  // 黑夜玻璃
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}