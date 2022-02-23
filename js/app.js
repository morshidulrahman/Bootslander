const faqs=document.querySelectorAll(".faq_cards")
 
faqs.forEach((faq)=>{
    faq.addEventListener("click",(e)=>{
      faq.classList.toggle("faq_active")
    })
})

 