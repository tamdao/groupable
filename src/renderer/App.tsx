import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  return (
    <div className="Container">
      <div style={{ width: 560 }}>
        <webview
          id="foo"
          src="https://www.tradingview.com/chart"
          style={{
            width: 1200,
            height: '100%',
            position: 'absolute',
            right: 0,
          }}
        />
      </div>
      <div style={{ flex: 1, width: 560, position: 'relative', zIndex: 1 }}>
        <webview
          id="foo"
          src="https://fireant.vn/charts"
          style={{ height: '100%', minWidth: 440 }}
        />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
