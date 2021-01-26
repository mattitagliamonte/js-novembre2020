
const fs=require("fs")

fs.readFile("./testo1.txt", function(error,data){
    if (error) {
        throw error
    }
    const risultati = data
    console.log(risultati.toString()) 

    fs.readFile("./testo2.txt", function(error,data) {
        if (error) {
            throw error
        }
        const risultati2 = data
        console.log(risultati2.toString()) 
    
        fs.readFile("./testo3.txt", function(error,data){
            if (error) {
                throw error
            }
            const risultati3 = data
            console.log(risultati3.toString())
            

            fs.writeFile("./testoPain.txt",risultati+" "+risultati2+" "+risultati3, function(error){  
                if (error){
                    throw error
                }
                console.log("ok")
            })
        
        
        })
    
    
    })
 })