const CriticScore = ({ score }) => {
    let color = score > 75 ? "orange" : score > 60 ? "yellow" : ""; // تحديد اللون بناء على النتيجة
    return (
        <span className={`bg-${color}-600 text-${color}-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-${color} dark:text-${color}-300`}>
            {score}
        </span> // عرض النتيجة
    );
};

export default CriticScore;
