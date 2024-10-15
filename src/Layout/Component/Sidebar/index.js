//
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
const cx = classNames.bind(style);
const Category = [
    {
        name: 'Hành động',
        slug: 'hanh-dong',
    },
    {
        name: 'Cổ trang',
        slug: 'co-trang',
    },
    {
        name: 'Chiến tranh',
        slug: 'chien-tranh',
    },
    {
        name: 'Viễn tưởng',
        slug: 'vien-tuong',
    },
    {
        name: 'Kinh dị',
        slug: 'kinh-di',
    },
    {
        name: 'Tài liệu',
        slug: 'tai-lieu',
    },
    {
        name: 'Bí ẩn',
        slug: 'bi-an',
    },
    {
        name: 'Phim 18+',
        slug: 'phim-18',
    },
    {
        name: 'Tình cảm',
        slug: 'tinh-cam',
    },
    {
        name: 'Tâm lý',
        slug: 'tam-ly',
    },
    {
        name: 'Thể loại',
        slug: 'the-loai',
    },
    {
        name: 'Phiêu lưu',
        slug: 'phieu-luu',
    },
    {
        name: 'Âm nhạc',
        slug: 'am-nhac',
    },
    {
        name: 'Gia đình',
        slug: 'gia-dinh',
    },
    {
        name: 'Học đường',
        slug: 'hoc-duong',
    },
    {
        name: 'Hài hước',
        slug: 'hai-huoc',
    },
    {
        name: 'Hình sự',
        slug: 'hinh-su',
    },
    {
        name: 'Võ thuât',
        slug: 'vo-thuat',
    },
    {
        name: 'Khoa học',
        slug: 'khoa-hoc',
    },
    {
        name: 'Thần thoại',
        slug: 'than-thoai',
    },
    {
        name: 'Chính kịch',
        slug: 'chinh-kich',
    },
    {
        name: 'Kinh điển',
        slug: 'kinh-dien',
    },
];
export default function Sidebar() {
    const navigator = useNavigate();

    const [showCategory, setShowCategory] = useState(false);

    const handleShowCategory = () => {
        setShowCategory(!showCategory);
    };

    // xử lý fillter category
    const handleFillterCategory = (slug) => {
        navigator(`/fillter-category/${slug}.json?slug=${slug}`, { state: slug });
    };

    // xử lý category
    const handleMovie = (slug) => {
        navigator(`/movie/${slug}.json?slug=${slug}`, { state: slug });
    };
    return (
        <div className={cx('sidebar')}>
            <aside
                id="default-sidebar"
                className="z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-slate-700">
                    <ul className="space-y-2 font-medium">
                        <li onClick={() => navigator('/')}>
                            <a
                                href="javascript:void(0)"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
                            >
                                <span className={cx('flex-1 ms-3 whitespace-nowrap', 'text')}>Trang chủ</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="javascript:void(0)"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
                            >
                                <span className={cx('flex-1 ms-3 whitespace-nowrap', 'txt')}>Thể loại</span>
                                <span
                                    onClick={handleShowCategory}
                                    className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
                                >
                                    <i className="fa-sharp fa-regular fa-chevron-down"></i>
                                </span>
                            </a>
                            {showCategory && (
                                <ul className={cx('category')}>
                                    {Category.map((item, index) => {
                                        return (
                                            <li key={index} onClick={() => handleFillterCategory(item.slug)}>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
                                                >
                                                    <span className={cx('flex-1 ms-3 whitespace-nowrap', 'text')}>
                                                        {item.name}
                                                    </span>
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                        <li onClick={() => handleMovie('phim-moi')}>
                            <a
                                href="javascript:void(0)"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
                            >
                                <span className={cx('flex-1 ms-3 whitespace-nowrap', 'text')}>Phim mới</span>
                            </a>
                        </li>
                        <li onClick={() => handleMovie('phim-bo')}>
                            <a
                                href="javascript:void(0)"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
                            >
                                <span className={cx('flex-1 ms-3 whitespace-nowrap', 'text')}>Phim bộ</span>
                            </a>
                        </li>
                        <li onClick={() => handleMovie('phim-le')}>
                            <a
                                href="javascript:void(0)"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
                            >
                                <span className={cx('flex-1 ms-3 whitespace-nowrap', 'text')}>Phim lẻ</span>
                            </a>
                        </li>
                        <li onClick={() => handleMovie('phim-sap-chieu')}>
                            <a
                                href="javascript:void(0)"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
                            >
                                <span className={cx('flex-1 ms-3 whitespace-nowrap', 'text')}>Phim sắp chiêu</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
}
