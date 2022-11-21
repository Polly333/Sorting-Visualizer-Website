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


    async function partition(low,high,delay2=2000/(arr_size.value*speed.value))
{
  var special = document.querySelectorAll(".barstyle");
  
    special[high].style.background="red";
    await new Promise(resolve =>
      setTimeout(() => {
        resolve();
      }, delay2)
     );
       
  var pivot = arr[high];
  var i=low-1,temp;
  for(var j=low;j<=high-1;j++)
   {
    
      special[j].style.background="red";
      await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay2)
       );
        
    
     if(arr[j]<=pivot)
     {
       i++;
       // swap between i and j
     
      
        await swap(special[i],special[j]);
          
       temp=arr[i];
       arr[i]=arr[j];
       arr[j]=temp;
       special=document.querySelectorAll(".barstyle");
      
      
        special[i].style.background="blue";
     }
   
    if(i!=j)
    {
    
      special[j].style.background="yellow";
      await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay2)
       );
        
    }
    
    
   }
  

   // swap between i+1 and high
   if(i+1!=high)
   { await swap(special[i+1],special[high]);
    
   temp=arr[i+1];
   arr[i+1]=arr[high];
   arr[high]=temp;
   }

   special=document.querySelectorAll(".barstyle");
   for(var k=low;k<=i;k++)
     special[k].style.background="yellow";
     await new Promise(resolve =>
      setTimeout(() => {
        resolve();
      }, delay2)
     );
   special[high].style.background="yellow";
   special[i+1].style.background="green";
   count++;
   await new Promise(resolve =>
    setTimeout(() => {
      resolve();
    }, delay2)
   );
    
    
    return i+1;
}


async function quick_sort_helper(low,high)
{

  if(low<=high)
  {
     var pi=await partition(low,high);
     
    await quick_sort_helper(low,pi-1);
    await quick_sort_helper(pi+1,high);
   
  }
  
}


async function quick_sort()
{
    var no_of_bar=arr_size.value;
    await quick_sort_helper(0,no_of_bar-1,10,10);
    console.log(count);
     
}


async function quick_descr(){
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