const express = require('express');
// const { main } = require('.')
//console.log('Hello THere')
const app = express();
const port = process.env.PORT || 3003
const bodyParser = require('body-parser');
const fetch = require('./fetch');
const auth = require('./auth');
// require('dotenv').config();

const cors = require('cors');

app.use(cors());



//const corsOptions = {
//  origin: 'http://localhost:3000', // Replace with the actual origin(s) allowed to access the server
//  methods: 'GET,POST,PUT,DELETE,OPTIONS',
//  allowedHeaders: 'Content-Type,Authorization,X-Requested-With,access-control-allow-origin',
//  credentials: true,
//};

//app.options('/sendMail', cors(corsOptions));

//app.use(bodyParser.json());

//app.use(cors(corsOptions))
//app.use(cors({
  //origin: '*', // Replace '*' with specific origins allowed to access the server
//  methods: 'GET,POST,PUT,DELETE,OPTIONS',
//  allowedHeaders: 'Content-Type,Authorization,X-Requested-With,access-control-allow-origin',
//  credentials: true,
//}));


app.use(express.json());


app.post('/sendMail', async (req, res) => {
	
	//res.send('Email sent successfully:', req.body.email);
	 res.header('Access-Control-Allow-Origin', 'http://localhost:3000, https://comicsignuptest.comedyworks.com/');
	//res.header('Access-Control-Allow-Origin', 'http://localhost:3000, http://example.com');
res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
res.header('Access-Control-Allow-Credentials', true);
	//  	res.send(req.body);
	
	//res.send('success!')
 // main()
 try {
	  
    // Your existing code...

 //			 const requestBody = req.body;
	 
//	 	 const jsonResponse = {
//      method: [requestBody, 'helloe', req.body.email],
 //     url: req.url,
 //     message: `Request received at ${new Date().toString()}`,
  //  };

    // Send the JSON response
    	 
//res.json(jsonResponse);

    // Log or use the request body
   // console.log('Request Body:', requestBody);
	 	//res.send(`${req.method} request at ${req.url}`);
	  	 res.json(['success!', req.body.message])


  	//var fetch = require('./fetch');
   // var auth = require('./auth');
    var authResponse = await auth.getToken(auth.tokenRequest);
    await fetch.callApi(auth.apiConfig.uri, authResponse.accessToken, req.body.email, req.body.message, req.body.sender);


} catch (error) {
    res.send('ERROR', error);
  }
	
})

app.get('/w', function (req, res) {
		//res.send(`Received ${req.method} request at ${req.url}`);

  res.send("HJllo World! And Such");
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

