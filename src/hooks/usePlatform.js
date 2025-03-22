import { useQuery } from "@tanstack/react-query";
import apiClient from "../../src/services/api-client"; 

const fetchGenres = async () => {
  const { data } = await apiClient.get("/platforms/lists/parents"); // جلب قائمة المنصات الرئيسية
  return data;
};

const usePlatform = () => {
  return useQuery({
    queryKey: ["PlatForm"], // مفتاح فريد لتخزين بيانات المنصات
    queryFn: fetchGenres, // استدعاء دالة جلب المنصات
  });
};
export default usePlatform;
///platforms/lists/parents