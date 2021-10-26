let backToTop = document.getElementById("back-to-top");

window.onscroll = function(){
    scrollFunction()
}

function scrollFunction(){
    if(document.documentElement.scrollTop > 30){
        backToTop.style.display = "block";

    }else{
        backToTop.style.display = "none";

    }
}
backToTop.onclick = function() {
    document.documentElement.scrollTop = 0;

}

let menuItem = document.getElementById("menu-item");
let menuToggle = document.getElementById("menutoggle");
let search = document.getElementById("search");
let searchForm = document.getElementById("search-form");
let closeMenu = document.getElementById("close-menu");
let cart = document.getElementById("cart");
let cartItem = document.getElementById("cartItem");


cartItem.style.right = "-310px";
searchForm.style.top = "76px";

search.onclick = function() {
    //alert("search me!")gitadd .
    if(searchForm.style.top =="76px"){
        searchForm.style.top = "0";
    }
    else{
        searchForm.style.top = "76px";
        
    }
}

cart.onclick = function() {
    //alert("cart me!")
    if (cartItem.style.right == "-310px"){
        cartItem.style.right = "0";
    }else{
        cartItem.style.right = "-310px";
    }
}

menuToggle.addEventListener("click", function(){
    //alert("gooo!")
    menuItem.style.display = "block";
})

closeMenu.addEventListener("click", function(){
    //alert("gooo!")
    menuItem.style.display = "none";
})

//login validation


function login(){
    let form = document.getElementById("form")
    let error = document.getElementById("error")
    let error1 = document.getElementById("error1")
    let username = document.getElementById("username")
    let password = document.getElementById("password")

    form.addEventListener("submit", (e)=>{
        //alert("submitted!")
        e.preventDefault();
        let message = []
        let message1 = []
        if(username.value == "" || username.value == null){
            message.push("* Username Field is Empty");
            if (message.length > 0){
                error.innerText = message;
                error.style.display = "block";
                
                setTimeout(()=>{
                    error.style.display = "none";
                    
                }, 4000)
            }

        }
        if(password.value == "" || password.value == null){
            message1.push("* Password Field is Empty");
            if (message1.length > 0){
                error1.innerText = message;
                error1.style.display = "block";
                
                setTimeout(()=>{
                    error1.style.display = "none";
                    
                }, 4000)
            }

        }

    })
}

login()



//sign up validation


function signUp(){
    const form2 = document.getElementById("form2")
    const error2 = document.getElementById("error2")
    const error3 = document.getElementById("error3")
    const error4 = document.getElementById("error4")
    const error5 = document.getElementById("error5")
    const firstname = document.getElementById("fname")
    const lastname = document.getElementById("lname")
    const phoneNumber = document.getElementById("phone")
    const password1 = document.getElementById("password1")
    const password2 = document.getElementById("password2")
    

    form2.addEventListener("submit", (e)=>{
        //alert("submitted!")
        
        e.preventDefault();
        let message2 = []
        let message3 = []
        let message4 = []
        let message5 = []

        if (firstname.value == "" || firstname.value == null){
            message2.push("* Firstname Field is Empty");
            if (message2.length > 0){
                error2.innerText = message2;
                error2.style.display = "block";
                
                setTimeout(()=>{
                    error2.style.display = "none";
                    
                }, 4000)
            }
        }
        if (lastname.value == "" || lastname.value == null){
            message3.push("* Lastname Field is Empty");
            if (message3.length > 0){
                error3.innerText = message3;
                error3.style.display = "block";
                
                setTimeout(()=>{
                    error3.style.display = "none";
                    
                }, 4000)
            }
        }
        if (phoneNumber.value == "" || phoneNumber.value == null){
            message4.push("* Phone number Field is Empty");
            if (message4.length > 0){
                error4.innerText = message4;
                error4.style.display = "block";
                
                setTimeout(()=>{
                    error4.style.display = "none";
                    
                }, 4000)
            }
        }
        if (password1.value !== password2.value){
            message5.push("* Password does not match!");
            if (message5.length > 0){
                error5.innerText = message5;
                error5.style.display = "block";
                
                setTimeout(()=>{
                    error5.style.display = "none";
                    
                }, 4000)
            }
            
        }
        if (password1.value == "" || password1.value == null){
            message5.push("* Password Field is Empty");
            if (message5.length > 0){
                error5.innerText = message4;
                error5.style.display = "block";
                
                setTimeout(()=>{
                    error5.style.display = "none";
                    
                }, 4000)
            }
        }
        
    })
    
}
signUp()






