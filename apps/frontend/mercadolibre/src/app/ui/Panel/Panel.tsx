import { FC, ReactNode } from 'react';
import './Panel.scss';
import { BreadCrumb } from '../BreadCrumb/BreadCrumb';

export const Panel: FC<{ children: ReactNode; categories: string[] }> = async ({
  children,
  categories,
}) => {
  return (
    <>
      <BreadCrumb categories={categories}></BreadCrumb>
      <div className="panel">{children}</div>
    </>
  );
};
