import './App.css';

import Footer from './Components/Footer';
import Header from './Components/Header';
import HeroDescription from './Components/Hero-Section/HeroDescription';
import CardCollection from './Components/Hero-Section/CardCollection';



function App() {
  return (
    <>
      <Header />
  <CardCollection/>
  <HeroDescription/>
      <Footer />
    </>
  );
}

export default App;

