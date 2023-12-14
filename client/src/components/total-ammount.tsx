interface Props {
  ammount: number;
}

export default function TotalAmmount({ ammount }: Props) {
  return <h1 className="pb-8 text-6xl font-bold">${ammount / 100}</h1>;
}
