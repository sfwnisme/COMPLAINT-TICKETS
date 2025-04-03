import Loader from '../loader/Loader';
import styles from './PageLoader.module.css';

export default function PageLoader() {
  return (
    <div className={styles.container}>
      <Loader />
      {/* <div className={styles.spinner}></div> */}
    </div>
  );
}