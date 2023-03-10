# ๐ Emotion์ผ๋ก ์คํ์ผ๋งํ์ฌ ๋ง๋  Bitcoin ๊ฒ์ ํ์ด์ง์๋๋ค.
:octocat: ๋ฐ๋ก๊ฐ๊ธฐ : https://light9639.github.io/React-Search-TS/

![light9639 github io_React-Search-TS_](https://user-images.githubusercontent.com/95972251/216871164-a2298b48-182f-4d5c-b2e5-3430d4123647.png)

:sparkles: Emotion์ผ๋ก ์คํ์ผ๋งํ์ฌ ๋ง๋  Bitcoin ๊ฒ์ ํ์ด์ง์๋๋ค.
## :tada: React ํ๋ก์ ํธ ์์ฑ
- React ์์ฑ
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite๋ฅผ ์ด์ฉํ์ฌ ํ๋ก์ ํธ๋ฅผ ์์ฑํ๋ ค๋ฉด
```bash
npm create vite@latest
# or
yarn create vite
```
- ํฐ๋ฏธ๋์์ ์คํ ํ ํ๋ก์ ํธ ์ด๋ฆ ๋ง๋  ํ React ์ ํ, Typescirpt-SWC ์ ํํ๋ฉด ์์ฑ ์๋ฃ.
## ๐ emotion, axios ๊ด๋ จ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์น
- ํ๋ก์ ํธ๋ฅผ ์งํํ๋ ค๋ฉด emotion ๊ด๋ จ 3๊ฐ์ง ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ axios๋ฅผ ์ค์นํด์ ์งํํด์ผ ํ๋ค. ๋ฐ๋ผ์ ์๋ ๋ช๋ น์ด๋ก ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ค์นํ๋ค.
```bash
$ npm install emotion @emotion/react @emotion/styled axios
# or
$ yarn add emotion @emotion/react @emotion/styled axios
```
## โ๏ธ main.tsx, App.tsx, TypeBox.ts ์์  ๋ฐ ์์ฑ
### โก main.tsx
- `index.css` ํ์ผ์ ํ์์๊ธฐ ๋๋ฌธ์ ์ ๊ฑฐํจ.
```typescript
// ์ญ์ ํ  ๋ถ๋ถ
// import './index.css'
```
### โก App.tsx
- `axios`๋ฅผ ์ด์ฉํ์ฌ `coinstats`์์ ์ฝ์ธ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์จ๋ค.
- `MainType`์ด๋ผ๋ ํ์ ์ง์ ์ `TypeBox.ts`์์ `import`ํ์ฌ ํ์์ ์ง์ ํด์ค๋ค.
- `filteredCoins` ํจ์๋ฅผ ์์ฑํ ๋ค `filter`๋ผ๋ ์๋ฐ์คํฌ๋ฆฝํธ ํจ์๋ฅผ ์ฌ์ฉํ์ฌ ๊ฒ์ ๊ธฐ๋ฅ์ ๊ตฌํํ๋ค.
- ๊ฒ์ ๊ธฐ๋ฅ์ด ๊ตฌํ๋์๋ค๋ฉด, ๊ฒ์์์ ์กฐ๊ฑด์ ๋ง๋ `filteredCoins`๋ฅผ ๋ฐ๋ณต๋ฌธ์ ๋๋ ค์ ํ๋ฉด์ ๋ํ๋๋๋ก ํ๋ค.
```typescript
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
```

### โก TypeBox.ts
- `App.tsx`์ `components` ํ์ผ ์ `Coin.tsx`์ ๋ฃ์ ์์ฑ๊ฐ์ ์ ๋ฆฌํ๋ค.
```typescript
export interface MainType {
    id: string;
    icon: string;
    name: string;
    symbol: string;
    rank: string;
    price: string;
    priceBtc: string;
    volume: string;
    marketCap: string;
    availableSupply: string;
    totalSupply: string;
    priceChange1h: string;
    priceChange1d: string;
    priceChange1w: string;
    websiteUrl: string;
    twitterUrl: string;
    exp: string[];
}

export interface PropsType {
    name: string;
    icon: string;
    price: string;
    symbol: string;
}
```
## ๐๏ธ src/styles ํ์ผ ์ App.styled.ts, App.css ์์  ๋ฐ ์์ฑ
### โก App.styled.ts
- `@emotion/styled`์์ `import` ํ์ฌ App.tsx์ ์คํ์ผ์ ์ํ์ค๋ค.
```typescript
import styled from "@emotion/styled";

export const Main = styled.div`
    height: auto;
    width: 100vw;
    font-family: Arial, Helvetica, sans-serif;
`;

export const CryptoHeader = styled.div`
    width: 100%;
    height: 250px;
    background-color: rgb(255, 196, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
        color: #fff;
        margin-top: -20px;
    }
`;

export const CryptoInput = styled.input`
    width: 50%;
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: bold;
    color: rgb(0, 0, 0);
    text-align: center;
    margin-top: 10px;
    @media screen and (max-width: 1024px) {
        width: 75%;
    }
`;

export const CryptoDisplay = styled.div`
    max-width: 1500px;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const CoinBox = styled.div`
    width: 400px;
    height: 300px;
    background-color: rgb(36, 36, 36);
    color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    margin: 20px;
    text-align: center;
`;

export const Img = styled.img`
    height: 100px;
`
```
### โก App.css 
- `body` ๋ถ๋ถ์ `CSS` ์ถ๊ฐ
```css
body {
  padding: 0%;
  margin: 0%;
  overflow-x: hidden;
}
```

## ๐ components ํ์ผ ์ Coin.tsx ์์  ๋ฐ ์์ฑ
### โก Coin.tsx
- `FC`๋ก ํ์์ ์ง์ ํ๊ณ  `PropsType`์ด๋ผ๋ ํ์ ์ง์ ์ `import`ํ์ฌ ์๋ฌ๊ฐ ๋์ง ์๊ฒ ํ๋ค.
- ์ ๋ฌ๋ฐ์ `props`๋ช์ ๊ฐ๊ฐ ํ์คํธ๋ ์์ฑ์ ๋ฃ์ด์ ํ๋ฉด์ ๋ํ๋๋๋ก ํ๋ค.
```typescript
import React from "react";
import { PropsType } from "../src/TypeBox";
import { CoinBox, Img } from '../src/styles/App.styled'

const Coin: React.FC<PropsType> = ({ name, icon, price, symbol }) => {
    return (
        <React.Fragment>
            <CoinBox>
                <h1> Name: {name}</h1>
                <Img src={icon} alt={name} />
                <h3> Price: {price}</h3>
                <h3> Symbol: {symbol}</h3>
            </CoinBox>
        </React.Fragment>
    );
}

export default Coin;
```
