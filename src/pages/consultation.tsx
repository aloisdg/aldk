import React from "react";

import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

const Consultation = () => {
  return (
    <Main
      meta={
        <Meta
          title="Consultation écrans"
          description="Information sur les consultations liées aux écrans"
        />
      }
    >
      <div className="sm:max-w-screen-md sm:mx-auto">
Je propose près de Bordeaux des consultations dédiées aux enfants surexposés aux écrans de 0 à 18 ans.

Je ne peux malheureusement plus prendre de nouveaux patients actuellement.

Vous pouvez contacter plusieurs membres de COSE ou nos partenaires, tous formés à la surexposition aux écrans, qui pourront vous accompagner en fonction de l’âge de votre enfant et de votre lieu d’habitation :
<ul>
<li>
</ul>
        
      </div>
    </Main>
  );
};

export default Consultation;
