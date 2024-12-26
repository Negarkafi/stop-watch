import { cn } from '../lib/helper/cn';

interface Props {
  onClick?: () => unknown;
  text: string;
  classes?: string;
}

export const ActionButton = ({ onClick, text, classes }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn('px-4 py-2 text-white rounded', classes)}
    >
      {text}
    </button>
  );
};
