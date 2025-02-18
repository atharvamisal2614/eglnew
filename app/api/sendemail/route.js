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