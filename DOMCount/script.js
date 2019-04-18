function totalCount(){ 
   alert('The number of elements on this page is: '+document.getElementsByTagName('p').length);

}

   document.getElementById('total count').addEventListener('click', totalCount);




    
    function div1Count(){
    alert('The number of elements in the orange box is: '+document.getElementById('div1').getElementsByTagName('p').length);
}

document.getElementById('div1 count').addEventListener('click', div1Count);

function div2Count(){
    alert('The number of elements in the blue box is: '+document.getElementById('div2').getElementsByTagName('p').length);
}

document.getElementById('div2 count').addEventListener('click', div2Count);