import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import {logTemplate} from '../lib/utils/server';

interface EnvData {
  DB_PORT: string;
  SEND_EMAILS: string;
  EMAIL_SECURE: string;
  DB_HOST: string;
  JWT_EXPIRES_IN: string;
  JWT_ALGORITHM: string;
  DB_NAME: string;
  EMAIL_PORT: string;
  DB_DIALECT: string;
  DB_USER: string;
  DB_PASS: string;
  EMAIL_USER: string;
  EMAIL_HOST: string;
  EMAIL_SENDER: string;
  EMAIL_PASS?: string;
  TEST_EMAIL_USER: string;
  AES_SALT: string;
  AES_PEPPER: string;
  JWT_SECRET: string;
}

const envData: EnvData = {
  DB_PORT: '3306',
  SEND_EMAILS: 'true',
  EMAIL_SECURE: 'true',
  DB_HOST: 'localhost',
  JWT_EXPIRES_IN: '10h',
  JWT_ALGORITHM: 'HS256',
  DB_NAME: 'dependability_tracker',
  //   CHANGE THESE VALUES WITH YOUR OWN
  // Leave the keys, ie DB_USER as is
  // Change any values within <>, be sure to remove the <> like the values above
  EMAIL_PORT: '465',
  DB_DIALECT: 'mysql',
  DB_USER: '<username>',
  DB_PASS: '<password>',
  EMAIL_USER: '<email_user>',
  EMAIL_HOST: '<email_host>',
  EMAIL_SENDER: '<email_sender',
  EMAIL_PASS: undefined,
  TEST_EMAIL_USER: '<test_email_user>',
  //   CAN BE LEFT AS IT TO GENERATE RANDOM VALUES OR REPLACED TO USE YOUR OWN
  AES_SALT: '<32-byte salt>', // LEAVE TO GENERATE A RANDOM VALUE
  AES_PEPPER: '<32-byte pepper>', // LEAVE TO GENERATE A RANDOM VALUE
  JWT_SECRET: '<32-character-secret>' // LEAVE TO GENERATE A RANDOM VALUE
};

function createEnvFile(createTestEnv = false) {
  console.log(
    logTemplate(`Generating Environment Variable File: ${createTestEnv ? '.env.test' : '.env'}`)
  );
  const envPath = path.join(process.cwd(), createTestEnv ? '.env.test' : '.env');

  // if the file exists do not overwrite it
  if (fs.existsSync(envPath)) {
    console.log(logTemplate('Environment file already exists, skipping creation'));
    return;
  }

  let envFile = '';
  for (const key in envData) {
    let value = envData[key as keyof typeof envData];

    if (value === undefined) {
      continue;
    }

    if (value.includes('<32-')) {
      value = crypto.randomBytes(32).toString('hex');
    }

    envFile += `${key} = ${value}\n`;
  }
  fs.writeFileSync(envPath, envFile);
  console.log(logTemplate('Environment file created successfully'));
}

if (require.main === module) {
  const [
    ,
    ,
    createTestEnv,
    emailPort,
    emailSecure,
    dbUser,
    dbPass,
    emailUser,
    emailHost,
    emailSender,
    testEmailUser,
    aesSalt,
    aesPepper,
    jwtSecret,
    dbDialect,
    emailPassword
  ] = process.argv;

  if (emailPort) {
    envData.EMAIL_PORT = emailPort;
  }
  if (emailSecure) {
    envData.EMAIL_SECURE = emailSecure;
  }
  if (dbUser) {
    envData.DB_USER = dbUser;
  }
  if (dbPass) {
    envData.DB_PASS = dbPass;
  }
  if (emailUser) {
    envData.EMAIL_USER = emailUser;
  }
  if (emailHost) {
    envData.EMAIL_HOST = emailHost;
  }
  if (emailSender) {
    envData.EMAIL_SENDER = emailSender;
  }
  if (testEmailUser) {
    envData.TEST_EMAIL_USER = testEmailUser;
  }
  if (aesSalt) {
    envData.AES_SALT = aesSalt;
  }
  if (aesPepper) {
    envData.AES_PEPPER = aesPepper;
  }
  if (jwtSecret) {
    envData.JWT_SECRET = jwtSecret;
  }

  if (dbDialect) {
    envData.DB_DIALECT = dbDialect;
  }

  if (emailPassword) {
    envData['EMAIL_PASS'] = emailPassword;
  }

  createEnvFile(createTestEnv ? createTestEnv === 'true' : false);
}
