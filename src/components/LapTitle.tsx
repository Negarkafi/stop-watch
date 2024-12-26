interface Props {
  text: string;
}
export const LapTitle = ({ text }: Props) => {
  return <h2 className="text-xl font-bold mb-2">{text}</h2>;
};
