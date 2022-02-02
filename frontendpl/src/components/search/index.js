import React from 'react';
import banner from '../../assets/bannerimpar.png';
import lupa from '../../assets/lupabusca.png';
import '../search/styles.css';


const Search = ({ setResult, value }) => {
    const handleChange = (event) => {
      //console.log(value);
      const searchTerm = event.target.value;
      const results = value.filter((d) => d.name.includes(searchTerm));
      setResult(results);
    };
  
    return (
      <div>
        <div className="container">
           <img src={banner} alt="" className="banner" /> 
          <input
            className="input"
            placeholder="Digite aqui sua busca..."
            type="text"
            onChange={handleChange}
          />
          <img src={lupa} alt="" className="lupa" /> 
        </div>
      </div>
    );
  };

export default Search;