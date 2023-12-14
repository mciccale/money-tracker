interface Props {
  className?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
  type?: string;
  value: string | number;
}

export default function ExpenseInput({
  className = '',
  handleChange,
  placeholder = '',
  type,
  name,
  value,
}: Props) {
  return (
    <input
      className={className}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={handleChange}
    />
  );
}
