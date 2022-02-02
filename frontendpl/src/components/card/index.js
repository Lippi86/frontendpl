
import excluiricone from '../../../src/assets/excluiricone.png';
import editaricone from '../../../src/assets/editaricone.png';
import { useContext, useState, useEffect } from 'react';
import { Context } from '../../provider/provider';
import Search from '../../components/search/index';
import Pagination from '../../components/pagination/index';
import Weather from '../../components/weather/index';
import qs from 'qs';
import '../../components/card/styles.css';






function handleSubmit() {
    alert('Funcionalidade em desenvolvimento');
}

const api = 'https://pokeapi.co/api/v2/';

const LIMIT = 12;

const Card = () => {
    const data = useContext(Context);
    const [result, setResult] = useState([]);

    const [info, setInfo] = useState({});
    const [text, setText] = useState('');
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        setInfo({});
    
        const query = {
          page: {
            limit: LIMIT,
            offset
          }
        };
    
        if (text) {
          query.filter = {
            text
          };
        }
    
        fetch(`${api}ability/?limit=100&offset=200${qs.stringify(query)}`)
          .then((response) => response.json())
          .then((response) => {
            setInfo(response);
          });
      }, [text, offset]);

        console.log("🚀data", data);
        console.log("result", result);


    return (
        <>
            <Weather />
            <Search value={data} setResult={setResult} onChange={(search) => setText(search)}/>
            <div className='divmain'>
                <div className="cabecalho">
                    <p className="texto">Resultado de busca</p>
                    <button className="novocard" onClick={handleSubmit}>Novo Card</button>
                </div>
                {result.length > 0 ? (result.map((n) => {
                    return (
                        <div className='divmaincard'>
                            <div className="divcard">
                                <div className='circular--square'><img src={n.sprites.front_default} className="imgcard"></img></div>
                                <div className='textcard'>Nome: {n.name}</div>
                                <div className='textcard'>Elemento: {n.types[0].type.name}</div>
                                <div className='divbotoes'>
                                    <button className='divexcluir' type='submit' onClick={handleSubmit}>
                                        <img src={excluiricone} className="buttonexcluir"></img>Excluir</button>
                                    <button className='diveditar' onClick={handleSubmit}>
                                        <img src={editaricone} className="buttoneditar"></img>Editar</button>
                                </div>
                            </div>
                        </div>
                    )
                })
                ) : (data.map((n) => {
                    return (
                        <div className='divmaincard'>
                            <div className="divcard">
                                <div className='circular--square'><img src={n.sprites.front_default} className="imgcard"></img></div>
                                <div className='textcard'>Nome: {n.name}</div>
                                <div className='textcard'>Elemento: {n.types[0].type.name}</div>
                                <div className='divbotoes'>
                                    <button className='divexcluir' type='submit' onClick={handleSubmit}>
                                        <img src={excluiricone} className="buttonexcluir"></img>Excluir</button>
                                    <button className='diveditar' onClick={handleSubmit}>
                                        <img src={editaricone} className="buttoneditar"></img>Editar</button>
                                </div>
                            </div>
                        </div>
                    )
                }))}
                {info.meta && (
                    <Pagination 
                    limit={LIMIT}
                    total={info.meta.count}
                    offset={offset}
                    setOffset={setOffset}
                    />        
                )}
                
            </div>
        </>
    )
}

export default Card;