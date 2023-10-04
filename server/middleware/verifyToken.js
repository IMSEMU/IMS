import jwt from 'jsonwebtoken';
import { promisify } from 'util';

export const verifyToken = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.refreshToken) {
    token = req.cookies.refreshToken;
  }

  if (!token) {
    res
      .status(401)
      .json({ message: 'You are not logged in! Please log in to get access.' });
  }
  const token2 = req.cookies.accessToken;

  const decoded = await promisify(jwt.verify)(
    token2,
    process.env.ACCESS_TOKEN_SECRET
  );

  const user = {
    id: decoded.id,
    name: decoded.name,
    roles: decoded.roles,
  };
  req.user = user;
  res.locals.user = user;
  next();
};
