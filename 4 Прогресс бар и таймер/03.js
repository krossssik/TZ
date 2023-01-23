// есть progress bar который должен заполняться за заданное время. Время задает пользователь.



function userProgress(time){
    var start = 0;
    var time = Math.round(time*1000/100);
    var progressElement = document.getElementById('user_progress');
    var intervalId = setInterval(function(){
        if (start > 100){
            clearInterval(intervalId);
            userProgressCallBack();
        } 
        else {
        progressElement.value = start;
        }
        start++;
    }, time);
}

function userProgressCallBack(){
    document.querySelector('.hidden-block').style.display = 'block';
}
userProgress(2);