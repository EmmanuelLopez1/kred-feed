(this["webpackJsonpkred-fedd"]=this["webpackJsonpkred-fedd"]||[]).push([[0],{67:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(28),l=c.n(s),r=(c(40),c(41),c(12)),i=c(3),o=c(11),d=(c(67),c.p+"static/media/logo-kred-feed.db67282a.png"),j=c(8),m=c(0),b=function(){return Object(m.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light border-bottom border-primary border-1 p-3 bg-light",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)("img",{src:d,alt:"",className:"navbar-logo d-block"}),Object(m.jsx)("button",{className:"navbar-toggler navbar-menu",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("img",{src:"https://img.icons8.com/material-outlined/24/000000/menu--v1.png",alt:"menu-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse my-2 w-25 justify-content-end",id:"navbarNav",children:Object(m.jsxs)("ul",{className:"navbar-nav",children:[Object(m.jsx)("li",{className:"nav-item my-2 px-2",children:Object(m.jsxs)(r.b,{to:"/",className:"nav-link d-flex align-items-center",children:[Object(m.jsx)(o.a,{icon:j.b,className:"nav-icon me-3"}),Object(m.jsx)("p",{className:"nav-link-text text-dark",children:"Home"})]})}),Object(m.jsxs)("li",{className:"nav-item my-2 px-2",children:[Object(m.jsxs)("div",{className:"nav-link d-flex align-items-center",id:"dropdownMenuLink","data-bs-toggle":"dropdown",children:[Object(m.jsx)(o.a,{icon:j.d,className:"nav-icon me-3"}),Object(m.jsx)("p",{className:"nav-link-text text-dark",children:"Perfil"})]}),Object(m.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuLink",children:[Object(m.jsx)("li",{className:"d-flex align-items-center",children:Object(m.jsxs)("div",{className:"dropdown-item text-secondary",children:[Object(m.jsx)(o.a,{icon:j.e,className:"nav-icon me-3 text-secondary"}),Object(m.jsx)(r.b,{to:"/perfil/representante-legal",className:"dropdown-link my-2 text-secondary",children:"Representante Legal"})]})}),Object(m.jsx)("li",{className:"d-flex align-items-center mt-3",children:Object(m.jsxs)("div",{className:"dropdown-item text-secondary",children:[Object(m.jsx)(o.a,{icon:j.a,className:"nav-icon me-3 text-secondary"}),Object(m.jsx)(r.b,{to:"/perfil/informacion-fiscal",className:"dropdown-link my-2 text-secondary",children:"Informacion Fiscal"})]})})]})]})]})})]})})},x=function(e){var t=e.children;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b,{}),t]})},u=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("h1",{className:"text-center mt-5",children:"Welcome to the home"})})},h=(c(74),function(e){var t=e.title,c=e.clases,a=e.children;return Object(m.jsx)("div",{className:"card-form m-auto mt-3 border rounded p-4 ".concat(c),children:Object(m.jsxs)("form",{action:"",children:[Object(m.jsx)("h2",{className:"text-center text-secondary fs-2",children:t}),a]})})}),p=(c(75),function(e){var t=e.children,c=e.title;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("label",{htmlFor:"select",className:"input-title mt-5 mb-1 text-secondary",children:c}),Object(m.jsx)("select",{name:"select",id:"select",className:"inputSelect w-100 text-secondary",children:t})]})}),O=function(e){var t=e.options,c=e.title;return Object(m.jsx)(p,{title:c,children:t.map((function(e){return Object(m.jsx)("option",{value:e,children:e},e)}))})},f=(c(76),function(e){var t=e.title;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"date d-flex flex-column",children:[Object(m.jsxs)("label",{htmlFor:"date",className:"input-title mt-5 mb-1 text-secondary",children:[t,":"]}),Object(m.jsx)("input",{type:"date",id:"date",className:"input-date text-secondary border-0 ",name:""})]})})}),g=c(24),v=c.n(g),N=c(30),y=c(35),k=function(e){var t=e.title,c=Object(a.useState)(),n=Object(y.a)(c,2),s=n[0],l=n[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(N.a)(v.a.mark((function e(){var t,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.com/v3.1/all").then((function(e){return e.json()}));case 2:t=e.sent,c=t.map((function(e){return e.name.common})),l(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(m.jsx)(m.Fragment,{children:s&&Object(m.jsx)(O,{options:s,title:t})})},w=(c(78),function(e){var t=e.title;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("label",{htmlFor:"input-file",className:"input-file-title text-secondary input-title mt-5 mb-2",children:t}),Object(m.jsx)("input",{type:"file",name:"",id:"input-file",className:"input-file"})]})}),F=c(31),C=c(34),E=(c(79),c(80),function(e){var t=e.text,c=e.link;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"input-info",children:[t,Object(m.jsx)("a",{href:c,target:"_blank",className:"input-info-link ms-2 text-secondary",children:"Mas informacion"})]})})}),S=function(e){var t=e.placeholder,c=e.type,a=e.icon,n=e.text,s=e.link,l=e.handleChange,r=e.handleBlur,i=e.error,d=e.values;e.handleSubmit;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"mt-5 d-flex align-items-center justify-content-between",children:[Object(m.jsx)("input",{placeholder:t,type:c&&c||"text",className:"input-title inputText",name:"data",value:d.data,onChange:l,onBlur:r},t),Object(m.jsxs)("div",{className:"input-icon-content",children:[Object(m.jsx)(E,{text:n,link:s}),Object(m.jsx)(o.a,{icon:!!a&&j.c,className:"input-icon text-secondary"})]})]}),!!i&&Object(m.jsx)("p",{className:"input-error",children:i.error})]})},z=function(e){var t=e.placeholder,c=e.type,a=e.text,n=e.link,s=e.maxLength,l=e.icon,r=/^[a-zA-Z\xc0-\xff\s]{1,40}$/,i=/[0-9]/,o=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,d=function(e,t,c){var a,n="",s=Object(F.a)(e.data);try{for(s.s();!(a=s.n()).done;){var l=a.value;i.test(l)&&(n+=l),i.test(l)?10!==n.length&&(console.log(n.length),t.error="La longitud debe ser de ".concat(c," digitos")):t.error="Solo puedes ingresar numeros"}}catch(r){s.e(r)}finally{s.f()}},j=function(e,t){o.test(e.data)||(t.error="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.")};return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(C.a,{initialValues:{data:""},validate:function(e){var t=function(e){var t={};if(e.data)switch(c){case"tel":case"num":d(e,t,s);break;case"mail":j(e,t);break;default:r.test(e.data)||(t.error="Este campo solo puede contener letras y espacios")}else t.error="El campo se encuentra vacio";return t}(e);return t},children:function(e){var s=e.values,r=e.errors,i=e.handleChange,o=e.handleBlur;return Object(m.jsx)(S,{icon:l,placeholder:t,text:a,link:n,type:c,values:s,handleChange:i,handleBlur:o,error:r})}})})},R=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{className:"text-center mt-5",children:"Representante Legal"}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)(h,{title:"Lugar de residencia",clases:"col-lg-6",children:[Object(m.jsx)(k,{title:"Pais:"}),Object(m.jsx)(z,{placeholder:"Entidad Federativa o Estado"}),Object(m.jsx)(z,{placeholder:"Colonia o Urbanizacion"}),Object(m.jsx)(z,{placeholder:"Codigo Postal"}),Object(m.jsx)(z,{placeholder:"Calle"}),Object(m.jsx)(z,{placeholder:"Numero Ext."}),Object(m.jsx)(z,{placeholder:"Numero Int."}),Object(m.jsx)(z,{placeholder:"Numero Ext."})]}),Object(m.jsxs)(h,{title:"Informacion general",clases:"col-lg-5",children:[Object(m.jsx)(z,{placeholder:"Nombre"}),Object(m.jsx)(O,{options:["Hombre","Mujer"],title:"Genero"}),Object(m.jsx)(f,{title:"Nacionalidad"}),Object(m.jsx)(k,{title:"Pais de Nacimiento"}),Object(m.jsx)(O,{options:["Casado/a","Divorciado/a","Soltero/a","Union libre","Viudo"],title:"Estado civil:"})]})]}),Object(m.jsxs)("div",{className:"row mt-5",children:[Object(m.jsxs)(h,{title:"Documentacion",clases:"col-lg-6",children:[Object(m.jsx)(z,{placeholder:"CURP"}),Object(m.jsx)(z,{placeholder:"RFC"}),Object(m.jsx)(w,{title:"Comprobante de domicilio"})]}),Object(m.jsxs)(h,{title:"Datos de contacto",clases:"col-lg-5",children:[Object(m.jsx)(z,{placeholder:"Telefono",type:"tel"}),Object(m.jsx)(z,{placeholder:"Correo Electronico",type:"mail"})]})]}),Object(m.jsx)("div",{className:"row my-5 d-flex justify-content-start",children:Object(m.jsxs)(h,{title:"Cuenta bancaria",clases:"col-lg-6 m-0",children:[Object(m.jsx)(z,{placeholder:"Ingresa tu cuenta CLABE"}),Object(m.jsx)(O,{options:["Bancomer","Santander"],title:"Seleccione su banco"})]})})]})]})},L=[{placeholder:"Razon social",text:"Es el nombre oficial por el que la empresa consta legalmente, es decir, la denominaci\xf3n que aparece en los documentos oficiales de constituci\xf3n de la compa\xf1\xeda como persona jur\xeddica, y se inscribe en el Registro P\xfablico de la Propiedad y el Comercio.",link:"https://www.conceptosjuridicos.com/mx/razon-social/",name:"RazonSocial"},{placeholder:"Nombre comercial",text:"El nombre comercial es aquel que sirve para que los consumidores y el p\xfablico general conozca a una empresa, mientras que la raz\xf3n social se utiliza para identificar de forma legal y oficial a una empresa.",link:"https://www.conceptosjuridicos.com/mx/razon-social/",name:"NombreComercial"},{placeholder:"Regimen Fiscal",text:"Un r\xe9gimen fiscal es el conjunto de leyes y normas que rigen la situaci\xf3n tributaria de personas f\xedsicas y personas morales al momento de registrarse en el SAT (Servicio de Administraci\xf3n Tributaria).",link:"https://www.sat.gob.mx/consulta/09788/emprendedor-conoce-los-regimenes-fiscales",name:"RegimenFiscal"}],B=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"container mb-5",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("h1",{className:"text-center my-5 text-info",children:"Informacion Fiscal"}),Object(m.jsxs)(h,{title:"Informacion general",clases:"col-lg-6",children:[L.map((function(e){return Object(m.jsx)(z,{icon:!0,placeholder:e.placeholder,text:e.text,link:e.link})})),Object(m.jsx)(k,{title:"Nacionalidad"}),Object(m.jsx)(f,{title:"Fecha de constitucion"}),Object(m.jsx)(z,{placeholder:"Industria"})]}),Object(m.jsxs)(h,{title:"Documentacion",clases:"col-lg-5",children:[Object(m.jsx)(z,{placeholder:"RFC",icon:!0,text:"Obtener mi RFC",link:""}),Object(m.jsx)(w,{title:"Comprobante de domicilio"})]})]}),Object(m.jsxs)("div",{className:"row mt-5",children:[Object(m.jsxs)(h,{title:"Cuenta bancaria",clases:"col-lg-6 sm-cards",children:[Object(m.jsx)(z,{placeholder:"Ingresa tu cuenta CLABE",type:"num",maxLength:"16"}),Object(m.jsx)(O,{options:["Bancomer","Santander"],title:"Seleccione su banco"})]}),Object(m.jsxs)(h,{title:"Datos de contacto",clases:"col-lg-5 sm-cards",children:[Object(m.jsx)(z,{placeholder:"Telefono",type:"tel"}),Object(m.jsx)(z,{placeholder:"Correo Electronico",type:"mail"})]})]})]})})};var I=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(r.a,{children:Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{exact:!0,path:"/kred-feed",children:Object(m.jsx)(x,{children:Object(m.jsx)(u,{})})}),Object(m.jsx)(i.a,{exact:!0,path:"/perfil/representante-legal",children:Object(m.jsx)(x,{children:Object(m.jsx)(R,{})})}),Object(m.jsx)(i.a,{exact:!0,path:"/perfil/informacion-fiscal",children:Object(m.jsx)(x,{children:Object(m.jsx)(B,{})})})]})})})};l.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.ce60e65a.chunk.js.map