import { useEffect, useState } from 'react';

function Timer({
  setCertTime,
  certTime,
  setErrorMsg,
  setcertConfirm,
  setBtnText,
}) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(3);

  useEffect(() => {
    const countDown = setInterval(() => {
      if (seconds === 0 && minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    if (minutes === 0 && seconds === 0) {
      setCertTime(true);
      setcertConfirm(false);
      setBtnText('재요청');
      setErrorMsg('* 유효기간이 만료된 인증번호 입니다.');
    }

    return () => clearInterval(countDown);
  }, [seconds]);

  return (
    <div style={{ color: 'black' }}>
      {minutes === 0 ? '0' : ''}
      {minutes} : {seconds < 10 ? '0' : ''}
      {seconds}
    </div>
  );
}

export default Timer;
