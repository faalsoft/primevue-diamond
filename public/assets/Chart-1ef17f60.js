import{u as b,r as t,o as P,w as f,a as V,b as m,c as x,d as o,f as r}from"./index-c4f39c8f.js";const B={class:"grid p-fluid"},k={class:"col-12 xl:col-6"},w={class:"card"},D=o("h5",null,"Linear Chart",-1),M={class:"col-12 xl:col-6"},S={class:"card"},O=o("h5",null,"Bar Chart",-1),J={class:"col-12 xl:col-6"},A={class:"card flex flex-column align-items-center"},F=o("h5",{class:"text-left w-full"},"Pie Chart",-1),H={class:"col-12 xl:col-6"},E={class:"card flex flex-column align-items-center"},L=o("h5",{class:"text-left w-full"},"Doughnut Chart",-1),N={class:"col-12 xl:col-6"},R={class:"card flex flex-column align-items-center"},I=o("h5",{class:"text-left w-full"},"Polar Area Chart",-1),T={class:"col-12 xl:col-6"},j={class:"card flex flex-column align-items-center"},q=o("h5",{class:"text-left w-full"},"Radar Chart",-1),K={__name:"Chart",setup(z){const{layoutConfig:i}=b(),u=t(null),n=t(null),p=t(null),g=t(null),y=t(null),_=t(null),d=t(null),h=t(null),C=t(null),v=t(null);P(()=>{c()});const c=()=>{const e=getComputedStyle(document.documentElement),a=e.getPropertyValue("--text-color"),l=e.getPropertyValue("--text-color-secondary"),s=e.getPropertyValue("--surface-border");g.value={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:e.getPropertyValue("--primary-500"),borderColor:e.getPropertyValue("--primary-500"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:e.getPropertyValue("--primary-200"),borderColor:e.getPropertyValue("--primary-200"),data:[28,48,40,19,86,27,90]}]},C.value={plugins:{legend:{labels:{fontColor:a}}},scales:{x:{ticks:{color:l,font:{weight:500}},grid:{display:!1,drawBorder:!1}},y:{ticks:{color:l},grid:{color:s,drawBorder:!1}}}},n.value={labels:["A","B","C"],datasets:[{data:[540,325,702],backgroundColor:[e.getPropertyValue("--indigo-500"),e.getPropertyValue("--purple-500"),e.getPropertyValue("--teal-500")],hoverBackgroundColor:[e.getPropertyValue("--indigo-400"),e.getPropertyValue("--purple-400"),e.getPropertyValue("--teal-400")]}]},d.value={plugins:{legend:{labels:{usePointStyle:!0,color:a}}}},u.value={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:e.getPropertyValue("--primary-500"),borderColor:e.getPropertyValue("--primary-500"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:e.getPropertyValue("--primary-200"),borderColor:e.getPropertyValue("--primary-200"),tension:.4}]},_.value={plugins:{legend:{labels:{fontColor:a}}},scales:{x:{ticks:{color:l},grid:{color:s,drawBorder:!1}},y:{ticks:{color:l},grid:{color:s,drawBorder:!1}}}},p.value={datasets:[{data:[11,16,7,3],backgroundColor:[e.getPropertyValue("--indigo-500"),e.getPropertyValue("--purple-500"),e.getPropertyValue("--teal-500"),e.getPropertyValue("--orange-500")],label:"My dataset"}],labels:["Indigo","Purple","Teal","Orange"]},h.value={plugins:{legend:{labels:{color:a}}},scales:{r:{grid:{color:s}}}},y.value={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",borderColor:e.getPropertyValue("--indigo-400"),pointBackgroundColor:e.getPropertyValue("--indigo-400"),pointBorderColor:e.getPropertyValue("--indigo-400"),pointHoverBackgroundColor:a,pointHoverBorderColor:e.getPropertyValue("--indigo-400"),data:[65,59,90,81,56,55,40]},{label:"My Second dataset",borderColor:e.getPropertyValue("--purple-400"),pointBackgroundColor:e.getPropertyValue("--purple-400"),pointBorderColor:e.getPropertyValue("--purple-400"),pointHoverBackgroundColor:a,pointHoverBorderColor:e.getPropertyValue("--purple-400"),data:[28,48,40,19,96,27,100]}]},v.value={plugins:{legend:{labels:{fontColor:a}}},scales:{r:{grid:{color:l}}}}};return f(i.colorScheme,()=>{c()}),f(i.theme,()=>{c()}),(e,a)=>{const l=V("Chart",!0);return m(),x("div",B,[o("div",k,[o("div",w,[D,r(l,{type:"line",data:u.value,options:_.value},null,8,["data","options"])])]),o("div",M,[o("div",S,[O,r(l,{type:"bar",data:g.value,options:C.value},null,8,["data","options"])])]),o("div",J,[o("div",A,[F,r(l,{type:"pie",data:n.value,options:d.value},null,8,["data","options"])])]),o("div",H,[o("div",E,[L,r(l,{type:"doughnut",data:n.value,options:d.value},null,8,["data","options"])])]),o("div",N,[o("div",R,[I,r(l,{type:"polarArea",data:p.value,options:h.value},null,8,["data","options"])])]),o("div",T,[o("div",j,[q,r(l,{type:"radar",data:y.value,options:v.value},null,8,["data","options"])])])])}}};export{K as default};
