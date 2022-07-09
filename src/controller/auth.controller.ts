import express, { Request, Response } from "express";
// import { auth, requiresAuth } from "express-openid-connect";
import * as dotenv from "dotenv";

dotenv.config();

const authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH_SECRET,
  baseURL: 'http://localhost:7000',
  clientID: 'J1xWI9wLxh4hJ7pCjr0CIBEO7Rk3UUUq',
  issuerBaseURL: 'https://dev-684sss2u.us.auth0.com'
};

export const authRouter = express.Router();

// export const openIdAuthConnect = auth(authConfig);

// // req.isAuthenticated is provided from the auth router
// authRouter.get('/', (req: Request, res: Response) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });

// authRouter.get('/profile', requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });