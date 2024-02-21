const axios = require('axios');

/**
 * Calls the endpoint with authorization bearer token.
 * @param {string} endpoint 
 * @param {string} accessToken 
 */
async function callApi(endpoint, accessToken, emailAddress, emailBody, sender) {

    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };

    console.log('request made to web API at: ' + new Date().toString(), emailAddress, emailBody, sender);

    // try {
    //     const response = await axios.get(endpoint, options);
    //     // console.log('response', response)
    //     console.log(response)
    //     return response.data;
    // } catch (error) {
    //     console.log(error)
    //     return error;
    // }
  //   const emailPayload = {
  //     // message: {
  //       subject: 'Your email subject',
  //       body: {
  //         content: 'Your email body',
  //         contentType: 'Text',
  //       },
  //       toRecipients: [
  //         {
  //           emailAddress: {
  //             address: 'bregmanmax91@gmail.com',
  //           },
  //         },
  //       ],
  //     // }
  //     }
  // const options = {
  //   url: 'https://graph.microsoft.com/v1.0/users/2824fed06dcba701/sendMail',
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json;charset=UTF-8', 'Authorization': `Bearer ${accessToken}`
  //   },
  //   body: {"message":{"subject":"fdfdfdfMeet for lunch?","body":{"contentType":"Text","content":"fdfdfddfdfThe new cafeteria is open."},"toRecipients":[{"emailAddress":{"address":"bregmanmax91@gmail.com"}}]}}
  // };
  
  // axios(options)
  //   .then(response => {
  //     console.log(response.status);
  //   });
  async function sendMail() {

    const client = sender === 'confirm' ? '604769fb-f8d3-4f27-a088-c04f00a2372c' : 'c746dde6-a485-4274-af70-d830ef7f7a01' 

    // const client = 'c746dde6-a485-4274-af70-d830ef7f7a01'
console.log(sender)
    console.log(client)
    
    const emailEndpoint = `https://graph.microsoft.com/v1.0/users/${client}/sendMail`
    const emailPayload = {
      message: {
        subject: 'Test 1',
        body: {
          content: emailBody,
          contentType: 'Text',
        },
        toRecipients: [
          {
            emailAddress: {
              address: emailAddress,
            },
          },
        ],
      },
      saveToSentItems: true,
    };
    

    try {
      const response = await axios.post(emailEndpoint, emailPayload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
  
      console.log('Email sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending email:', error.response.data.error);
		return error
    }
  }
	
	// try {
//   const response = await axios.get('https://graph.microsoft.com/v1.0/users/b7a315e8-4d3e-4f4f-9ae6-46298ffbbb95/',
//   {headers: {
//           Authorization: `Bearer ${accessToken}`,
//           'Content-Type': 'application/json',
//         }})

//   console.log('Email sent successfully:', response.data);
// } catch (error) {
//   console.error('Error sending email:', error.response.data.error);
// }
  //   axios
  // .post("https://graph.microsoft.com/v1.0/users/")
  // .then(response => {
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   console.log(error);
  // });
  await sendMail()
};



module.exports = {
    callApi: callApi
};