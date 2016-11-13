// welcome the user
alert("Numbers methods !");


// concat function will concatinate two string,
var con = " javasctipt".concat(" hello");
alert("concatinate " + con);

//will reomve extra spaces from start and end of the string even \t 
var removeSpace = con.trim();

alert("removeSpaces " +removeSpace);

// 0x will show hexadicmal number
var hex = 0xAF;
alert("Hex "+ hex);

// 0 will show octal number
var oct = 047;
alert("Octal "+oct);

// e will show exponent notation
var exp = 2e4;
alert("exponential "+exp);

// e- will show factorize notation
var fact = 2e-4;
alert("exponential factorize "+fact);

//toExponential method will convert number into factorize exponential notation
var toExp = 0.0002 .toExponential();
alert("exponential notation "+toExp);

//toExponential method will convert number into positive exponential notation
var toExpPo = 30004 .toExponential();
alert("positive exponential "+toExpPo);

//toFixed method will only show fixed no of number define in paramiter
var tofix = 3.1415926;
var tofix = tofix.toFixed(3); 
alert("to Fix "+tofix);

//toPrecision method will show precise value by applying math rules
var toPrecise = 3.14;
toPrecise = toPrecise.toPrecision(3);
alert("to precise "+toPrecise);

//infinity
var infin = 1/0;
alert(-infin);

//converting string into number
var strings = "33";
var num = Number("type of "+strings);

alert("type of "+typeof(num));


//converting number into string
var numm = parseInt(3);
var strng = String(numm);

alert("type of "+typeof(strng));

//convert string directly into binary
var st = 10;
var binry = st .toString(2);
alert("binary of 10 is "+binry); 

//conver binary into decimal
var bin = parseInt(binry, 2);
alert("decimal of 1010 is  "+bin);