import sendMailer from '../helpers/sendMailer';

class MailService {

    async sendVerifyURI({ email, verifyToken }) {
        const mailOptions = {
            to: email,
            subject: 'Account Verification token',
            html: `<h1>Email Confirmation</h1>
                             <h2>Hello ${email}</h2>
                             <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
                             <h1>${verifyToken}</h1>
                             </div>`,
        };
        sendMailer.mailer(mailOptions);
    }

    async sendResetVerifyURI(user) {
        const mailOptions = {
            to: user.email,
            subject: 'Forgot password token',
            html: `<h1>reset password</h1>
                             <h2>Hello ${user.firstName}</h2>
                             <p>this is reset password token</p>
                             <h1>${user.verifyToken}</h1>
                             </div>`,
        };
        sendMailer.mailer(mailOptions);
    }

}

export default new MailService();
