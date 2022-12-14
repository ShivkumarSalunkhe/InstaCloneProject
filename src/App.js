import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import PostView from './Components/PostView/PostView';
import Form from './Components/Form/Form';
// import Header from './Components/Header/Header';

// import PostView from './Components/PostView/PostView';

function App() {
  return (
    <>
       <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/PostView" element={<PostView/>}/>
          <Route path="/PostView/Form" element={<Form/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
