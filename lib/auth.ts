import jwt from 'jsonwebtoken';
export type AuthPayload={userId:string;role:'user'|'admin'};
export function signToken(payload:AuthPayload,expiresIn='7d'){const secret=process.env.JWT_SECRET;if(!secret)throw new Error('Missing JWT_SECRET');return jwt.sign(payload,secret,{expiresIn});}
export function verifyToken(token:string){const secret=process.env.JWT_SECRET;if(!secret)throw new Error('Missing JWT_SECRET');return jwt.verify(token,secret) as AuthPayload;}
export function bearer(req:Request){const h=req.headers.get('authorization')||'';return h.startsWith('Bearer ')?h.slice(7):'';}
