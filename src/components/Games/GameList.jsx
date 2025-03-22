import { useInView } from "react-intersection-observer"; // لمراقبة ظهور العناصر
import React, { useEffect } from "react"; 
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import styles from "../../../src/assets/styles/gameList.module.css";
import useSearchStore from "../../store/searchStore"; 

const GameList = ({
  selectGenre, // النوع المحدد للعبة
  selectPlatform, // المنصة المحددة للعبة
  selectSortOrder, // ترتيب الفرز المحدد
}) => {
  const { ref, inView } = useInView(); // مراقبة ظهور العناصر على الشاشة
  const { searchText } = useSearchStore(); // نص البحث

  const {
    data, // بيانات الألعاب
    error, // خطأ إذا حدث
    isLoading, // حالة التحميل
    fetchNextPage, // دالة لجلب الصفحة التالية
    hasNextPage, // هل هناك صفحات إضافية
    isFetchingNextPage, // هل يتم جلب الصفحة التالية
  } = useGames(selectGenre, selectPlatform, selectSortOrder, searchText);

  const skeletons = [1, 2, 3, 4, 5, 6]; 

  // تحميل المزيد من الألعاب عندما يظهر العنصر المحدد على الشاشة ويكون هناك المزيد من الصفحات المتاحة
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  // عرض رسالة خطأ إذا حدث خطأ أثناء جلب البيانات
  if (error)
    return (
      <div className={styles.errorMessage} role="alert">
        <span className="font-medium">There was an error!</span> {error.message}
      </div>
    );

  return (
    <div className={styles.gameList}>
      {/* عرض هياكل مؤقتة لبطاقات الألعاب أثناء التحميل */}
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

      {/* عرض بطاقات الألعاب بناء على البيانات التي تم جلبها */}
      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.results.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </React.Fragment>
      ))}

      {/* تحميل المزيد من الألعاب عندما يظهر العنصر المحدد على الشاشة */}
      <div ref={ref}>
        {isFetchingNextPage && <div>Loading more games...</div>}
      </div>
    </div>
  );
};

export default GameList;