import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem('theme') || 'light', // استرجاع السمة المخزنة أو استخدام السمة الفاتحة كقيمة افتراضية
  setTheme: (newTheme) => {
    localStorage.setItem('theme', newTheme) // حفظ السمة الجديدة في التخزين المحلي
    document.documentElement.setAttribute('data-theme', newTheme) // تطبيق السمة على مستند HTML
    set({ theme: newTheme }) // تحديث حالة السمة في المخزن
  }
}))