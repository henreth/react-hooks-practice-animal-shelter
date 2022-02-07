import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState("all");

  const petURL = 'http://localhost:3001/pets';

  useEffect(()=>{
    fetch(petURL)
    .then(r=>r.json())
    .then(petItems=>setPets(petItems))
  },[])

  function handleFilterChange(newFilter) {
    setFilters(newFilter);
  }

  let filteredPets = pets.filter((pet)=>{
    return pet.type === filters || filters === 'all';
  })

  function handleUpdatePet(updatedPet){
    const updatedPets = pets.map((pet) => {
      if (pet.id === updatedPet.id) {
        return updatedPet;
      } else {
        return pet;
      }
    });
    setPets(updatedPets);
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              filters={filters}
              onFilterChange={handleFilterChange} />
          </div>
          <div className="twelve wide column">
            <PetBrowser
              pets={filteredPets}
              onUpdatePet={handleUpdatePet}
              petURL={petURL} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
