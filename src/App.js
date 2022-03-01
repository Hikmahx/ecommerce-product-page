import Attribution from './components/Attribution';
import Header from './components/Header'
import Product from './components/Product'
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <div className='App font-kumbh-sans min-h-screen relative'>
        <Header />
        <Product />
        <Attribution />
      </div>
    </ProductProvider>
  );
}

export default App;
