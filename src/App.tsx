import Header from './components/Header';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Work from './components/Work';
import ContactForm from './pages/ContactForm';
import Resume from './pages/Resume';

function App() {

  return (
    <>
      <Header />

      <main>
        <Routes>

          <Route path="/" element={<Landing />} />
          <Route path="/portfolio" element={<Work />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/resume" element={<Resume />} /> 

        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App;