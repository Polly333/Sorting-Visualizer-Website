//let speed=document.querySelector("#speed"); -- already declared in sorting.js
//let arr_size=document.querySelector("#arr_sz"); -- "--"



function swap(el1,el2)
    {

           const style1 = window.getComputedStyle(el1);
           const style2 = window.getComputedStyle(el2);
        
          //  window.setTimeout(function(){
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
  // } ,delay);

    el1.style.height = transform2;
    el2.style.height = transform1;

    
    }

    



async function bubble_sort(delay2=2000/(arr_size.value*speed.value))
{
  console.log(speed.value);
  var special = document.querySelectorAll(".barstyle"); //changed
  var no_of_bar=arr_size.value;
    for(var i=0;i<no_of_bar-1;i++)
     {
       for(var j=0;j<no_of_bar-1-i;j++)
        {
        
          
          special[j].style.background="red";
          special[j+1].style.background="red";
          await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, delay2)
           );
          
          
          if(arr[j]>arr[j+1])
          {
          await swap(special[j], special[j + 1]);
            var temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            special = document.querySelectorAll(".barstyle");
          }
       
        
          special[j].style.background="linear-gradient(#83EAF1, #63A4FF)";
          special[j+1].style.background="linear-gradient(#83EAF1, #63A4FF)";
          await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, delay2)
           );
         
        }
        special[no_of_bar-i-1].style.background="linear-gradient(#89D8D3,#03C8A8)";
     
     }
     special[0].style.background="linear-gradient(#89D8D3,#03C8A8)";
    
}




async function bubble_descr(){
    
    let paragraph1 = document.getElementById("one");
    paragraph1.innerHTML="";
    let text1 = document.createTextNode("Color Code: 🔴 Red : Comparing  🟢 Green: Sorted");

    let paragraph2 = document.getElementById("two");
    paragraph2.innerHTML="";
    let text2 = document.createTextNode("Description:Bubble sort is comparison-based sorting algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order.");

    let paragraph3 = document.getElementById("three");
    paragraph3.innerHTML="";
    let text3 = document.createTextNode("Time Complexity:Best:Ω(n)   Worst:O(n^2)");

    let paragraph4 = document.getElementById("four");
    paragraph4.innerHTML="";
    let text4 = document.createTextNode("Space Complexity:Worst:O(1)");
  
    paragraph1.appendChild(text1);
    paragraph2.appendChild(text2);
    paragraph3.appendChild(text3);
    paragraph4.appendChild(text4);
}