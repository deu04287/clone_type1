
$(document).ready(function() {
    calendarInit();
});
/*
    달력 렌더링 할 때 필요한 정보 목록 

    현재 월(초기값 : 현재 시간)
    금월 마지막일 날짜와 요일
    전월 마지막일 날짜와 요일
*/

function calendarInit() {

    // 날짜 정보 가져오기
    let date = new Date(); // 현재 날짜(로컬 기준) 가져오기
    let utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000); // uct 표준시 도출
    let kstGap = 9 * 60 * 60 * 1000; // 한국 kst 기준시간 더하기
    let today = new Date(utc + kstGap); // 한국 시간으로 date 객체 만들기(오늘)
  // console.log(today);
//     console.log(today.getFullYear());
// console.log(today.getMonth());

const regex = /\//;
const dfdg = moment().format('L');
let adb = dfdg.split(regex);
console.log(adb);


let thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    // 달력에서 표기하는 날짜 객체
  
    
    // let currentYear = thisMonth.getFullYear(); // 달력에서 표기하는 연
    // let currentMonth = thisMonth.getMonth(); // 달력에서 표기하는 월
    // let currentDate = thisMonth.getDate(); // 달력에서 표기하는 일
    let currentYear = adb[2];
    let currentMonth = adb[0];
    let currentDate = adb[1];


    // kst 기준 현재시간
    // console.log(thisMonth);

    // 캘린더 렌더링
    renderCalender(thisMonth);

    function renderCalender(thisMonth) {
        let fff = -1;
        // 렌더링을 위한 데이터 정리
        currentYear = thisMonth.getFullYear();
        currentMonth = thisMonth.getMonth();
        currentDate = thisMonth.getDate();

        // 이전 달의 마지막 날 날짜와 요일 구하기
        let startDay = new Date(currentYear, currentMonth, 0);
        let prevDate = startDay.getDate();
        let prevDay = startDay.getDay();

        // 이번 달의 마지막날 날짜와 요일 구하기
        let endDay = new Date(currentYear, currentMonth + 1, 0);
        let nextDate = endDay.getDate();
        let nextDay = endDay.getDay();

        // console.log(prevDate, prevDay, nextDate, nextDay);

        // 현재 월 표기
        $('.year-month').text(currentYear + '.' + (currentMonth + 1));

        // 렌더링 html 요소 생성
        calendar = document.querySelector('.dates')
        calendar.innerHTML = '';
        
        // 지난달
        for (let i = prevDate - prevDay ; i <= prevDate; i++) {
            calendar.innerHTML = calendar.innerHTML + '<div class="day prev disable" id="prev'+ i +'">' + i + '</div>'    
        }


        // 이번달
        for (let i = 1; i <= nextDate; i++) {
            calendar.innerHTML = calendar.innerHTML + '<div class="day current" id="current'+ i +'"><div class="please"><div>' + i + '</div></div></div>'
        }
        // 다음달
        for (let i = 1; i <= (7 - nextDay == 7 ? 0 : 7 - nextDay - 1); i++) {
            calendar.innerHTML = calendar.innerHTML + '<div class="day next disable" id="next'+ i +'">' + i + '</div>'
        }
        // 오늘 날짜 표기
        if (today.getMonth() == currentMonth) {
            todayDate = today.getDate();
            let currentMonthDate = document.querySelectorAll('.dates .current');
            currentMonthDate[todayDate -1].classList.add('today');
            
            fff = todayDate - 1;
            
        }
        if(fff != -1){
            let dfd =document.getElementsByClassName('year-month')[0].innerHTML +'.' + fff;
            localStorage.setItem('tmp',dfd);    
        }


    }

    function reloadt(){
        var wz = 0; // 로컬스토리지에 저장할 날짜 //+1 해줘야함
        let test = -1;
                  let ddd = document.getElementsByClassName('year-month')[0].innerHTML;
  
        const buttons = document.querySelectorAll('.day.current');
  
        Array.from(buttons).forEach((button,index) =>
          button.addEventListener("click", () => {
            if (button.classList.contains('test')) {
            }
            else {
              if (test != -1) {
                buttons[test].classList.remove('test');
              }
              button.classList.add('test');
              test = index;
              wz = ddd+'.'+test;
              localStorage.setItem('tmp',wz);
              // alert(wz);
            }
          }));
  

          
        // if (ds[i].classList.contains('test')) {
        // }
        // else {
        //     if (test != -1) {
        //         ds[test].classList.remove('test');
        //     }
        //     ds[i].classList.add('test');
        //     test = i;
        //     wz = ddd + '.' + test;
        //     // alert(wz);
        //     localStorage.setItem('tmp', wz); //마지막 작업 // 로컬스토리지에 wz값 넣어줌 // 다음 해야할일 : write에서 내용 받아와서 로컬스토리지에 저장
        // }

            let i = 0;
            let a = document.getElementsByClassName('year-month')[0].innerHTML;
            a = a + '.';
            for(i=1;document.getElementById('current' + i) != null;i++){
              if(localStorage.getItem(a+(i-1))){
                // console.log(document.querySelector('#current'+i));
                // document.querySelector('#current'+i).classList.add('exist');
                const node = document.createElement("div");
                node.className = 'exist';
                let ggg = document.getElementById('current'+i)
                ggg2 = ggg.getElementsByClassName('please')[0];
                ggg2.appendChild(node);
                // document.getElementById('current'+i).appendChild(node);
              }
            }

    }

    // 이전달로 이동
    $('.go-prev').on('click', function() {
        thisMonth = new Date(currentYear, currentMonth - 1, 1);
        renderCalender(thisMonth);
        reloadt();
    });

    // 다음달로 이동
    $('.go-next').on('click', function() {
        thisMonth = new Date(currentYear, currentMonth + 1, 1);
        renderCalender(thisMonth); 
        reloadt();
    });


    //     c[zz].classList.add('test');
    // calendar.addEventListener('click', () => {dddddddddddddddddddddddddddddd});
    

}


// 클릭하면 배경색 바뀌게 할 예정

