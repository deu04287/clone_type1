// window.onclick = function(){
//     let ww = document.querySelectorAll('.prev, .current, .next');
//     for(let gg=0;gg<ww.length;gg++){
//         ww[gg].addEventListener('click', () =>{
//             if(ww[gg].classList.contains('test')){
//                 ww[gg].classList.remove('test');
//             }
//             else{
//                 ww[gg].classList.add('test');
//                 console.log(this.Array());
//             }
//         });
//     }
// }


// var wz = 0; // 로컬스토리지에 저장할 날짜 //+1 해줘야함

// const mouseTarget = document.getElementById('datesId');

// mouseTarget.addEventListener('mouseenter', (e) => {
//     let ddd = document.getElementsByClassName('year-month')[0].innerHTML;


//     let ds = document.querySelectorAll('.current');
//     let test =-1;
//     for(let i=0;i<ds.length;i++){
//         ds[i].addEventListener('click', () => {
//             if(ds[i].classList.contains('test')){
//             }
//             else{
//                 if(test != -1)
//                 {
//                     ds[test].classList.remove('test');
//                 }
//                 ds[i].classList.add('test');
//                 test = i;
//                 wz = ddd+'.'+test;
//                 // alert(wz);
//                 localStorage.setItem('tmp',wz); //마지막 작업 // 로컬스토리지에 wz값 넣어줌 // 다음 해야할일 : write에서 내용 받아와서 로컬스토리지에 저장
//             }

//         });
//     }
// });


