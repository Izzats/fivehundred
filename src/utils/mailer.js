require("dotenv").config();
const fs = require("fs");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// const transporter = nodemailer.createTransport({
//   service: 'outlook',
//   auth: {
//     user: 'rodolfostazzi@hotmail.com',
//     pass: 'pr6102aeae',
//   },
// });
// transporter
// .verify()
// .then(console.log)
// .catch(console.log)
let datosTransferencia = `<p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><strong>Puede hacer su depósito en:</strong><br>Cuenta Rut de Banco Estado <br>
A nombre de: Rodolfo Stazzi<br>
N° 15726570<br>
Mail rodolfostazzi@gmail.com</p>`;

const template = async ( nombre, celular, total, efectivo, linkW ) => {
  // return `${text} <br><br> ${await verIndicadores()} <br><br> ${await verFarmacias()} <br><br> ${await verClima()} <br><br> ${await verSismos()}`;
  if (efectivo == true) {
    datosTransferencia = '';
  }

  return ` 
  <!DOCTYPE html>

  <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  <head>
  <title></title>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css"/><!--<![endif]-->
  <style>
      * {
        box-sizing: border-box;
      }
  
      body {
        margin: 0;
        padding: 0;
      }
  
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
      }
  
      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
      }
  
      p {
        line-height: inherit
      }
  
      .desktop_hide,
      .desktop_hide table {
        mso-hide: all;
        display: none;
        max-height: 0px;
        overflow: hidden;
      }
  
      .image_block img+div {
        display: none;
      }
  
      @media (max-width:670px) {
  
        .desktop_hide table.icons-inner,
        .social_block.desktop_hide .social-table {
          display: inline-block !important;
        }
  
        .icons-inner {
          text-align: center;
        }
  
        .icons-inner td {
          margin: 0 auto;
        }
  
        .image_block img.big,
        .row-content {
          width: 100% !important;
        }
  
        .mobile_hide {
          display: none;
        }
  
        .stack .column {
          width: 100%;
          display: block;
        }
  
        .mobile_hide {
          min-height: 0;
          max-height: 0;
          max-width: 0;
          overflow: hidden;
          font-size: 0px;
        }
  
        .desktop_hide,
        .desktop_hide table {
          display: table !important;
          max-height: none !important;
        }
      }
    </style>
  </head>
  <body style="background-color: #F5F5F5; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
  <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #F5F5F5;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <div class="spacer_block block-1" style="height:30px;line-height:30px;font-size:1px;"> </div>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #D6E7F0; color: #333; width: 650px;" width="650">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 25px; padding-left: 25px; padding-top: 25px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
  <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
  <div align="left" class="alignment" style="line-height:10px"><img alt="Image" src="cid:504CleanLogo" style="display: block; height: auto; border: 0; width: 195px; max-width: 100%;" title="Image" width="195"/></div>
  </td>
  </tr>
  </table>
  </td>
  <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 25px; padding-right: 25px; padding-top: 25px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
  <table border="0" cellpadding="0" cellspacing="0" class="empty_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad">
  <div class="" style="font-size: 12px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 18px; color: #000000; line-height: 1.5;"><p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 75px;"><span style="font-size:50px;"><strong><span style="font-size:50px;"><span style="font-size:38px;">504 Clean</span></span></strong></span></p>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #D6E7F0; color: #000000; width: 650px;" width="650">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 60px; padding-left: 25px; padding-right: 25px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="padding-top:45px;width:100%;padding-right:0px;padding-left:0px;">
  <div align="center" class="alignment" style="line-height:10px"><img alt="Image" class="big" src="cid:welcome" style="display: block; height: auto; border: 0; width: 540px; max-width: 100%;" title="Image" width="540"/></div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad" style="padding-left:15px;padding-right:10px;padding-top:20px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 18px; color: #000000; line-height: 1.5;">
  <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 75px;"><span style="font-size:50px;"><strong><span style="font-size:50px;"><span style="font-size:38px;">Muchas gracias</span></span></strong></span></p>
  <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 51px;"><span style="font-size:34px;"><strong><span style="font-size:34px;"><span style="color:#2190e3;font-size:34px;">${nombre}</span></span></strong></span></p>
  <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 51px;"><span style="font-size:34px;color:#000000;"><strong><span style="font-size:34px;"><span style="font-size:34px;">por su compra</span></span></strong></span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
  <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><span style="font-size:18px;color:#000000;">Adjunto a este mensaje, le enviamos el detalle de su compra por el total de $${total}.</span></p>
  ${datosTransferencia}
  <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><span style="font-size:18px;color:#000000;">Recuerde enviarnos su comprobante de depósito al <a href="${linkW}" rel="noopener" style="text-decoration: underline; color: #0068A5;" target="_blank">Whatsapp</a> y agendar su horario de entrega, de lunes a viernes entre las 19 a 23 hrs. </span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 60px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="10" cellspacing="0" class="social_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad">
  <div align="center" class="alignment">
  <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="188px">
  <tr>
  <td style="padding:0 15px 0 0px;"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="cid:facebook" style="display: block; height: auto; border: 0;" title="Facebook" width="32"/></a></td>
  <td style="padding:0 15px 0 0px;"><a href="https://twitter.com/" target="_blank"><img alt="Twitter" height="32" src="cid:twitter" style="display: block; height: auto; border: 0;" title="Twitter" width="32"/></a></td>
  <td style="padding:0 15px 0 0px;"><a href="https://instagram.com/" target="_blank"><img alt="Instagram" height="32" src="cid:instagram" style="display: block; height: auto; border: 0;" title="Instagram" width="32"/></a></td>
  <td style="padding:0 15px 0 0px;"><a href="https://www.pinterest.com/" target="_blank"><img alt="Pinterest" height="32" src="cid:pinterest" style="display: block; height: auto; border: 0;" title="Pinterest" width="32"/></a></td>
  </tr>
  </table>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 18px; color: #555555; line-height: 1.5;">
  <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">NetShop - Lorem ipsum dolor sit amet hasellus sagittis aliquam luctus. </p>
  <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">329 California St, San Francisco, CA 94118</p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="10" cellspacing="0" class="divider_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad">
  <div align="center" class="alignment">
  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="60%">
  <tr>
  <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px dotted #C4C4C4;"><span> </span></td>
  </tr>
  </table>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #4F4F4F; line-height: 1.2;">
  <p style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 14.399999999999999px;"><span style="font-size:14px;"><a href="#" rel="noopener" style="text-decoration: none; color: #2190E3;" target="_blank"><strong>Help& FAQ's</strong></a> |  <strong><a href="#" rel="noopener" style="text-decoration: none; color: #2190E3;" target="_blank">Returns</a> </strong> |  <span style="background-color:transparent;font-size:14px;">1-998-9283-19832</span></span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
  <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
  <!--[if !vml]><!-->
  <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;"><!--<![endif]-->
  <tr>
  <td style="font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/" style="color: #9d9d9d; text-decoration: none;" target="_blank">Designed with BEE</a></td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table><!-- End -->
  </body>
  </html>
  `;
};

