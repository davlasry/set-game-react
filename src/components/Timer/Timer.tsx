import { useContext, useEffect, useState } from 'react';
import { GameStateContext } from '../../GameProvider';

type Props = {
  seconds?: number;
};

export function Timer({ seconds }: Props) {
  const [timeLeft, setTimeLeft] = useState(seconds || 5);

  const { gameCountdownRunning: isRunning } = useContext(GameStateContext);

  useEffect(() => {
    // is creating a new interval every time
    // is the interval cleared every time the component re-renders?
    const interval = setInterval(() => {
      if (!isRunning) return;

      if (timeLeft === 0) return;

      setTimeLeft((seconds) => seconds - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, isRunning]);

  useEffect(() => {
    if (isRunning) {
      console.log('is running');
    } else {
      console.log('is NOT running');
    }
  }, [isRunning]);

  return (
    <div>
      <div>Time left</div>
      {timeLeft > 0 ? <div>{timeLeft}</div> : <div>Finished</div>}
    </div>
  );
}
