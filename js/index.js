function countSheep(shedForSheep) {
    const sheep = shedForSheep.filter(Boolean).length;

    if (sheep == 0) {
        console.log("UPS!!! Wolfs eaten Sheep")
    }

    if (sheep != 0) {
       console.log("There are", sheep, "sheep in total")
    }
}
shedForSheep = [true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true];

countSheep(shedForSheep);