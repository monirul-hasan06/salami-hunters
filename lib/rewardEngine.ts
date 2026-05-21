export function clampReward(requested:number,remaining:number){return Number(Math.max(0,Math.min(requested,remaining)).toFixed(2));}
export function randomReward(min:number,max:number){return Number((Math.random()*(max-min)+min).toFixed(2));}
