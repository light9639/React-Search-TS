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
