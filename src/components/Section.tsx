interface Props {
  children: React.ReactNode;
  classNameTop?: string;
  classNameBottom?: string;
}

function Section({ children, classNameTop, classNameBottom }: Props) {
  return (
    <section className={`flex justify-center ${classNameTop} p-5`}>
      <section className={`w-full max-w-6xl ${classNameBottom} 2xl:max-w-7xl`}>
        {children}
      </section>
    </section>
  );
}

export default Section;
