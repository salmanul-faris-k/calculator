diplaydata=(data)=>{
    displayInput['value']+=data
}
removeall=()=>{
    displayInput['value']="" 
displayInput.placeholder="0"
}
remove=()=>{
displayInput['value']=displayInput['value'].slice(0,-1)
}
show=()=>{
try{
    displayInput['value']=eval( displayInput['value'] )

}
catch(err){
    console.log(err);
    displayInput.placeholder="invalid expression"
    displayInput['value']=""
    
}
}
