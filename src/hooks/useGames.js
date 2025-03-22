import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useGames = (selectGenre, selectPlatform, selectSortOrder, searchText) => {
  return useInfiniteQuery({
    queryKey: ["games", selectGenre?.id, selectPlatform?.id, selectSortOrder, searchText], // مفتاح الاستعلام للتخزين المؤقت
    queryFn: ({ pageParam = 1 }) => 
      apiClient
        .get("/games", {
          params: {
            genres: selectGenre?.id, // تصفية حسب النوع
            platforms: selectPlatform?.id, // تصفية حسب المنصة
            ordering: selectSortOrder, // ترتيب النتائج
            search: searchText, // البحث عن الألعاب
            page: pageParam, // رقم الصفحة الحالية
          },
        })
        .then((res) => res.data),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined; // تحديد رقم الصفحة التالية
    },
    staleTime: 24 * 60 * 60 * 1000, // مدة صلاحية البيانات المخزنة مؤقتاً (24 ساعة)
  });
};

export default useGames;