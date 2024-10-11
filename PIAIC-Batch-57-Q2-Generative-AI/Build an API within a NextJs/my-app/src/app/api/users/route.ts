import { NextRequest, NextResponse } from "next/server";


const users = [
    {
        "name": "Shahmeer Bukhari",
        "email": "shahmeerbukhari_1@gmail.com"
    },
    {
        "name": "Nasir Bukahri",
        "email": "nasirbukhari_1@gmail.com"
    },
]

export function GET(){
    return NextResponse.json(users);
}

export async function POST(request:NextRequest){
    const data = await request.json();
    users.push(data)
    return NextResponse.json({"Request":"Submitted Successfully"});
}