import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Coin from "./routes/coin";
import Coins from "./routes/coins";
import Price from "./routes/Price";
import Chart from "./routes/Chart";

interface IRouterProps {
  themeMode: { isDark: boolean; changeMode: () => void };
}

function Router(props: IRouterProps) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Coins themeMode={props.themeMode} />} />

          <Route path="/:coinId" element={<Coin />}>
            <Route path="price" element={<Price />} />
            <Route path="chart" element={<Chart themeMode={props.themeMode} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
