import { useParams } from "react-router-dom";
import { getCoinHistory } from "../Api/api";
import { useQuery } from "@tanstack/react-query";

function Chart() {
  const params = useParams();
  console.log(params);

  const { isLoading, data } = useQuery(["ohlcv", params.coinId] ,
    () => getCoinHistory(`${params.coinId}`)
  );

  return <>Chart part</>;
}

export default Chart;
