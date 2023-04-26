import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from './components/navbar/NavbarComponent';
import ListTopicComponent from './components/list-topic/ListTopicComponent';

// Router nema nekog smisla u ovom slucaju, jer sam u pocetku imao drugaciju ideju kako ce izgledati aplikacija
function App() {
  return (
    <Router>
      <NavbarComponent/>
        <div className='router-components'>
          <Routes>
              <Route path='/' element={<ListTopicComponent></ListTopicComponent>}></Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
