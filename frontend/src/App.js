import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MasterLoginPage from "./pages/MasterLoginPage";
import MasterSignUpPage from "./pages/MasterSignUpPage";
import StudentLoginPage from "./pages/StudentLoginPage";
import StudentSignUpPage from "./pages/StudentSignUpPage";
import MasterHomePage from "./pages/MasterHomePage";
import StudentHomePage from "./pages/StudentHomePage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage /> }/>
        <Route path="/master/login" element={<MasterLoginPage/> }/>
        <Route path="/master/signup" element={<MasterSignUpPage /> }/>
        <Route path="/student/login" element={<StudentLoginPage /> }/>
        <Route path="/student/signup" element={<StudentSignUpPage /> }/>
        <Route path="/student/home" element={<StudentHomePage /> }/>
        <Route path="/master/home" element={<MasterHomePage /> }/>

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
