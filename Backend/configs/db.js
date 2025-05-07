require('dotenv').config()
import { set, connect } from 'mongoose';
set('strictQuery', true);

const dbconnetion = connect(process.env.MONGOURL)


export default {dbconnetion} 