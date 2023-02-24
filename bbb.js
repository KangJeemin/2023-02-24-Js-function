let rubin =1 ;
console.log(rubin);
rubin = "바보";
console.log(rubin);

let kdt = {
  삼백오호:"홀쭉",
  공욱재:"미남",
}

console.log(kdt["공욱재"]);
kdt_order= ["우리는","개발자","입니다"];

console.log(kdt_order[0],kdt_order[1],kdt_order[2]);

for(let i=0;i<kdt_order.length;i++){
  console.log(i);
}

function percent_calc(real_value, total_value){
  let result = (real_value/total_value) * 100;
  return result;
}

console.log(percent_calc(1,10));