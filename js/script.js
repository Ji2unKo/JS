    // 웹 문서 -> document .-> 뭐뭐안에~ / ~의
    // getElementById id hello인 html요소 가져와 innerHTML->내부글자
    document.getElementById('hello').innerHTML ='안녕';
    // 셀렉터 selector
    // 컴퓨터야 id = hi 라는 애들 올때 바밤바로 변경해줘
    document.getElementById('hi').innerHTML = '올때 바밤바';
    document.getElementById('hello').style.color = 'red';
    document.getElementById('hi').style.fontSize ='30px';


    // Alert
    document.getElementById('alert').style.display = 'none';

    //funstion -> 긴코드를 깔끔하게 한 단어로 축약
    // 파라미터라는 문법을 이용해서 알림창열기()함수를 업글한거임
    // 파라미너의 장점 : 함수 하나로 다양한기능 만들기 가능
    function 알림창열기(구멍){
        document.getElementById('alert').style.display = 구멍;
    }

    // chobo : 함수 개많이 만들어 놓음
    // gosu : 비슷한 함수들은 여러개 만들 필요 없

    알림창열기('block'); 
    알림창열기('none'); 

    // function 알림창닫기(){
    //     document.getElementById('alert').style.display = 'none';
    // }  

    function plus(구멍){
        2 + 구멍
    }
    
    function plus2(){
        2 + 2
    }
    
    function plus3(){
        2 + 3
    }

    // plus() 실행하는 1번, 2번, 3번 
    plus(1)