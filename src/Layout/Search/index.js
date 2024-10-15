//
import { useEffect, useState } from 'react';
import { apiSearch } from '../../Api/Api';
import useDebounce from '../../Hook/Debounce';
//
import Tippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css'; // optional
import classname from 'classnames/bind';
import style from './Search.module.scss';
import { useNavigate } from 'react-router-dom';
const cx = classname.bind(style);
export default function Search() {
    const navigate = useNavigate();

    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(true);

    const [data, setData] = useState([]);

    const dounce = useDebounce(value, 1000);

    useEffect(() => {
        if (!dounce.trim()) {
            return;
        }
        setVisible(true);
        apiSearch({
            method: 'GET',
            url: `tim-kiem.json?keyword=${dounce}`,
        })
            .then((res) => {
                if (res && res.data && res.data.pageProps && res.data.pageProps.data) {
                    setData(res.data.pageProps.data.items || []); // Lấy items nếu có
                    setVisible(false);
                }
            })
            .catch((err) => console.error('Error fetching search data:', err));
    }, [dounce]);

    const handleOnchange = (e) => {
        setValue(e.target.value);
    };
    console.log('check data', data);

    const handleFocus = () => {
        setShow(true);
    };
    const handleFocusFalse = () => {
        setShow(false);
    };

    // clear
    const handleClear = () => {
        setValue('');
        setData([]);
    };

    //
    const handleDetailt = (slug) => {
        navigate(`/detailt-film/${slug}.json?slug=${slug}`, { state: slug });
        setShow(false);
    };
    return (
        <Tippy
            visible={data.length > 0 && show}
            interactive
            placement="bottom"
            onClickOutside={handleFocusFalse}
            render={(attrs) => (
                <div className={cx('result')} tabIndex="-1" {...attrs}>
                    <div className={cx('wrapper')}>
                        <h4>Search key value</h4>
                        <div className={cx('list')}>
                            <ul>
                                {data &&
                                    data.length > 0 &&
                                    data.map((item, index) => (
                                        <li key={index} onClick={() => handleDetailt(item.slug)}>
                                            <a href="javascript:void(0)">
                                                <i class="fa-sharp fa-light fa-magnifying-glass"></i> {item.name}
                                            </a>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    onFocus={handleFocus}
                    value={value}
                    type="text"
                    placeholder="Search"
                    onChange={(e) => handleOnchange(e)}
                />
                {!visible && value ? (
                    <button className={cx('btn-clear')} onClick={handleClear}>
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                ) : (
                    visible && (
                        <button className={cx('btn-loading')}>
                            <i class="fa-regular fa-spinner"></i>
                        </button>
                    )
                )}

                <button className={cx('btn-search')}>
                    <i class="fa-sharp fa-light fa-magnifying-glass"></i>
                </button>
            </div>
        </Tippy>
    );
}
