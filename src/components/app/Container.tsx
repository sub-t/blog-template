import { Slot } from '@radix-ui/react-slot';

type Props = React.ComponentPropsWithoutRef<'div'>;

export const Container: React.VFC<Props> = ({ children, ...props }) => {
  return (
    <Slot {...props}>
      <div className="p-6">
        <div className="container xl:max-w-7xl mx-auto">{children}</div>
      </div>
    </Slot>
  );
};
