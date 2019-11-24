let arr1 = [5, 6, 73, 68, 99, 108, 2];

shapesList(arr1);



function getShape(num){
    
    let shape = {}

    if(((num%2)===0) && ((num%3)===0)){
        shape.outline = "triangle";
        shape.color = "red";
    }
    else if((num%2)===0){
        shape.outline = "square";
        shape.color = "red";
    }

    else if((num%3)===0){
        shape.outline = "circle";
        shape.color = "green";
    }

    else {
        // Error - not divisible by 2 or 3
    }

    return shape;
}




function shapesList(arr){
    arr.sort((a, b) => a-b);
    console.log(arr);

        arr.forEach(num => {
            let theShape = getShape(num);
        });

        document.querySelector("#shapesList").append("<p>hi</p>");


        

}





