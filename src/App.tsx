import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from '../src/pages/Home'
import { Summoners } from './pages/Summoners'
import { GlobalStyle } from "./styles/global";
import { Match } from "./pages/Match";


export function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home/>} />
        <Route path="/summoners/:name" caseSensitive={false} element={<Summoners />} />
        <Route path="/summoners/:name/:match" caseSensitive={false} element={<Match />} />

      </Routes>
      <GlobalStyle />
    </Router>
  );
}

