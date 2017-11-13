var tempString;
var tempInteger;
var tempWidth;
var tempHeight;
var setTempStringRoute = function(tmp){
	tempString = tmp;
	console.log("tempString contains", tempString);
}
var getTempStringRoute = function(){
	return tempString;
}

var setTempIntegerId = function(tmp){
	tempInteger = tmp;
	console.log("temp Integer", tempInteger);
}
var getTempIntegerId = function(){
	return tempInteger;
}
var setTempWidthHeight = function(tmpw,tmph){
	tempWidth = tmpw;
	tempHeight = tmph;
	console.log("tempWidth contains", tempWidth);
}
var getTempWidth = function(){
	return tempWidth;
}
var getTempHeight = function(){
	return tempHeight;
}