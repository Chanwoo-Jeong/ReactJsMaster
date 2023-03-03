import {
  useParams,
  Link,
  useLocation,
  Outlet,
  useMatch,
} from "react-router-dom";

import styled from "styled-components";
import { getCoinInfo, getCoinPrice } from "../Api/api";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const Container = styled.div`
  padding: 0px 20px;
`;

const Header = styled.header`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

interface RouteState {
  name: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  const { coinId } = useParams();

  const location = useLocation();
  const name = location.state as RouteState;

  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["CoinInfo", coinId],
    () => getCoinInfo(`${coinId}`)
  );

  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>(
    ["PriceInfo", coinId],
    () => getCoinPrice(`${coinId}`),
    {
      refetchInterval: 2000,
    }
  );

  const loading = infoLoading || priceLoading;

  // const [loading, setLoading] = useState<Boolean>(true);
  // const [coinInfo, setCoinInfo] = useState<InfoData>();
  // const [coinPrice, setCoinPrice] = useState<PriceData>();

  // useEffect(() => {
  //   axios
  //     .get(`https://api.coinpaprika.com/v1/coins/${coinId}`)
  //     .then((Response) => {
  //       setCoinInfo(Response.data);
  //     })
  //     .catch((Error) => {
  //       console.log(Error);
  //     });

  //   axios
  //     .get(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
  //     .then((Response) => {
  //       setCoinPrice(Response.data);
  //       setLoading(false);
  //     })
  //     .catch((Error) => {
  //       console.log(Error);
  //     });
  // }, [coinId]);

  return (
    <>
      <Container>
        <Helmet>
          <title>
            {name?.name ? name.name : loading ? "Loading..." : infoData?.name}
          </title>
        </Helmet>
        <Header>
          <Title>
            {name?.name ? name.name : loading ? "Loading..." : infoData?.name}
          </Title>
        </Header>
        {loading ? (
          <Loader>Loading...</Loader>
        ) : (
          <>
            <Overview>
              <OverviewItem>
                <span>Rank:</span>
                <span>{infoData?.rank}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Symbol:</span>
                <span>${infoData?.symbol}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Price:</span>
                <span>${priceData?.quotes.USD.price.toFixed(10)}</span>
              </OverviewItem>
            </Overview>
            <Description>{infoData?.description}</Description>
            <Overview>
              <OverviewItem>
                <span>Total Suply:</span>
                <span>{priceData?.total_supply}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Max Supply:</span>
                <span>{priceData?.max_supply}</span>
              </OverviewItem>
            </Overview>
            <Tabs>
              <Tab isActive={chartMatch !== null}>
                <Link to={`/${coinId}/chart`}>Chart</Link>
              </Tab>
              <Tab isActive={priceMatch !== null}>
                <Link to={`/${coinId}/price`}>Price</Link>
              </Tab>
            </Tabs>
            <div>
              <Outlet />
            </div>
          </>
        )}
      </Container>
    </>
  );
}

export default Coin;
