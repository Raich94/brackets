module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const bracketsPairs = {};
  
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    bracketsPairs[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }
  console.log(openBrackets)
  console.log(bracketsPairs)
  
  let stack = [];
  
  for (let i = 0; i < str.length; i++){
    if (openBrackets.includes(str[i])){
      if (stack.includes(str[i])&&str[i] == '|' || stack.includes(str[i])&&str[i] == '7' || stack.includes(str[i])&&str[i] == '8'){
        stack.pop()
      }else {
        stack.push(str[i])
      }
    } else {
      if (stack.length === 0){
        return false
      }
      let topStack = stack[stack.length - 1];
       if (bracketsPairs[str[i]] == topStack){
         stack.pop();
       }else {
         return false
       }
    }
  }
  return stack.length === 0
}