(this.webpackJsonpprojeto_08_foodcampreact=this.webpackJsonpprojeto_08_foodcampreact||[]).push([[0],{13:function(e,i,c){"use strict";c.r(i);var t=c(2),n=c(5),a=c(1),r=c.n(a),s=[{id:1,name:"Hamburguer Artesanal",img:"img/hamburguer.jpg",description:"O melhor Hamburguer Artesanal do Rio",price:30.9},{id:2,name:"Yakisoba de Frango",img:"img/yakisoba.jpg",description:"O melhor Yakisoba do Rio",price:20.9},{id:3,name:"Pizza de Calabresa",img:"img/pizza.jpg",description:"O melhor pizza do Rio",price:40.9}],o=[{id:4,name:"Cerveja Imp\xe9rio",img:"img/imperio.jpg",description:"Cerveja mais gelada do Rio",price:6.9},{id:5,name:"Refrigerante jesus",img:"img/jesus.jpg",description:"Refrigerante mais gelado do Rio",price:10.9},{id:6,name:"\xc1gua",img:"img/agua.jpg",description:"\xc1gua mais gelada do Rio",price:4.9}],d=[{id:7,name:"A\xe7a\xed",img:"img/acai.jpg",description:"O melhor A\xe7a\xed do Rio",price:15.9},{id:8,name:"Sorvete",img:"img/sorvete.jpg",description:"O melhor sorvete do Rio",price:10.9},{id:9,name:"Bolo de Chocolate",img:"img/bolo.webp",description:"O melhor Bolo do Rio",price:50.9}],l=[],j=c(0);function m(e,i){var c=r.a.useState(1),a=Object(t.a)(c,2),s=a[0],o=a[1],d=r.a.useState(""),m=Object(t.a)(d,2),p=m[0],u=m[1];return Object(j.jsxs)("div",{className:i.dish+" opcao "+p,onClick:function(){var c,t,a;""==p&&(u("selecionado"),c=i.dish,t=e.name,a=e.price,l.push({type:c,name:t,price:a,qtd:1}),i.qtd([].concat(Object(n.a)(i.category),["um"])))},children:[Object(j.jsx)("img",{src:e.img,alt:""}),Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("p",{children:e.description}),Object(j.jsxs)("div",{className:"preco",children:[Object(j.jsxs)("div",{children:["R$",Object(j.jsx)("h3",{children:e.price.toFixed(2)})]}),Object(j.jsxs)("div",{className:"counter "+p,children:[Object(j.jsx)("ion-icon",{name:"remove-outline",onClick:function(){!function(e,c,t,a){var r;o(s-1),l.map((function(e){c==e.name&&(e.qtd-=1,r=l.indexOf(e))})),console.log(r),i.qtd(Object(n.a)(i.category.slice(0,-1))),1==s&&(l.splice(r,1),u(""),o(1))}(i.dish,e.name,e.price,e.qtd)}}),Object(j.jsx)("p",{children:s}),Object(j.jsx)("ion-icon",{name:"add-outline",onClick:function(){var c;c=e.name,o(s+1),i.qtd([].concat(Object(n.a)(i.category),["um"])),l.map((function(e){c==e.name&&(e.qtd+=1)}))}})]})]})]})}function p(e){var i;return"Deserts"===e.dish&&(i=d),"MainDishes"===e.dish&&(i=s),"Drinks"===e.dish&&(i=o),Object(j.jsx)("div",{className:"pratos",children:i.map((function(i){return m(i,e)}))})}function u(){var e=l.filter((function(e){return"MainDishes"==e.type})),i=l.filter((function(e){return"Drinks"==e.type})),c=l.filter((function(e){return"Deserts"==e.type})),t=0;l.map((function(e){return t+=e.price*e.qtd}));return console.log(l),Object(j.jsxs)("div",{className:"checkout hidden",children:[Object(j.jsx)("h2",{children:"Revise seu pedido"}),Object(j.jsxs)("div",{className:"checkoutContainer",children:[e.map((function(e){return Object(j.jsxs)("div",{className:"order",children:[Object(j.jsx)("p",{children:e.name}),Object(j.jsxs)("p",{children:[e.price," (x",e.qtd,")"]})]})})),i.map((function(e){return Object(j.jsxs)("div",{className:"order",children:[Object(j.jsx)("p",{children:e.name}),Object(j.jsxs)("p",{children:[e.price," (x",e.qtd,")"]})]})})),c.map((function(e){return Object(j.jsxs)("div",{className:"order",children:[Object(j.jsx)("p",{children:e.name}),Object(j.jsxs)("p",{children:[e.price," (x",e.qtd,")"]})]})})),Object(j.jsxs)("div",{className:"order bold",children:[Object(j.jsx)("p",{children:"Total"}),Object(j.jsx)("p",{children:t.toFixed(2)})]})]}),Object(j.jsx)("div",{className:"botao2",onClick:function(){var e=function(){var e="Ol\xe1, gostaria de fazer o pedido:\n  ",i=0;return l.map((function(c){"MainDishes"==c.type&&(e+="- Prato: ".concat(c.name," (").concat(c.qtd,"x)\n  "),i+=c.price*c.qtd),"Drinks"==c.type&&(e+="- Bebida: ".concat(c.name," (").concat(c.qtd,"x)\n  "),i+=c.price*c.qtd),"Deserts"==c.type&&(e+="- Sobremesa: ".concat(c.name," (").concat(c.qtd,"x)\n  "),i+=c.price*c.qtd)})),[e+="Total: R$ ".concat(i.toFixed(2)),i.toFixed(2)]}(),i=encodeURIComponent(e[0]);window.open("https://api.whatsapp.com/send/?phone=5521971346486&text="+i,"_blank")},children:"Tudo certo, pode pedir!"}),Object(j.jsx)("div",{className:"cancel",onClick:function(){document.querySelector(".principal").classList.remove("hidden"),document.querySelector(".finalizar").classList.remove("hidden"),document.querySelector(".checkout").classList.add("hidden")},children:"Cancelar"})]})}function h(){var e,i=r.a.useState([]),c=Object(t.a)(i,2),n=c[0],a=c[1],s=r.a.useState([]),o=Object(t.a)(s,2),d=o[0],l=o[1],m=r.a.useState([]),h=Object(t.a)(m,2),b=h[0],O=h[1],g={backgroundColor:null},x="Selecione os 3 itens para fechar o pedido";return 0!=n.length&&0!=d.length&&0!=b.length&&(x="Fechar pedido",g.backgroundColor="green",e=function(){document.querySelector(".principal").classList.add("hidden"),document.querySelector(".finalizar").classList.add("hidden"),document.querySelector(".checkout").classList.remove("hidden")}),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"topo",children:Object(j.jsxs)("div",{className:"titulo",children:[Object(j.jsx)("h1",{children:"DrivenEats"}),Object(j.jsx)("p",{children:"Sua comida em 6 minutos"})]})}),Object(j.jsxs)("div",{className:"principal",children:[Object(j.jsx)("h2",{children:"Primeiro, seu prato"}),Object(j.jsx)(p,{dish:"MainDishes",qtd:a,category:n}),Object(j.jsx)("h2",{children:"Agora, sua bebida"}),Object(j.jsx)(p,{dish:"Drinks",qtd:l,category:d}),Object(j.jsx)("h2",{children:"Por fim, sua sobremesa"}),Object(j.jsx)(p,{dish:"Deserts",qtd:O,category:b})]}),Object(j.jsx)(u,{}),Object(j.jsx)("div",{className:"finalizar",children:Object(j.jsx)("div",{className:"botao",style:g,onClick:e,children:x})})]})}var b=c(7);c.n(b).a.render(Object(j.jsx)(h,{}),document.querySelector(".root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.0a78ded9.chunk.js.map