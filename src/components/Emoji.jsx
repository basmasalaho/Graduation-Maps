import bullsEye from "../assets/images/bulls-eye.webp";
import meh from "../assets/images/meh.webp";
import thumbsUp from "../assets/images/thumbs-up.webp";

export const Emoji = ({ rating }) => {
    if (rating < 3) return null; // عدم عرض أي رمز إذا كانت النتيجة أقل من 3

    const emojiMap = {
        3: { src: meh, alt: "meh" }, // رمز "meh" للنتيجة 3
        4: { src: thumbsUp, alt: "thumbsUp" }, // رمز "thumbsUp" للنتيجة 4
        5: { src: bullsEye, alt: "bullsEye" }, // رمز "bullsEye" للنتيجة 5
    };

    return <img {...emojiMap[rating]} width={25} />; // عرض الرمز المناسب بناء على النتيجة
};
