let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let turnO = true;

let newGameBtn = document.querySelector("#New-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let msgDraw = document.querySelector(".msg-draw");
let drawMsg = document.querySelector("#draw-msg");


const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.innerText) return; // prevent overwriting existing mark
        if (turnO) {
            box.innerText = 'O';
            box.classList.add('player-o');
            turnO = false;
        } else {
            box.innerText = 'X';
            box.classList.add('player-x');
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

    const disableBoxes =  () => {
        for(let box of boxes) {
            box.disabled = true;
        }
    }

    const enableBoxes =  () => {
        for(let box of boxes) {
            box.disabled = false;
            box.innerText = "";
            box.classList.remove('player-o','player-x','winning');
        }
    }

    const showwinner = (winner) => {
        msg.innerText = `Congrstulations, Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    };

    const showDraw = () => {
        // Redirect to a dedicated draw page
        // The page `draw.html` will show the draw message and a link to play again
        window.location.href = 'draw.html';
    };


    // (old checkwinner block removed)

    // After checking all win patterns, if no winner, check for draw
    // (i.e., all boxes filled and no winning pattern found)
    const checkForDraw = () => {
        const allFilled = Array.from(boxes).every(b => b.innerText !== '');
        if (allFilled) {
            // If there's already a visible winner message, don't show draw
            if (!msgContainer || msgContainer.classList.contains('hide')) {
                showDraw();
            }
        }
    };

    // Update checkwinner to call checkForDraw when no winner found.
    // We'll wrap the existing checkwinner functionality so it returns a boolean when a winner is found.
    checkwinner = () => {
        for (let pattern of winPatterns) {
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if (pos1Val !== '' && pos2Val !== '' && pos3Val !== '') {
                if (pos1Val === pos2Val && pos2Val === pos3Val) {
                    showwinner(pos1Val);
                    return true;
                }
            }
        }

        // no winner found, check draw
        checkForDraw();
        return false;
    };

        const resetGame = () => {
            turnO = true;
            enableBoxes();
            if (msgContainer) msgContainer.classList.add("hide");
            if (msgDraw) msgDraw.classList.add('hide');
        }

        if (newGameBtn) newGameBtn.addEventListener('click', resetGame);
        if (resetBtn) resetBtn.addEventListener('click', resetGame);

            
        