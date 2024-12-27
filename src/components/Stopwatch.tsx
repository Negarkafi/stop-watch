import React, { useEffect, useRef, useState } from 'react';
import { UncontrolledInput } from '@components/UncontrolledInput';
import { TimeDisplay } from '@components/TimeDisplay';
import { ActionButtons } from '@components/ActionButtons';
import { LapDisplay } from '@components/LapDisplay';
import { Title } from '@components/Title';
import { Description } from '@components/Description';

const Stopwatch: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [laps, setLaps] = useState<number[]>([]);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const timeInputRef = useRef<HTMLInputElement>(null);
  const intervalInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const handleStart = () => {
    if (intervalId) return;
    const interval = Number(intervalInputRef.current?.value) || 1;
    const id = window.setInterval(() => {
      setTime(prevTime => prevTime + interval);
    }, interval * 1000);
    setIntervalId(id);
  };

  const handleStop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const handleReset = () => {
    handleStop();
    setTime(0);
    setLaps([]);
    if (timeInputRef.current) timeInputRef.current.value = '0';
    if (intervalInputRef.current) intervalInputRef.current.value = '1';
  };

  const handleSetTime = () => {
    const newTime = Number(timeInputRef.current?.value) || 0;
    setTime(newTime);
  };

  const handleLap = () => {
    setLaps(prevLaps => [...prevLaps, time]);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded shadow-lg">
      <Title text="Adjustable Interval Stopwatch" />
      <Description text="Set the time and interval, then click start to begin the stopwatch." />
      <UncontrolledInput
        onBlur={handleSetTime}
        type="number"
        defaultValue={0}
        label="Set Time (seconds):"
        inputRef={timeInputRef}
      />
      <UncontrolledInput
        type="number"
        defaultValue={1}
        label="Set Interval (seconds)"
        inputRef={intervalInputRef}
      />
      <TimeDisplay time={time} />
      <ActionButtons
        handleStart={handleStart}
        handleStop={handleStop}
        handleReset={handleReset}
        handleLap={handleLap}
      />
      <LapDisplay laps={laps} />
    </div>
  );
};

export default Stopwatch;
