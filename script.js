// شاشة التحميل
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("website").style.display = "block";
    }, 3000);
});


// ======================
// الوضع الليلي مع الحفظ
// ======================

const darkBtn = document.getElementById("darkMode");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    darkBtn.innerHTML='<i class="fas fa-sun"></i>';
}

darkBtn.onclick = function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");
        darkBtn.innerHTML='<i class="fas fa-sun"></i>';

    }else{

        localStorage.setItem("theme","light");
        darkBtn.innerHTML='<i class="fas fa-moon"></i>';

    }

}



// ======================
// نسخ رقم الهاتف
// ======================

document.getElementById("copyPhone").addEventListener("click",function(e){

    e.preventDefault();

    navigator.clipboard.writeText("01125391171");

    showToast("✅ تم نسخ رقم الهاتف");

});



// ======================
// إشعار احترافي
// ======================

function showToast(text){

    const toast=document.createElement("div");

    toast.innerHTML=text;

    toast.style.cssText=`
        position:fixed;
        bottom:25px;
        left:50%;
        transform:translateX(-50%);
        background:#ff4f9a;
        color:#fff;
        padding:14px 25px;
        border-radius:40px;
        font-size:17px;
        font-weight:bold;
        z-index:99999;
        box-shadow:0 10px 25px rgba(0,0,0,.3);
        animation:pop .35s;
    `;

    document.body.appendChild(toast);

    setTimeout(()=>{
        toast.remove();
    },2000);

}



// ======================
// زر الرجوع لأعلى
// ======================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>200){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}



// ======================
// زر المشاركة
// ======================

document.getElementById("shareBtn").onclick=async function(){

    if(navigator.share){

        navigator.share({

            title:"NoDa Store",

            text:"زوروا NoDa Store 💖",

            url:window.location.href

        });

    }else{

        navigator.clipboard.writeText(window.location.href);

        showToast("📋 تم نسخ رابط الموقع");

    }

}
if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("./sw.js")
        .then(() => console.log("Service Worker Registered"));

    });

}