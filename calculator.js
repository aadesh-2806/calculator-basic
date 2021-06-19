const button = document.querySelectorAll('button');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const text = document.querySelector('.text')
let x='',y=0;
for(let btn of button){
    btn.addEventListener('click' , function(){
        if(btn.innerText == 'CE'){
            text.innerText = '0';
            x='';
        }
        else {
            if(btn.innerText == '='){
                y= eval(x);
                text.innerText=y;
                x='';
            }
            else{
                x=x+btn.innerText;
                text.innerText = x;
            }
        }
        h2.innerText = btn.innerText;
    })
}