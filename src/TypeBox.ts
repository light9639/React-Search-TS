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