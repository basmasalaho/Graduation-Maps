import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useData = (endpoint, requestConfig, deps) => {
    const [data, setData] = useState([]); // تخزين البيانات المستجلبة
    const [error, setError] = useState(false); // تخزين حالة الخطأ
    const [isLoading, setLoading] = useState(false); // تخزين حالة التحميل

    useEffect(
        () => {
            const controller = new AbortController(); // إنشاء متحكم لإلغاء الطلب

            setLoading(true);
            apiClient
                .get(endpoint, { signal: controller.signal, ...requestConfig })
                .then((res) => {
                    setLoading(false);
                    setData(res.data.results); // تحديث البيانات بعد نجاح الطلب
                })
                .catch((err) => {
                    if (err instanceof CanceledError) return; // تجاهل الأخطاء الناتجة عن إلغاء الطلب
                    setError(err.message);
                    setLoading(false);
                });

            return () => controller.abort(); // إلغاء الطلب عند تفكيك المكون
        },
        deps ? [...deps] : []
    );

    return { data, error, isLoading };
};

export default useData;
