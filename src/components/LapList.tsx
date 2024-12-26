import { LapItem } from './LapItem';

interface Porps {
  laps: number[];
}
export const LapList = ({ laps }: Porps) => {
  return (
    <ul className="list-disc list-inside">
      {laps.map((lap, index) => (
        <LapItem key={index} lap={lap} index={index} />
      ))}
    </ul>
  );
};
