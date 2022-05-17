

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
function calculatesFarePrice(startLocation, endLocation) {

if (startLocation > endLocation) 
return (startLocation - endLocation) * 264;

else 
return (endLocation - startLocation) * 264
}

