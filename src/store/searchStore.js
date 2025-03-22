import { create } from 'zustand'

const useSearchStore = create((set) => ({
  searchText: '', // تخزين نص البحث الحالي
  setSearchText: (text) => set({ searchText: text }), // تحديث نص البحث في المخزن
}))
export default useSearchStore