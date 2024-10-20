import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/types/ApiResponse";
import { promises } from "dns";


export async function sendVerificationEmail(email:string, username: string,
    verifyCode: string,
): Promise<ApiResponse> {  
    try{
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Mystry message | Verification Code',
            react: VerificationEmail({username, otp: verifyCode}),
          });
        return{success: true,message: "Verification Email sent successfully"}

    }catch(emailError){
        console.log("Error sendimg verification email", emailError)
        return{success: false,message: "Failed to send varification email"}
    }
}