import dotenv from 'dotenv';
import path from 'path';

// configuring dotenv
dotenv.config({ path: path.join(process.cwd(), '.env') });

// exporting env variable calls
export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
