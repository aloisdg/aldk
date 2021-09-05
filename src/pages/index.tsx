import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta title="Accueil" description="page d'accueil du Dr. Ducanda" />
      }
    >
      <div className="md:grid md:gap-4 grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-5">
        <div>
          <figure>
            <img
              src={`${router.basePath}/assets/images/couverture.jpg`}
              alt="Les tout-petits face aux écrans"
            />
            <figcaption className="text-center">
              <div className="">Paru le 25 août 2021</div>
              <div className="text-sm">
                En libraire ou à commander{' '}
                <a href="https://www.editionsdurocher.fr/livre/fiche/les-tout-petits-face-aux-ecrans-9782268105208">
                  en ligne
                </a>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="w-full col-span-1 md:col-span-3">
          <h1 className="font-bold text-2xl">
            Alerte sur une Épidémie Silencieuse
          </h1>
          <p>
            Les chiffres de la{' '}
            <abbr title="Direction Générale de l’Enseignement Scolaire">
              DGESCO
            </abbr>
            , qui dépend du ministère de l’Education nationale, montrent une
            augmentation importante des enfants en situation de handicap entre
            2010 et 2018 pour les 2-11 ans : +24% des troubles intellectuels et
            cognitifs, +54% des troubles du psychisme et +94% d’augmentation des
            troubles du langage. les troubles auditifs, visuels, viscéraux et
            moteurs demeurent stables.
          </p>
          <p>
            Les professionnels de l’enfance évaluent à 22% en moyenne le
            pourcentage d&apos;enfant en difficulté. Ce nombre passe à 38%
            depuis la crise de la covid. Les psychologues scolaires et moi même
            relions 95% de ces troubles à la surexposition aux écrans.
          </p>
          <p>
            Les écrans procurent du plaisir sans effort et sont très addictifs,
            ce qui explique que les parents, non préparés à élever leurs enfants
            dans un monde numérique, sont désemparés et demandeurs de conseils.
          </p>
          <p>
            Après ma{' '}
            <a
              href="https://www.youtube.com/watch?v=9-eIdSE57Jw"
              title="les écrans : un danger pour les enfants de 0 à 4 ans"
            >
              vidéo d’alerte en 2017
            </a>
            , je vous propose un livre riche de conseils et porteur d‘espoir :
            les troubles liés aux écrans sont réversibles en grande partie quand
            ils sont détectés et traités à temps.
          </p>
          <p>
            Un livre qui parle aussi des plus grands, de 6 à 17 ans, de plus en
            plus accros aux écrans de toute sorte.
          </p>
          <p>Un livre d’utilité publique à diffuser sans réserve !</p>

          <Link href="/contact/" passHref>
            <button className="w-full sm:w-auto flex-none bg-blue-500 hover:bg-blue-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-900 focus:outline-none transition-colors duration-200">
              Prendre contact
            </button>
          </Link>
        </div>
        <img
          className="rounded hidden md:block"
          src={`${router.basePath}/assets/images/anne-lise_ducanda.jpg`}
          alt="Photo de Anne-Lise Ducanda"
        />
      </div>
    </Main>
  );
};

export default Index;
