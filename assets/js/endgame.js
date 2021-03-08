function endGame(){
    var cookies = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key,value]) => ({...accumulator, [key.trim()]:decodeURIComponent(value)}), {});
    let drinks =cookies.drinks
    let answers = cookies.answers
    
    if(typeof drinks == 'undefined'){
        drinks = 0
        
    }
    if (typeof answers == 'undefined'){
        answers = 0
    }
    document.getElementById("final-drinks-score").innerHTML = drinks;
    document.getElementById("final-answers-score").innerHTML = answers;
}
endGame()