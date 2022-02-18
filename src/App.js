import Header from './components/Header'
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <div className='App font-kumbh-sans min-h-screen'>
        <Header />
      </div>
    </ProductProvider>
  );
}

export default App;
