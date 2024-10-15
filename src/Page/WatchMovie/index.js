import classNames from 'classnames/bind';
import style from './WathMovie.module.scss';
const cx = classNames.bind(style);
export default function WatchMovie() {
    return (
        <div className={cx('watchmovie')}>
            <iframe class="w-full aspect-video ..." src="https://www.youtube.com/..."></iframe>
        </div>
    );
}
