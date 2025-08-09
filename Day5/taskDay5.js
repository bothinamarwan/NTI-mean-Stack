var items =[];  
function Create(a) {
    items.push(a);
    console.log(`added: ${a}`);
} // creat function
function read() {
    console.log("item list:");
    items.forEach((item , index)=>{
        console.log(`${index}: ${item}`);
    });
} // read finction
function update(index, newvalue) {
    if (index >=0 && index < items.length) {
        console.log(` update "${items[index]}" to "${newvalue}"`);
        items[index]=newvalue;
    }else{
        console.log("invaled index");
    }
} // update function
function Delete(index) {
    if (index >=0 && index < +items.length) {
        console.log(`delete : ${items[index]}`);
        items.splice(index, 1);
    }else{
        console.log("invalid index");
    }//delete function
}
    Create("apple");
    Create("banana");
    Create("orange");
    read();
    update(1,"grapes");
    Delete(0);
    read();
