interface Props {
  text: string;
}

export const Title = ({ text }: Props) => {
  return (
    <h1 className="text-2xl font-bold mb-4 justify-self-center">{text}</h1>
  );
};
