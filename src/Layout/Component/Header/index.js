import { Disclosure, DisclosureButton } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

//
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//
import image from '../../../assets/image';
//
import Search from '../../Search';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
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
        slug: 'bi-dan',
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
        slug: 'the-thao',
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
        slug: 'hai-huc',
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
        slug: 'than-thoi',
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
export default function Header() {
    const navigator = useNavigate();

    const [showMenu, setShowMenu] = useState(false);

    const [showCategory, setShowCategory] = useState(false);

    // xử lý sho menu
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleShowCategory = () => {
        setShowCategory(!showCategory);
    };

    // xử lý fillter category
    const handleFillterCategory = (slug) => {
        navigator(`/fillter-category/${slug}.json?${slug}`, { state: slug });
    };

    // xử lý category
    const handleMovie = (slug) => {
        navigator(`/movie/${slug}.json?${slug}`, { state: slug });
    };

    return (
        <>
            <div className={cx('header')}>
                <Disclosure as="nav" className="bg-gray-800">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <button className={cx('btn-menu')} onClick={handleShowMenu}>
                                    <i class="fa-solid fa-bars"></i>
                                </button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        style={{ width: '100px', height: '50px' }}
                                        alt="Your Company"
                                        src={image.logo}
                                        className="h-8 w-auto"
                                    />
                                    <span className={cx('name')}>PhimHay.com</span>
                                </div>
                            </div>
                            {/* <div
                                className={cx(
                                    'grow items-center justify-center sm:items-stretch sm:justify-start',
                                    'search',
                                )}
                            >
                                <Search />
                            </div> */}
                            <div
                                className={cx(
                                    'absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0',
                                    'search',
                                )}
                            >
                                {/* <button
                                    type="button"
                                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                                </button> */}
                                <Search />
                            </div>
                        </div>
                    </div>
                </Disclosure>
                )
            </div>
            {showMenu && (
                <div className={cx('menu')}>
                    <button className={cx('close')} onClick={handleShowMenu}>
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <ul>
                        <li>
                            <a href="/">
                                <span className={cx('text')}>Trang chủ</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" className={cx('cate')}>
                                <span className={cx('text')}>Thẻ loại</span>
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
                            <a href="javascript:void(0)">
                                <span className={cx('text')}>Phim mới</span>
                            </a>
                        </li>
                        <li onClick={() => handleMovie('phim-bo')}>
                            <a href="javascript:void(0)">
                                <span className={cx('text')}>Phim bộ</span>
                            </a>
                        </li>
                        <li onClick={() => handleMovie('phim-le')}>
                            <a href="javascript:void(0)">
                                <span className={cx('text')}>Phim lẻ</span>
                            </a>
                        </li>
                        <li onClick={() => handleMovie('phim-sap-chieu')}>
                            <a href="javascript:void(0)">
                                <span className={cx('text')}>Phim sắp chiếu</span>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}
