import { Routes, Route } from 'react-router-dom';
import './App.scss';
import SeatingConfig from './pages/SeatingConfig/SeatingConfig.lazy';
import Signin from './pages/Signin/Signin.lazy';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/configs">
          <Route path="/seating" element={<SeatingConfig />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