//public/assets/img/504-Clean2.png   src="cid:504CleanLogo"
const send = async ({ email,nombre,celular,total,efectivo,idPed,linkW }) => {
  console.log("desde mailer ", email,nombre,celular,total,efectivo,idPed,linkW )
  //const send = async ({ to, subject, text }) => {
    // const send = async ({ to, subject, text }, name) => {
//   return await transporter.sendMail({
//     from: `Santander <${process.env.MAIL_USER}>`,
//     to,
//     // bcc: ['gandresrp@gmail.com', 'rmrios.rr@gmail.com', 'maty.gomez.carrillo@gmail.com', 'rodolfostazzi@gmail.com', 'rb.elizabetha@gmail.com', 'dsaavedra3110@gmail.com', 'jorge.leiva.l@gmail.com', 'raulfaria@gmail.com', 'carola.aliaga@gmail.com', 'jejecristian@gmail.com', 'Luis.avasquezvillaroel@gmail.com'],
//     subject,
//     html
//   })
// }

  const config = {
    from: `504 Clean <${process.env.MAIL_USER}>`,
    // from: `504 Clean <rodolfostazzi@hotmail.com>`,
    to: email,
    bcc: ['rodolfostazziperu@gmail.com'],
    subject: `Su pedido 504 Clean ${idPed}`,
    html: await template( nombre, celular, total, efectivo, linkW ),
    attachments: [
      {
        filename: '504-Clean2.png',
        path: 'public/assets/img/504-Clean2.png',
        cid: "504CleanLogo"
      },
      {
        filename: 'illo_welcome_1.png',
        path: 'public/assets/img/illo_welcome_1.png',
        cid: "welcome"
      },
      {
        filename: 'facebook2x.png',
        path: 'public/assets/img/facebook2x.png',
        cid: "facebook"
      },
      {
        filename: 'instagram2x.png',
        path: 'public/assets/img/instagram2x.png',
        cid: "instagram"
      },
      {
        filename: 'twitter2x.png',
        path: 'public/assets/img/twitter2x.png',
        cid: "twitter"
      },
      {
        filename: 'pinterest2x.png',
        path: 'public/assets/img/pinterest2x.png',
        cid: "pinterest"
      },
      {
        filename: 'documento.pdf',
        path: 'dataResponse/documento.pdf',
        cid: "documentoDetalle"
      }
    ]
  };

  console.log("desde mailer 3 ");

try {
  return await transporter.sendMail(config);
} catch (error2) {
  console.log('error2', error2)
}

};
// const send = async ({ to, subject, text }, name) => {
//   return await transporter.sendMail({
//     from: `Santander <${process.env.MAIL_USER}>`,
//     to,
//     // bcc: ['gandresrp@gmail.com', 'rmrios.rr@gmail.com', 'maty.gomez.carrillo@gmail.com', 'rodolfostazzi@gmail.com', 'rb.elizabetha@gmail.com', 'dsaavedra3110@gmail.com', 'jorge.leiva.l@gmail.com', 'raulfaria@gmail.com', 'carola.aliaga@gmail.com', 'jejecristian@gmail.com', 'Luis.avasquezvillaroel@gmail.com'],
//     subject,
//     html
//   })
// }
module.exports = { send };