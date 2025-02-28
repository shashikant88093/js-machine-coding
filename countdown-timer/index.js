(async()=>{

// hours input 
const hours = document.getElementById("hours--input")

// hours input 
const minutes = document.getElementById("minutes--input")

// hours input 
const seconds = document.getElementById("seconds--input")

// hours 
    function handleHours(e){
        console.log(e.target.value)
    }
    handleHours()
//  Minutes
    function handleMinutes(e){
        console.log(e.target.value)

    }

//  seconds
    function handleSeconds(e){
        console.log(e.target.value)

    }

    // hours event handler start
    hours.addEventListener("input",(e)=>handleHours(e))
    // hours event handler end


     // Minutes event handler start
     minutes.addEventListener("input",(e)=>handleMinutes(e))
     // Minutes event handler end



      // Seconds event handler start
    seconds.addEventListener("input",(e)=>handleSeconds(e))
    // Seconds event handler end
  

})()