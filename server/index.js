const express=require("express");
const bodyParser=require('body-parser');
const helmet=require('helmet');
const cors=require('cors')


const mongoose=require('mongoose')
const dotenv=require("dotenv");
const morgan = require("morgan");
const clientRoutes=require('./routes/clientRoutes')
const generalRoutes=require('./routes/generalRoutes')
const managementRoutes=require('./routes/managementRoutes')
const salesRoutes=require('./routes/salesRoutes')

const app=express();

/* Middlewares */
dotenv.config();
app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}));
app.use(morgan('common'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors())


/* Routes */
app.use('/client',clientRoutes);
app.use('/general',generalRoutes);
app.use('/management',managementRoutes);
app.use('/sales',salesRoutes);

mongoose.connect((process.env,{})).then(()=>{
	app.listen(app.listen(4000,console.log("server connected".yellow.bold)))
})






