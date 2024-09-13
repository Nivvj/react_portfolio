import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import ProjectsSection from './ProjectsSection';
import Footer from './Footer';
import './style.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
