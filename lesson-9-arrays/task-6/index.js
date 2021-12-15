const sales = [25, 40, 30, 58, 62]

function getRevenue(sales) {
  
 let sum = 0
for(let index = 0; index < sales.length; index +=1){
  sum += sales[index];
}
console.log(sum)
return sum
}




function checkRevenue(sales, plannedRevenue) {
 let income = getRevenue(sales)
if(income >= plannedRevenue){
  return true
}else{
  return false
}
}
console.log(checkRevenue(sales, 130))
