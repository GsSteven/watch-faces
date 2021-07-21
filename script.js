$("document").ready(() => {
    //mobile Nav animations
    $(".mobileNav").click(() => {
        if ($('.navContainer').css("top") === "0px") {
            //slide nav up
            $('.navContainer').css("top", "-1500%");
            //reset mobile nav styles
            $('.bar1').css({ "transform": "rotate(0)", "backgroundColor": "white", "borderColor": "black" });
            $('.bar2').css("opacity", "1");
            $('.bar3').css({ "transform": "rotate(0)", "backgroundColor": "white", "borderColor": "black" });
        } else {
            //slide nav down
            $('.navContainer').css("top", "0");
            //mobile icon turns into X
            $('.bar1').css({ "transform": "rotate(-45deg) translateY(14px)", "backgroundColor": "#ae0c08", "borderColor": "#ae0c08" });
            $('.bar2').css("opacity", "0");
            $('.bar3').css({ "transform": "rotate(45deg) translateY(-14px)", "backgroundColor": "#ae0c08", "borderColor": "#ae0c08" });
        }
    })
    //open expanded Watch Faces
    $(".watchFaceContainer").click((e) => {
        const expandedContainerId = e.target.id + "Expanded";
        if (expandedContainerId) {
            $(`#${expandedContainerId}`).css("display", "flex");

            if ($(".screenShade").css("opacity") !== "1") {
                //backdrop shade on
                $(".screenShade").css({ "opacity": "1", "pointerEvents": "auto" });
            }
        }
    })
    //close expanded Watch Faces
    $(".closeButton").click(() => {
        $(".closeButton").parent().css("display", "none");
        //backdrop shade off
        $(".screenShade").css({ "opacity": "0", "pointerEvents": "none" });
    });
});
