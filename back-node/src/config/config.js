import dotenv from 'dotenv';

dotenv.config()

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const HOST = process.env.HOST || '127.0.0.1';
export const PORT = process.env.PORT || 5000;
export const URL_MELI = process.eventNames.URL_API_MELI || 'https://api.mercadolibre.com';