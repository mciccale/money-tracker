interface Props {
  className: string;
  label: string;
}

export default function ExpenseButton({ className, label }: Props) {
  return (
    <button className={className} type="submit">
      {label}
    </button>
  );
}
