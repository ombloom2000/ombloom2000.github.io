//square numer
function squareNumber(){
  var sqrnum = document.getElementById('square-input').value
  
  console.log('The result of squaring the number '+sqrnum+' is '+ sqrnum*sqrnum);
  document.getElementById('solution').innerHTML = sqrnum*sqrnum;
    return sqrnum * sqrnum;

}

document.getElementById('square-button').addEventListener("click", squareNumber);




 //half number               
function halfNumber(){
    var halfnum = document.getElementById('half-input').value
    
    console.log('Half of '+halfnum+ ' is '+halfnum/2);
    document.getElementById('solution').innerHTML = halfnum/2;
    return halfnum/2;
}

document.getElementById('half-button').addEventListener('click', halfNumber);





//percent num
function percentOf(){
    var percnum1 = document.getElementById('percent1-input').value
    var percnum2 = document.getElementById('percent2-input').value
   
    
    console.log(percnum1+' is ' +(percnum1/percnum2)*100 +'% of '+percnum2);
    document.getElementById('solution').innerHTML = (percnum1/percnum2)*100 + '%';
    return (percnum1/percnum2)*100;
}

document.getElementById('percent-button').addEventListener('click', percentOf);





//area of circle
function areaOfCircle(){
    var radius = document.getElementById('area-input').value 
    var num = (radius*radius)*3.1415
    
     console.log('The area for a circle with a radius of '+radius+ ' is '+ Math.round(num * 100)/100);
    document.getElementById('solution').innerHTML = Math.round(num * 100)/100;
    return Math.round(num * 100)/100;
    
}

document.getElementById('area-button').addEventListener('click', areaOfCircle);