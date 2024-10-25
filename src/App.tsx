// import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import ContactForm from './pages/ContactForm';

function App() {

  return (
    <>
      <Header />

      <main>
        <Routes>

          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<ContactForm />} />

        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App;

