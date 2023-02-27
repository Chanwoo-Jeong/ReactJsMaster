import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  padding: 0px 20px;
`;

const Header = styled.header`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 15px;
  a {
    transition: color 0.4s ease-in;
    /* display: block; */
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.coinpaprika.com/v1/tickers")
      .then((Response) => {
        setCoins(Response.data.slice(0, 99));
        setLoading(false);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, [coins]);
  return (
    <>
      <Container>
        <Header>
          <Title>Coins</Title>
        </Header>
        {loading ? (
          <Loader>"Loading"</Loader>
        ) : (
          <CoinsList>
            {coins.map((coin) => (
              <Coin key={coin.id}>
                <Link
                  to={{
                    pathname: `/${coin.id}`,
                  }}
                  state={{ name: coin.name }}
                >
                  <Img
                    src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                  />
                  {coin.name} &rarr;
                </Link>
              </Coin>
            ))}
          </CoinsList>
        )}
      </Container>
    </>
  );
}

export default Coins;
