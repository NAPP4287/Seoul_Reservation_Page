import { LoadingWrap } from '../style/loadingStyle';
import Spinner from '../assets/loadingSpin.gif';

function Loading() {
  return (
    <LoadingWrap>
      <img src={Spinner} alt='loading' />
    </LoadingWrap>
  );
}

export default Loading;
