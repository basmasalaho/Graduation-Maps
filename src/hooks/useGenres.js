import { useQuery } from "@tanstack/react-query";
import apiClient from "../../src/services/api-client";  

// دالة لجلب البيانات
const fetchGenres = async () => {
  const { data } = await apiClient.get("/genres"); // جلب أنواع الألعاب من الخادم
  return data;
};

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"], // مفتاح فريد لتخزين البيانات في الذاكرة المؤقتة
    queryFn: fetchGenres, // استدعاء دالة جلب البيانات
  });
};

export default useGenres;
