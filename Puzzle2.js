var thisistheanswerpuzzle2 = 0

var a = 0
var b = 1
var c = a+b 

while (c<4000001) {

    c = a+b 
    
    a = b 

    b = c

if (c%2==0) {
    

    thisistheanswerpuzzle2 +=c

    }

}

console.log(thisistheanswerpuzzle2)
