import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
import { api } from '../services/api';


export const Context = createContext([]);

export function Provider({ children }) {

  const [result, setResult] = useState([]);


  useEffect(() => {
    api.get('pokemon?limit=100').then(response => {
      const localData = response.data.results;

      return Promise.all(
        localData.map(poke => api.get(poke.url))
      );
    }).then(arrResp => {
      const newRes = arrResp.map(x => x.data);
      setResult(newRes);
    }).catch(error => console.error('erro', error));
  }, [])


  return (
    <Context.Provider value={result}>
      {children}
    </Context.Provider>
  );

}