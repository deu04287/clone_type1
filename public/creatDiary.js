if(localStorage.getItem(localStorage.getItem('tmp'))){
    let ee = localStorage.getItem(localStorage.getItem('tmp'));
    const regex = /########/;
    // console.log(ee.split(regex)[0]);
    
    document.getElementById('diarySubject').value = ee.split(regex)[0];
    document.getElementById('input-message').value = ee.split(regex)[1];
}


function deleteBoard(seq){
    Swal.fire({
      title: 'Are you sure you want to go back?',
      text: "(Information will not be saved)",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'check',
      cancelButtonText: 'cancel'
    }).then((result) => {
      if (result.value) {
        history.go(-1);
      }
      else{
        history.pushState(null, null, location.href);
      }
    })
}
function testt(){

    let a = document.getElementById('diarySubject').value ;
    let c = document.getElementById('input-message').value;
    let b = localStorage.getItem('tmp');

    localStorage.setItem(b,a+'########'+c);
    
    window.onpopstate = function(event){
        
    }     

    // alert(a);
}

let tttt = -1;
// const fdfd = history.pushState(null, null, location.href);
let gggg = document.getElementsByClassName('buttons')[0];
gggg.onclick = () =>{
    window.onpopstate = function(event){
        tttt = 1;
        history.back();
    }     
    let a = document.getElementById('diarySubject').value ;
    let c = document.getElementById('input-message').value;
    let b = localStorage.getItem('tmp');

    localStorage.setItem(b,a+'########'+c);

    history.back();

 
}




history.pushState(null, null, location.href);
window.onpopstate = function(event){
    if(tttt == -1){
        deleteBoard();

    }
    else{
        history.back();
    }
}        




    // jQuery(document).ready(function($) {

    //     if (window.history && window.history.pushState) {
      
    //       window.history.pushState('forward', null, './#forward');
    //       $(window).on('popstate', function() {
    //         deleteBoard();

    //     });
        
    //     }
    //   });



// console.log(document.referrer);
// if(history.go(-1))
// {
//    
// }


