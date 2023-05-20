const axios = require('axios');

const envioMensaje = async (dataMensaje) => {
console.log(dataMensaje, 'dataMensaje')

console.log(dataMensaje[0])
console.log(dataMensaje[1])
console.log(dataMensaje[2])
  const url = 'https://graph.facebook.com/v16.0/112206131832212/messages';
const data = {
  messaging_product: 'whatsapp',
  to: dataMensaje[1],
  type: 'template',
  template: {
    name: 'comprobante4',
    language: {
      code: 'es_AR'
    },
    components: [
      {
        type: 'header',
        parameters: [
          {
            type: 'document',
            document: {
              link: 'https://drive.google.com/file/d/1QSYIgd6i9Px8MRzw42nZnHjI_EUt0ChI/view?usp=share_link '
            }
          }
        ]
      },
      {
        type: 'body',
        parameters: [
          {
            type: 'text',
            text: dataMensaje[0]
          },
          {
            type: 'text',
            text: 'dataMensaje[2]'
          }
        ]
      }
    ]
  }
};

const config = {
  headers: { Authorization: 'Bearer EAAT2D1lekK0BAJxD68sSGtFSqtHvLBFANTvWes6MtQwR8JZCrZAOlKA1OzZCviVsZAZBPxh74ojee5OAbipXoV9YVTSElMotYC7EzCuvLS259HOIaRhshQ1KUtcikYSiJraUKTJMJq1fdygJr0XTG1zAWEBOV0kodknZATFN9n4Cyaqdtza3tI' }
};

axios.post(url, data, config)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

};



module.exports = { envioMensaje };