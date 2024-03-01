const operator=["+","-",'/',"*"];


function generateRandomNumber():number{
    return Math.floor(Math.random()*100)+1;
}

export function generateQuestion():object{
    let z=operator[generateRandomNumber()%4];
    let y=generateRandomNumber();
    let x=generateRandomNumber();
    
    if (operator[x]=='/' && y==0)   generateQuestion();
    const obj={
        "firstNumber":x,
        "secondNumber":y,
        "symbol":z,
        "result":returnSol(x,y,z)
    }   
    return obj;

}
function returnSol(x:number,y:number,z:string):number{
    if (z=="+") return Math.floor(x+y);
    if (z=='-') return Math.floor(x-y);
    if (z=='/') return Math.floor(x/y);
    return Math.floor(x*y);
}

