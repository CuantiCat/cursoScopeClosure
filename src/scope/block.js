function fruits(){
    if(true){
        var fruit1 = "Apple";
        let fruit2 = "Kiwi";
        const fruit3 = "Banana";
        //Solo son accesibles dentro del if
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
    
}

fruits();