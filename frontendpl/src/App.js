import Header from './components/header/index';
import Card from './components/card';

import './styles/global.css';
import { Provider } from './provider/provider'


function App() {
  

  return (
    <>
      <Provider>
        <Header />
        <Card />        
      </Provider>

    </>
  )

}

export default App;
