function CalculateArea(){
        var radius =document.getElementById('radius_circle').value;
        console.log("<P>The area of the circle is " + (radius * radius * Math.PI).toFixed(2) + "</p>");
    }