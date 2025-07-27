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
  <div className="relative w-full">
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`text-${textAlign} w-full border-b text-lg bg-transparent border-light-tertiary px-4 py-2 placeholder:text-light-tertiary`}
    />
    <p className="text-dark-main opacity-[0.6] absolute right-3 top-2">
      {rightText}
    </p>
  </div>
);
