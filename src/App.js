import './App.css';
import Join from "./Component/Join/Join"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Chat from './Component/Chat/Chat';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
      <Routes>
         <Route path='/' element={<Join/>}/>
         <Route path='/chat' element={<Chat/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
