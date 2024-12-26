import { LapList } from './LapList';
import { LapTitle } from './LapTitle';

interface Props {
  laps: number[];
}

export const LapDisplay = ({ laps }: Props) => {
  return (
    <div>
      {laps.length === 0 ? '' : <LapTitle text={'Lap Times:'} />}
      <LapList laps={laps} />
    </div>
  );
};
