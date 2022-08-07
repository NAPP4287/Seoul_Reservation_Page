import { useEffect, useState } from 'react';

function Timer({
  setCertTime,
  certTime,
  setEndCertTime,
  setcertConfirm,
  setErrorMsg,
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
      setEndCertTime(true);
      setErrorMsg(false);
    }

    return () => clearInterval(countDown);
  }, [seconds]);

  return (
    <div className='timerHeight'>
      {minutes === 0 ? '0' : ''}
      {minutes} : {seconds < 10 ? '0' : ''}
      {seconds}
    </div>
  );
}

export default Timer;
