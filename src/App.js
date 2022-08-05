
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import Dashboard from './pages/dashboard';
import SignIn from './pages/SignIn';
import Statistics from './pages/statistics';
import { localStorageConstant } from './constant/localStorage';
import { rootPath } from './helpers/buildUrl';
import MedicalExaminationManage from './pages/medicalExaminationManage';

function App() {

  const token = localStorage.getItem(localStorageConstant.token)
  const location = useLocation()

  // if (location.pathname === '' || location.pathname === '/') {
  //   return <Navigate to={rootPath.signin} />;
  // }
  // else
  if (!token && location.pathname !== rootPath.signin) {
    return <Navigate to={rootPath.signin} />;
  }
  else if (token && location.pathname === rootPath.signin) {
    return <Navigate to={rootPath.home} />;
  }

  return (
    <Routes>
      <Route path="/" element={< Dashboard />} />
      <Route path="/signin" element={< SignIn />} />
      <Route path="/statistics" element={< Statistics />} />
      <Route path="/medicalexamination" element={< MedicalExaminationManage />} />

    </Routes>
  );
}

export default App;
