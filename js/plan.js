const map1 = new Map();
map1.set('card-a1', false);
map1.set('card-a2', false);
map1.set('card-a3', false);

function value() {

    $(document).on("click", function (event) {
        var currentClass = event.target.className;
        if (currentClass === "label1" || currentClass === "label2" || currentClass === "label3") {
            $(`.${currentClass}`).css({
                "background-color": 'hsl(217, 100%, 97%)',
                'border': '1.8px solid hsl(213, 96%, 18%)',
            })
        }

        else if (currentClass === "card-a1" || currentClass === "card-a2" || currentClass === "card-a3") {
            // alert(map1.get(`${currentClass}`));
            if (map1.get(`${currentClass}`) === false) {
                map1.set(`${currentClass}`, true);
                $(`.${currentClass}`).css({
                    "background-color": 'hsl(206, 94%, 87%)',
                    'border': '1.5px solid hsl(213, 96%, 18%)',
                })
            }
            else if (map1.get(`${currentClass}`) === true) {
                map1.set(`${currentClass}`, false);
                $(`.${currentClass}`).css({
                    "background-color": 'hsl(0, 0%, 100%)',
                    'border': '1px solid hsl(229, 24%, 87%)',
                })
            }
        }
        var valueCurrentClass = $(`.${currentClass}`).data('value');
        console.log(`${valueCurrentClass}`);
    })
}

function checkBox() {
    if ($('#checkBox').is(':checked')) {
        $(".card a p:nth-child(4)").css('display', 'block')
        $('.card a').css('padding-right', '8%')
        $("#arcade-plan").text("Arcade (Yearly)");

        $(".card-a1").val(90)
        $(".card-a1 p:nth-child(3)").text(" $90/yr")
        $(".card-a1 img").css('margin-bottom', '30%')

        $(".card-a2").val(120)
        $(".card-a2 p:nth-child(3)").text(" $120/yr")
        $(".card-a2 img").css('margin-bottom', '30%')

        $(".card-a3").val(150)
        $(".card-a3 p:nth-child(3)").text(" $150/yr")
        $(".card-a3 img").css('margin-bottom', '30%')
    }
    else {
        $(".card a p:nth-child(4)").css('display', 'none')
        // $(".card a p:nth-child(2)").css('margin-top','54%')
        $("#arcade-plan").text("Arcade (Monthly)");

        $(".card-a1").val(9)
        $(".card-a1 p:nth-child(3)").text(" $9/mo")
        $(".card-a1").css('padding-right', '12%')
        $(".card-a1 img").css('margin-bottom', '68%')

        $(".card-a2").val(12)
        $(".card-a2 p:nth-child(3)").text(" $12/mo")
        $(".card-a2").css('padding-right', '9%')
        $(".card-a2 img").css('margin-bottom', '51%')

        $(".card-a3").val(15)
        $(".card-a3 p:nth-child(3)").text(" $15/mo")
        $(".card-a3").css('padding-right', '11%')
        $(".card-a3 img").css('margin-bottom', '68%')
    }
}


