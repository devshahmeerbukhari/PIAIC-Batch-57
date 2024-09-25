import { NextResponse } from "next/server";

const userDate = [
    {
        "name": "Shahmeer",
        "email": "BlaBlaBla@gmail.com",
        "Occupation": "Developer",
    },
    {
        "name": "Nasir",
        "email": "halahalalhalala@gmail.com",
        "Occupation": "Software Engineer",
    },
]

export function GET(){
    return NextResponse.json(userDate)
}