import { formatTime } from '@lib/helper/formatTime';

interface Props {
  lap: number;
  index: number;
}

export const LapItem = ({ lap, index }: Props) => {
  return (
    <li>
      Lap {index + 1}: {formatTime(lap)}
    </li>
  );
};
