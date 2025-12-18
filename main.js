title = document.querySelector('.title');
let turn = 'x';
let squeres = [];

function theEnd(num1, num2, num3){
    title.innerHTML = `${squeres[num1]} winner`;
    document.getElementById('item'+num1).style.background = '#5e5b5b';
    document.getElementById('item'+num2).style.background = '#5e5b5b';
    document.getElementById('item'+num3).style.background = '#5e5b5b';

    setInterval(function(){title.innerHTML += '.'}, 1000);
    setTimeout(function(){location.reload()}, 4000);
}

function winner(){
    for(let i = 1; i < 10; i++){
        squeres[i] = document.getElementById('item'+i).innerHTML;
    }
    if(squeres[1] == squeres[2] && squeres[2] == squeres[3] && squeres[1] != ''){
        // console.log('done');
        theEnd(1, 2, 3);
    }
    if(squeres[4] == squeres[5] && squeres[5] == squeres[6] && squeres[4] != ''){
        theEnd(4, 5, 6);
    }
    if(squeres[7] == squeres[8] && squeres[8] == squeres[9] && squeres[8] != ''){
        theEnd(7, 8, 9);
    }

    if(squeres[1] == squeres[4] && squeres[4] == squeres[7] && squeres[1] != ''){
        theEnd(1, 4, 7);
    }
    if(squeres[2] == squeres[5] && squeres[5] == squeres[8] && squeres[5] != ''){
        theEnd(2, 5, 8);
    }
    if(squeres[3] == squeres[6] && squeres[6] == squeres[9] && squeres[9] != ''){
        theEnd(3, 6, 9);
    }

    if(squeres[1] == squeres[5] && squeres[5] == squeres[9] && squeres[1] != ''){
        theEnd(1, 5, 9);
    }
    if(squeres[3] == squeres[5] && squeres[5] == squeres[7] && squeres[3] != ''){
        theEnd(3, 5, 7);
    }
}


function game(id){
    let element = document.getElementById(id);
    if(turn === 'x'  && element.innerHTML == ''){
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = 'O';
    }
    else if(turn === 'o' && element.innerHTML == ''){
        element.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X';
    }


winner();

}