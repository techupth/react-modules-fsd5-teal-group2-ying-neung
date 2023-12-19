import "./App.css";
import * as React from "react";

import {
  Header,
  MainContent,
  ProductSection,
  FAQ,
  Footer,
} from "./components/Components.jsx";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
