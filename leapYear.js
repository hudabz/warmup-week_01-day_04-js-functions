
let year;
const isLeapYear = function (year) { 
if (typeof(year) === "number"){ 
    if (year > 0) { 
  if (year % 4 === 0) { 
    if (year % 100 === 0) {
      if (year % 400 === 0) { 
          return (true);
      } else {
          return (false);
      }
  } else { 
      return (true);
  }

} else { 
    return (false); 
} 
} else { 

} return ("only accepts a positive numbers");
}else {
    return ("only accepts a numbers"); 
}
}
isLeapYear(1997); 

let year;
const isLeapYear = function (year) { 
if (typeof(year) === "number"){ 
    if (year > 0) { 
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ) {

    return (true);
  } else {
      return (false);
  }
        
} else { 

} return ("only accepts a positive numbers");
}else {
    return ("only accepts a numbers"); 
}
}
isLeapYear(1996); 