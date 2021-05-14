import { createClient } from 'nhost-js-sdk';

const config: {
  baseURL:string  
} = {
    baseURL = process.env.nhost_backendURL;
};

const {auth, storage} = createClient(config);