//
import image from '../../../assets/image';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);
export default function Footer() {
    return (
        <div className={cx('footer')}>
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                <div className={cx('footer-item')}>
                    <div className={cx('footer-logo')}>
                        <img src={image.logo} alt="logo" />
                        <h4>ByTheoGio.film</h4>
                    </div>
                    <span>
                        Copyright 2023 © https://phiimoi.net/ Xem phim mới miễn phí nhanh chất lượng cao. Phimmoizz
                        online Việt Sub, Thuyết minh, lồng tiếng chất lượng HD. Xem phim nhanh online chất lượng cao
                    </span>
                </div>
                <div className={cx('footer-item')}>
                    <ul>
                        <li>
                            <h4>Quảng cáo ByTheoGio.com/Phim hay</h4>
                            <span>
                                Có vấn đề xin liên hệ :{' '}
                                <a href="https://t.me/ByTheoGio">
                                    <i className="fa-solid fa-envelope"></i>
                                </a>{' '}
                                bong bóng
                            </span>
                            <span>
                                Liên hệ quảng cáo :{' '}
                                <a href="https://t.me/ByTheoGio">
                                    <i style={{ fontSize: '20px' }} className="fa-brands fa-telegram"></i>
                                </a>
                            </span>
                            <span>
                                Tham gia nhóm để cập nhật về Phim hay :{' '}
                                <a href="https://t.me/ByTheoGio">
                                    <i style={{ fontSize: '20px' }} className="fa-brands fa-telegram"></i>
                                </a>{' '}
                                Điện tín Tv Chanel
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={cx('footer-item')}>
                    <div className={cx('footer-contact')}>
                        <h4>Liên hệ</h4>
                        <span>
                            <i class="fa-solid fa-phone"></i> 231892138213
                        </span>
                        <span>231892138213</span>
                        <span>231892138213</span>
                        <span>231892138213</span>
                        <span>231892138213</span>
                    </div>
                </div>
            </div>
            <span className={cx('footer-copyright')}>ByTheoGio.film © 2023</span>
        </div>
    );
}
