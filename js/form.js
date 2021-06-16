$(function(){
  let num = 0;
  $("select").change(function(){
    console.log(num);
    num++;
    let thisVal = $(this).val();
    $(this).prev().val(thisVal);
    console.log($(this).val());
  })

  $(".name").val("8~12자까지").css("color","#666").one("focus",function(){
    console.log("focus in");
    $(this).val("").css("color","#000")
  }).blur(function(){
    if( $(this).val() == ""){
      $(this).val("8~12자까지").css("color","#666").one("focus",function(){
        $(this).val("").css("color","#000")
      })
    }
  })

  $(".password").val("10~14자 / 문자+숫자+특수문자 조합").css("color","#666").one("focus",function(){
    console.log("focus in");
    $(this).val("").css("color","#000")
  }).blur(function(){
    if( $(this).val() == ""){
      $(this).val("10~14자 / 문자+숫자+특수문자 조합").css("color","#666").one("focus",function(){
        $(this).val("").css("color","#000")
      })
    }
  })

  $(".address").val("예)1동 1002호(00동,00아파트)*단독주택의 경우 건물번호 입력").css("color","#666").one("focus",function(){
    console.log("focus in");
    $(this).val("").css("color","#000")
  }).blur(function(){
    if( $(this).val() == ""){
      $(this).val("예)1동 1002호(00동,00아파트)*단독주택의 경우 건물번호 입력").css("color","#666").one("focus",function(){
        $(this).val("").css("color","#000")
      })
    }
  })

});
