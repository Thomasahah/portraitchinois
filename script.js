//-----Modale marron-------------------------------------------------------------//
function showModal1(id){ //Fonction ouvrir la modale 1//
    var container=document.getElementById(id);
    var bloc=document.querySelector('.windowmarron');
    var box=container.querySelector('.windowmarron');
    container.classList.add('backwindow');
    requestAnimationFrame(function(){ //Animation lors de l'ouverture//
        box.style.transition='all 0.5s ease'; //Temps d'apparition complète de la modale//
        box.style.transform='scale(1,1)'; //Taille de transformation de la modale*/
    });
    container.style.pointerEvents='auto';
    container.style.opacity=1;
    bloc.innerHTML=bloc.innerHTML+"<div class='etaismarron'>Si j'étais "+data[0]["analogies"]+"..."+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='seraismarron'>je serais "+data[0]["valeurAnalogie"]+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='explmarron'><br>"+data[0]["explication"]+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='comblmarron'><br>"+data[0]["combl"]+"</div>"
}
function closeModal1(id){ //Fonction fermer la modale 1//
    var container = document.getElementById(id);
    var box=container.querySelector('.windowmarron');
    container.classList.remove('backwindow')
    requestAnimationFrame(function(){ //Animation lors de la fermeture//
            box.style.transition='all 0.5s ease';
            box.style.transform='scale(0,0)';
        });
    container.style.opacity=0
}

//-----Modale verte-------------------------------------------------------------//
function showModal2(id){ //Fonction ouvrir la modale 2//
    var container=document.getElementById(id);
    var bloc=document.querySelector('.windowvert');
    var box=container.querySelector('.windowvert');
    container.classList.add('backwindow')
    requestAnimationFrame(function(){ //Animation lors de l'ouverture//
        box.style.transition='all 0.5s ease';
        box.style.transform='scale(1,1)';
    });
    container.style.pointerEvents='auto';
    container.style.opacity=1;
    bloc.innerHTML=bloc.innerHTML+"<div class='etaisvert'>Si j'étais "+data[1]["analogies"]+"..."+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='seraisvert'>je serais "+data[1]["valeurAnalogie"]+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='explvert'><br>"+data[1]["explication"]+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='comblvert'><br>"+data[1]["combl"]+"</div>"
}
function closeModal2(id){ //Fonction fermer la modale 2//
    var container = document.getElementById(id);
    var box=container.querySelector('.windowvert');
    container.classList.remove('backwindow')
    requestAnimationFrame(function(){ //Animation lors de la fermeture//
            box.style.transition='all 0.5s ease';
            box.style.transform='scale(0,0)';
        });
    container.style.opacity=0
}

//-----Modale jaune-------------------------------------------------------------//
function showModal3(id){ //Fonction ouvrir la modale 3//
    var container=document.getElementById(id);
    var bloc=document.querySelector('.windowjaune');
    var box=container.querySelector('.windowjaune');
    container.classList.add('backwindow')
    requestAnimationFrame(function(){ //Animation lors de l'ouverture//
        box.style.transition='all 0.5s ease';
        box.style.transform='scale(1,1)';
    });
    container.style.pointerEvents='auto';
    container.style.opacity=1;
    bloc.innerHTML=bloc.innerHTML+"<div class='etaisjaune'>Si j'étais "+data[2]["analogies"]+"..."+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='seraisjaune'>je serais "+data[2]["valeurAnalogie"]+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='expljaune'><br>"+data[2]["explication"]+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='combljaune'><br>"+data[2]["combl"]+"</div>"
}
function closeModal3(id){ //Fonction fermer la modale 3//
    var container = document.getElementById(id);
    var box=container.querySelector('.windowjaune');
    container.classList.remove('backwindow')
    requestAnimationFrame(function(){ //Animation lors de la fermeture//
            box.style.transition='all 0.5s ease';
            box.style.transform='scale(0,0)';
        });
    container.style.opacity=0
}

//-----Modale violet-------------------------------------------------------------//
function showModal4(id){ //Fonction ouvrir la modale 4//
    var container=document.getElementById(id);
    var bloc=document.querySelector('.windowviolet');
    var box=container.querySelector('.windowviolet');
    container.classList.add('backwindow')
    requestAnimationFrame(function(){ //Animation lors de l'ouverture//
        box.style.transition='all 0.5s ease';
        box.style.transform='scale(1,1)';
    });
    container.style.pointerEvents='auto';
    container.style.opacity=1;
    bloc.innerHTML=bloc.innerHTML+"<div class='etaisviolet'>Si j'étais "+data[3]["analogies"]+"..."+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='seraisviolet'>je serais "+data[3]["valeurAnalogie"]+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='explviolet'><br>"+data[3]["explication"]+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='comblviolet'><br>"+data[3]["combl"]+"</div>"
}
function closeModal4(id){ //Fonction fermer la modale 4//
    var container = document.getElementById(id);
    var box=container.querySelector('.windowviolet');
    container.classList.remove('backwindow')
    requestAnimationFrame(function(){ //Animation lors de la fermeture//
            box.style.transition='all 0.5s ease';
            box.style.transform='scale(0,0)';
        });
    container.style.opacity=0
}

