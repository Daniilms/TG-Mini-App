import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { ExchangePage } from "./pages/ExcangePage/ExchangePage";
import { InfinityScrollPage } from "./pages/InfinityScrollPage/InfinityScrollPage";
import { WebSocketPage } from "./pages/WebSocketPage/WebSocketPage";

export const App = () => {
  return (
    <div className="app-wrp">
      <main className="main">
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<WebSocketPage />}></Route>
              <Route path="/exchange" element={<ExchangePage />}></Route>
              <Route
                path="/infinityScroll"
                element={<InfinityScrollPage />}
              ></Route>
            </Routes>
            <Navigation />
          </BrowserRouter>
        </div>
      </main>
    </div>
  );
};
