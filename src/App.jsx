import {Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Billers from './pages/Billers';
import Form from './pages/Form';
import Summary from './pages/Summary';
import Success from './pages/Success';
import './App.css';

function App() {
  return (
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Billers />} />
            <Route path="/billers" element={<Billers />} />
            <Route path="/form" element={<Form />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
