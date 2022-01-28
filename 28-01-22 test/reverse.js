function fn(){
    const g = "Welcome to this Javascript Guide!";
    const h = g.split(" ");
  
    const m = h.map(function(data,index){
       return data.split('').reverse().join("");
    });
    const d = m.join("  ");
    console.log("Output is",`${d}`);
    }
    fn();