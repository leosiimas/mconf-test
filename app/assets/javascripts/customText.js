var count  = 0
    
$('#inputField').keyup(function() {   

    var text = this.value;
    var result = text.toUpperCase().indexOf("MCONF");

    if(result >= 0 && count != 1){

        var colors  = ['#481E9D', '#8D74C0',  '#CA4B57', '#2B2D42', '#1C77C3', '#81B29A', '#E98039'];
        var i = Math.floor(Math.random() * 7);
        $("body").css("background-color", colors[i]).css("color", 'white');
        count = 1;

    }else if(result < 0){

        $("body").css("background-color", "").css("color", '');;
        count = 0;

    }
});