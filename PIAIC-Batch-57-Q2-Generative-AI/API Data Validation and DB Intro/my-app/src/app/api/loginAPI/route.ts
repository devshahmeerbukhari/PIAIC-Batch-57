import { NextRequest, NextResponse } from "next/server";
import * as z from "zod"
import { LoginSchema } from "@/lib/validation/schema";
import { error } from "console";


export async function POST(req: Request) {

    try{
        const body = await req.json();
        //throw new Error("This is new Cutom Error")
        console.log("Body", body);
        //Validate the parse body using zod
        const parseData = LoginSchema.parse(body);
        return NextResponse.json({message: "User Login API", parseData})
    }catch(error){
        console.log("Error C: ", error)
        if (error instanceof z.ZodError){
            //Return validation error if zod falidation failds
            return NextResponse.json({
                errors: error.errors
            }, {
                status: 400,
            })
        }
        return NextResponse.json({
            message: "Somthing wents wrong"
        }, {
            status: 400
        })
    }

    // const body = await req.json();
    // console.log("Body", body);
    // return NextResponse.json({message: "User Login API"})
}