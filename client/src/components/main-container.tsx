interface Props {
  children: string | JSX.Element | (string | JSX.Element)[];
}

export default function MainContainer({ children }: Props) {
  return (
    <main className="mx-auto w-full min-w-0 max-w-[1000px]">
      <div className="flex flex-col items-center justify-center pt-10 dark:text-white">
        {children}
      </div>
    </main>
  );
}
