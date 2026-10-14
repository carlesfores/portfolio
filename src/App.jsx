import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

import '@/App.scss';

function App() {

  return (
    <div className='portfolio'>
      <Header />
      
      <section className='portfolio__section'>
        <h2>Section h2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </section>
      
      <Footer />
    </div>
  )
}

export default App;
