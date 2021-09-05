import React, { ReactNode } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 h-screen">
    {props.meta}

    <div
      className="mx-2 sm:mx-8 md:mx-16 grid h-full"
      style={{ gridTemplateRows: 'auto 1fr auto' }}
    >
      <Header />

      <div className="py-8 text-xl content">{props.children}</div>

      <Footer />
    </div>
  </div>
);

export { Main };
