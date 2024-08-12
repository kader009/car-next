import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="mx-[120px]">{children}</div>;
};

export default Container;
