
const nodemailer = require("nodemailer");

const mailgun = require("nodemailer-mailgun-transport");

const auth = {
    auth: {
        api_key : '616d33ffb8cd6ca2bafeca34e069ace4-24e2ac64-2f2942d0',
        domain: 'sandboxf201647304344175b15f887b6342de46.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mailgun(auth));

function sendMai(email,subject,body) {
    const mailoptions = {
        from:email,
        to: 'jsainadh2018@gmail.com',
        subject: subject,
        text: body
    }
    
    transporter.sendMail(mailoptions,function(err,data) {
        if(err) {
            console.log("error occured");
        } 
        else {
            console.log("msg sent successfully");
        }
    });
}

module.exports=sendMai;
