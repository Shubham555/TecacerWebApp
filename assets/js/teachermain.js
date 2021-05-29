function inputInsideOtpInput(el) {
    if (el.value.length > 1){
        el.value = el.value[el.value.length - 1];
    }
    try {
        if(el.value == null || el.value == ""){
            this.foucusOnInput(el.previousElementSibling);
        }else {
            this.foucusOnInput(el.nextElementSibling);
        }
    }catch (e) {
        console.log(e);
    }
}

function foucusOnInput(ele){
   ele.focus();
   let val = ele.value;
   ele.value = "";
   // ele.value = val;
   setTimeout(()=>{
       ele.value = val;
   })
}

var mini = true;

function toggleSidebar() {
    if (mini) {
        console.log("opening sidebar");
        document.getElementById("mySidebar").style.width = "200px";
        this.mini = false;
    } else {
        console.log("closing sidebar");
        document.getElementById("mySidebar").style.width = "42px";
        this.mini = true;
    }
}


$(function() {
    $('#date-carousel').carousel({
        interval: false
    })
});