$(document).ready(function () {

    var arr1 = [3, 2, 6, 12, 34, 5, 24 ,67, 78];
    var arr2 = [3, 234, 35, 13, 67, 35, 23, 99, 55, 3, 6, 33, 36, 46];
    var arr3 = [100, 300, 700, 600, 1200];

    // Testing arrays
    $(`<h3>Test Array 1</h3>`).appendTo('#shapesList');
    shapesList(arr1);
    $(`<h3>Test Array 2</h3>`).appendTo('#shapesList');
    shapesList(arr2);
    $(`<h3>Test Array 3</h3>`).appendTo('#shapesList');
    shapesList(arr3);


    // Checks the number to get shape and color
    function getShape(num) {
        let shape = {}

        // Num is even and divisible by 2 & 3
        if (((num % 2) === 0) && ((num % 3) === 0)) {
            shape.outline = "red-triangle";
        }

        // Num is even and divisible by 2
        else if ((num % 2) === 0) {
            shape.outline = "red-square";
        }

        // Num is odd and divisible by 3
        else if ((num % 3) === 0) {
            shape.outline = "green-circle";
        }

        return shape;
    }


    // Takes in an array of integers, sorts it, and outputs the correct color and shape
    // Does not output anything if the integer is by divisbible 2 or 3
    function shapesList(arr) {
        arr.sort((a, b) => a - b);
        arr.forEach(num => {
            let theShape = getShape(num);
            if (theShape.outline) {
                $(`<div class="${theShape.outline}"></div>`).appendTo('#shapesList');
            }
        });
    }

});


