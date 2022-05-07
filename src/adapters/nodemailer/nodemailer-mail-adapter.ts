import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "06d72a07fa50ac",
    pass: "c639a1eb48136d",
  },
});

export class NodemailerAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@widget.com",
      to: "Ingrid Flack <ingrid_flack@hotmail.com>",
      subject: subject,
      html: body,
    });
  }
}
