

function distanceFromHqInBlocks(location){ 
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
    }else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25;
    }
        return "cannot travel that far";
    
}
