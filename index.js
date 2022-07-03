

/*function distanceFromHqInBlocks(location){ 
    if (location < 42){
    return 42 - location
    }
    
     return  location - 42 
    
}

function distanceFromHqInFeet(location) {
    let feet = distanceFromHqInBlocks(location)
    return feet * 264
   }


function distanceTravelledInFeet(startLocation, endLocation){
    if (startLocation > endLocation) 
        return (startLocation - endLocation) * 264;
        
    else 
        return (endLocation - startLocation) * 264
    }

l
function calculatesFarePrice(start, destination) {
    const distanceInFeet = (start - destination) * 264
    if (distanceInFeet <= 400) {
       return 0;
    } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
        return (distanceInFeet - 400) * .02;
    }else if (distanceInFeet > 2000 && distanceInFeet < 2500){
        return 25;
    }
     else if (distanceInFeet>= 2500 )  {
         return 'cannot travel that far'
     }

}*/


// Code along with Ricardo Guerra
// Using Math.abs to find the absolute value because 42 - location = a negative number


function distanceFromHqInBlocks(pLocation){

    return Math.abs(42 - pLocation)
}
    

function  distanceFromHqInFeet(Location){
    return 264* distanceFromHqInBlocks(Location)
    

}

function distanceTravelledInFeet(start, stop){
    return Math.abs(start - stop) * 264
   
}


function calculatesFarePrice(start, stop){
let distanceInFeet = distanceTravelledInFeet(start, stop);
let fare;

if (distanceInFeet < 400){
    fare = 0;
}
else if (distanceInFeet >= 400 && distanceInFeet <= 2000){
    fare = (distanceInFeet - 400) * 0.02;
}
else if(distanceInFeet > 2000 && distanceInFeet < 2500){
    fare = 25;
}
else if(distanceInFeet > 2500){
    fare = "cannot travel that far"
}
return fare;
}