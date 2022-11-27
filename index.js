const billAmount= document.querySelector("#bill-amount");
const cashGiven= document.querySelector("#cash-given");
const checkButton= document.querySelector("#check-button");
//console.log(cashGiven.value);
const message=document.querySelector("#error-message");
const noOfNotes=document.querySelector(".no-of-notes")
const avaibleNote=[2000,500,200,100,20,10,1]

checkButton.addEventListener("click",function validBillamount(){
    hideMessage();
   //console.log(billAmount.value);
    if (billAmount.value>0){
        if(cashGiven.value>=billAmount.value){
            const amountTobeReturn= cashGiven.value-billAmount.value;
            calculateChange(amountTobeReturn);


        }
        else{
            showMessage("no chang to be return");

        }

    }
    else{
        showMessage("invalid bill amount");
    }
});
function hideMessage(){
    message.style.display= "none";

}
function calculateChange(amountTobeReturn){
    for(i=0;i<avaibleNote.length;i++){
        const noOfNotes=Math.trunc(amountTobeReturn/avaibleNote[i]);
        amountTobeReturn%=avaibleNote[i];
        noOfNotes[i].innerText=noOfNotes;

    }



}
function showMessage(msg){
    message.style.display="block";
    message.innerText=msg;
}