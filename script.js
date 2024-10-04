let a = 6

function factorial (number){
    let arr = Array.from(Array(number+1).keys())
    let c = (arr.slice(1,)).reduce((a,b)=>{
        return a*b
    })

    console.log(c)
}


function facfor(number){
    for (let index = 0; index < array.length; index++) {
         fac = fac * index
        
    }
    return fac
}
 console.log (factorial(a))
 console.log (facfor(a))