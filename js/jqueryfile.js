function colorChange() {
    if ($('.page1').css('display') == 'block') {
        $('#first-sidebar').css({'background-color': 'hsl(228, 100%, 84%)',
            'color': 'hsl(213, 96%, 18%)',
            'font-weight': '500'})
        $('#second-sidebar').css({'background-color': 'transparent',
            'color': 'hsl(0, 0%, 100%)',
            })
        $('#third-sidebar').css({'background-color': 'transparent',
            'color': 'hsl(0, 0%, 100%)',
            })
        $('#fourth-sidebar').css({'background-color': 'transparent',
            'color': 'hsl(0, 0%, 100%)',
            })
    }
    else if ($('.page2').css('display') == 'block') {
        $('#second-sidebar').css({'background-color': 'hsl(228, 100%, 84%)',
            'color': 'hsl(213, 96%, 18%)',
            'font-weight': '500'})
            $('#first-sidebar').css({'background-color': 'transparent',
            'color': 'hsl(0, 0%, 100%)',
            })
        $('#third-sidebar').css({'background-color': 'transparent',
            'color': 'hsl(0, 0%, 100%)',
            })
        $('#fourth-sidebar').css({'background-color': 'transparent',
            'color': 'hsl(0, 0%, 100%)',
            })
    }
    else if ($('.page3').css('display') == 'block') {
   
        $('#third-sidebar').css({'background-color': 'hsl(228, 100%, 84%)',
            'color': 'hsl(213, 96%, 18%)',
            'font-weight': '500'})
            $('#second-sidebar').css({'background-color': 'transparent',
            'color': 'hsl(0, 0%, 100%)',
            })
        $('#first-sidebar').css({'background-color': 'transparent',
            'color': 'hsl(0, 0%, 100%)',
            })
        $('#fourth-sidebar').css({'background-color': 'transparent',
            'color': 'hsl(0, 0%, 100%)',
            })
    }
    else if ($('.page4').css('display') == 'block' || $('.thankyou').css('display') == 'block') {
      
        $('#fourth-sidebar').css({'background-color': 'hsl(228, 100%, 84%)',
            'color': 'hsl(213, 96%, 18%)',
            'font-weight': '500'})
            $('#second-sidebar').css({'background-color': 'transparent',
            'color': 'hsl(0, 0%, 100%)',
            })
        $('#third-sidebar').css({'background-color': 'transparent',
            'color': 'hsl(0, 0%, 100%)',
            })
        $('#first-sidebar').css({'background-color': 'transparent',
            'color': 'hsl(0, 0%, 100%)',
            })
    }
}
function page3CheckBox(){
    $('#check').click(function(){
        $('#lab').toggleClass('highlight')
    })
}