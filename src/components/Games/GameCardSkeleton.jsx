const GameCardSkeleton = () => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {/* مكان لعرض صورة اللعبة أثناء التحميل */}
            <div className="rounded-t-lg bg-gray-300 w-full h-60 animate-pulse"></div>
            <div className="p-5">
                {/* مكان لعرض عنوان اللعبة أثناء التحميل */}
                <div className="h-6 bg-gray-300 rounded-md mb-4 w-3/4 animate-pulse"></div>
                <div className="flex justify-between items-center">
                    {/* مكان لعرض أيقونات المنصات أثناء التحميل */}
                    <div className="flex space-x-2">
                        <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
                        <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
                        <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
                    </div>
                    {/* مكان لعرض تقييم اللعبة أثناء التحميل */}
                    <div className="w-10 h-6 bg-gray-300 rounded-md animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default GameCardSkeleton;
