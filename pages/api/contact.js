// export default async (req, res) => {
//     //require('dotenv').config()
    
//     let nodemailer = require('nodemailer')
//     console.log(req.body)
//     const transporter = nodemailer.createTransport({
//       port: 465,
//       host: "smtp.gmail.com",
//       auth: {
//         user: 'contact@infodrive-solutions.com',
//         pass: 'xszcroxrnnyigesb',
//       },
//       secure: true,
//     })
//     try {
//         await transporter.sendMail({
//             from: {
//                 name: 'InfoDrive Contact Us Query',
//                 address: 'contact@infodrive-solutions.com'
//             },
//               from: 'contact@infodrive-solutions.com',
//               to: 'contact@infodrive-solutions.com',
//               subject: `New Inquiry form`,
//               text: req.body.message + " | Sent from: " + req.body.email_address,
//               html:`<h3>Hello you have received new Inquiry form Email ${req.body.email_address}</h3> <br/><b>Name : ${req.body.full_name}<br/> Eamil Id : ${req.body.email_address}<br/> Industry : ${req.body.industry}<br/> Contact Number: ${req.body.email_address}<br/> Message : ${req.body.message}`
//           });
//     } catch (error){
//         return res.status(500).json({ error: error.message || error.toString() });
//     }
//     return res.status(200).json({ error: "" });

//   }
  // require('dotenv').config()

  // const sgMail = require('@sendgrid/mail')

  // const {SG_API_KEY,FROM_EMAIL,TO_EMAIL} = process.env

  // sgMail.setApiKey(SG_API_KEY)

  // export default async function handler(req,res){
  //   console.log(req.body)
  //    const {full_name, email_address, message} = req.body;

  //    const msg = {
  //     to: TO_EMAIL,
  //     from:FROM_EMAIL,
  //     subject:"NEXT JS CONTACT FORM",
  //     html:`<p><strong>Name:</strong>${full_name}</p>
  //     <p><strong>Email:</strong>${email_address}</p>
  //     <p><strong>Message:</strong>${message}</p>`,
  //    };
  //    await sgMail.send(msg);
  //    res.json({success:true});

  // }
 import nodemailer from "nodemailer";

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 8000,
    secure: false,
    auth: {
      user: "contact@infodrive-solutions.com",
      pass: "pqhvdzpqfefdunzo",
    },
  });
  const r=req.body;
  
  const mailOptions = {
    from: r.email_address,
    to: "contact@infodrive-solutions.com",
    subject: `Contact Us - Inquiry from ${r.full_name}`,
    html: `
      <p>Hello,</p>
      <p>This is an inquiry from the contact form:</p>
      <ul>
        <li><strong>Name:</strong> ${r.full_name}</li>
        <li><strong>Email:</strong> ${r.email_address}</li>
        <li><strong>Contact Number:</strong> ${r.contact_number}</li>
        <li><strong>Industry:</strong> ${r.industry}</li>
        <li><strong>Message:</strong> ${r.message}</li>
      </ul>
      <p>Thank you.</p>
    `,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return new NextResponse("Email not sent");
    } else {
      console.log("Email sent: " + info.response);
      return NextResponse.json({ msg: "Email sent " });
    }
  });
 
  console.log(r);
  return res.status(200).json({ message: 'successful!' });
}
