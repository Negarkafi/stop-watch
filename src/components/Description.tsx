interface Props {
  text: string;
}

export const Description = ({ text }: Props) => {
  return <p className="text-gray-600 mb-4">{text}</p>;
};