//-----Modale rouge-------------------------------------------------------------//
function showModal5(id){ //Fonction ouvrir la modale 5//
    var container=document.getElementById(id);
    var bloc=document.querySelector('.windowrouge');
    var box=container.querySelector('.windowrouge');
    container.classList.add('backwindow')
    requestAnimationFrame(function(){ //Animation lors de l'ouverture//
        box.style.transition='all 0.5s ease';
        box.style.transform='scale(1,1)';
    });
    container.style.pointerEvents='auto';
    container.style.opacity=1;
    bloc.innerHTML=bloc.innerHTML+"<div class='etaisrouge'>Si j'étais "+data[4]["analogies"]+"..."+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='seraisrouge'>je serais "+data[4]["valeurAnalogie"]+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='explrouge'><br>"+data[4]["explication"]+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='comblrouge'><br>"+data[4]["combl"]+"</div>"
}
function closeModal5(id){ //Fonction fermer la modale 5//
    var container = document.getElementById(id);
    var box=container.querySelector('.windowrouge');
    container.classList.remove('backwindow')
    requestAnimationFrame(function(){ //Animation lors de la fermeture//
            box.style.transition='all 0.5s ease';
            box.style.transform='scale(0,0)';
        });
    container.style.opacity=0
}

//-----Modale orange-------------------------------------------------------------//
function showModal6(id){ //Fonction ouvrir la modale 6//
    var container=document.getElementById(id);
    var bloc=document.querySelector('.windoworange');
    var box=container.querySelector('.windoworange');
    container.classList.add('backwindow')
    requestAnimationFrame(function(){ //Animation lors de l'ouverture//
        box.style.transition='all 0.5s ease';
        box.style.transform='scale(1,1)';
    });
    container.style.pointerEvents='auto';
    container.style.opacity=1;
    bloc.innerHTML=bloc.innerHTML+"<div class='etaisorange'>Si j'étais "+data[5]["analogies"]+"..."+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='seraisorange'>je serais "+data[5]["valeurAnalogie"]+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='explorange'><br>"+data[5]["explication"]+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='comblorange'><br>"+data[5]["combl"]+"</div>"
}
function closeModal6(id){ //Fonction fermer la modale 6//
    var container = document.getElementById(id);
    var box=container.querySelector('.windoworange');
    container.classList.remove('backwindow')
    requestAnimationFrame(function(){ //Animation lors de la fermeture//
            box.style.transition='all 0.5s ease';
            box.style.transform='scale(0,0)';
        });
    container.style.opacity=0
}

//-----Modale bleu-------------------------------------------------------------//
function showModal7(id){ //Fonction ouvrir la modale 7//
    var container=document.getElementById(id);
    var bloc=document.querySelector('.windowbleu');
    var box=container.querySelector('.windowbleu');
    container.classList.add('backwindow')
    requestAnimationFrame(function(){ //Animation lors de l'ouverture//
        box.style.transition='all 0.5s ease';
        box.style.transform='scale(1,1)';
    });
    container.style.pointerEvents='auto';
    container.style.opacity=1;
    bloc.innerHTML=bloc.innerHTML+"<div class='etaisbleu'>Si j'étais "+data[6]["analogies"]+"..."+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='seraisbleu'>je serais "+data[6]["valeurAnalogie"]+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='explbleu'><br>"+data[6]["explication"]+"</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='comblbleu'><br>"+data[6]["combl"]+"</div>"
}
function closeModal7(id){ //Fonction fermer la modale 7//
    var container = document.getElementById(id);
    var box=container.querySelector('.windowbleu');
    container.classList.remove('backwindow')
    requestAnimationFrame(function(){ //Animation lors de la fermeture//
            box.style.transition='all 0.5s ease';
            box.style.transform='scale(0,0)';
        });
    container.style.opacity=0
}

//-----Modale formulaire-------------------------------------------------------------//
function showModal8(id){ //Fonction ouvrir la modale 1//
    var container=document.getElementById(id);
    var bloc=document.querySelector('.windowform');
    var box=container.querySelector('.windowform');
    container.classList.add('backwindowform');
    requestAnimationFrame(function(){ //Animation lors de l'ouverture//
        box.style.transition='all 0.5s ease'; //Temps d'apparition complète de la modale//
        box.style.transform='scale(1,1)'; //Taille de transformation de la modale*/
    });
    container.style.pointerEvents='auto';
    container.style.opacity=1;
    bloc.innerHTML=bloc.innerHTML+"<div class='ettoi'>Et toi ?</div>"
    bloc.innerHTML=bloc.innerHTML+"<div class='jetaisform'>Si j'étais :</div>"
    bloc.innerHTML=bloc.innerHTML+"<input type='text' id='sijetaiscase'><label for='sijetaiscase'></label>"
    bloc.innerHTML=bloc.innerHTML+"<div class='jeseraisform'>je serais :</div>"
    bloc.innerHTML=bloc.innerHTML+"<input type='text' id='jeseraiscase'><label for='jeseraiscase'></label>"
    bloc.innerHTML=bloc.innerHTML+"<div class='parcequeform'>parce que :</div>"
    bloc.innerHTML=bloc.innerHTML+"<input type='text' id='parcequecase'><label for='parcequecase'></label><br>"
    bloc.innerHTML=bloc.innerHTML+"<br><input type='submit' value='Envoyer'>"
    bloc.innerHTML=bloc.innerHTML+"<div class='comblform'>x</div>"
}
function closeModal8(id){ //Fonction fermer la modale 1//
    var container = document.getElementById(id);
    var box=container.querySelector('.windowform');
    container.classList.remove('backwindowform')
    requestAnimationFrame(function(){ //Animation lors de la fermeture//
            box.style.transition='all 0.5s ease';
            box.style.transform='scale(0,0)';
        });
    container.style.opacity=0
}
