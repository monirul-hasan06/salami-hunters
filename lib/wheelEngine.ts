import { clampReward } from './rewardEngine';
const segments=[1000,500,250,200,100,50,25,20,10,5,2,1];
export function selectWheelReward(remaining:number){const possible=segments.filter(v=>v<=remaining);const actual=possible.length?possible[Math.floor(Math.random()*possible.length)]:0;return {visual: actual===0?'No reward left today':`${actual} BDT`,actual:clampReward(actual,remaining)};}
