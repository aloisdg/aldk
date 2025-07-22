import React from 'react';

import Link from 'next/link';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Video = () => {
  return (
    <Main
      meta={
        <Meta
          title="à propos"
          description="En apprendre davantage sur mon engagement"
        />
      }
    >
      <div className="sm:max-w-screen-md sm:mx-auto">
      video
      </div>
    </Main>
  );
};

export default Video;
