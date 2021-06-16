
function generate()
{
    // var text1 =document.getElementById("t1").value
    // // var result = (text1.value);
    // // console.log(result)
    // // var formele =document.getElementById("result")
    // var formele =document.createElement("div")
    // let ul = document.createElement("ul");          // make a list
    // let li=document.createElement("li")

    // li.appendChild(text1);
    // ul.appendChild(li);
    // formele.appendChild(ul);
    // document.getElementById("result").appendChild(formele);
    // // console.log(result)
    // // formele=innerHTML =`${text1.value}=${result}`
    
    let post = document.getElementById("t1").value;    
        
        let node=document.createElement("div")               
        let ul = document.createElement("ul");                   
        let h3 = document.createElement("textarea");          
        let enode = document.createTextNode(post);   
        h3.appendChild(enode);                                               
        ul.appendChild(h3);                                                                     
        node.appendChild(ul);                           
        document.getElementById("result").appendChild(node);  
}

