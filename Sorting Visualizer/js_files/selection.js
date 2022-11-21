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


    
async function selection_sort(delay1=3000/(speed.value*arr_size.value),delay2=3000/(speed.value*arr_size.value))
{
  var special = document.querySelectorAll(".barstyle");
  var no_of_bar=arr_size.value;
  
  
  for(var i=0;i<no_of_bar-1;i++)
  {
    var min_idx=i;
    special[i].style.background="red";
    special[min_idx].style.background="red";
    for(var j=i+1;j<no_of_bar;j++)
    {
      special[j].style.background="blue";
      await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay1)
       );
      //  special[j].style.background="yellow";
        // special[min_idx].style.background="yellow";
      if(arr[j]<arr[min_idx])
       {
        if(min_idx!=i)
          special[min_idx].style.background="yellow";
        min_idx=j;
        special[min_idx].style.background="red";
       }
       if(j!=min_idx)
       special[j].style.background="yellow";
    }
    special[min_idx].style.background="red";

    // special[i].style.background="green";
    await new Promise(resolve =>
      setTimeout(() => {
        resolve();
      }, delay2)
     );
     await swap(special[min_idx],special[i]);
     special[min_idx].style.background="yellow";
     special[i].style.background="green";
    var temp=arr[min_idx];
    arr[min_idx]=arr[i];
    arr[i]=temp;
    special = document.querySelectorAll(".barstyle");
  }
  console.log(no_of_bar);
  special[no_of_bar-1].style.background="green";
}





async function selection_descr(){
    let paragraph1 = document.getElementById("one");
    paragraph1.innerHTML="";
    let text1 = document.createTextNode("Color Code: 🔴 Red : Comparing  🟢 Green: Sorted");

    let paragraph2 = document.getElementById("two");
    paragraph2.innerHTML="";
    let text2 = document.createTextNode("Description:Selection sort is comparison-based sorting algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order.");

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