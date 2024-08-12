import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="mx-12">{children}</div>;
};

export default Container;
