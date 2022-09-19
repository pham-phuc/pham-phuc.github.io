import classNames from 'classnames/bind';
import Header from '~/component/Layout/component/Header';
import styles from './Defaultlayout.module.scss';
import Sidebar from './Sidebar';
const cx = classNames.bind(styles);
function Defaultlayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default Defaultlayout;
