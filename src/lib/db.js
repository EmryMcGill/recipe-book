import Pocketbase from 'pocketbase';

// initialize Pocketbase so we can use it across the app
export const pb = new Pocketbase('http://127.0.0.1:8090');