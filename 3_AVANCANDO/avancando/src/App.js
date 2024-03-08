import './App.css';

import Plunderer from './assets/img2.webp'
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.webp" alt="TOMAN" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={Plunderer} alt="Plunderer Licht" />
      </div>
      <ManageData />
      <ListRender />
    </div>
  );
}

export default App;
