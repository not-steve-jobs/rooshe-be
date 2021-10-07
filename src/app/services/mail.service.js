import sendMailer from '../helpers/sendMailer';

class MailService {

    async send({ email, verifyToken }) {
        const mailOptions = {
            to: email,
            subject: 'Account Verification Link',
            html: `<h1>Email Confirmation</h1>
                             <h2>Hello ${email}</h2>
                             <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
                             <a href=http://localhost:5000/email-verify/${verifyToken}> Click here</a>
                             </div>`,
        };
        sendMailer.mailer(mailOptions);
    }

}

export default new MailService();
