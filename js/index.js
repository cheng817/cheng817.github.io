
window.onload=function(){

    var oUl= document.getElementById('nav-js');
    var aLi= oUl.getElementsByTagName('li');
    var oSearch= document.getElementById('nav-search');
    var oBut= document.getElementById('but');
    for( var i=0;i<aLi.length;i++){
        aLi[2].onclick=aLi[0].onclick=function(){
            for( var i=0;i<aLi.length;i++) {
                aLi[i].className = 'bai';
            }
            this.className = 'hong';
            oSearch.style.backgroundColor='#f40';
            oBut.style.backgroundColor='#f40';
        };
        aLi[1].onclick=function(){
            for( var i=0;i<aLi.length;i++) {
                aLi[i].className = 'bai';
            }
            this.className = 'zing';
            oSearch.style.backgroundColor='#c60000';
            oBut.style.backgroundColor='#c60000';
        };
    }
};


