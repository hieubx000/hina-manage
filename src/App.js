
import { Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import HomePage from './pages/homepage';
import SignIn from './pages/SignIn';

function App() {

  return (
    <Routes>
      <Route path="/" element={< HomePage />} />
      <Route path="/signin" element={< SignIn />} />

    </Routes>
  );
}

export default App;
