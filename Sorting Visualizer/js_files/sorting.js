//Initialization
let arr = [];
let bar = document.querySelector("#bars");
let new_btn = document.querySelector("#myBtn");

let bubble = document.querySelector(".bubble");
let selection =document.querySelector(".selection");
let quick = document.querySelector(".quick");
let merge = document.querySelector(".merge");
let insertion = document.querySelector(".insertion");

//
//var check =document.querySelector(".check");
let arr_size=document.querySelector("#arr_sz");
//var button = document.querySelectorAll("button");
//var range=document.querySelector("range");
let speed=document.querySelector("#speed");
let count=0;



// To create the bars
function create_bars()
{

// Make the array empty
arr=[];
// Make the visible bars empty so as not to keep appending
bar.innerHTML="";  

// Take the no of bars from range
let no_of_bar=arr_size.value; //value attribute whithin input tag
//var arr_width_size =(500/no_of_bar);
console.log(no_of_bar);




//pushing array ele
for(let i=0;i<no_of_bar;i++){

    arr[i] = Math.floor(Math.random() * 100);

}

//Set the height and width of visible bars 
for(let i=0;i<no_of_bar;i++){
        
    let div = document.createElement('div'); //creating 100 div elements
    div.classList.add("barstyle"); //This class will help style all the bars

    //for width to spread across evenly                                                        
    let margin_size=0.1;
    div.style="margin:0%" + margin_size + "%; width:" + (100/no_of_bar-(2*margin_size)) + "%;";

    let height = (arr[i]*5+10).toString();
    height = height+'px';
    div.style.height=height;

    bar.appendChild(div);

}


}


    // Creating bars at first
    create_bars();

    // Generation of new bars
    new_btn.addEventListener("click",create_bars);


     // Range listener
     arr_size.addEventListener("input",create_bars);



    //SORTING BUTTON EVENT LISTENER-------
    // Bubble sort button 
    bubble.addEventListener("click",async function(){     

        new_btn.disabled=true;
        arr_size.disabled=true;
        speed.disabled=true;
         
        await bubble_descr();
        await bubble_sort();
      
      
        new_btn.disabled=false;
        arr_size.disabled=false;
        speed.disabled=false;
         
         

      });




       // Insertion sort button
       insertion.addEventListener("click",async function(){     

        new_btn.disabled=true;
        arr_size.disabled=true;
        speed.disabled=true;
         
        await insertion_descr();
        await insertion_sort();
      
      
        new_btn.disabled=false;
        arr_size.disabled=false;
        speed.disabled=false;
         
         

      });
  
  
      // Selection sort button
      selection.addEventListener("click",async function(){     

        new_btn.disabled=true;
        arr_size.disabled=true;
        speed.disabled=true;
         
        await selection_descr();
        await selection_sort();
      
      
        new_btn.disabled=false;
        arr_size.disabled=false;
        speed.disabled=false;
         
         

      });
  
  
      // Quick sort button
      quick.addEventListener("click",async function(){     

        new_btn.disabled=true;
        arr_size.disabled=true;
        speed.disabled=true;
         
        await quick_descr();
        await quick_sort();
      
      
        new_btn.disabled=false;
        arr_size.disabled=false;
        speed.disabled=false;
         
         

      });
  
  
      // Merge sort button
      merge.addEventListener("click",async function(){     

        new_btn.disabled=true;
        arr_size.disabled=true;
        speed.disabled=true;
         
        await merge_descr();
        await merge_sort();
      
      
        new_btn.disabled=false;
        arr_size.disabled=false;
        speed.disabled=false;
         
         

      });
      
  
  
  
  
  
  
  
  
  
  
      //-------------------------------------------------------------------------------
