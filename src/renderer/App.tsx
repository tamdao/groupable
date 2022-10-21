import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  return (
    <div className="Container">
      {/* <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div> */}
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
