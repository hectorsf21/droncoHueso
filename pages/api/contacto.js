// // GMAIL

import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, lastname, mobile, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.SMTP_USER}`,
      pass: `${process.env.SMTP_PASSWORD}`
    }
  });


  // infodronconhueso@gmail.com
  try {
    await transporter.sendMail({
      from: email,
      to: "infodronconhueso@gmail.com",
      subject: `PACIENTE  ${name} ${lastname}`,
      html: `<table style="background-color:#ffa754; padding: 10px 20px; width: 60%; margin: auto; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
      <tr>
        <td style="text-align: center;">
          <h1>Tienes un mensaje de</h1>
          <p style="font-size:24px;"><strong>${name} ${lastname}:</strong></p>
        </td>
      </tr>
      <tr>
        <td style="width: 100%; font-size:18px; margin: auto; padding: 15px 5px; margin-bottom: 40px;">
          "${message}"
        </td>
      </tr>
      <tr>
        <td style="text-align: center;">
          <h4>DATOS DEL PACIENTE:</h4>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${mobile}</p>
        </td>
      </tr>
    </table>     
      `
    });
    return res.status(200).json({ message: 'tu mensaje fue enviado con exito' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }

}