import React,{useState} from "react";

function Filters({onFilterChange}) {
  let [type,setType]=useState('all')
  function handleChange(event){
    setType(event.target.value)
  }

  function handleSubmit(){
    onFilterChange(type);
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type" onChange={handleChange}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={handleSubmit}>Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
