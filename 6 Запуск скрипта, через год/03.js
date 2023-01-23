function alertInfo(){
    alert('Where my money ?!');
}


function checkTime(){
    const timeInSec = Math.round(Date.now()/1000);
    if( timeInSec>1670700921){
        alertInfo();
    }
    console.log(timeInSec);
}

checkTime();




