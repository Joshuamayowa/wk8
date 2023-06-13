const heading= document.querySelector('h1')

heading.innerText= `Dora said 
"old men plant tress whose shed they will never 
live to sit under"`

heading.style.color= '#f0f'

const list1= document.querySelector ('li:nth-of-type(2)')
 list1.style.background= 'tomato'
 
 const list= document.querySelectorAll('li')
 
 list[0].innerText='frontend web with Next JS'
 list[1].innerText='backend development with Djanjo'
 list[1].style.backgroundColor= 'cyan'

 const zero= document.getElementById('no-code')
 zero.style.letterSpacing= '20px'

 const zero1=document.querySelectorAll('#no-code')[1]
 zero1.style.backgroundColor= 'skyblue'
 zero1.style.padding= '3em'
 zero1.style.letterSpacing= '20px'

 const zeroCode= document.getElementsByClassName('no-code')
 zeroCode[0].style.borderBottom= '15px dashed pink'
 zeroCode[1].style.borderBottom= '10px ridge magenta'
