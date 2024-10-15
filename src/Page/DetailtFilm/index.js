//
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

//
import { apiDetailFilm } from '../../Api/Api';
//
import classNames from 'classnames/bind';
import style from './DetailtFilm.module.scss';
const cx = classNames.bind(style);
export default function DetailtFilm() {
    const navigate = useNavigate();
    let location = useLocation();
    // const url = new URLSearchParams(location.slug).get('slug');
    const url = location?.state;

    //
    const [show, setShow] = useState(false);
    const [showGroup, setShowGroup] = useState(false);
    //
    const [image, setImage] = useState('');
    const [data, setData] = useState([]);
    const [group, setGroup] = useState([]);

    useEffect(() => {
        apiDetailFilm({
            method: 'GET',
            url: `phim/${url}.json?slug=${url}`,
        })
            .then((res) => {
                setImage(res.data.pageProps.data.seoOnPage.seoSchema);
                setData(res.data.pageProps.data.item);
                // Lặp qua các tập phim để thu thập server_data
                const episodes = res.data.pageProps.data.item.episodes;
                const allServerData = episodes.flatMap((episode) => episode.server_data);
                setGroup(allServerData);
            })
            .catch((err) => {
                console.error('Error fetching detailt film data:', err);
            });
    }, [url]);
    const getTextFromHTML = (htmlString) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        return doc.body.textContent || '';
    };

    //
    return (
        <>
            <div className={cx('detailt')}>
                <div className={cx('grid gap-2 grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4', 'mt')}>
                    <div className={cx('col-span-1', 'left')}>
                        <img className={cx('img')} src={image.image} alt={image.image} />
                        <button>
                            <a href="#xemphim">Xem phim</a>
                        </button>
                    </div>
                    <div className={cx('col-span-3', 'right')}>
                        <div className={cx('title')}>
                            <h3>{image.name}</h3>
                        </div>
                        <ul>
                            <li>
                                <h4>Trang thái</h4>
                                <span>{data.status}</span>
                            </li>
                            <li>
                                <h4>Số tập</h4>
                                <span>{data.episode_current}</span>
                            </li>
                            <li>
                                <h4>Thời lượng</h4>
                                <span>{data.time}</span>
                            </li>
                            <li>
                                <h4>Năm phát hành</h4>
                                <span>{data.year}</span>
                            </li>
                            <li>
                                <h4>Chất lượng</h4>
                                <span>{data.quality}</span>
                            </li>
                            <li>
                                <h4>Ngôn ngữ</h4>
                                <span>{data.lang}</span>
                            </li>
                            <li>
                                <h4>Đạo diễn</h4>
                                <span>{data.origin_name}</span>
                            </li>
                            <li>
                                <h4>Diễn viên</h4>
                                <span>{data.actor}</span>
                            </li>
                            <li>
                                <h4>Thể loại</h4>
                                <span>{data.name}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{ backgroundColor: ' rgb(30 41 59)', padding: '20px' }}>
                    <div className={cx('content')}>
                        <div className={cx('info')}>
                            <div className={cx('wrapper')}>
                                <span>Nội dung phim</span>
                                <i
                                    className={`fa-solid fa-chevron-${show ? 'up' : 'down'}`}
                                    onClick={() => setShow((prev) => !prev)}
                                ></i>
                            </div>
                            <div className={cx('info-content', `${show ? 'hide' : ''}`)}>
                                {getTextFromHTML(data.content)}
                            </div>
                        </div>
                    </div>
                    <div className={cx('group')}>
                        <div className={cx('info')}>
                            <div className={cx('wrapper')}>
                                <span>Xem phim</span>
                                <i
                                    className={`fa-solid fa-chevron-${showGroup ? 'up' : 'down'}`}
                                    onClick={() => setShowGroup((prev) => !prev)}
                                ></i>
                            </div>
                            <div className={cx('info-content', `${showGroup ? 'hide' : ''}`)}>
                                <div
                                    className={cx(
                                        'grid gap-2 grid-cols-1 sm:grid-cols-10 md:grid-cols-10 lg:grid-cols-10',
                                    )}
                                >
                                    {group.map((item, index) => {
                                        return (
                                            <button
                                                id="xemphim"
                                                onClick={() => window.open(`${item.link_embed}`, '_blank')}
                                                className={cx('col-span-1', 'item')}
                                                key={index}
                                            >
                                                {item.name}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
