interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
  onBlur?: () => unknown;
  defaultValue?: number;
  label?: string;
  type: string;
}

export const UncontrolledInput = ({
  onBlur,
  inputRef,
  defaultValue,
  label,
  type,
}: Props) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        className="w-full px-3 py-2 border rounded"
        ref={inputRef}
        type={type}
        defaultValue={defaultValue}
        onBlur={onBlur}
        min={0}
        step={1}
      />
    </div>
  );
};
