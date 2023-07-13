
    
    //to display existing items
    window.addEventListener("DOMContentLoaded",async ()=>{
        try{
            let res = await axios.get("http://localhost:3000/get-orders");
            console.log(res.data.allOrders);
            for(let i=0;i<res.data.allOrders.length;i++){
                showOnScreen(res.data.allOrders[i]);
            }
        }catch(err){
            console.log(err);
        }
    })

    //show Data on screen
    function showOnScreen(obj){
        if(obj.table==1){
            let list = document.getElementById("table1");
            list.innerHTML= list.innerHTML + 
                `<li id=${obj.id}> Dish: ${obj.dish} ----- Price: ${obj.price} Rs  --- <button onclick="deleteFun('${obj.id}')">Delete</button></li>`;
        }else if(obj.table==2){
            let list = document.getElementById("table2");
            list.innerHTML= list.innerHTML + 
                `<li id=${obj.id}> Dish: ${obj.dish} ----- Price: ${obj.price} Rs  --- <button onclick="deleteFun('${obj.id}')">Delete</button></li>`;
        }
        else{
            let list = document.getElementById("table3");
            list.innerHTML= list.innerHTML + 
                `<li id=${obj.id}> Dish: ${obj.dish} ----- Price: ${obj.price} Rs  --- <button onclick="deleteFun('${obj.id}')">Delete</button></li>`;
        }
    }

    //After submit button
    async function onsubmit1(event){
        event.preventDefault();
        try{
            let myobj = {
                dish: event.target.dish.value,
                price: event.target.price.value,
                table: event.target.table.value
            }

            let op = await axios.post("http://localhost:3000/post-order",myobj);
            console.log(op.data.orderDetails);
            showOnScreen(op.data.orderDetails);

            event.target.dish.value="";
            event.target.price.value="";
            event.target.table.selectedIndex = 0;
        }catch(err){
            console.log(err);
        }
        
    }

    //Delete funcion
    async function deleteFun(objid){
        try{
            //console.log("inside ");
            let del = await axios.post(`http://localhost:3000/delete-orders/${objid}`);
            let todel = document.getElementById(objid);
            todel.remove();
        }catch(err){
            console.log(err);
        }
    }