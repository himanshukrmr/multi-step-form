
var next_click = 2;
var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;


function Check() {
    if (next_click === 2) {
        if ($("#form1 input[name=name]").val() === "") {
            $('.name').css('display', 'block');
            $("#form1 input[name=name]").css('border', '1px solid red')
            return;
        }
        if ($("#form1 input[name=email]").val() === "" ||
            !pattern.test($("#form1 input[name=email]").val())
        ) {
            // alert(regex.test($("#form1 input[name=email]").val()));
            $("#form1 input[name=name]").css('border', '1.5px solid white;')
            $('.name').css('display', 'none');
            $('.email').css('display', 'block');
            $("#form1 input[name=email]").css('border', '1px solid red')
            return;
        }

        if ($("#form1 input[name=number]").val() === "") {
            $('.email').css('display', 'none');
            $('.number').css('display', 'block');
            $("#form1 input[name=number]").css('border', '1px solid red')
            return;
        }
        // $('#second-sidebar').css({'background-color': 'hsl(228, 100%, 84%)',
        // 'color': 'hsl(213, 96%, 18%)',
        // 'font-weight': '500'})
        $(".page1").hide();
        $(".page2").show();
        colorChange();
        $(".page3").hide();
        $(".page4").hide();
        $(".thankyou").hide();
        next_click += 1;
    }
    else if (next_click === 3) {
        // alert($('.page3').css('display'))
        $(".page1").hide();
        $(".page2").hide();
        $(".page3").show();
        colorChange();
        $(".page4").hide();
        $(".thankyou").hide();
        next_click += 1;
    }
    else if (next_click === 4) {
        $('.page4').css('display')
        $(".page1").hide();
        $(".page2").hide();
        $(".page3").hide();
        $(".page4").show();
        colorChange();
        $(".thankyou").hide();
        next_click += 1;
    }
    else if (next_click === 5) {
        $('.page5').css('display')
        $(".page1").hide();
        $(".page2").hide();
        $(".page3").hide();
        $(".page4").hide();
        $(".thankyou").show();
        colorChange();
        next_click += 1;
    }
    else {
        $(".page1").show();
        colorChange();
        $(".page2").hide();
        $(".page3").hide();
        $(".page4").hide();
        $(".thankyou").hide();
    }
}
function CheckBack() {
    next_click = next_click - 2;
    console.log("Before" + next_click);
    Check();
    if (next_click === 1) {
        next_click = 2
    }
    console.log("After" + next_click);
}

function changePage4(){
    $(".page1").hide();
    $(".page2").show();
    colorChange();
    $(".page3").hide();
    $(".page4").hide();
    $(".thankyou").hide();
    next_click = 3;
}

