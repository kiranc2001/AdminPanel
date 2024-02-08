import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminRouter from './Router/AdminRouter';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/admin/*" element={<AdminRouter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
