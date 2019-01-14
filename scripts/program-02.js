


function conCat() {
	var tex1 = document.getElementById("tex1").value;
	var tex2 = document.getElementById("tex2").value;
	document.getElementById("conCat").innerHTML = tex1 + " " + tex2;
}

function storeText(){
	var tex1 = document.getElementById("tex1").value;
	var tex2 = document.getElementById("tex2").value;
	localStorage.tex1 = tex1;
	localStorage.tex2 = tex2;

}

function displayText() {
	document.getElementById("result1").innerHTML = localStorage.tex1;
	document.getElementById("result2").innerHTML = localStorage.tex2;
}

function removeText() {
	localStorage.removeItem("tex1");
	localStorage.removeItem("tex2");
}

function searchText() {
	var master = document.getElementById("textArea").value;
	var search = document.getElementById("textSearch").value;
	var result = master.search(search);

	if (result == -1) {
		document.getElementById("searchResult").innerHTML = "STRING NOT FOUND";
	} else {
		document.getElementById("searchResult").innerHTML = "STRING FOUND";
	}
}

function sliceText(){
	var textToSlice = document.getElementById("textToSlice").value;
	var startVal = document.getElementById("arg1").value;
	var endVal = document.getElementById("arg2").value;
	var reSlice = textToSlice.slice(startVal,endVal);
	document.getElementById("reString").innerHTML = reSlice;
	document.getElementById("arg1Text").innerHTML = "  Start Index";
	document.getElementById("arg2Text").innerHTML = "  End Index ";
}

function substringText(){
	var textToSlice = document.getElementById("textToSlice").value;
	var startVal = document.getElementById("arg1").value;
	var endVal = document.getElementById("arg2").value;
	var reSlice = textToSlice.substring(startVal,endVal);
	document.getElementById("reString").innerHTML = reSlice;
	document.getElementById("arg1Text").innerHTML = "  From Index";
	document.getElementById("arg2Text").innerHTML = "  To Index      ";
}

