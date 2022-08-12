export interface IProduct {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: IRate;
    title: string;
}

export interface IRate {
    rate: number;
    count: number
}