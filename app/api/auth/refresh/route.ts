import { NextResponse } from 'next/server';import { bearer,signToken,verifyToken } from '@/lib/auth';
export async function POST(req:Request){try{const p=verifyToken(bearer(req));return NextResponse.json({token:signToken({userId:p.userId,role:p.role})});}catch{return NextResponse.json({error:'Invalid token'},{status:401});}}
