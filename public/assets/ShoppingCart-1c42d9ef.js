import{r as p,a as r,b as x,c as d,d as e,f as s,i as n}from"./index-c4f39c8f.js";const u="/demo/images/ecommerce/shopping-cart/shopping-cart-2-1.png",f="/demo/images/ecommerce/shopping-cart/shopping-cart-2-2.png",b={class:"card"},_={class:"flex flex-column align-items-center mb-6"},v=e("div",{class:"text-900 text-4xl mb-4 font-medium"},"Your cart total is $82.00",-1),h=e("p",{class:"text-700 font-medium text-xl mt-0 mb-4"},"FREE SHIPPING AND RETURN",-1),g={class:"list-none p-0 m-0"},w={class:"flex flex-column md:flex-row py-6 border-top-1 border-bottom-1 surface-border md:align-items-center"},y=e("img",{src:u,class:"w-12rem flex-shrink-0 mx-auto md:mx-0",alt:"shopping-cart-2-1"},null,-1),k={class:"flex-auto py-5 md:pl-5"},V={class:"flex flex-wrap align-items-start sm:align-items-center sm:flex-row sm:justify-content-between surface-border pb-6"},j=e("div",{class:"w-full sm:w-6 flex flex-column"},[e("span",{class:"text-900 text-xl font-medium mb-3"},"Product Name"),e("span",{class:"text-700"},"Medium")],-1),N={class:"w-full sm:w-6 flex align-items-start justify-content-between mt-3 sm:mt-0"},D=e("div",{class:"flex flex-column sm:align-items-end"},[e("span",{class:"text-900 text-xl font-medium mb-2 sm:mb-3"},"$20.00"),e("a",{class:"cursor-pointer text-pink-500 font-medium text-sm hover:text-pink-600 transition-colors transition-duration-300",tabindex:"0"}," Remove ")],-1),O=n('<div class="flex flex-column"><span class="inline-flex align-items-center mb-3"><i class="pi pi-envelope text-700 mr-2"></i><span class="text-700 mr-2">Order today.</span></span><span class="inline-flex align-items-center mb-3"><i class="pi pi-send text-700 mr-2"></i><span class="text-700 mr-2"> Delivery by <span class="font-bold">Dec 23.</span></span></span><span class="flex align-items-center"><i class="pi pi-exclamation-triangle text-700 mr-2"></i><span class="text-700">Only 8 Available.</span></span></div>',1),$={class:"flex flex-column md:flex-row py-6 border-top-1 border-bottom-1 surface-border md:align-items-center"},B=e("img",{src:f,class:"w-12rem flex-shrink-0 mx-auto md:mx-0",alt:"shopping-cart-2-2"},null,-1),R={class:"flex-auto py-5 md:pl-5"},S={class:"flex flex-wrap align-items-start sm:align-items-center sm:flex-row sm:justify-content-between surface-border pb-6"},A=e("div",{class:"w-full sm:w-6 flex flex-column"},[e("span",{class:"text-900 text-xl font-medium mb-3"},"Product Name"),e("span",{class:"text-700"},"Medium")],-1),C={class:"w-full sm:w-6 flex align-items-start justify-content-between mt-3 sm:mt-0"},E=e("div",{class:"flex flex-column sm:align-items-end"},[e("span",{class:"text-900 text-xl font-medium mb-2 sm:mb-3"},"$62.00"),e("a",{class:"cursor-pointer text-pink-500 font-medium text-sm hover:text-pink-600 transition-colors transition-duration-300",tabindex:"0"}," Remove ")],-1),P=n('<div class="flex flex-column"><span class="inline-flex align-items-center mb-3"><i class="pi pi-envelope text-700 mr-2"></i><span class="text-700 mr-2">Order today.</span></span><span class="inline-flex align-items-center mb-3"><i class="pi pi-send text-700 mr-2"></i><span class="text-700 mr-2"> Delivery by <span class="font-bold">Dec 23.</span></span></span><span class="flex align-items-center"><i class="pi pi-exclamation-triangle text-700 mr-2"></i><span class="text-700">Only 2 Available.</span></span></div>',1),T={class:"flex"},U=e("div",{class:"w-12rem hidden md:block"},null,-1),F={class:"list-none py-0 pr-0 pl-0 md:pl-5 mt-6 mx-0 mb-0 flex-auto"},I=n('<li class="flex justify-content-between mb-4"><span class="text-xl text-900 font-semibold">Subtotal</span><span class="text-xl text-900">$82.00</span></li><li class="flex justify-content-between mb-4"><span class="text-xl text-900 font-semibold">Shipping</span><span class="text-xl text-900">Free</span></li><li class="flex justify-content-between mb-4"><span class="text-xl text-900 font-semibold">VAT</span><span class="text-xl text-900">$8.00</span></li><li class="flex justify-content-between border-top-1 surface-border mb-4 pt-4"><span class="text-xl text-900 font-bold text-3xl">Total</span><span class="text-xl text-900 font-bold text-3xl">$90.00</span></li>',4),L={class:"flex justify-content-end"},G={__name:"ShoppingCart",setup(M){const a=[{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"4",value:4}],o=p({label:"1",value:1}),i=p({label:"1",value:1});return(Q,t)=>{const c=r("Button"),m=r("Dropdown");return x(),d("div",b,[e("div",_,[v,h,s(c,{label:"Check Out"})]),e("ul",g,[e("li",w,[y,e("div",k,[e("div",V,[j,e("div",N,[e("div",null,[s(m,{options:a,modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value=l),optionLabel:"label"},null,8,["modelValue"])]),D])]),O])]),e("li",$,[B,e("div",R,[e("div",S,[A,e("div",C,[e("div",null,[s(m,{options:a,modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=l=>i.value=l),optionLabel:"label"},null,8,["modelValue"])]),E])]),P])])]),e("div",T,[U,e("ul",F,[I,e("li",L,[s(c,{label:"Check Out"})])])])])}}};export{G as default};