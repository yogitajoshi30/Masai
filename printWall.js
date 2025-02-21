function printWall(H, W){
    for(let i=1; i<=H; i++){
      let line=""
      for(let j=1; j<=W; j++){
        if(i%2==1)
        line+="[]  "
        else
        line+="  []"
      }
      console.log(line);
    }
  }
  printWall(4,5)