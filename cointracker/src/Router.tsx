import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Coin from "./routes/coin";
import Coins from "./routes/coins";
import Price from "./routes/Price";
import Chart from "./routes/Chart";

interface IRouterProps {
  themeMode: { isDark: boolean; changeMode: () => void };
}

function Router() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Coins />} />

          <Route path="/:coinId" element={<Coin />}>
            <Route path="price" element={<Price />} />
            <Route
              path="chart"
              element={<Chart  />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
