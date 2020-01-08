function camelToSnakeCase(text){
  if(text === null || text === undefined){
      return text;
  }
  var result = "";
  var upper = 0;
  var numeric = undefined;
  var string = String(text);
  for(var i = 0; i < string.length; i++){
      var ch = string[i];
      var chLower = ch.toLowerCase();
      if(ch !== chLower){
          var prev = result[result.length - 1];
          if(upper > 1 && result.length > 1){
              result = result.slice(0, result.length - 2) + prev;
          }
          if(result.length && prev !== "_" &&
              prev !== " " && prev !== "\t" && prev !== "\r" && prev !== "\n"
          ){
              result += "_";
          }
          result += chLower;
          upper++;
          numeric = false;
      }else if(
          ch === "0" || ch === "1" || ch === "2" || ch === "3" ||
          ch === "4" || ch === "5" || ch === "6" || ch === "7" ||
          ch === "8" || ch === "9"
      ){
          if(numeric === false && result[result.length - 1] !== "_"){
              result += "_";
          }
          result += ch;
          upper = 0;
          numeric = true;
      }else if(numeric && result[result.length - 1] !== "_"){
          result += "_" + ch;
          upper = 0;
          numeric = false;
      }else{
          result += ch;
          upper = 0;
          numeric = false;
      }
  }
  if(upper > 1 && result.length > 1){
      result = result.slice(0, result.length - 2) + result[result.length - 1];
  }
  return result;
}

if(typeof(module) !== "undefined"){
  module.exports = camelToSnakeCase;
}
if(typeof(window) !== "undefined"){
  window.camelToSnakeCase = camelToSnakeCase;
}
