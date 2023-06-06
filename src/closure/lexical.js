const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(`myFunction()\n`,
                `My number ${myNumber}`);

    function parent(){ //Funcion interna, al tener una funcion dentro de otra hay un closure
        const inner = 2;
        console.log(`Parent()\n`,
                    `My number ${myNumber}\n`,
                    `myGlobal ${myGlobal}`);
        
        function child(){
            console.log(`Child()\n`,
                        `inner ${inner}\n`,
                        `My number ${myNumber}\n`,
                        `myGlobal ${myGlobal}`);
        }
        return child();
    }
    
    return parent();
}

myFunction();