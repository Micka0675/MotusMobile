var ligne1 = document.getElementsByClassName("ligne1");
var ligne2 = document.getElementsByClassName("ligne2");
var ligne3 = document.getElementsByClassName("ligne3");
var ligne4 = document.getElementsByClassName("ligne4");
var ligne5 = document.getElementsByClassName("ligne5");
var cases = document.getElementsByClassName("cases");
var valeur = document.querySelectorAll("input").value;
var play = document.getElementById("play");
var zoneJeu = document.getElementById("zoneJeu");
var zoneWin = document.getElementById("zoneWin");
var retent1 = document.getElementById("retry1");
var retent2 = document.getElementById("retry2");
var regles = document.getElementById("reglesDuJeu");
var listMot = [
    "MANIE",
    "DATES",
    "CADET",
    "FURET",
    "CAFES",
    "LEGER",
    "UNTEL",
    "VEINE",
    "BOIRE",
    "BETON",
    "JOUIR",
    "CUITE",
    "SERVI",
    "IDEAL",
    "FINAL",
    "FIGUE",
    "SAINE",
    "ROUTE",
    "GRECS",
    "OPERA",
    "BISOU",
    "POETE",
    "OPTEZ",
    "CLOUS",
    "BIJOU",
    "FILES",
    "ENFIN",
    "OPIUM",
    "JAVEL",
    "HEROS",
    "FERAS",
    "PLANS",
    "ICONE",
    "LISTE",
    "SEVIR",
    "BASES",
    "CHAUD",
    "PISTE",
    "GRADE",
    "ROULE",
    "GOUTE",
    "REPAS",
    "ECRAN",
    "NUQUE",
    "SERAI",
    "FIRME",
    "VERSA",
    "INDEX",
    "FLUTE",
    "PLAGE",
    "RESTE",
    "MENUS",
    "REPOS",
    "STYLE",
    "COGNE",
    "VERSO",
    "GRADE",
    "SUCRE",
    "CRADE",
    "CABLE",
    "MAINS",
    "MINOU",
    "CLEFS",
    "GRIEF",
    "SAUCE",
    "ACIER",
    "CANON",
    "COTES",
    "BATON",
    "PETIT",
    "MUNIR",
    "RAGER",
    "CUIRE",
    "STYLO",
    "FLEAU",
    "REPIT",
    "AIMER",
    "PAINS",
    "MOMIE",
    "PLUIE",
    "LAICS",
    "BADGE",
    "LENTS",
    "CASTE",
    "CLIPS",
    "VODKA",
    "GRUES",
    "PRISE",
    "FAUVE",
    "DICTE",
    "NEUFS",
    "SONDE",
    "SAUTE",
    "ECART",
    "BARBE",
    "DECUS",
    "COTES",
    "PLEIN",
    "DUNES",
    "RACES",
    "RECUL",
    "PORTE",
    "ECOLE",
    "PARIS"];


var motChoisi = listMot[Math.floor(Math.random()*103)];
var charAtrouv = [];
var tabRep = [];
var essai = 0;
console.log(ligne1);
console.log(motChoisi);
retent1.addEventListener('click',recharge);
retent2.addEventListener('click',recharge);

function recharge()
{
    location.reload();
}

for (i = 0 ; i < 5 ; i ++)
{
    charAtrouv.push(motChoisi[i]);
}
console.log(charAtrouv);

play.addEventListener('click', partie);

