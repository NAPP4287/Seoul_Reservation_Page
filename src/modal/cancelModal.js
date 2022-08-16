import { ModalBack } from '../style/invalidModalStyle';
import { customAxios } from '../axios/custromAxios';
import { useNavigate } from 'react-router';
import { filterLanguage } from '../common/filterLanguage';
import { useDispatch, useSelector } from 'react-redux';
import { removeToken, getAccessToken } from '../redux/token/accessToken';
import { useState } from 'react';
import InvalidModal from '../modal/invalidModal';

function CancelModal({ setShowCancelModal, reservationCode, langType }) {
  const navigate = useNavigate();
  const token = useSelector(getAccessToken);
  const dispatch = useDispatch();

  const goLanding = () => {
    navigate('/');
  };

  const closeModal = () => {
    setShowCancelModal(false);
  };

  const cancelReservation = () => {
    customAxios
      .post(
        '/reservation/cancel',
        {
          reservationCode: reservationCode,
        },
        { headers: { authorization: `Bearer ${token.accessToken}` } }
      )
      .then((r) => {
        if (r.data.result === 'success') {
          navigate('/checkReservation/reservationList/edit/cancel');
        }
      })
      .then(() => {
        dispatch(removeToken());
      })
      .catch((e) => console.log(e));
  };

  return (
    <ModalBack>
      <div className='modalBox'>
        <div className='title'>{filterLanguage('queCancel', langType)}</div>
        <div className='cancelBtnWrap'>
          <button onClick={cancelReservation}>
            {filterLanguage('yes', langType)}
          </button>
          <button onClick={closeModal}>{filterLanguage('no', langType)}</button>
        </div>
      </div>
    </ModalBack>
  );
}

export default CancelModal;
