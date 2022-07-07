type Props = {
  main: React.ReactElement;
  aside: React.ReactNode;
};

export const Contents: React.VFC<Props> = ({ main, aside }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
    <div className="lg:col-span-2">
      <main>{main}</main>
    </div>
    <aside>{aside}</aside>
  </div>
);
