//
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { apiFilm } from '../../Api/Api';
import classNames from 'classnames/bind';
import style from './Movie.module.scss';
const cx = classNames.bind(style);
//
const MovieSl = [
    {
        name: 'Phim mới',
        slug: 'phim-moi',
    },
    {
        name: 'Phim bộ',
        slug: 'phim-bo',
    },
    {
        name: 'Phim le',
        slug: 'phim-le',
    },
    {
        name: 'TV Shows',
        slug: 'tv-shows',
    },
    {
        name: 'Hoạt hình',
        slug: 'hoat-hinh',
    },
    {
        name: 'Phim Vietsub',
        slug: 'phim-vietsub',
    },
    {
        name: 'Phim thuyết minh',
        slug: 'phim-thuyet-minh',
    },
    {
        name: 'Phim lòng tiếng',
        slug: 'phim-long-tieng',
    },
    {
        name: 'Phim bộ đang chiếu',
        slug: 'phim-bo-dang-chieu',
    },
    {
        name: 'Phim trọn bộ',
        slug: 'phim-tron-bo',
    },
    {
        name: 'Phim sắp chiếu',
        slug: 'phim-sap-chieu',
    },
    {
        name: 'Subteam',
        slug: 'subteam',
    },
];
//
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
//
const Country = [
    {
        name: 'Trung quốc',
        slug: 'trung-quoc',
    },
    {
        name: 'Hàn quốc',
        slug: 'han-quoc',
    },
    {
        name: 'Nhật bản',
        slug: 'nhat-ban',
    },
    {
        name: 'Thái lan',
        slug: 'thai-lan',
    },
    {
        name: 'Âu mỹ',
        slug: 'au-my',
    },
    {
        name: 'Đài loan',
        slug: 'dai-loan',
    },
    {
        name: 'Hồng kông',
        slug: 'hong-kong',
    },
    {
        name: 'Ấn độ',
        slug: 'an-do',
    },
    {
        name: 'Anh',
        slug: 'anh',
    },
    {
        name: 'Pháp',
        slug: 'phap',
    },
    {
        name: 'Canada',
        slug: 'canada',
    },
    {
        name: 'Đức',
        slug: 'duc',
    },
    {
        name: 'Tây ban nha',
        slug: 'tay-ban-nha',
    },
    {
        name: 'Thổ nhỉ kỳ',
        slug: 'tho-nhi-ky',
    },
    {
        name: 'Hà lan',
        slug: 'ha-lan',
    },
    {
        name: 'Nga',
        slug: 'nga',
    },
    {
        name: 'Ba lan',
        slug: 'ba-lan',
    },
    {
        name: 'Úc',
        slug: 'uc',
    },
    {
        name: 'Thụy điển',
        slug: 'thuy-dien',
    },
    {
        name: 'Bồ đồ nha',
        slug: 'bo-do-nha',
    },
    {
        name: 'Ý',
        slug: 'y',
    },
    {
        name: 'Đan mạch',
        slug: 'dan-mach',
    },
    {
        name: 'Châu phi',
        slug: 'chau-phi',
    },
    {
        name: 'Nam phi',
        slug: 'nam-phi',
    },
];
//
const Year = [
    {
        name: '2010',
        slug: '2010',
    },
    {
        name: '2011',
        slug: '2011',
    },
    {
        name: '2012',
        slug: '2012',
    },
    {
        name: '2013',
        slug: '2013',
    },
    {
        name: '2014',
        slug: '2014',
    },
    {
        name: '2015',
        slug: '20015',
    },
    {
        name: '2016',
        slug: '2016',
    },
    {
        name: '2017',
        slug: '2017',
    },
    {
        name: '2018',
        slug: '2018',
    },
    {
        name: '2019',
        slug: '2019',
    },
    {
        name: '2020',
        slug: '2020',
    },
    {
        name: '2021',
        slug: '2021',
    },
    {
        name: '2022',
        slug: '2022',
    },
    {
        name: '2023',
        slug: '2023',
    },
    {
        name: '2024',
        slug: '2024',
    },
    {
        name: '2025',
        slug: '2025',
    },
    {
        name: '2026',
        slug: '2026',
    },
];
//
export default function Movie() {
    const navigate = useNavigate();
    let location = useLocation();
    const slug = location?.state;

    //
    const [data, setDataa] = useState([]);

    const [nameMovie, setNameMovie] = useState('');
    useEffect(() => {
        apiFilm({
            method: 'GET',
            url: `danh-sach/${slug}.json?slug=${slug}`,
        })
            .then((res) => {
                setDataa(res.data.pageProps.data.items);
                setNameMovie(res.data.pageProps.data.titlePage);
            })
            .catch((err) => {
                console.error('Error fetching search data:', err);
            });
    }, [slug]);
    //
    // xử lý detailt movie
    const handleDetailt = (slug) => {
        navigate(`/detailt-film/${slug}.json?slug=${slug}`, { state: slug });
    };
    return (
        <div className={cx('movie')}>
            <div className={cx('menu')}>
                <ul>
                    <li>
                        <i className="fa-solid fa-house"></i>
                        <span>Trang chủ</span>
                        <i className={cx('fa-solid fa-chevron-right', 'icon')}></i>
                    </li>
                    <li>
                        <span>{nameMovie}</span>
                    </li>
                </ul>
            </div>
            {/* phim chiếu rạp */}
            <div className={cx('content')}>
                <h4>{nameMovie}</h4>
                <div className={cx('fillter')}>
                    <ul>
                        <li>
                            <span>Lọc phim</span>
                        </li>
                        <li>
                            <select>
                                <option selected>Loại phim</option>
                                {MovieSl.map((item, index) => {
                                    return (
                                        <option key={index} value={item.slug}>
                                            {item.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </li>
                        <li>
                            <select>
                                <option selected>Toàn thể loại</option>
                                {Category.map((item, index) => {
                                    return (
                                        <option key={index} value={item.slug}>
                                            {item.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </li>
                        <li>
                            <select>
                                <option selected>Toàn quốc giá</option>
                                {Country.map((item, index) => {
                                    return (
                                        <option key={index} value={item.slug}>
                                            {item.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </li>
                        <li>
                            <select>
                                <option selected>Toàn bộ năm</option>
                                {Year.map((item, index) => {
                                    return (
                                        <option key={index} value={item.slug}>
                                            {item.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </li>
                        <li>
                            <button>Tìm kiếm</button>
                        </li>
                    </ul>
                </div>
                <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {data.map((item, index) => {
                        return (
                            <div className={cx('item')} key={index}>
                                <a href="javascript:void(0)" onClick={() => handleDetailt(item.slug)}>
                                    <img
                                        className={cx('img')}
                                        src={`https://img.ophim.live/uploads/movies/${item.thumb_url}`}
                                        alt="..."
                                    />
                                    <span>{item.name}</span>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
