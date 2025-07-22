import React from "react";

import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

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
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9-eIdSE57Jw?si=QO5JoCKnKpeIf_7z"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        
        <iframe
          width="560"
          height="315"
          src="https://embed.ted.com/embed/anne_lise_ducanda_enfance_les_liens_en_danger"
          title="TEDx video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
        ></iframe>
        
        Plus de vidéos sur ma chaîne{" "}
        <a
          className="text-gray-700 border-none hover:text-gray-900"
          href="https://www.youtube.com/channel/UC_2uXgo3IXovQYRWh-2-8XQ/featured"
        >
          YouTube
        </a>
      </div>
    </Main>
  );
};

export default Video;
