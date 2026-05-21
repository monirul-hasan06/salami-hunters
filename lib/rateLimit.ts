const store=new Map<string,{count:number;reset:number}>();
export function rateLimit(key:string,limit=10,windowMs=60_000){const now=Date.now();const item=store.get(key);if(!item||item.reset<now){store.set(key,{count:1,reset:now+windowMs});return true;}if(item.count>=limit)return false;item.count++;return true;}
export function ipFromRequest(req:Request){return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()||'unknown';}
