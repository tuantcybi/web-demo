const textConfig = {
  text1: "Hello cậu!",
  text2: "Tớ có điều này muốn hỏi cậu nhớ phải trả lời thật lòng nhaaa.",
  text3: "Cậu có tha lỗi cho tớ không?",
  text4: "Nếu cậu ko trả lời mà thoát ra tức là c rất rất quý t =)))",
  text5: "Cậu mơ à?????",
  text6: "Cậu đáng yêu lắm, k giận được đâu",
  text7: "Lí do c hết giận tớ đi? :P",
  text8: "Gửi cho tớ <3",
  text9: "Vì cậu dz và rất tốt bụng",
  text10: "Tớ biết mà ^^ ",
  text11:
    " Vậy giờ gửi bức ảnh xinh đẹp ngay bây giờ vào trong inbox cho tớ đi nàooo",
  text12: "OK luônn <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-9/82050412_2612507282305922_5042215120726392832_n.jpg?_nc_cat=101&ccb=1-4&_nc_sid=8bfeb9&_nc_ohc=7EaTJuRhgDIAX9T8Jj8&_nc_ht=scontent.fhan2-1.fna&oh=a56415194c9fd86b850125ba9b8d9b00&oe=613A7CCA",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-n%E1%BB%81n-m%C3%A0u-xanh-da-tr%E1%BB%9Di.png")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(150);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("https://github.com/dunghm98/web-for-crush/blob/master/img/giphy2.gif?raw=true")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("https://github.com/dunghm98/web-for-crush/blob/master/img/iput-bg.jpg?raw=true")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://www.facebook.com/cescc.4/";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});