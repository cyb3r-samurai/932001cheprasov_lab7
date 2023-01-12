let b1 = document.getElementById('left');
let b2 = document.getElementById('center');
let b3 = document.getElementById('right');
let cont = document.querySelector('.container');
b1.onclick = function(){
add("square");
}
b2.onclick = function(){
    add("triangle-up");
}
b3.onclick = function(){
    add("circle");
}


function add(type){
    var x = document.getElementById("myNumber").value;
    for(let i = 0;i< x ;i++){
        let div = document.createElement('div');   
        var randomtop = Math.floor(Math.random() * 601);
        var randomleft = Math.floor(Math.random() * 1001);
        var randomzindex = Math.floor(Math.random() * 101);
        var randomsize  = Math.floor(Math.random() * 251) +50;
        div.className = type; 
        
        div.style.marginTop = randomtop+'px';   
        div.style.marginLeft = randomleft+'px';
        div.style.zIndex = randomzindex;
        if(type == "circle"){
            div.style.borderRadius = randomsize/2+'px';
        }
        if(type != "triangle-up"){
        div.style.width = randomsize+'px'; 
        div.style.height = randomsize+'px'; 
        
        }
        else{
            div.style.borderBottom = randomsize+'px solid blue';
            div.style.borderLeft = randomsize/2+'px solid transparent';
            div.style.borderRight = randomsize/2+'px solid transparent';
        }
        cont.append(div);
    };
};



var selectedDiv

function highlight(target){
  //  var targetClassName = target.className;
    
    if(selectedDiv){
      //  var slnamae = selectedDiv.className;
       if(selectedDiv.classList.contains('triangle-up')){
            selectedDiv.classList.remove('highlighttg')
            selectedDiv.style.borderBottomColor='blue';
        }
        else{
            selectedDiv.classList.remove('highlight');
        }
    }
    selectedDiv = target;
   
    if(target.classList.contains('triangle-up')){
        selectedDiv.classList.add('highlighttg');
        selectedDiv.style.borderBottomColor='yellow';
    }
    else{
    selectedDiv.classList.add('highlight');
    }
}

cont.onclick = function(event){
    target = event.target;
    if(event.target != cont){
        highlight(target);
    };
}
cont.ondblclick = function(event)
    {
        if (event.target != cont){
            event.target.remove();
        };
    }