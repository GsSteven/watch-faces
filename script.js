const mobileNav = document.querySelector(".mobileNav");
mobileNav.onclick = () => {
    const nav = document.querySelector(".navContainer");
    const bar1 = document.querySelector(".bar1");
    const bar2 = document.querySelector(".bar2");
    const bar3 = document.querySelector(".bar3");
    //reset all
    if (nav.style.top === "0px") {
        nav.style.top = "-1500%";
        bar1.style.transform = "rotate(0)";
        bar1.style.backgroundColor = "white";
        bar1.style.borderColor = "black";
        bar2.style.opacity = "1";
        bar3.style.transform = "rotate(0)";
        bar3.style.backgroundColor = 'white';
        bar3.style.borderColor = 'black';
    }
    //lower nav bar and change mobile nav
    else {
        nav.style.top = "0";
        bar1.style.transform = "rotate(-45deg) translateY(14px)";
        bar1.style.backgroundColor = "#ae0c08";
        bar1.style.borderColor = "#ae0c08";
        bar2.style.opacity = "0";
        bar3.style.transform = "rotate(45deg) translateY(-14px)";
        bar3.style.backgroundColor = '#ae0c08';
        bar3.style.borderColor = '#ae0c08';
    }
};