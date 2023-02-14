export default async (req, res) => {
    //require('dotenv').config()
    
    let nodemailer = require('nodemailer')
    console.log(req.body)
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'contact@infodrive-solutions.com',
        pass: 'xszcroxrnnyigesb',
      },
      secure: true,
    })
    try {
        await transporter.sendMail({
            from: {
                name: 'InfoDrive Contact Us Query',
                address: 'contact@infodrive-solutions.com'
            },
              from: 'contact@infodrive-solutions.com',
              to: 'contact@infodrive-solutions.com',
              subject: `New Inquiry form`,
              text: req.body.message + " | Sent from: " + req.body.email_address,
              html:`<h3>Hello you have received new Inquiry form Email ${req.body.email_address}</h3> <br/><b>Name : ${req.body.full_name}<br/> Eamil Id : ${req.body.email_address}<br/> Industry : ${req.body.industry}<br/> Contact Number: ${req.body.email_address}<br/> Message : ${req.body.message}`
          });
    } catch (error){
        return res.status(500).json({ error: error.message || error.toString() });
    }
    return res.status(200).json({ error: "" });

    // const mailData = {
    // from: {
    //     name: 'InfoDrive Contact Us Query',
    //     address: 'contact@infodrive-solutions.com'
    // },
    //   from: 'contact@infodrive-solutions.com',
    //   to: 'contact@infodrive-solutions.com',
    //   subject: `New Inquiry form`,
    //   text: req.body.message + " | Sent from: " + req.body.email_address,
    //   html:`<h3>Hello you have received new Inquiry form Email ${req.body.email_address}</h3> <br/><b>Name : ${req.body.full_name}<br/> Eamil Id : ${req.body.email_address}<br/> Industry : ${req.body.industry}<br/> Contact Number: ${req.body.email_address}<br/> Message : ${req.body.message}`
    // }
    // transporter.sendMail(mailData, function (err, info) {
    //   if(err)
    //     console.log(err)
    //   else
    //     console.log("mail send",info)
    // })
    // return res.status(200)
  }