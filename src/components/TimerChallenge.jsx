import React, { useRef, useState } from 'react'
import ResultsModal from './ResultsModal';

// let timer;

const TimerChallenge = ({title, targetTime}) => {

    const timer = useRef();
    const dialog = useRef();

    const [timeReamaing, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeReamaing > 0 && timeReamaing < targetTime * 1000;

    if (timeReamaing <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaing => prevTimeRemaing - 10)
        },  10);
    }

    const handleStop = () => {
        dialog.current.open();
        clearInterval(timer.current);
    }


  return (
    <>
        <ResultsModal ref={dialog} targetTime={targetTime} onReset={handleReset} remainingTime={timeReamaing}/>
        <section className='challenge'>
            <h2>{title}</h2>
            <p className='challenge-time'>
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                {timerIsActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active': undefined}>
                {timerIsActive ? "Time is running" : "Timer inactive"}
            </p>
        </section>
    </>

  )
}

export default TimerChallenge
