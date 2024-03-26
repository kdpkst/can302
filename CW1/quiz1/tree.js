function treePrint(height){
    for(var i=0;i<height;i++){
        var line="";
        // the number of ~ to be printed
        for(var j=0;j<height-i-1;j++){
            line+="~";     
        }
        // the number of * to be printed
        for(var k=0;k<2*i+1;k++){
            line+="*";     
        }
        // the number of ~ to be printed
        for(var t=0;t<height-i-1;t++){
            line+="~";     
        }
        console.log(line);
    }
}

// write test cases below:
var height=14;
treePrint(height);
console.log("\n")

var height=11;
treePrint(height);
console.log("\n")

var height=8;
treePrint(height);
console.log("\n");

var height=5;
treePrint(height);