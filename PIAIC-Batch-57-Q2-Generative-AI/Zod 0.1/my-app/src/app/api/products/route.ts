import { NextResponse } from "next/server"

const products = [
    {
        name: "Product 1",
        price: 110,
    },
    {
        name: "Product 2",
        price: 210,
    },
    {
        name: "Product 3",
        price: 310,
    },
    {
        name: "Product 4",
        price: 410,
    },
    {
        name: "Product 5",
        price: 510,
    },
]

export function GET() {
    return NextResponse.json(products)
}