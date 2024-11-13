 'use strict'

 const showMore = document.querySelectorAll('.buttons')
 showMore.forEach(btn =>{
     btn.addEventListener('click',function(){

         const paragraphs=this.nextElementSibling
         const plusIcon=this.querySelector('.plus-icon')
         const minusIcon=this.querySelector('.minus-icon')

         if(paragraphs.style.maxHeight){
             paragraphs.style.maxHeight=null
             plusIcon.style.display='block'
             minusIcon.style.display='none'

         }else{
             paragraphs.style.maxHeight=paragraphs.scrollHeight+'px'
             plusIcon.style.display='none'
             minusIcon.style.display='block'
         }
     })
 })
