(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{46:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(0),c=a.n(i),r=a(20),o=a.n(r),s=(a(46),a(4)),l=a(3),d={hidden:{scale:0},showing:{scale:1,transition:{duration:.5,staggerChildren:!0}},exit:{scale:0,transition:{duration:.5}}},u={hidden:{x:"100vw",y:0},showing:{x:0,y:0,transition:{delay:.5,duration:.5}},exit:{x:"-100vw",y:0,transition:{duration:.5,ease:"easeInOut"}}},b=a(17),j=a(10),h=a.n(j),m=a(14),x=a(5),g=a(13),p=a(23),O=a.n(p),f=function(e){return function(){var t=Object(m.a)(h.a.mark((function t(a){var n,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("/api/getdata/country/".concat(e));case 2:n=t.sent,i=n.data,a({type:"COUNTRY_DATA_REQUEST",payload:i});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(m.a)(h.a.mark((function t(a){var n,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("/api/getdata/continent/".concat(e));case 2:n=t.sent,i=n.data,a({type:"CONTINENT_DATA_REQUEST",payload:i});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(){return function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({type:"CLEAR_DATA_FROM_STATE"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","British Virgin Islands","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands","Central African Republic","Chad","Chile","China","China, Hong Kong Special Administrative Region","China, Macao Special Administrative Region","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Croatia","Cuba","Cura\xe7ao","Cyprus","Czechia","C\xf4te d\u2019Ivoire","Democratic People's Republic of Korea","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kosovo[1]","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","North Macedonia","Northern Mariana Islands (Commonwealth of the)","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn Islands","Poland","Portugal","Puerto Rico","Qatar","Republic of Korea","Republic of Moldova","Romania","Russian Federation","Rwanda","R\xe9union","Saint Barth\xe9lemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Sark","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","State of Palestine","Sudan","Suriname","Svalbard and Jan Mayen Islands","Sweden","Switzerland","Syrian Arab Republic","Tajikistan","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","The United Kingdom","United Republic of Tanzania","United States Minor Outlying Islands","United States Virgin Islands","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe","Sint Maarten"],C=["Plot All Stats","New Cases Reported/Day","Total Cases Reported","New Deaths Reported/Day","Total Deaths Reported"],S=["Line Plot","Bar Plot"],N={"New Cases Reported/Day":"new_cases","Total Cases Reported":"total_cases","New Deaths Reported/Day":"new_deaths","Total Deaths Reported":"total_deaths","Line Plot":"line","Bar Plot":"bar","Plot All Stats":"all"},T=["Asia","Africa","North America","South America","Europe","Oceania"],k={new_deaths:{bg:"rgb(51, 20, 39)",text:"rgb(253, 7, 58)",heading:"Death Statistics"},new_cases:{bg:"rgb(21,29,51)",text:"rgb(0, 123, 253)",heading:"Case Statistics"},total_cases:{bg:"rgb(24, 40, 41)",text:"rgb(40, 166, 69)",heading:"Total Cases Reported"},total_deaths:{bg:"rgb(28, 28, 43)",text:"rgb(200, 200, 200)",heading:"Total Deaths Reported"}},A=(a(69),function(e){typeof e!==String&&(e=String(e));for(var t="",a=0,n=e.length-1;n>=0;n--)a++,t+=e[n],a%3===0&&0!==n&&(t+=",");for(var i="",c=t.length-1;c>=0;c--)i+=t[c];return i}),D=function(e){var t,a=e.dataType,i=e.data,c=e.c,r={backgroundColor:k[a].bg,color:k[a].text,width:"40%",display:"flex",flexDirection:"column",height:"400px",borderRadius:"10px",marginRight:"2rem",boxShadow:"0 0 1rem ".concat(k[a].text)};return"new_cases"===a?t=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsx)("div",{children:Object(n.jsx)("strong",{children:"First Case reported on"})}),Object(n.jsx)("div",{children:i.first_new_cases_date.replace("00:00:00 GMT","")})]}),Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsx)("div",{children:Object(n.jsx)("strong",{children:"Maximum Cases Reported in a Day"})}),Object(n.jsx)("div",{children:A(i.maximum)})]}),Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsx)("div",{children:Object(n.jsx)("strong",{children:"Maximum Cases in a Day Reported on"})}),Object(n.jsx)("div",{children:i.max_new_cases_date.replace("00:00:00 GMT","")})]}),Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsx)("div",{children:Object(n.jsx)("strong",{children:"Total Cases"})}),Object(n.jsx)("div",{children:A(i.total)})]})]}):"new_deaths"===a&&(t=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsx)("div",{children:Object(n.jsx)("strong",{children:"First Death reported on"})}),Object(n.jsx)("div",{children:i.first_new_deaths_date.replace("00:00:00 GMT","")})]}),Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsx)("div",{children:Object(n.jsx)("strong",{children:"Maximum Deaths Reported in a Day"})}),Object(n.jsx)("div",{children:A(i.maximum)})]}),Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsx)("div",{children:Object(n.jsx)("strong",{children:"Maximum Deaths in a Day Reported on"})}),Object(n.jsx)("div",{children:i.max_new_deaths_date.replace("00:00:00 GMT","")})]}),Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsx)("div",{children:Object(n.jsx)("strong",{children:"Cumulative Deaths"})}),Object(n.jsx)("div",{children:A(i.total)})]})]})),Object(n.jsxs)(l.b.div,{variants:d,initial:"hidden",animate:"showing",style:r,className:"col-10 col-md-9 col-lg-5 p-5 mb-4",children:["global"===c?Object(n.jsxs)("h3",{className:"mb-3",children:["Global ",k[a].heading]}):Object(n.jsxs)("h3",{className:"mb-3",children:[k[a].heading," for ",c]}),Object(n.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"space-between",justifyContent:"space-between"},children:t})]})},R=function(e){var t=e.isCountry,a=t?w[0]:T[0],c=Object(i.useState)(""),r=Object(x.a)(c,2),o=r[0],s=r[1],u=Object(i.useState)(""),j=Object(x.a)(u,2),p=j[0],O=j[1],k=Object(i.useState)(""),A=Object(x.a)(k,2),R=A[0],M=A[1],_=Object(i.useState)([]),I=Object(x.a)(_,2),B=I[0],E=I[1],P=Object(i.useState)(a),G=Object(x.a)(P,2),L=G[0],F=G[1],U=Object(i.useState)(C[0]),z=Object(x.a)(U,2),H=z[0],K=z[1],J=Object(i.useState)(S[0]),V=Object(x.a)(J,2),Q=V[0],W=V[1],q=Object(i.useState)(!1),Y=Object(x.a)(q,2),Z=Y[0],X=Y[1],$=Object(i.useState)(!1),ee=Object(x.a)($,2),te=ee[0],ae=ee[1],ne=window.innerWidth,ie=Object(g.b)(),ce=Object(g.c)((function(e){return e.data})),re=function(){var e=Object(m.a)(h.a.mark((function e(a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ie(y()),X(!1),a.preventDefault(),B.length>1&&"all"===N[H]?console.log("Error"):(s(L.toLowerCase()),O(H),M(Q),t?0===B.length?ie(f(L.toLowerCase())):B.map((function(e){return ie(f(e.toLowerCase()))})):0===B.length?ie(v(L.toLowerCase())):B.map((function(e){return ie(v(e.toLowerCase()))})),setTimeout((function(){X(!0)}),700));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(e){F(e.target.value),"all"!==N[H]&&te&&E([].concat(Object(b.a)(B),[e.target.value]))},se=function(e){E(B.filter((function(t){return t!==e.target.innerText})))},le={width:.95*ne},de=function(){for(var e="",t=1;t<B.length-1;t++)e+=B[t]+",";return B[0]+","+e+B[B.length-1]};return Object(i.useEffect)((function(){console.log("country form use efffect called"),ie(y())}),[ie]),Object(i.useEffect)((function(){return function(){console.log("componnet will unmount"),ie(y())}}),[]),Object(n.jsxs)("div",{style:{width:"100%"},children:[Object(n.jsxs)("form",{onSubmit:re,className:"mb-5 container",children:[Object(n.jsxs)("div",{className:"form-row",children:[t?Object(n.jsxs)("div",{className:"form-group col-md-5",children:[Object(n.jsx)("label",{htmlFor:"country",children:"Select Country"}),Object(n.jsx)("select",{className:"form-control",onChange:oe,style:{backgroundColor:"transparent",color:"white"},children:w.map((function(e,t){return Object(n.jsx)("option",{style:{backgroundColor:"rgb(14, 22, 29)",color:"white"},children:e},t)}))})]}):Object(n.jsxs)("div",{className:"form-group col-md-5",children:[Object(n.jsx)("label",{htmlFor:"country",children:"Select Continent"}),Object(n.jsx)("select",{className:"form-control",onChange:oe,style:{backgroundColor:"transparent",color:"white"},children:T.map((function(e,t){return Object(n.jsx)("option",{style:{backgroundColor:"rgb(14, 22, 29)",color:"white"},children:e},t)}))})]}),Object(n.jsxs)("div",{className:"form-group col-md-3",children:[Object(n.jsx)("label",{htmlFor:"country",children:"Select Plot"}),Object(n.jsx)("select",{className:"form-control",onChange:function(e){return K(e.target.value)},style:{backgroundColor:"transparent",color:"white"},children:C.map((function(e,t){return Object(n.jsx)("option",{style:{backgroundColor:"rgb(14, 22, 29)",color:"white"},children:e},t)}))})]}),Object(n.jsxs)("div",{className:"form-group col-md-3",children:[Object(n.jsx)("label",{htmlFor:"country",children:"Select Plot Type"}),Object(n.jsx)("select",{className:"form-control",onChange:function(e){return W(e.target.value)},style:{backgroundColor:"transparent",color:"white"},children:S.map((function(e,t){return Object(n.jsx)("option",{style:{backgroundColor:"rgb(14, 22, 29)",color:"white"},children:e},t)}))})]})]}),Object(n.jsx)("div",{className:"form-row",children:Object(n.jsxs)("div",{className:"col-md-2 col-10 form-group ml-4",children:[Object(n.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1",onClick:function(){return ae(!te)}}),Object(n.jsxs)("label",{className:"form-check-label",htmlFor:"exampleCheck1",children:["Compare ",t?"Countries":"Continents"]})]})}),te&&"Plot All Stats"===H&&Object(n.jsx)("div",{className:"row ml-1",children:Object(n.jsx)("p",{style:{color:"#d63031"},children:"Cannot compare all stats. Please choose a single statistic to compare"})}),Object(n.jsx)("div",{className:"form-row",children:Object(n.jsx)("button",{type:"submit",className:"btn btn-outline-primary col-md-2",children:"Plot Data"})})]}),Object(n.jsx)("div",{className:"container",style:{display:"flex",justifyContent:"flex-start"},children:B.length>0&&B.map((function(e,t){return Object(n.jsx)("p",{id:"selected-to-compare",style:{color:"rgb(51, 161, 254)",backgroundColor:"rgba(51, 161, 254, 0.2)",borderRadius:"5px",padding:"0.5rem",marginRight:"0.5rem"},onClick:se,children:e},t)}))}),Object(n.jsx)(l.a,{children:Object(n.jsxs)(l.b.div,{variants:d,initial:"hidden",animate:"showing",exit:"exit",style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"3rem"},children:["all"===N[p]&&Object(n.jsxs)(l.b.h1,{variants:d,initial:"hidden",animate:"showing",exit:"exit",style:{color:"white",margin:"2rem auto"},children:["Stats for ",o.toUpperCase()]}),Z?t?B.length>1?Object(n.jsx)(l.b.img,{variants:d,initial:"hidden",animate:"showing",exit:"exit",src:"api/plotdata/countries/".concat(N[p],"/").concat(N[R],"?countries=").concat(de()),alt:"".concat(o,"-").concat(N[p],"-").concat(N[R]),style:le}):"all"===N[p]?Object(n.jsx)(l.b.img,{variants:d,initial:"hidden",animate:"showing",exit:"exit",src:"api/plotdata/country/".concat(o,"/").concat(N[p],"/").concat(N[R]),alt:"".concat(o,"-").concat(N[p],"-").concat(N[R]),style:le}):Object(n.jsx)(l.b.img,{variants:d,initial:"hidden",animate:"showing",exit:"exit",src:"api/plotdata/country/".concat(o,"/").concat(N[p],"/").concat(N[R]),alt:"".concat(o,"-").concat(N[p],"-").concat(N[R])}):B.length>1?Object(n.jsx)(l.b.img,{variants:d,initial:"hidden",animate:"showing",exit:"exit",src:"api/plotdata/continents/".concat(N[p],"/").concat(N[R],"?conts=").concat(de()),alt:"".concat(o,"-").concat(N[p],"-").concat(N[R]),style:le}):"all"===N[p]?Object(n.jsx)(l.b.img,{variants:d,initial:"hidden",animate:"showing",exit:"exit",src:"api/plotdata/continent/".concat(o,"/").concat(N[p],"/").concat(N[R]),alt:"".concat(o,"-").concat(N[p],"-").concat(N[R]),style:le}):Object(n.jsx)(l.b.img,{variants:d,initial:"hidden",animate:"showing",exit:"exit",src:"api/plotdata/continent/".concat(o,"/").concat(N[p],"/").concat(N[R]),alt:"".concat(o,"-").concat(N[p],"-").concat(N[R])}):null]})}),Object(n.jsx)("div",{className:"container",children:ce&&Object(n.jsx)("div",{className:"row",style:{display:"flex",justifyContent:"center"},children:ce.map((function(e,t){return["new_cases","new_deaths"].map((function(t,a){var i=Object.keys(e)[0];return Object(n.jsx)(D,{dataType:t,data:e[i][t],c:i.toUpperCase()},a)}))}))})})]})},M=function(){return Object(n.jsx)(l.b.div,{style:{width:"100%",overflow:"hidden",minHeight:"67vh"},variants:u,initial:"hidden",animate:"showing",exit:"exit",children:Object(n.jsx)(R,{isCountry:!0})})},_=function(){var e=Object(g.b)(),t=Object(g.c)((function(e){return e.data}));Object(i.useEffect)((function(){e(y())}),[e]);var a=Object(i.useState)(""),c=Object(x.a)(a,2),r=c[0],o=c[1],s=Object(i.useState)(""),u=Object(x.a)(s,2),b=u[0],j=u[1],p=Object(i.useState)(C[0]),f=Object(x.a)(p,2),v=f[0],w=f[1],T=Object(i.useState)(S[0]),k=Object(x.a)(T,2),A=k[0],R=k[1],M=Object(i.useState)(!1),_=Object(x.a)(M,2),I=_[0],B=_[1],E={width:.95*window.innerWidth};return Object(n.jsxs)("div",{style:{width:"100%"},children:[Object(n.jsxs)("form",{onSubmit:function(t){B(!1),e(y()),t.preventDefault(),o(v),j(A),e(function(){var e=Object(m.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/getdata/global/");case 2:a=e.sent,n=a.data,t({type:"GLOBAL_DATA_REQUEST",payload:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),setTimeout((function(){B(!0)}),700)},className:"mb-5 container",children:[Object(n.jsxs)("div",{className:"form-row",children:[Object(n.jsxs)("div",{className:"form-group col-md-3",children:[Object(n.jsx)("label",{htmlFor:"country",children:"Select Plot"}),Object(n.jsx)("select",{className:"form-control",onChange:function(e){return w(e.target.value)},style:{backgroundColor:"transparent",color:"white"},children:C.map((function(e,t){return Object(n.jsx)("option",{style:{backgroundColor:"rgb(14, 22, 29)",color:"white"},children:e},t)}))})]}),Object(n.jsxs)("div",{className:"form-group col-md-3",children:[Object(n.jsx)("label",{htmlFor:"country",children:"Select Plot Type"}),Object(n.jsx)("select",{className:"form-control",onChange:function(e){return R(e.target.value)},style:{backgroundColor:"transparent",color:"white"},children:S.map((function(e,t){return Object(n.jsx)("option",{style:{backgroundColor:"rgb(14, 22, 29)",color:"white"},children:e},t)}))})]})]}),Object(n.jsx)("div",{className:"form-row",children:Object(n.jsx)("button",{type:"submit",className:"btn btn-outline-primary col-md-2",children:"Plot Data"})})]}),Object(n.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"3rem"},children:Object(n.jsx)(l.a,{children:I&&Object(n.jsx)(l.b.img,{variants:d,initial:"hidden",animate:"showing",exit:"exit",src:"api/plotdata/global/".concat(N[r],"/").concat(N[b]),alt:"global-".concat(N[r],"-").concat(N[b]),style:"all"===N[r]?E:{}})})}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",style:{display:"flex",justifyContent:"center"},children:t&&t.length>0&&"global"===Object.keys(t[0])[0]&&t.map((function(e){return["new_cases","new_deaths"].map((function(t,a){return Object(n.jsx)(D,{dataType:t,data:e.global[t],c:"global"},a)}))}))})})]})},I=(a(70),function(){return Object(n.jsx)(l.b.div,{style:{width:"100%",overflow:"hidden",minHeight:"67vh"},variants:u,initial:"hidden",animate:"showing",exit:"exit",children:Object(n.jsx)(_,{})})}),B=function(){return Object(n.jsx)(l.b.div,{style:{width:"100%",overflow:"hidden",minHeight:"67vh"},variants:u,initial:"hidden",animate:"showing",exit:"exit",children:Object(n.jsx)(R,{isCountry:!1})})},E=function(){var e={marginBottom:"1rem",border:"1px solid white",width:"100%",height:"53%"};return Object(n.jsx)(l.b.div,{variants:u,initial:"hidden",animate:"showing",exit:"exit",children:Object(n.jsxs)("div",{className:"container",style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(n.jsx)("img",{src:"gifs/CasesGif.gif",alt:"cases-gif",style:e}),Object(n.jsx)("img",{src:"gifs/DeathsGif.gif",alt:"deaths-gif",style:e})]})})},P=a(12),G=(a(71),Object(s.g)((function(e){var t=e.location;return Object(n.jsxs)("nav",{children:[Object(n.jsx)(P.b,{to:"/",className:"link ".concat("/"===t.pathname?"active":""),children:Object(n.jsx)("p",{children:"Home"})}),Object(n.jsx)(P.b,{to:"/country",className:"link ".concat("/country"===t.pathname?"active":""),children:Object(n.jsx)("p",{children:"Country Data"})}),Object(n.jsx)(P.b,{to:"/continent",className:"link ".concat("/continent"===t.pathname?"active":""),children:Object(n.jsx)("p",{children:"Continent Data"})}),Object(n.jsx)(P.b,{to:"/global",className:"link ".concat("/global"===t.pathname?"active":""),children:Object(n.jsx)("p",{children:"Global Data"})})]})}))),L=function(){return Object(n.jsx)("footer",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0,0,0,0.5)",marginTop:"3rem",height:"7vh"},children:Object(n.jsx)("a",{href:"https://github.com/Johan-Liebert1/Covid-19_DataAnalysis",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:Object(n.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})})})})};var F=function(){var e=Object(s.f)();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(G,{}),Object(n.jsx)(l.a,{children:Object(n.jsxs)(s.c,{location:e,children:[Object(n.jsx)(s.a,{exact:!0,path:"/",render:function(){return Object(n.jsx)(E,{})}}),Object(n.jsx)(s.a,{exact:!0,path:"/country",render:function(){return Object(n.jsx)(M,{})}}),Object(n.jsx)(s.a,{exact:!0,path:"/global",render:function(){return Object(n.jsx)(I,{})}}),Object(n.jsx)(s.a,{exact:!0,path:"/continent",render:function(){return Object(n.jsx)(B,{})}})]},e.key)}),Object(n.jsx)(L,{})]})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,75)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))},z=a(16),H=a(39),K=a(40),J=Object(z.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COUNTRY_DATA_REQUEST":case"CONTINENT_DATA_REQUEST":case"GLOBAL_DATA_REQUEST":return{data:[].concat(Object(b.a)(e.data),[t.payload])};case"CLEAR_DATA_FROM_STATE":return{data:[]};default:return e}}),{data:[]},Object(K.composeWithDevTools)(Object(z.applyMiddleware)(H.a)));o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(g.a,{store:J,children:Object(n.jsx)(P.a,{children:Object(n.jsx)(F,{})})})}),document.getElementById("root")),U()}},[[73,1,2]]]);
//# sourceMappingURL=main.0152784e.chunk.js.map