function partie()
{
        
    
    ligne1[1].disabled = false;
    
    play.style.visibility = "hidden";
    regles.style.display = "none";
    zoneJeu.className = "zoneJeuPop";
    ligne1[1].focus();
    console.log(charAtrouv);
    ligne1[0].value = charAtrouv[0];
    console.log(charAtrouv);
        ligne1[1].onkeyup = function check1()
        {
            tabRep.push(ligne1[0].value);
            tabRep.push(ligne1[1].value);
            ligne1[1].disabled = true;
            ligne1[2].disabled = false;
            ligne1[2].focus();
            console.log(ligne1[1].value);
        };
        ligne1[2].onkeyup = function check2()
        {
            tabRep.push(ligne1[2].value);
            ligne1[2].disabled = true;
            ligne1[3].disabled = false;
            ligne1[3].focus();
            console.log(ligne1[2].value);
        };
        ligne1[3].onkeyup = function check3()
        {
            tabRep.push(ligne1[3].value);
            ligne1[3].disabled = true;
            ligne1[4].disabled = false;
            ligne1[4].focus();
            console.log(ligne1[3].value);
        };
        ligne1[4].onkeyup = function check4()
        {
            console.log(ligne1[3].value);
            tabRep.push(ligne1[4].value);
            var testRep = tabRep.join("");
            var compRep = charAtrouv.join("");
            for(i = 0 ; i < ligne1.length ; i ++)
            {
                if(testRep[i] == compRep[i])
                {
                    var lettresTrouvees = [];
                    lettresTrouvees.push(testRep[i]);
                    ligne1[i].style.backgroundColor = "red";
                    console.log("la lettre "+ lettresTrouvees + " est bien placée!");
                }
                else
                {
                    if (testRep[1] == compRep[i])
                    {
                        ligne1[1].style.backgroundColor = "rgb(241, 187, 10)";
                    }
                    if (testRep[2] == compRep[i] && testRep[2] != testRep[1])
                    {
                        ligne1[2].style.backgroundColor = "rgb(241, 187, 10)";
                    }
                    if (testRep[3] == compRep[i] && testRep[3] != testRep[1] && testRep[3] != testRep[2])
                    {
                        ligne1[3].style.backgroundColor = "rgb(241, 187, 10)";
                    }
                    if (testRep[4] == compRep[i] && testRep[4] != testRep[1] && testRep[4] != testRep[2] && testRep[4] != testRep[3])
                    {
                        ligne1[4].style.backgroundColor = "rgb(241, 187, 10)";
                    }
                }
                
            }
            console.log(tabRep);
            ligne1[4].disabled = true;
            if(testRep == compRep)
            {
                zoneJeu.style.display = "none";
                zoneWin.style.display = "block";
                retry1.style.display = "block";
                zoneWin.innerHTML = "<p>Superbe! <br> Le mot était effectivement: "+ compRep +" Voulez vous essayer de nouveau?</p>";
            }
            else
            {
                ligne2[1].disabled = false;
                ligne2[1].focus();
                ligne2[0].value = charAtrouv[0];
                tabRep = [];
            }
        }

        ligne2[1].onkeyup = function check5()
        {
            tabRep.push(ligne2[0].value);
            tabRep.push(ligne2[1].value);
            ligne2[1].disabled = true;
            ligne2[2].disabled = false;
            ligne2[2].focus();
            console.log(ligne2[1].value);
        };
        ligne2[2].onkeyup = function check6()
        {
            tabRep.push(ligne2[2].value);
            ligne2[2].disabled = true;
            ligne2[3].disabled = false;
            ligne2[3].focus();
            console.log(ligne2[2].value);
        };
        ligne2[3].onkeyup = function check7()
        {
            tabRep.push(ligne2[3].value);
            ligne2[3].disabled = true;
            ligne2[4].disabled = false;
            ligne2[4].focus();
            console.log(ligne2[3].value);
        };
        ligne2[4].onkeyup = function check8()
        {
            console.log(ligne2[3].value);
            tabRep.push(ligne2[4].value);
            var testRep = tabRep.join("");
            var compRep = charAtrouv.join("");
            for(i = 0 ; i < ligne2.length ; i ++)
            {
                if(testRep[i] == compRep[i])
                {
                    var lettresTrouvees = [];
                    lettresTrouvees.push(testRep[i]);
                    ligne2[i].style.backgroundColor = "red";
                    console.log("la lettre "+ lettresTrouvees + " est bien placée!");
                }
                else
                {
                    if (testRep[1] == compRep[i])
                    {
                        ligne2[1].style.backgroundColor = "rgb(241, 187, 10)";
                    }
                    if (testRep[2] == compRep[i] && testRep[2] != testRep[1])
                    {
                        ligne2[2].style.backgroundColor = "rgb(241, 187, 10)";
                    }
                    if (testRep[3] == compRep[i] && testRep[3] != testRep[1] && testRep[3] != testRep[2])
                    {
                        ligne2[3].style.backgroundColor = "rgb(241, 187, 10)";
                    }
                    if (testRep[4] == compRep[i] && testRep[4] != testRep[1] && testRep[4] != testRep[2] && testRep[4] != testRep[3])
                    {
                        ligne2[4].style.backgroundColor = "rgb(241, 187, 10)";
                    }
                }

            }
            console.log(tabRep);
            ligne2[4].disabled = true;
            if(testRep == compRep)
            {
                zoneJeu.style.display = "none";
                zoneWin.style.display = "block";
                retry1.style.display = "block";
                zoneWin.innerHTML = "<p>Superbe! <br> Le mot était effectivement: "+ compRep +" Voulez vous essayer de nouveau?</p>";
            }
            else
            {
                ligne3[1].disabled = false;
                ligne3[1].focus();
                ligne3[0].value = charAtrouv[0];
                tabRep = [];
            }
        }

        ligne3[1].onkeyup = function check9()
        {
            tabRep.push(ligne3[0].value);
            tabRep.push(ligne3[1].value);
            ligne3[1].disabled = true;
            ligne3[2].disabled = false;
            ligne3[2].focus();
            console.log(ligne3[1].value);
        };
        ligne3[2].onkeyup = function check10()
        {
            tabRep.push(ligne3[2].value);
            ligne3[2].disabled = true;
            ligne3[3].disabled = false;
            ligne3[3].focus();
            console.log(ligne3[2].value);
        };
        ligne3[3].onkeyup = function check11()
        {
            tabRep.push(ligne3[3].value);
            ligne3[3].disabled = true;
            ligne3[4].disabled = false;
            ligne3[4].focus();
            console.log(ligne2[3].value);
        };
        ligne3[4].onkeyup = function check12()
        {
            console.log(ligne3[3].value);
            tabRep.push(ligne3[4].value);
            var testRep = tabRep.join("");
            var compRep = charAtrouv.join("");
            for(i = 0 ; i < ligne3.length ; i ++)
            {
                if(testRep[i] == compRep[i])
                {
                    var lettresTrouvees = [];
                    lettresTrouvees.push(testRep[i]);
                    ligne3[i].style.backgroundColor = "red";
                    console.log("la lettre "+ lettresTrouvees + " est bien placée!");
                }
                else
                {
                    if (testRep[1] == compRep[i])
                    {
                        ligne3[1].style.backgroundColor = "rgb(241, 187, 10)";
                    }
                    if (testRep[2] == compRep[i] && testRep[2] != testRep[1])
                    {
                        ligne3[2].style.backgroundColor = "rgb(241, 187, 10)";
                    }
                    if (testRep[3] == compRep[i] && testRep[3] != testRep[1] && testRep[3] != testRep[2])
                    {
                        ligne3[3].style.backgroundColor = "rgb(241, 187, 10)";
                    }
                    if (testRep[4] == compRep[i] && testRep[4] != testRep[1] && testRep[4] != testRep[2] && testRep[4] != testRep[3])
                    {
                        ligne3[4].style.backgroundColor = "rgb(241, 187, 10)";
                    }
                }

            }
            console.log(tabRep);
            ligne3[4].disabled = true;
            if(testRep == compRep)
            {
                zoneJeu.style.display = "none";
                zoneWin.style.display = "block";
                retry1.style.display = "block";
                zoneWin.innerHTML = "<p>Superbe! <br> Le mot était effectivement: "+ compRep +" Voulez vous essayer de nouveau?</p>";
            }
            else
            {
                ligne4[1].disabled = false;
                ligne4[1].focus();
                ligne4[0].value = charAtrouv[0];
                tabRep = [];
            }
        }

        ligne4[1].onkeyup = function check13()
        {
            tabRep.push(ligne4[0].value);
            tabRep.push(ligne4[1].value);
            ligne4[1].disabled = true;
            ligne4[2].disabled = false;
            ligne4[2].focus();
            console.log(ligne4[1].value);
        };
        ligne4[2].onkeyup = function check14()
        {
            tabRep.push(ligne4[2].value);
            ligne4[2].disabled = true;
            ligne4[3].disabled = false;
            ligne4[3].focus();
            console.log(ligne4[2].value);
        };
        ligne4[3].onkeyup = function check15()
        {
            tabRep.push(ligne4[3].value);
            ligne4[3].disabled = true;
            ligne4[4].disabled = false;
            ligne4[4].focus();
            console.log(ligne2[3].value);
        };
        ligne4[4].onkeyup = function check16()
        {
            console.log(ligne4[3].value);
            tabRep.push(ligne4[4].value);
            var testRep = tabRep.join("");
            var compRep = charAtrouv.join("");
            for(i = 0 ; i < ligne4.length ; i ++)
            {
                if(testRep[i] == compRep[i])
                {
                    var lettresTrouvees = [];
                    lettresTrouvees.push(testRep[i]);
                    ligne4[i].style.backgroundColor = "red";
                    console.log("la lettre "+ lettresTrouvees + " est bien placée!");
                }
                else
                {
                    if (testRep[1] == compRep[i])
                    {
                        ligne4[1].style.backgroundColor = "rgb(241, 187, 10)";
                    }
                    if (testRep[2] == compRep[i] && testRep[2] != testRep[1])
                    {
                        ligne4[2].style.backgroundColor = "rgb(241, 187, 10)";
                    }
                    if (testRep[3] == compRep[i] && testRep[3] != testRep[1] && testRep[3] != testRep[2])
                    {
                        ligne4[3].style.backgroundColor = "rgb(241, 187, 10)";
                    }
                    if (testRep[4] == compRep[i] && testRep[4] != testRep[1] && testRep[4] != testRep[2] && testRep[4] != testRep[3])
                    {
                        ligne4[4].style.backgroundColor = "rgb(241, 187, 10)";
                    }
                }

            }
            console.log(tabRep);
            ligne4[4].disabled = true;
            if(testRep == compRep)
            {
                zoneJeu.style.display = "none";
                zoneWin.style.display = "block";
                retry1.style.display = "block";
                zoneWin.innerHTML = "<p>Superbe! <br> Le mot était effectivement: "+ compRep +" Voulez vous essayer de nouveau?</p>";
            }
            else
            {
                ligne5[1].disabled = false;
                ligne5[1].focus();
                ligne5[0].value = charAtrouv[0];
                tabRep = [];
            }
        }

        ligne5[1].onkeyup = function check17()
        {
            tabRep.push(ligne5[0].value);
            tabRep.push(ligne5[1].value);
            ligne5[1].disabled = true;
            ligne5[2].disabled = false;
            ligne5[2].focus();
            console.log(ligne5[1].value);
        };
        ligne5[2].onkeyup = function check18()
        {
            tabRep.push(ligne5[2].value);
            ligne5[2].disabled = true;
            ligne5[3].disabled = false;
            ligne5[3].focus();
            console.log(ligne5[2].value);
        };
        ligne5[3].onkeyup = function check19()
        {
            tabRep.push(ligne5[3].value);
            ligne5[3].disabled = true;
            ligne5[4].disabled = false;
            ligne5[4].focus();
            console.log(ligne2[3].value);
        };
        ligne5[4].onkeyup = function check20()
        {
            console.log(ligne5[3].value);
            tabRep.push(ligne5[4].value);
            var testRep = tabRep.join("");
            var compRep = charAtrouv.join("");
            for(i = 0 ; i < ligne5.length ; i ++)
            {
                if(testRep[i] == compRep[i])
                {
                    var lettresTrouvees = [];
                    lettresTrouvees.push(testRep[i]);
                    ligne5[i].style.backgroundColor = "red";
                    console.log("la lettre "+ lettresTrouvees + " est bien placée!");
                }
                else
                {
                    if (testRep[1] == compRep[i])
                    {
                        ligne5[1].style.backgroundColor = "rgb(241, 187, 10)";
                    }
                    if (testRep[2] == compRep[i] && testRep[2] != testRep[1])
                    {
                        ligne5[2].style.backgroundColor = "rgb(241, 187, 10)";
                    }
                    if (testRep[3] == compRep[i] && testRep[3] != testRep[1] && testRep[3] != testRep[2])
                    {
                        ligne5[3].style.backgroundColor = "rgb(241, 187, 10)";
                    }
                    if (testRep[4] == compRep[i] && testRep[4] != testRep[1] && testRep[4] != testRep[2] && testRep[4] != testRep[3])
                    {
                        ligne5[4].style.backgroundColor = "rgb(241, 187, 10)";
                    }
                }

            }
            console.log(testRep);
            console.log(compRep);
            console.log(tabRep);
            if(testRep == compRep)
            {
                zoneJeu.style.display = "none";
                zoneWin.style.display = "block";
                retry1.style.display = "block";
                zoneWin.innerHTML = "<p>Superbe! <br> Le mot était effectivement: "+ compRep +" Voulez vous essayer de nouveau?</p>";
            }
            else
            {
                zoneJeu.style.display = "none"; 
                zoneLose.style.display = "block"; 
                retry2.style.display = "block";
                zoneLose.innerHTML = "<p>Dommage! Le mot était : "+ compRep +"</p><p>Voulez vous essayer de nouveau?</p>";
            }
            
        }
        
}
        