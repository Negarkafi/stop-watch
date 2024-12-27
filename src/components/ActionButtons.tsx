import { ActionButton } from '@components/ActionButton';

interface Props {
  handleStart: () => unknown;
  handleStop: () => unknown;
  handleReset: () => unknown;
  handleLap: () => unknown;
}
export const ActionButtons = ({
  handleLap,
  handleReset,
  handleStart,
  handleStop,
}: Props) => {
  return (
    <div className="flex space-x-4 mb-4 justify-center">
      <ActionButton
        onClick={handleStart}
        text="Start"
        classes="bg-green-400 hover:bg-green-600"
      />
      <ActionButton
        onClick={handleStop}
        text="Stop"
        classes="bg-yellow-400 hover:bg-yellow-600"
      />
      <ActionButton
        onClick={handleReset}
        text="Reset"
        classes="bg-red-400 hover:bg-red-600"
      />
      <ActionButton
        onClick={handleLap}
        text="Lap"
        classes="bg-blue-400 hover:bg-blue-600"
      />
    </div>
  );
};
