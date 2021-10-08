import sendMailer from '../helpers/sendMailer';

class MailService {

    async sendVerifyURI({ email, verifyToken }) {
        const mailOptions = {
            to: email,
            subject: 'Account Verification Link',
            html: `<h1>Email Confirmation</h1>
                             <h2>Hello ${email}</h2>
                             <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
                             <a href=http://localhost:5000/auth/email-verify/${verifyToken}> Click here</a>
                             </div>`,
        };
        sendMailer.mailer(mailOptions);
    }

    async sendResetVerifyURI(user) {
        const mailOptions = {
            to: user.email,
            subject: 'Forgot password Link',
            html: `<h1>reset password</h1>
                             <h2>Hello ${user.firstName}</h2>
                             <p>this is reset password link</p>
                             <a href=http://localhost:5000/auth/email-forgot-pass/${user.verifyToken}> Click here</a>
                             </div>`,
        };
        sendMailer.mailer(mailOptions);
    }

}

export default new MailService();
