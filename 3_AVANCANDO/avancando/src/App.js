import "./App.css";

import Plunderer from "./assets/img2.webp";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFuntion from "./components/ExecuteFuntion";

function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, Km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, Km: 45333 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, Km: 54000 },
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

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
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          Km={car.Km}
          newCar={car.newCar}
        />
      ))}
      <Fragment />
      <Container myValue="testing">
        <p>E este é o conteúdo!</p>
      </Container>
      <ExecuteFuntion myFuntion={showMessage} />
    </div>
  );
}

export default App;
