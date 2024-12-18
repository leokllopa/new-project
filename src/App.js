// App.js
import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PE from './Pages/PE';
import PS from './Pages/PS';
import PB from './Pages/PB';
import InvestingPage from './Pages/InvestingPage';
import RiskAndReward from './Pages/RiskAndReward';
import InvestmentBasics from './Pages/InvestmentBasics';
import TypesOfInvestments from './Pages/TypesOfInvestments';
import ValuationModels from './Pages/ValuationModels';
import EquityResearch from './Pages/EquityResearch';
import MAAnalysis from './Pages/MAAnalysis';
import Tools from './Pages/Tools';
import About from './Pages/About';
import TopBar from './Components/TopBar.js';
import DCF from './Pages/DCF';
import DDM from './Pages/DDM';

import './i18n'; // 引入 i18n

function App() {
  return (
    <Router>
      <Sidebar />
      <TopBar />
      <div className="abc">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/valuation-models/pe" element={<PE />} />
          <Route path="/valuation-models/ps" element={<PS />} />
          <Route path="/valuation-models/pb" element={<PB />} />
          <Route path="/valuation-models" element={<ValuationModels />} />
          <Route path="/valuation-models/dcf" element={<DCF />} />
          <Route path="/valuation-models/ddm" element={<DDM />} />
          <Route path="/equity-research" element={<EquityResearch />} />
          <Route path="/ma-analysis" element={<MAAnalysis />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/investment-basics/types-of-investments"
            element={<TypesOfInvestments />}
          />
          <Route path="/investment-basics" element={<InvestmentBasics />} />
          <Route
            path="/investment-basics/risk-and-reward"
            element={<RiskAndReward />}
          />
          <Route
            path="/investment-basics/what-is-investing"
            element={<InvestingPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
