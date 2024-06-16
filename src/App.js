import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Jokes from './components/Jokes';
import Quotes from './components/Quotes';
import Riddles from './components/Riddles';
import Facts from './components/Facts';
import Trivia from './components/Trivia';
import QRgen from './components/QRgen';
import Weather from './components/Weather';
import Sentiment from './components/Sentiment';
import Dictionary from './components/Dictionary';
import IPlookup from './components/IPlookup';

function App() {
  return (
    <div className="App">
       <BrowserRouter>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/jokes' element={<Jokes/>}/>
            <Route path='/quotes' element={<Quotes/>}/>
            <Route path='/riddles' element={<Riddles/>}/>
            <Route path='/facts' element={<Facts/>}/>
            <Route path='/trivia' element={<Trivia/>}/>
            <Route path='/qrcode' element={<QRgen/>}/>
            <Route path='/weather' element={<Weather/>}/>
            <Route path='/sentiment' element={<Sentiment/>}/>
            <Route path='/dictionary' element={<Dictionary/>}/>
            <Route path='/iplookup' element={<IPlookup/>}/>
            
        </Routes>

       </BrowserRouter>
    </div>
  );
}

export default App;
