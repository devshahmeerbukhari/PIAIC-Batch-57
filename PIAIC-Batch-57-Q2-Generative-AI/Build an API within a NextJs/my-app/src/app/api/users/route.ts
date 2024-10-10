import { NextResponse } from "next/server";


const users = [
    {
        "name": "Shahmeer Bukhari",
        "email": "hello_13@gmail.com"
    },
    {
        "name": "Nasir Bukahri",
        "email": "hello_11@gmail.com"
    },
]

export function GET(){
    return NextResponse.json(users);
}