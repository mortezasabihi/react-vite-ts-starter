import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, NotFound } from '@/pages';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
