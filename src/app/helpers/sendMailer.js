import nodemailer  from 'nodemailer';
import param from '../configs/params';

const transporter = nodemailer.createTransport(
    {
        // ////////////////////////////////////////
        // /////////////REAL EMAIL/////////////////
        // ////////////////////////////////////////

        // host: 'smtp.mail.ru',
        // port: 465,
        // secure: true, // true for 465, false for other ports
        // auth: {
        //     user: param.emailUser,
        //     pass: param.emailPassword
        // }
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: param.testEmailUser,
            pass: param.testEmailPassword
        }
    },
    {
        from: 'Rooshe <sendmail.testovich@mail.ru>'
    }
);

exports.mailer = (message) => {
    transporter.sendMail(message, (err, info) => {
        if (err) {return console.log(err);}

        return  console.log('Email sent:', info);
    });
};
