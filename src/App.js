import './App.css';

import PersonCard from './Components/PersonCard';

function App() {
  
  return (
    <div className="App">
      <PersonCard  firstName = {"Ms."} lastName = {"Piggy"} age = {47} hairColor = {"Blonde"} />

      <PersonCard  firstName = {"Kermit The"} lastName = {"Frog"} age = {55} hairColor = {"Green"} />

      <PersonCard  firstName = {"Fozzy"} lastName = {"Bear"} age = {42} hairColor = {"Brown"} />

      <PersonCard  firstName = {"Anima"} lastName = {"Animal"} age = {73} hairColor = {"Orange"} />
    </div>
  );
}

export default App;
