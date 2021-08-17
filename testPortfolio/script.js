window.onload = function (){
    let app = document.getElementById("app");

    let previousX = 0;
    let previousY = 0;

    app.onmousemove = function (e){
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        

        let ball = document.createElement("div")
        ball.className = "ball";
        ball.style.top =`${mouseY - 10}px`
        ball.style.left = `${mouseX - 10}px`;

        let ballWidth = 0;
        let ballHeight = 0;



        if (previousX != 0 && previousY != 0)
        {
            let size = getDistance(previousX, mouseX, previousY, mouseY);
            if (size > 50)
            {
                size = 50;
            }
            ballWidth = 5 + size;
            ballHeight = 5 + size;
            ball.style.width = `${ballWidth}px`;
            ball.style.height = `${ballHeight}px`;

            ball.style.top =`${mouseY - (ballHeight / 2)}px`
            ball.style.left = `${mouseX - (ballWidth / 2)}px`;
        }

        
        app.appendChild(ball);
        previousX = mouseX;
        previousY = mouseY;

    }

}


function getDistance(x1, x2, y1, y2)
{
    let x = x2 - x1;
    let y = y2 - y1;

    return Math.sqrt(x * x + y * y);
}