function totalCount(){ 
   alert(document.getElementsByTagName('p').length);

}

   document.getElementById('total count').addEventListener('click', totalCount);




    
    function div1Count(){
    alert(document.getElementById('div1').getElementsByTagName('p').length);
}

document.getElementById('div1 count').addEventListener('click', div1Count);

function div2Count(){
    alert(document.getElementById('div2').getElementsByTagName('p').length);
}

document.getElementById('div2 count').addEventListener('click', div2Count);