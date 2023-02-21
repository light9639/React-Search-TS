# 🔍 Emotion으로 스타일링하여 만든 Bitcoin 검색 페이지입니다.
:octocat: 바로가기 : https://light9639.github.io/React-Search-TS/

![light9639 github io_React-Search-TS_](https://user-images.githubusercontent.com/95972251/216871164-a2298b48-182f-4d5c-b2e5-3430d4123647.png)

:sparkles: Emotion으로 스타일링하여 만든 Bitcoin 검색 페이지입니다.
## :tada: React 프로젝트 생성
- React 생성
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite를 이용하여 프로젝트를 생성하려면
```bash
npm create vite@latest
# or
yarn create vite
```
- 터미널에서 실행 후 프로젝트 이름 만든 후 React 선택, Typescirpt-SWC 선택하면 생성 완료.
## 🚒 emotion, axios 관련 라이브러리 설치
- 프로젝트를 진행하려면 emotion 관련 3가지 라이브러리와 axios를 설치해서 진행해야 한다. 따라서 아래 명령어로 라이브러리를 설치한다.
```bash
$ npm install emotion @emotion/react @emotion/styled axios
# or
$ yarn add emotion @emotion/react @emotion/styled axios
```
## ✒️ main.tsx, App.tsx, TypeBox.ts 수정 및 작성
### ⚡ main.tsx
- `index.css` 파일은 필요없기 때문에 제거함.
```typescript
// 삭제할 부분
// import './index.css'
```
### ⚡ App.tsx
- `axios`를 이용하여 `coinstats`에서 코인 데이터를 가져온다.
- `MainType`이라는 타입 지정을 `TypeBox.ts`에서 `import`하여 타입을 지정해준다.
- `filteredCoins` 함수를 생성한 뒤 `filter`라는 자바스크립트 함수를 사용하여 검색 기능을 구현한다.
- 검색 기능이 구현되었다면, 검색에서 조건에 맞는 `filteredCoins`를 반복문을 돌려서 화면에 나타나도록 한다.
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

### ⚡ TypeBox.ts
- `App.tsx`와 `components` 파일 속 `Coin.tsx`에 넣을 속성값을 정리한다.
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
## 🖋️ src/styles 파일 속 App.styled.ts, App.css 수정 및 작성
### ⚡ App.styled.ts
- `@emotion/styled`에서 `import` 하여 App.tsx의 스타일을 입혀준다.
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
### ⚡ App.css 
- `body` 부분에 `CSS` 추가
```css
body {
  padding: 0%;
  margin: 0%;
  overflow-x: hidden;
}
```

## 📝 components 파일 속 Coin.tsx 수정 및 작성
### ⚡ Coin.tsx
- `FC`로 타입을 지정하고 `PropsType`이라는 타입 지정을 `import`하여 에러가 나지 않게 한다.
- 전달받은 `props`명을 각각 텍스트나 속성에 넣어서 화면에 나타나도록 한다.
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
