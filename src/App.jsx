import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./context/AppContext";
import { List, Form } from "./exports/PagesExports";

function App() {
  return (
    <ProductsProvider>
      <Routes>
        <Route path="/" exact element={<List />} />
        <Route path="/form" element={<Form />} />
        <Route path="/product/:id" element={<Form />} />
        <Route path="*" element={<h1>Esta página no fue encontrada</h1>} />
      </Routes>
    </ProductsProvider>
  );
}

export default App;
