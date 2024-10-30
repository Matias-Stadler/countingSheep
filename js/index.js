function countSheep(shedForSheep) {
    const count = shedForSheep.filter(Boolean).length;
    let sheep = 0;
    let wolf = 0;
    for (let i=0;count;i++){
        if(shedForSheep[i]==true){
            sheep=sheep+1;
        }
        if(shedForSheep[i]==false){
            wolf=wolf+1;
        }
    }


    if (sheep == 0) {
        result = "UPS!!! Wolfs eaten Sheep"
    }

    if (sheep != 0) {
        result = "There are ${sheep} sheep in total"
    }
}
shedForSheep = [true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true]

console.log(countSheep(shedForSheep));