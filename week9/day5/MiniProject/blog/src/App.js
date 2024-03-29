import Home from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Routes, Route, BrowserRouter} from "react-router-dom"
import Post from './components/Post';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/:post_id' element={<Post/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
