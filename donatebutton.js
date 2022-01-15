function clrdetails(){
    document.getElementById('userEmail').value = null 
    document.getElementById('userEmail').value = null 
    document.getElementById('userName').value = null 
    document.getElementById('paymode').value = null 
    document.getElementById('amt').value = null
    document.getElementById('flexCheckDefault').checked = false;
}

function confirmPayment(){
    console.log(document.getElementById('userEmail').value);
    if(document.getElementById('userEmail').value != '' && document.getElementById('userName').value != '' && document.getElementById('paymode').value != '' && document.getElementById('amt').value != ''){
        if(confirm("Confirm payment ?")){
            console.log("transaction complete");
            alert('Transaction Successful !');
            getandupdate();
            clrdetails();
        }
    }
    else{
        alert('Incomplete Details');
    }
}

function sure(){
    if(confirm("Are you sure you want to quit? This will discontinue the ongoing transaction if any.")){
        console.log("transaction failed");
        alert("Transaction unsuccessful !");
        clrdetails();
    }
}

function checkAnonymity(){
    let anon = document.getElementById("flexCheckDefault");
    if(anon.checked){
        console.log("chekcd");
        let username = document.getElementById("userName");
        username.value="Anonymous";
        console.log(username.value);
        let useremail = document.getElementById("userEmail");
        useremail.value="Anonymous@anonymous.com";
    }
    else{
        document.getElementById("userName").value = null;
        document.getElementById("userEmail").value = null;
        console.log("not checkds");
    }
}

function getandupdate(){
    console.log('Updating list.....');
        let name = document.getElementById('userName').value;
        let amt = document.getElementById('amt').value;
        if(localStorage.getItem('itemsJson')==null){
            itemsjsonarr = [];
            itemsjsonarr.push([name,amt]);
            localStorage.setItem('itemsJson', JSON.stringify(itemsjsonarr));
        }
        else{
            itemsjsonarrstr = localStorage.getItem('itemsJson');
            itemsjsonarr = JSON.parse(itemsjsonarrstr);
            itemsjsonarr.push([name,amt]);
            localStorage.setItem('itemsJson', JSON.stringify(itemsjsonarr));
        }
        update();
  }
  function update(){
        //populate the table
        if(localStorage.getItem('itemsJson')==null){
            itemsjsonarr = [];
            localStorage.setItem('itemsJson', JSON.stringify(itemsjsonarr));
        }
        else{
            itemsjsonarrstr = localStorage.getItem('itemsJson');
            itemsjsonarr = JSON.parse(itemsjsonarrstr);
        }

        let txnbody = document.getElementById('alltxn');
        let str = "";
        itemsjsonarr.forEach((element,index) => {
            str += `<div class="alert alert-primary my-3 deposit" role="alert">
            ${element[0]} donated ${element[1]} USD
            </div>`;
        });
        txnbody.innerHTML = str;
  }