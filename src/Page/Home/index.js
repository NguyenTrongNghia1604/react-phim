//
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiCarousel, apiFilm } from '../../Api/Api';
import classnames from 'classnames/bind';
import style from './Home.module.scss';
const cx = classnames.bind(style);
export default function Home() {
    const navigate = useNavigate();

    const [carousel, setCarousel] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0); // Slide hiện tại

    // phim chiếu rạp
    const [filmTheater, setFilmTheater] = useState([]);
    const [movieSeries, setMovieSeries] = useState([]);
    const [movieSingle, setMovieSingle] = useState([]);

    useEffect(() => {
        apiCarousel({
            method: 'GET',
            url: 'danh-sach/phim-de-cu.json?slug=phim-de-cu',
        })
            .then((res) => {
                let data = res.data.pageProps.data.items;
                setCarousel(data);
            })
            .catch((err) => console.error('Error fetching search data:', err));
    }, []);

    // phim chiếu rạp
    useEffect(() => {
        apiFilm({
            method: 'GET',
            url: 'danh-sach/phim-chieu-rap.json?slug=phim-chieu-rap',
        })
            .then((res) => {
                setFilmTheater(res.data.pageProps.data.items);
            })
            .catch((err) => console.error('Error fetching search data:', err));
    }, []);

    // phim bộ hay tuyển chọn
    useEffect(() => {
        apiFilm({
            method: 'GET',
            url: 'danh-sach/phim-bo-hay-tuyen-chon.json?slug=phim-bo-hay-tuyen-chon',
        })
            .then((res) => {
                setMovieSeries(res.data.pageProps.data.items);
            })
            .catch((err) => console.error('Error fetching search data:', err));
    }, []);

    // phim lẻ hay tuyển chọn
    useEffect(() => {
        apiFilm({
            method: 'GET',
            url: 'danh-sach/phim-le-hay-tuyen-chon.json?slug=phim-le-hay-tuyen-chon',
        })
            .then((res) => {
                setMovieSingle(res.data.pageProps.data.items);
            })
            .catch((err) => console.error('Error fetching search data:', err));
    }, []);
    // Xử lý chuyển sang slide tiếp theo
    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % carousel.length); // Chuyển sang slide kế tiếp
    };

    // Xử lý chuyển về slide trước (nếu có nút prev)
    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + carousel.length) % carousel.length); // Chuyển về slide trước
    };

    // xử lý detailt movie
    const handleDetailt = (slug) => {
        navigate(`/detailt-film/${slug}.json?slug=${slug}`, { state: slug });
    };
    return (
        <div className={cx('home')}>
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className={cx('relative h-56 overflow-hidden rounded-lg md:h-96', 'side')}>
                    {carousel.length > 0 && (
                        <div className="duration-600 ease-in-out" data-carousel-item>
                            <a href="#">
                                <img
                                    src={`https://img.ophim.live/uploads/movies/${carousel[currentSlide]?.thumb_url}`}
                                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    alt="..."
                                />
                            </a>
                        </div>
                    )}
                </div>
                <button
                    onClick={handlePrev}
                    type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    onClick={handleNext}
                    type="button"
                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

            {/* phim chiếu rạp */}
            <div className={cx('content')}>
                <h4>Phim chiếu rạp</h4>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filmTheater.map((item, index) => {
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
            {/* phim bộ hay tuyển chọn */}
            <div className={cx('content')}>
                <h4>Phim bộ hay tuyển chọn</h4>
                <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {movieSeries.map((item, index) => {
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
                {/* phim lẻ hay tuyển chọn */}
                <div className={cx('content')}>
                    <h4>Phim lẻ hay tuyển chọn</h4>
                    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {movieSingle.map((item, index) => {
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
        </div>
    );
}
