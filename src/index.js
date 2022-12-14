import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Easy from './pages/Easy';
import Medium from './pages/Medium';
import Hard from './pages/Hard';
import Extreme from './pages/Extreme';
import NoPage from './pages/NoPage';
import FastClick from 'fastclick';
import './styles.scss';

export default function App() {
  FastClick.attach(document.body);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="easy" element={<Easy />} />
          <Route path="medium" element={<Medium />} />
          <Route path="hard" element={<Hard />} />
          <Route path="extreme" element={<Extreme />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
