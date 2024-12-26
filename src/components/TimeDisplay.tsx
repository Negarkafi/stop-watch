import { formatTime } from '../lib/helper/formatTime';

interface Props {
  time: number;
}

export const TimeDisplay = ({ time }: Props) => {
  return (
    <div className="text-4xl font-bold text-center my-6 py-6 bg-blue-50 rounded-lg shadow-lg">
      {formatTime(time)}
    </div>
  );
};
