$(document).ready(()=>{


    $('#id2').click(()=>{
        // $('#container').show()
        $('#container').fadeOut(2000,()=>{
            alert('gone...')
        })
    })
    
    $('#id1').click(()=>{
        $('#container').fadeIn(2000)
    })
    $('#id3').click(()=>{
        $('#container').fadeToggle(3000)
    })
    $('#id4').click(()=>{
        $('#container').fadeTo(2000,0.5)
    })

    $('#id5').click(()=>{
        $('#container').slideDown(2000)
    })
    $('#id6').click(()=>{
        $('#container').slideUp(2000)
    })
    $('#id7').click(()=>{
        $('#container').slideToggle(2000)
    })
    $('#id8').click(()=>{
        $('#container').animate({width:'200',height:'200',opacity:0.5,left:250},2000,()=>{
            $('#container').animate({left:0,width:'100',height:'100',borderradius:20,opacity:1})
        })
    })

    $('#id9').click(()=>{
        // let v=$('#f').val()
        // console.log('value is '+v);
        // $('#f').val('this is done by using val function')

        // let c=$('#content').text()
        // console.log(c)
        $('#content').html('<b>this is new content in the text() </b>')
        let s=$('.image').attr('src')
        console.log(s);
        $('.image').attr('src','Guidening_image.jpg')
    })

    // $('#box').on('click',function(){
    //     console.log(this)
    //     $(this).css('background','orange')
    //     })

    // $('#box').on('mouseover mouseout',()=>{
    //     $('#box').toggleClass('boxbg')
    // })

    $('#box').on({
        'click':()=>{
            $('#box').css('background','orange')
        },
        'mouseover':()=>{
            $('#box').css('background','lightblue')
        },
        'mouseout':()=>{
            $('#box').css('background','pink')
        }
    })

    $('button').click(()=>{
        $('#box').off('mouseover mouseout')
    })

})

