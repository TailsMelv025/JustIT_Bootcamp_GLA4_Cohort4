let allH1s = document.querySelectorAll("h1");
for(firstH1 = 0; firstH1<allH1s.length; firstH1++){
    allH1s[firstH1].style.color="red";
    allH1s[firstH1].style.fontFamily="cursive";
};

const pClass = document.querySelectorAll(".pClass");

function myPClass(){
    for(i=0; i<pClass.length; i++){
        pClass[i].style.color="blue";
        pClass[i].style.fontSize="5rem";
    }
};

pClass.forEach(myPClass);