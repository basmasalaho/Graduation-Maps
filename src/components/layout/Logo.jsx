const Logo = ({ image, text, className }) => {
    return <img src={image} alt={text} className={`logo ${className}`} />; // عرض الشعار مع تطبيق الأنماط
};

export default Logo;
