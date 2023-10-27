import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import { Members, AdailsonPage, JoaoVictorPage, MarceloPage, MarianaPage, RenanPage } from './pages/members';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container fixed>
        <Routes>
          <Route index element={<Members />} />
          <Route path="integrantes" element={<Members />} />
          <Route path="integrantes/adailson" element={<AdailsonPage />} />
          <Route path="integrantes/joao-victor" element={<JoaoVictorPage />} />
          <Route path="integrantes/marcelo" element={<MarceloPage />} />
          <Route path="integrantes/mariana" element={<MarianaPage />} />
          <Route path="integrantes/renan" element={<RenanPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
