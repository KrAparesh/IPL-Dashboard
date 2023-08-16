
import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/team/:teamName" Component={TeamPage} />
            <Route path="/team/:teamName/matches/:year" Component={MatchPage} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
