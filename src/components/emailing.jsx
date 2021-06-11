import emailjs from 'emailjs-com';

export const sendEmail = (template_params) => {
    const apikeys = "user_ZadkGDRktU2yZAUQmJfCb"
    const templateId = "template_5hfdhny"

    emailjs.send('service_zegpf68', templateId, template_params, apikeys)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }