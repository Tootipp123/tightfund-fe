export const TextInput = ({
  placeholder = "",
  value = "",
  type = "text",
  textAlign = "center",
  onChange = () => {},
  rightText = "",
}: {
  placeholder?: string;
  type?: "text" | "number";
  value?: string;
  textAlign?: "center" | "left";
  onChange?: (value: string) => void;
  rightText?: string;
}) => (
  <div className="relative w-full border-b border-light-tertiary flex items-center justify-center">
    <p className="text-dark-main opacity-[0.6] text-center">{rightText}</p>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`text-${textAlign} w-full text-lg bg-transparent px-4 py-2 placeholder:text-light-tertiary`}
    />
  </div>
);
