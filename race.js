
var horses = window.document.body.querySelectorAll('.horses');

var input = prompt('우승할 말 번호를 적어주세요!');

var resultSum = new Array({name:'1번말',sum:0}, {name:'2번말',sum:0}, {name:'3번말',sum:0}, {name:'4번말',sum:0}, {name:'5번말',sum:0});

var time = setInterval(() => {        
    for(var i=0; i<horses.length; i++){
        resultSum[i].sum += Math.floor(Math.random() * 200);

        horses[i].style.transform="translate("+ resultSum[i].sum + "px, 0)";
    
        if (resultSum[i].sum>=600){
            clearTimeout(time);        
            
            resultSum.sort((a, b) => b.sum - a.sum);
            if (resultSum[0].name.charAt(0) == input) {
                alert('정답입니다!!');
            } else {
                alert('오답입니다');
            }
            var check= confirm('다시하시겠습니까?', true);
            if (check ===true){
                location.reload(); 
            } else{
                break;
            }
        }
    }
}, 100);