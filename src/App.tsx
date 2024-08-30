import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { ExchangePage } from "./pages/ExcangePage/ExchangePage";

export const App = () => {
  return (
    <main className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ExchangePage />}></Route>
        </Routes>
        <Navigation />
      </BrowserRouter>
    </main>
  );
};
