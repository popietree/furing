import Header from './components/Header';
import Services from './pages/Services';
import ContactPg from './pages/ContactPg';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Layout/Footer';
import { Route, Switch } from 'react-router-dom';
import Hero from './components/Hero';

// add fav icon
function App() {
  return (
    <>
      <Header />
      <Route path='/' exact>
        <Hero />
      </Route>
      <Route path='/services' exact>
        <Services />
      </Route>
      <Route path='/contact' exact>
        <ContactPg />
      </Route>
      <Route path='/quote' exact>
        <QuoteForm />
      </Route>

      <Footer />
    </>
  );
}

export default App;

// <Route path="/" element={<Header replace to="/welcome" />} />
