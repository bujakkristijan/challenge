import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from './components/navbar/NavbarComponent';
import ListTopicComponent from './components/list-topic/ListTopicComponent';

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
