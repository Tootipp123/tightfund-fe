export const TextInput = ({
  placeholder = "",
  value = "",
  onChange = () => {},
}: {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="w-full border-b text-lg text-center bg-transparent border-light-tertiary px-4 py-2 placeholder:text-light-tertiary"
  />
);
