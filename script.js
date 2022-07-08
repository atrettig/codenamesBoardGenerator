function initBoard(){
    let board = document.getElementById("board");




    // Elements in list are RED, BLUE, TAN GREY BLACK
    var tilesRemaining = [5,5,5,1];
    var colors = [
        "#ed071e",
        "#4903fc",
        "#ddde9e",
        "#ab878b", 
        "#2e2929"
    ];

    var colorsList = [

    ]

    let numRBG = 9;
    let numBlack = 2;

    let i = 0;
    while (i < numRBG) {
        colorsList.push(colors[0])    
        colorsList.push(colors[1])    
        colorsList.push(colors[2])    
        i+=1
    }

    for (let index = 0; index < 7; index++) {
        colorsList.push(colors[3])    
        
        
    }
    colorsList.push(colors[4]);
    colorsList.push(colors[4]);
    
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("div")
        row.className = "letter-row"
        



        var haveColor = false
        var randomNum
        let i = 0
        // while (i < 6) {
        //     randomNum = Math.floor(Math.random() * 3)
        //     if (tilesRemaining[randomNum] > 0) {
        //         tilesRemaining[randomNum] -= 1
        //         haveColor = true

        //     }
        //     i++
        // }

        // console.log("Random number is: " + randomNum);
        // console.log("Random color is: " + tilesRemaining[randomNum]);


        for (let j = 0; j < 6; j++) {
            // checking tiles list and removing if less than 5


            let box = document.createElement("div")
            box.className = "letter-box"
            randomNum = Math.floor(Math.random() * colorsList.length)
             
            box.style.backgroundColor = colorsList[randomNum]
            row.appendChild(box)
            colorsList.splice(randomNum,1)
        }

        board.appendChild(row)
    }
    console.log("Getting inside function")

}
initBoard();



document.querySelectorAll('.letter-box').forEach(element => element.addEventListener('click', event => {
    // console.log(event.target.innerText);
    //   console.log('Hi!');
      element.style.backgroundColor = '#f7f3f2';


  }));