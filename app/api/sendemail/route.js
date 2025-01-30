// import nodemailer from "nodemailer";
// export default async function handler(request, response) {
//     if (request.method === "POST") {
//         const { name, email, mobile, message } = request.body;
//         try {
//             const transporter = nodemailer.createTransport({
//                 service: 'gmail',
//                 host: 'smtp.gmail.com',
//                 port: 465,
//                 secure: true,
//                 auth: {
//                     user: 'eagleglobaleximhouse@gmail.com',
//                     pass: 'cusqftifcqykjlns',
//                 }
//             })
//             const mailOption = {
//                 from: 'eagleglobaleximhouse@gmail.com',
//                 to: 'eagleglobaleximhouse@gmail.com',
//                 subject: `New Mail from EGH - ${email}`,
//                 text: `
//                     Name : ${name},
//                     Email: ${email},
//                     Phone Number : ${mobile},
//                     Message : ${message}
//                 `
//             }
//             await transporter.sendMail(mailOption);       
//             response.status(200).json({ message: 'Message Sent Successfully' });
//         } catch (error) {
//             console.error("An error occured", error)
//             response.status(500).json({ message: "Failed to send message..." })
//         }
//     }
//     else {
//         response.status(405).json({ message: "This Method Is Not Allowed" })
//     }

// }


import nodemailer from "nodemailer";
export async function POST(request) {
    const { name, email, phone, message } = await request.json();
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD,
            }
        })

        const mailOption = {
            from: process.env.EMAIL_ADDRESS,
            to: process.env.EMAIL_ADDRESS,
            subject: `New Mail from - ${email}`,
            text: `
            Name : ${name},
            Email: ${email},
            Phone Number : ${phone},
            Message : ${message}
            `
        }
        await transporter.sendMail(mailOption);
        return Response.json({ message: "Mail Sent Successfully" }, { status: 200 })
    } catch (error) {
        return Response.json({ message: "Error Sending Message" }, { status: 500 })
    }
}