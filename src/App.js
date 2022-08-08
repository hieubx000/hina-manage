
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import Dashboard from './pages/dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Statistics from './pages/statistics';
import { localStorageConstant } from './constant/localStorage';
import { rootPath } from './helpers/buildUrl';
import MedicalExaminationManage from './pages/medicalExaminationManage';
import './App.css'

function App() {

  const token = localStorage.getItem(localStorageConstant.token)
  const location = useLocation()

  if (!token && location.pathname !== rootPath.signin && location.pathname !== rootPath.signup) {
    return <Navigate to={rootPath.signin} />;
  }
  else if (token && (location.pathname === rootPath.signin || location.pathname === rootPath.signup)) {
    return <Navigate to={rootPath.home} />;
  }

  return (
    <Routes>
      <Route path="/" element={< Dashboard />} />
      <Route path="/signin" element={< SignIn />} />
      <Route path="/signup" element={< SignUp />} />
      <Route path="/statistics" element={< Statistics />} />
      <Route path="/medicalexamination" element={< MedicalExaminationManage />} />

    </Routes>
  );
}

export default App;
