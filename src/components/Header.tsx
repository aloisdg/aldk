import React from 'react';

import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';

const Header = () => {
  return (
    <header className="border-b border-gray-300 pt-16 pb-8 flex flex-wrap justify-between">
      <section>
        <div className="font-bold text-3xl text-gray-900">
          {AppConfig.title}
        </div>
        <div className="text-xl">{AppConfig.description}</div>
      </section>
      <section>
        <ul className="flex flex-wrap text-xl">
          <li className="mr-6">
            <Link href="/">
              <a className="text-gray-700 border-none hover:text-gray-900">
                Accueil
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/about/">
              <a className="text-gray-700 border-none hover:text-gray-900">
                À propos
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/contact/">
              <a className="text-gray-700 border-none hover:text-gray-900">
                Contact
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <a
              className="text-gray-700 border-none hover:text-gray-900"
              href="https://www.youtube.com/channel/UC_2uXgo3IXovQYRWh-2-8XQ/featured"
            >
              YouTube
            </a>
          </li>
        </ul>
      </section>
    </header>
  );
};

export { Header };
