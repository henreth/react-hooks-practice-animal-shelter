import React from "react";

import Pet from "./Pet";

function PetBrowser({pets,onUpdatePet,petURL}) {
  let petsToDisplay = pets.map((pet)=>{
    return <Pet
      key={pet.id}
      pet={pet}
      onUpdatePet={onUpdatePet}
      petURL={petURL}
    />
  })
  return <div className="ui cards">
    {petsToDisplay}
  </div>;
}

export default PetBrowser;
