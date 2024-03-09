import "./App.css";

import Plunderer from "./assets/img2.webp";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

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
      <ConditionalRender />
      <ShowUserName name="Douglas" />
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      <CarDetails band="Ford" color="Vermelha" km={0} newCar={true} />
      <CarDetails band="Fiat" color="Branco" km={4500} newCar={false} />
    </div>
  );
}

export default App;
