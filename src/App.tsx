import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, NotFound } from '@/pages';
import { Default, Error } from '@/components/Layouts';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<Error />}>
        <Route path="*" element={<NotFound />} />
      </Route>
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
