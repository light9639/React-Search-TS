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