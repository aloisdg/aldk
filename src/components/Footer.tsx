import React from 'react';

import { AppConfig } from '../utils/AppConfig';

const Footer = () => (
  <footer>
    <div className="border-t border-gray-300 text-center py-8 text-sm">
      © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
      <span role="img" aria-label="Love">
        ♥
      </span>{' '}
      by <a href="https://aloisdg.netlify.app">alois de gouvello</a>
    </div>
  </footer>
);

export { Footer };
