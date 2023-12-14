interface Props {
  className: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type: 'expense' | 'income';
}

export default function ExpenseToggle({ className, handleClick, type }: Props) {
  return (
    <button
      className={`${className} ${
        type === 'expense' ? 'bg-red-500' : 'bg-green-500'
      }`}
      onClick={handleClick}
    >
      {type.toUpperCase()}
    </button>
  );
}
