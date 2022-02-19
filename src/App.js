import Header from './components/Header'
import Product from './components/Product'
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <div className='App font-kumbh-sans min-h-screen'>
        <Header />
        <Product />
      </div>
    </ProductProvider>
  );
}

export default App;
