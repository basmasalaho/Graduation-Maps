/* eslint-disable react/prop-types */
import styles from "../../assets/styles/gameHeading.module.css"
export const GameHeading = ({ selectGenre, selectPlatform }) => {
    // إنشاء عنوان ديناميكي بناء على النوع والمنصة المحددة
    const heading = `${selectGenre?.name || ""} ${selectPlatform?.name || ""} Games`;

    // عرض العنوان مع تطبيق أنماط CSS
    return <h1 className={styles.gradientText}>{heading}</h1>;
};
