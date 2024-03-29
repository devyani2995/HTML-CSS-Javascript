var ball=document.getElementById('ball');

//setting randomly top and left postion of a ball 
ball.style.top=Math.floor(Math.random()*50).toString()+"px";
ball.style.left=Math.floor(Math.random()*50).toString()+"px";

window.addEventListener('keydown', function(event)
{
    console.log("key event",event);
    let code=event.keyCode;

    //for key 'W'(move upward)
    if(code==87)
    {
        if(ball.style.top=="0px")
        {
            return;
        }
        let current_top_distance=ball.style.top;
        let length_of_current_top_distance=ball.style.top.length;
        let numerical_distance=parseInt(current_top_distance.substring(0, length_of_current_top_distance-2));
        numerical_distance--;
        ball.style.top=numerical_distance.toString()+"px";
    }

    //for key 'A'(move left)
    else if(code==65)
    {
        if(ball.style.left=="0px")
        {
            return;
        }
        let current_left_distance=ball.style.left;
        let length_of_current_left_distance=current_left_distance.length;
        let numerical_distance=parseInt(current_left_distance.substring(0, length_of_current_left_distance-2));
        numerical_distance--;
        ball.style.left=numerical_distance.toString()+"px";
    }

    //for key 'S'(move downward)
    else if(code==83)
    {
        if(ball.style.top==(window.innerHeight-200).toString()+"px")
        {
            return;
        }
        let current_top_distance=ball.style.top;
        let length_of_current_top_distance=ball.style.top.length;
        let numerical_distance=parseInt(current_top_distance.substring(0, length_of_current_top_distance-2));
        numerical_distance++;
        ball.style.top=numerical_distance.toString()+"px";
    }

    //for key 'D'(move right)
    else if(code==68)
    {
        if(ball.style.left==(window.innerWidth-201).toString()+"px")
        {
            return;
        }
        let current_left_distance=ball.style.left;
        let length_of_current_left_distance=current_left_distance.length;
        let numerical_distance=parseInt(current_left_distance.substring(0, length_of_current_left_distance-2));
        numerical_distance++;
        ball.style.left=numerical_distance.toString()+"px";
    }
})