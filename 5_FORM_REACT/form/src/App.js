import './App.css';

import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "Camila", email: "camila@email.com", bio: "Sou um dev", role: "admin"}} />
    </div>
  );
}

export default App;
