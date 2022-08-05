
import './App.css';
import Report from './components/Report';
import db from "./data/db.json";

import { useState } from "react";

import {Routes,Route} from "react-router-dom"
import Daily from './pages/Daily';
import Monthly from './pages/Monthly';
import Weekly from './pages/Weekly';
function App() {
  const [data, setData] = useState(db);
  const { time } = data;
  return (
    <div className='app'>
      <Report />
      <Routes>
        <Route path="/" element={<Daily time={time} />} />
        <Route path="weekly" element={<Weekly time={time} />} />
        <Route path="monthly" element={<Monthly time={time} />} />
      </Routes>
    </div>
  );
}

export default App;
