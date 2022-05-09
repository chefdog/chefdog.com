import * as dotenv from 'dotenv';
dotenv.config();

const KeystoneSettings = () => {
    console.log(require("dotenv").config())
    
    let DATABASE_URL = '';
    if(process.env.NODE_ENV === 'development') {
        DATABASE_URL = 'postgres://cfg-keystone-db-admin:1ch@fdog33@localhost:5432/cfg-keystone-db';
    }

    if(process.env.NODE_ENV === 'production') {
        DATABASE_URL = `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;
    }

    return DATABASE_URL;    
}

export default KeystoneSettings;
