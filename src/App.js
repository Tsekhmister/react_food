import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from './pages/About';
import { Contact } from './pages/Contact,';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';

function App() {
  return (
    <>
    <Router basename='/react_food'>
      <Header />
        <main className="container content">
              <Routes>
                <Route path="*" element={<NotFound />}/>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contacts" element={<Contact />}/>
                <Route path="/category/:name" element={<Category />} />
                <Route path="/meal/:id" element={<Recipe />} />
              </Routes>
        </main>
      <Footer />
    </Router>
    </>
  );
}

export default App;