function substrText(){
	var textToSlice = document.getElementById("textToSlice").value;
	var startVal = document.getElementById("arg1").value;
	var endVal = document.getElementById("arg2").value;
	var reSlice = textToSlice.substr(startVal,endVal);
	document.getElementById("reString").innerHTML = reSlice;
	document.getElementById("arg1Text").innerHTML = "  Start Index";
	document.getElementById("arg2Text").innerHTML = "  Length Index      ";
}
function replaceText() {
	var textOne = document.getElementById("textOne").value;
	var textTwo = document.getElementById("textTwo").value;
	var textThree = document.getElementById("textThree").value;
	var replaceText = textThree.replace(textOne,textTwo);
	document.getElementById("replaceTextUpper").innerHTML = replaceText.toUpperCase();
}
function flowerArray(){
	var flowerEntered = document.getElementById("textFlower").value;
	var flowerArray  = flowerEntered.split("&");
	document.getElementById("displayArray").innerHTML = "Array Display:   "+flowerArray;
}
function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("pandaCounter").innerHTML = "You have clicked the Panda " + sessionStorage.clickcount + " time(s) in this session.";
    } else {
        document.getElementById("pandaCounter").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function divByZeroString(){
	var numberOne = document.getElementById("numberOne").value;
	var numberZero = document.getElementById("numberZero").value;
	var texString = document.getElementById("texString").value;
	var divideNum = numberOne / numberZero;
	var stringOp = texString + numberOne;
	document.getElementById("divZero").innerHTML = "Results from number divide by zero: " + divideNum;
	document.getElementById("addString").innerHTML = "Results from adding your string with the first number: " + stringOp;

}
function parseOps(){
	var texNumber = document.getElementById("texNumber").value;
	var texInt = document.getElementById("texInt").value;
	var texFloat = document.getElementById("texFloat").value;

	var resNumber = Number(texNumber);
	var resParse = parseInt(texInt);
	var resFloat = parseFloat(texFloat);

	document.getElementById("numFun").innerHTML = resNumber;
	document.getElementById("parseFun").innerHTML = resParse;
	document.getElementById("floatFun").innerHTML = resFloat;
}

function genRandom() {
	var x = Math.floor((Math.random() * 7) + 1);
	var y = Math.floor((Math.random() * 222) + 33);
	var z = Math.floor((Math.random() * 152) + 572);

	document.getElementById("ranNum1").innerHTML = x;
	document.getElementById("ranNum2").innerHTML = y;
	document.getElementById("ranNum3").innerHTML = z;
}

function genExpon(){
	var base = document.getElementById("baseNum").value;
	var expon = document.getElementById("exNum").value;
	var res = Math.pow(base, expon);
	document.getElementById("exRes").innerHTML = base + " to the power of " + expon + " equals "+res;
}
function displayDates() {
	var event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
	var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
	var options2 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	var options3 = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
	var options4 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	var longDate1 = event.toLocaleDateString('en-US', options);
	var longDate2 = event.toLocaleDateString('en-US', options2);
	var longDate3 = event.toLocaleDateString('en-US', options3);
	var longDate4 = event.toLocaleDateString();
	document.getElementById("Date1").innerHTML = "Day is set long:   "+longDate1;
	document.getElementById("Date2").innerHTML = "Day and Month are set long:   "+longDate2;
	document.getElementById("Date3").innerHTML = "Day and Month are set short:   "+longDate3;
	document.getElementById("Date4").innerHTML = "All are set short:   "+longDate4;
}

function genDate() {
	var dateNum = document.getElementById("dateNum").value;
	var monthNum = document.getElementById("monthNum").value;
	var yearNum = document.getElementById("yearNum").value;

	var d = new Date();
	d.setDate(dateNum);
	d.setMonth(monthNum);
	d.setFullYear(yearNum);

	document.getElementById("dateRes").innerHTML = d.getDate();
	document.getElementById("monthRes").innerHTML = d.getMonth();
	document.getElementById("yearRes").innerHTML = d.getFullYear();

}
function planetArray() {
	var planetEntered = document.getElementById("textPlanet").value;
	var planetArray  = planetEntered.split(" ");
	document.getElementById("displayArray2").innerHTML = "Array Display:   "+planetArray;
	document.getElementById("displayString2").innerHTML = "String Display:   "+planetArray.toString();
}
function planetRepArray() {
	var planetEntered = document.getElementById("textPlanet").value;
	planetArray  = planetEntered.split(" ");
	var textPlanet1 = document.getElementById("textPlanet1").value;
	var textPlanet2 = document.getElementById("textPlanet2").value;
	planetArray.pop();
	planetArray.pop();
	
	planetArray.push(textPlanet1);
	planetArray.push(textPlanet2);
	document.getElementById("displayArray3").innerHTML = "Array Display:   "+planetArray;
}
function planetfirstArray() {
	var planetEntered = document.getElementById("textPlanet").value;
	var planetArray  = planetEntered.split(" ");
	var textPlanet1 = document.getElementById("textPlanet1").value;
	var textPlanet2 = document.getElementById("textPlanet2").value;
	var textPlanet3 = document.getElementById("textPlanet3").value;
	planetArray.pop();
	planetArray.pop();
	
	planetArray.push(textPlanet1);
	planetArray.push(textPlanet2);
	planetArray.shift();
	planetArray.unshift(textPlanet3);
	document.getElementById("displayArray4").innerHTML = "Array Display:   "+planetArray;
}
function planetThirdArray() {
	var planetEntered = document.getElementById("textPlanet").value;
	var planetArray  = planetEntered.split(" ");
	var textPlanet1 = document.getElementById("textPlanet1").value;
	var textPlanet2 = document.getElementById("textPlanet2").value;
	var textPlanet3 = document.getElementById("textPlanet3").value;
	var textPlanet4 = document.getElementById("textPlanet4").value;
	planetArray.pop();
	planetArray.pop();
	
	planetArray.push(textPlanet1);
	planetArray.push(textPlanet2);
	planetArray.shift();
	planetArray.unshift(textPlanet3);
	planetArray.splice(2,0,textPlanet4);
	planetArray.sort();
	document.getElementById("displayArray5").innerHTML = "Array Display:   "+planetArray;

}
function splitArray() {
	var planetEntered = document.getElementById("textPlanet").value;
	var planetArray  = planetEntered.split(" ");
	var textPlanet1 = document.getElementById("textPlanet1").value;
	var textPlanet2 = document.getElementById("textPlanet2").value;
	var textPlanet3 = document.getElementById("textPlanet3").value;
	var textPlanet4 = document.getElementById("textPlanet4").value;
	planetArray.pop();
	planetArray.pop();
	
	planetArray.push(textPlanet1);
	planetArray.push(textPlanet2);
	planetArray.shift();
	planetArray.unshift(textPlanet3);
	planetArray.splice(2,0,textPlanet4);
	var splitPlanet1 = planetArray.splice(4);
	document.getElementById("displayArray6").innerHTML = "Array1 Display:   "+planetArray;
	document.getElementById("displayArray7").innerHTML = "Array2 Display:   "+splitPlanet1;
}
function compareNumbers() {
	var numOne = document.getElementById("numOne").value;
	var numTwo = document.getElementById("numTwo").value;

	if (numOne > numTwo) {
		document.getElementById("displayCompare").innerHTML = "Number 1 is greater than Number 2";
	} else if (numOne < numTwo){
		document.getElementById("displayCompare").innerHTML = "Number 1 is less than Number2";
	} else {
		document.getElementById("displayCompare").innerHTML = "Numbers are equal!!";
	}
}

function testNumber() {
	document.getElementById("displayTest1").innerHTML = "";
	var numTest = document.getElementById("numTest").value;
	if(isNaN(numTest)){
	document.getElementById("displayTest").innerHTML = numTest + " is not a number, try again <br/>";
 	}else{
	document.getElementById("displayTest").innerHTML = numTest + " is a number <br/>";
    }
    if (numTest >= 3 && numTest <= 55) {
    	document.getElementById("displayTest1").innerHTML = numTest + " is between 3 and 55 <br/>";
    } else if (numTest >= 77 && numTest <= 99){
    	document.getElementById("displayTest1").innerHTML = numTest + " is between 77 and 99 <br/>";
    }
}
function testMetal() {
	var metal = document.getElementById("metal").value;
	if (metal == "bronze") {
		document.getElementById("metalTest").innerHTML = "User entered bronze.";
	} else if(metal == "brass") {
		document.getElementById("metalTest").innerHTML = "User entered brass.";
	} else if(metal == "zinc") {
		document.getElementById("metalTest").innerHTML = "User entered zinc.";
	} else if (metal == "aluminum") {
		document.getElementById("metalTest").innerHTML = "User entered aluminum.";
	} else {
		document.getElementById("metalTest").innerHTML = "metal is not one of the choices.";
	}
}
function testActor() {
	var actor = document.getElementById("actor").value;
	var text;
	switch(actor) {
        case "Tom":
            text = "Tom is one of our actors!";
        break;
        case "Nick":
        text = "Nick is one of our actors!";
        break;
        case "John":
        text = "John is one of our actors!";
        break;
        case "Ann":
        text = "Ann is one of our actors!";
        break;
        default:
        text = "I have never heard of that actor...";
    }
    document.getElementById("actorTest").innerHTML = text;
}
function testAnimal() {
	var animal = document.getElementById("animal").value;
	var text;
	switch(animal) {
        case "bat":
            text = "animal flies";
        break;
        case "lion":
        text = "animal runs";
        break;
        case "tiger":
        text = "animal runs";
        break;
        case "spider":
        text = "animal crawls";
        break;
        default:
        text = "I have never heard of that animal...";
    }
    document.getElementById("animalTest").innerHTML = text;
}
function testPlanet(){
	var planetEntered = document.getElementById("textPlanet").value;
	var planetArray  = planetEntered.split(" ");
	var textPlanet1 = document.getElementById("textPlanet1").value;
	var textPlanet2 = document.getElementById("textPlanet2").value;
	var textPlanet3 = document.getElementById("textPlanet3").value;
	var textPlanet4 = document.getElementById("textPlanet4").value;
	planetArray.pop();
	planetArray.pop();
	
	planetArray.push(textPlanet1);
	planetArray.push(textPlanet2);
	planetArray.shift();
	planetArray.unshift(textPlanet3);
	
	var x;
	var y = 0;
	var z = 0;
	var txt = "";
	var txt1 = "";
	var txt2 = "";
	var planetClone1 = planetArray.slice(0);
	var planetClone2 = planetArray.slice(0);
	for (x in planetArray){
		txt += planetArray[x] + " ";
	}
	document.getElementById("planetTest").innerHTML = "Using For In Loop: "+txt;
	while (y < 7){
		txt1 += planetClone1[y] + " ";
		y++;
	}
	document.getElementById("planetTest2").innerHTML = "Using while Loop: "+txt1;
	do {
		txt2 += planetClone2[z] + " ";
		z++;
	} while (z < 7);
	document.getElementById("planetTest3").innerHTML = "Using do/while Loop: "+txt2;
}