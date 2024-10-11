import { NextResponse } from "next/server"


const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "Title of Post 1",
        "body": "Body of Post 1"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "Title of Post 2",
        "body": "Body of Post 2"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "Title of Post 3",
        "body": "Body of Post 3"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "Title of Post 4",
        "body": "Body of Post 4"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "Title of Post 5",
        "body": "Body of Post 5"
    },
]
export function GET(){
    return NextResponse.json(posts)
}