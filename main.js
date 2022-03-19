var menuList=document.getElementById("menuList");
        menuList.style.maxHeight="0px";

        function togglemenu(){
            console.log("clicked");
            if(menuList.style.maxHeight=="0px"){
                menuList.style.maxHeight="200px";
            }
            else{
                menuList.style.maxHeight="0px";
            }
        }