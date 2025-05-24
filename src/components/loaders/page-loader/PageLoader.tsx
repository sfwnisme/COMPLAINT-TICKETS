import LoadingIcon from '../../loadingIcon/LoadingIcon';
import Style from './PageLoader.module.css'

export default function PageLoader() {
  return (
    <div className={Style.container}>
      <LoadingIcon size={24} />
    </div>
  );
}