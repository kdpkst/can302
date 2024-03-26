function CssColor(){
    this.hexColor;
    this.hexToRGB=function(){
      var reg=/^#[0-9A-F]{6}$/;
      var match = reg.test(this.hexColor);
      if (match){
          var pseudoHashTable="0123456789ABCDEF";
          var result=0;
          var output="rgb(";
          for(var i=1; i<this.hexColor.length;i++){
              var hex=this.hexColor.charAt(i);
              var decimal=pseudoHashTable.search(hex);
              if (i%2!=0){
                  result+=decimal*16;
              }
              else{
                  result+=decimal;
                  if (i==6){output+=result;}
                  else{output+=result+" ";}
                  result=0;
              }
          }
          console.log(output+")");
      }
      else{
          console.log("Input format error");
      }
    }
}

// write test cases below:
var color = new CssColor();
color.hexColor='#FFA710';
color.hexToRGB();