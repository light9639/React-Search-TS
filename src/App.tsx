import "./styles/App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "../components/Coin";
import { MainType } from './TypeBox'
import { Main, CryptoHeader, CryptoInput, CryptoDisplay } from './styles/App.styled'

const App: React.FC = () => {
  const [listOfCoins, setListOfCoins] = useState<MainType[]>([]);
  const [searchWord, setSearchWord] = useState<string>("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCoins(response.data.coins);
      }
    );
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <Main>
      <CryptoHeader>
        <h1>Search Page</h1>
        <CryptoInput
          type="text"
          placeholder="Bitcoin..."
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </CryptoHeader>
      <CryptoDisplay>
        {filteredCoins.map((coin) => {
          return (
            <Coin
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
            />
          );
        })}
      </CryptoDisplay>
    </Main>
  );
}

export default App;
