import './App.css';
import Car from './Components/Car';
import ClickMe from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

 


function App() {

  const carInfo = {name: "Ford", model: "Mustang"}; 

  return (
    <div className="App">
      <Car carName={carInfo.name} carModel={carInfo.model} />
      <ClickMe />
      <Phone />
      <Color />
    </div>
  )
}

export default App;
