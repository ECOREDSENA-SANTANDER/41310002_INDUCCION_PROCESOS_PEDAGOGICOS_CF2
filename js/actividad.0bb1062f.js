(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actividad"],{"0ec1":function(e,t,a){e.exports=a.p+"img/img1.483cb4ff.png"},"159b":function(e,t,a){var n=a("da84"),o=a("fdbc"),r=a("17c2"),s=a("9112");for(var i in o){var c=n[i],d=c&&c.prototype;if(d&&d.forEach!==r)try{s(d,"forEach",r)}catch(u){d.forEach=r}}},"17c2":function(e,t,a){"use strict";var n=a("b727").forEach,o=a("a640"),r=o("forEach");e.exports=r?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},"1d95":function(e,t,a){e.exports=a.p+"img/img3.29ec0c35.png"},"2ae4":function(e,t,a){e.exports=a.p+"img/img2.56ef52d5.png"},"2cc0":function(e,t,a){},"32bd":function(e,t,a){"use strict";a("4afc")},4298:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"curso-main-container pb-3"},[a("BannerInterno",{attrs:{icono:"far fa-question-circle",titulo:"Actividad didáctica"}}),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[a("div",{attrs:{id:"Actividad"}},[a("Actividad",{attrs:{cuestionario:e.cuestionario}})],1)])],1)},o=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tarjeta--blanca"},[a("div",{staticClass:"row align-items-center mb-4"},[e._m(0),a("div",{staticClass:"col "},[a("h2",{staticClass:"titulo-tercero mb-0"},[e._v(" "+e._s(e.cuestionario.titulo)+" ")]),a("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.cuestionario.introduccion)}})])]),a("div",{staticClass:"tarjeta tarjeta--lightest-gray p-4 p-md-5"},[e.respuestas.length===e.preguntas.length?a("ActividadResultados",{attrs:{respuestas:e.respuestas}}):a("ActividadPregunta",{attrs:{pregunta:e.preguntaSelected},on:{respuestaSelected:e.onRrespuestaSelected}})],1),a("ActividadBarraAvance",{staticClass:"mx-4 mx-md-5",attrs:{"pregunta-index":e.preguntaSelectedIdx,"preguntas-count":e.preguntas.length,"respuestas-length":e.respuestas.length,"continuar-disabled":e.continuarDisabled},on:{continuar:e.onContinuar,reiniciar:e.onReiniciar}})],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-auto"},[n("img",{attrs:{src:a("8da0"),alt:""}})])}],i=a("5530"),c=(a("d81d"),a("c740"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",{staticClass:"mb-4 pb-4",domProps:{innerHTML:e._s(e.pregunta.texto)}}),a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"d-none d-md-block col-5"},[a("img",{attrs:{src:e.pregunta.imagen,alt:""}})]),a("div",{staticClass:"col"},e._l(e.opcionesComputed,(function(t,n){return a("div",{key:t.id,staticClass:"tarjeta tarjeta--azul tarjeta-respuesta p-4",class:{"mb-3":n!==e.opcionesComputed.length-1,"tarjeta-respuesta--correcta":t.correcta,"tarjeta-respuesta--incorrecta":t.incorrecta,"tarjeta-respuesta--disabled":t.disabled},on:{click:function(a){return e.onRespuestaSelected(t)}}},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"tarjeta-respuesta__icon",class:[e.respuestaSelected.id===t.id?t.esCorrecta?"tarjeta-respuesta__icon--correcto":"tarjeta-respuesta__icon--incorrecto":""]})]),a("div",{staticClass:"col",domProps:{innerHTML:e._s(t.texto)}})])])})),0)]),e.respuestaSelected.id?[a("hr"),e.respuestaSelected.esCorrecta?a("div",{staticClass:"pt-2"},[a("span",{staticClass:"text-success h3 ma-0"},[e._v("¡Correcto!")]),e._v(" "+e._s(e.pregunta.mensaje_correcto)+" ")]):a("div",{staticClass:"pt-2"},[a("span",{staticClass:"text-danger h3 ma-0"},[e._v("¡Incorrecto!")]),e._v(" "+e._s(e.pregunta.mensaje_incorrecto)+" ")])]:e._e()],2)}),d=[],u={name:"ActividadPregunta",props:{pregunta:{type:Object,required:!0}},data:function(){return{respuestaSelected:{}}},computed:{opcionesComputed:function(){if(!this.pregunta.opciones.length)return[];var e=this.respuestaSelected.id;return this.pregunta.opciones.map((function(t){return Object(i["a"])(Object(i["a"])({},t),{},{correcta:e===t.id&&t.esCorrecta,incorrecta:e===t.id&&!t.esCorrecta,disabled:!!e})}))}},watch:{pregunta:function(){this.respuestaSelected={}}},methods:{onRespuestaSelected:function(e){this.respuestaSelected=e,this.$emit("respuestaSelected",e.esCorrecta)}}},l=u,p=(a("32bd"),a("2877")),f=Object(p["a"])(l,c,d,!1,null,"0d0c9f9a",null),m=f.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tarjeta-avance"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"d-none d-md-block col"},[a("div",{staticClass:"tarjeta-avance__barra-container ms-4"},[a("div",{staticClass:"tarjeta-avance__barra",style:{width:e.avanceWidth}})])]),a("div",{staticClass:"col col-md-auto text-center"},[e._v(" Pregunta "+e._s(e.preguntaIndex+1)+" de "+e._s(e.preguntasCount)+" ")]),a("div",{staticClass:"col-auto"},[e.respuestasLength===e.preguntasCount?a("button",{staticClass:"boton btn-lg boton--b py-3 px-5",on:{click:function(t){return e.$emit("reiniciar")}}},[a("span",[e._v("Reiniciar")])]):a("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(t){return e.$emit("continuar")}}},[a("span",[e._v("Continuar")]),a("i",{staticClass:"fas fa-arrow-right"})])])])])},g=[],b=(a("a9e3"),{name:"ActividadBarraAvance",props:{preguntaIndex:{type:Number,required:!0},preguntasCount:{type:Number,required:!0},continuarDisabled:{type:Boolean,default:!1},respuestasLength:{type:Number,default:0}},computed:{avanceWidth:function(){return"".concat((this.preguntaIndex+1)/this.preguntasCount*100,"%")}}}),h=b,j=(a("a631"),Object(p["a"])(h,v,g,!1,null,"7a0121ad",null)),_=j.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row align-items-center justify-content-around"},[n("div",{staticClass:"col-5"},[(e.aprobado,n("img",{attrs:{src:a("a46c"),alt:""}}))]),n("div",{staticClass:"col-4"},[n("div",{staticClass:"d-flex align-items-center flex-column"},[n("div",{staticClass:"resultados__icono mb-4",class:["resultados__icono--"+(e.aprobado?"correcto":"incorrecto")]}),e.aprobado?[n("h3",[e._v("¡BUEN TRABAJO!")]),n("p",{staticClass:"mb-0 text-center"},[e._v(" Se evidencia un buen manejo de los conceptos estudiados en esta unidad. ")])]:[n("h3",[e._v("VUELVE A INTENTARLO")]),n("p",{staticClass:"mb-0 text-center"},[e._v(" Se recomienda revisar el contenido de la unidad para clarificar conceptos. ")])],n("hr",{staticClass:"w-100"}),n("p",{staticClass:"mb-0"},[e._v("Aciertos: "+e._s(e.rtas.correctas)+" / "+e._s(e.rtas.total))])],2)])])},x=[],y=(a("159b"),{name:"ActividadResultados",props:{respuestas:{type:Array,required:!0}},computed:{rtas:function(){var e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach((function(t){t.esCorrecta?e.correctas++:e.incorrectas++})),e.porcentaje=e.correctas/e.total*100,e},aprobado:function(){return this.rtas.porcentaje>=70}}}),A=y,S=(a("aeef"),Object(p["a"])(A,C,x,!1,null,"360ec089",null)),E=S.exports,O={name:"Actividad",components:{ActividadPregunta:m,ActividadBarraAvance:_,ActividadResultados:E},props:{cuestionario:{type:Object,required:!0},mezclarRespuestas:{type:Boolean,default:!1}},data:function(){return{intentos:0,preguntaSelectedIdx:0,respuestaActual:{},respuestas:[],continuarDisabled:!0}},computed:{preguntas:function(){var e=this,t=this.cuestionario,a=t.preguntas,n=t.barajarPreguntas;if(!a)return[];var o=n?this.shuffle(a):a;return o.map((function(t){return Object(i["a"])(Object(i["a"])({},t),{},{opciones:t.barajarRespuestas?e.shuffle(t.opciones):t.opciones,intentos:e.intentos})}))},preguntaSelected:function(){return this.preguntas[this.preguntaSelectedIdx]}},methods:{shuffle:function(e){var t,a=e.length;while(a>0){t=Math.floor(Math.random()*a),a--;var n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e},onRrespuestaSelected:function(e){this.continuarDisabled=!1,this.respuestaActual={id:this.preguntaSelected.id,esCorrecta:e}},onContinuar:function(){var e=this;if(this.continuarDisabled=!0,this.respuestaActual.id){var t=this.respuestas.findIndex((function(t){return t.id===e.preguntaSelected.id}));-1===t?this.respuestas.push(this.respuestaActual):this.respuestas[t]=this.respuestaActual}this.preguntaSelectedIdx<this.preguntas.length-1&&(this.preguntaSelectedIdx+=1)},onReiniciar:function(){this.preguntaSelectedIdx=0,this.respuestas=[],this.respuestaActual={},this.intentos+=1}}},R=O,I=(a("f212"),Object(p["a"])(R,r,s,!1,null,"1f7092aa",null)),N=I.exports,w={name:"ActividadDidactica",components:{Actividad:N},data:function(){return{cuestionario:{tema:"Ruta activa de aprendizaje y evaluación",titulo:"Falso o verdadero",introduccion:"Evaluar la comprensión de los fundamentos pedagógicos, estrategias de aprendizaje y enfoques evaluativos, con el fin de fortalecer el conocimiento integral de los estudiantes.",barajarPreguntas:!1,preguntas:[{id:1,texto:"El aprendizaje autónomo está relacionado con los estilos y estrategias de enseñanza de los instructores.",imagen:a("0ec1"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!1},{id:"b",texto:"Falso",esCorrecta:!0}],mensaje_correcto:"¡Felicitaciones! Has demostrado un gran dominio de los fundamentos pedagógicos y evaluativos. ¡Sigue fortaleciendo tu aprendizaje!",mensaje_incorrecto:"Respuesta incorrecta, revise nuevamente el contenido del componente formativo. Está relacionado con los estilos y estrategias de aprendizaje de los estudiantes."},{id:2,texto:"El aprendizaje significativo promueve la integración de facultades cognitivas, emocionales y físicas del educando.",imagen:a("2ae4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!0},{id:"b",texto:"Falso",esCorrecta:!1}],mensaje_correcto:"¡Felicitaciones! Has demostrado un gran dominio de los fundamentos pedagógicos y evaluativos. ¡Sigue fortaleciendo tu aprendizaje!",mensaje_incorrecto:"Respuesta incorrecta, revise nuevamente el contenido del componente formativo."},{id:3,texto:"La formación para el trabajo en el SENA está orientada únicamente a la inserción laboral en el sector productivo.",imagen:a("1d95"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!1},{id:"b",texto:"Falso",esCorrecta:!0}],mensaje_correcto:"¡Felicitaciones! Has demostrado un gran dominio de los fundamentos pedagógicos y evaluativos. ¡Sigue fortaleciendo tu aprendizaje!",mensaje_incorrecto:"Respuesta incorrecta, revise nuevamente el contenido del componente formativo. También fomenta la creación de emprendimientos y proyectos sostenibles."},{id:4,texto:"El programa de emprendimiento del SENA incluye el acceso a financiamiento mediante el Fondo Emprender.",imagen:a("6f25"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!0},{id:"b",texto:"Falso",esCorrecta:!1}],mensaje_correcto:"¡Felicitaciones! Has demostrado un gran dominio de los fundamentos pedagógicos y evaluativos. ¡Sigue fortaleciendo tu aprendizaje!",mensaje_incorrecto:"Respuesta incorrecta, revise nuevamente el contenido del componente formativo."},{id:5,texto:"La didáctica se refiere exclusivamente a juegos didácticos que se utilizan en el aula.",imagen:a("0ec1"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!1},{id:"b",texto:"Falso",esCorrecta:!0}],mensaje_correcto:"¡Felicitaciones! Has demostrado un gran dominio de los fundamentos pedagógicos y evaluativos. ¡Sigue fortaleciendo tu aprendizaje!",mensaje_incorrecto:"Respuesta incorrecta, revise nuevamente el contenido del componente formativo. La didáctica abarca una disciplina más amplia relacionada con los métodos y técnicas aplicados en el aula."},{id:6,texto:"El currículum no se limita a un plan de estudios, sino que abarca un marco general que guía el proceso formativo.",imagen:a("2ae4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!0},{id:"b",texto:"Falso",esCorrecta:!1}],mensaje_correcto:"¡Felicitaciones! Has demostrado un gran dominio de los fundamentos pedagógicos y evaluativos. ¡Sigue fortaleciendo tu aprendizaje!",mensaje_incorrecto:"Respuesta incorrecta, revise nuevamente el contenido del componente formativo."},{id:7,texto:"La evaluación en el SENA es una herramienta estática que se aplica solo al final del proceso formativo.",imagen:a("1d95"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!1},{id:"b",texto:"Falso",esCorrecta:!0}],mensaje_correcto:"¡Felicitaciones! Has demostrado un gran dominio de los fundamentos pedagógicos y evaluativos. ¡Sigue fortaleciendo tu aprendizaje!",mensaje_incorrecto:"Respuesta incorrecta, revise nuevamente el contenido del componente formativo. Es un proceso continuo y reflexivo que se da durante todo el ciclo formativo."},{id:8,texto:"El aprendizaje colaborativo en el SENA promueve la cooperación y el razonamiento crítico.",imagen:a("6f25"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!0},{id:"b",texto:"Falso",esCorrecta:!1}],mensaje_correcto:"¡Felicitaciones! Has demostrado un gran dominio de los fundamentos pedagógicos y evaluativos. ¡Sigue fortaleciendo tu aprendizaje!",mensaje_incorrecto:"Respuesta incorrecta, revise nuevamente el contenido del componente formativo."},{id:9,texto:"La heteroevaluación es una forma en que los estudiantes evalúan su propio desempeño.",imagen:a("0ec1"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!1},{id:"b",texto:"Falso",esCorrecta:!0}],mensaje_correcto:"¡Felicitaciones! Has demostrado un gran dominio de los fundamentos pedagógicos y evaluativos. ¡Sigue fortaleciendo tu aprendizaje!",mensaje_incorrecto:"Respuesta incorrecta, revise nuevamente el contenido del componente formativo. La heteroevaluación es cuando el docente evalúa a los estudiantes."},{id:10,texto:"La resolución de problemas en el SENA se aborda mediante técnicas activas como el estudio de caso y el aprendizaje basado en problemas (ABP).",imagen:a("2ae4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!0},{id:"b",texto:"Falso",esCorrecta:!1}],mensaje_correcto:"¡Felicitaciones! Has demostrado un gran dominio de los fundamentos pedagógicos y evaluativos. ¡Sigue fortaleciendo tu aprendizaje!",mensaje_incorrecto:"Respuesta incorrecta, revise nuevamente el contenido del componente formativo."}],mensaje_final_aprobado:"¡Excelente! Ha superado la actividad.",mensaje_final_reprobado:"Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica."}}},computed:{},methods:{}},F=w,P=Object(p["a"])(F,n,o,!1,null,null,null);t["default"]=P.exports},"4afc":function(e,t,a){},5530:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("b64b"),a("a4d3"),a("4de4"),a("e439"),a("159b"),a("dbb4");function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},5585:function(e,t,a){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var n=a("1d80"),o=a("5899"),r="["+o+"]",s=RegExp("^"+r+r+"*"),i=RegExp(r+r+"*$"),c=function(e){return function(t){var a=String(n(t));return 1&e&&(a=a.replace(s,"")),2&e&&(a=a.replace(i,"")),a}};e.exports={start:c(1),end:c(2),trim:c(3)}},"6f25":function(e,t,a){e.exports=a.p+"img/img4.89ce6805.png"},7156:function(e,t,a){var n=a("861d"),o=a("d2bb");e.exports=function(e,t,a){var r,s;return o&&"function"==typeof(r=t.constructor)&&r!==a&&n(s=r.prototype)&&s!==a.prototype&&o(e,s),e}},"8da0":function(e,t,a){e.exports=a.p+"img/icon-actividad.3d896e1e.svg"},a46c:function(e,t,a){e.exports=a.p+"img/cuestionario-resultado.a5584db8.svg"},a631:function(e,t,a){"use strict";a("d228")},a640:function(e,t,a){"use strict";var n=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&n((function(){a.call(null,t||function(){throw 1},1)}))}},a9e3:function(e,t,a){"use strict";var n=a("83ab"),o=a("da84"),r=a("94ca"),s=a("6eeb"),i=a("5135"),c=a("c6b6"),d=a("7156"),u=a("c04e"),l=a("d039"),p=a("7c73"),f=a("241c").f,m=a("06cf").f,v=a("9bf2").f,g=a("58a8").trim,b="Number",h=o[b],j=h.prototype,_=c(p(j))==b,C=function(e){var t,a,n,o,r,s,i,c,d=u(e,!1);if("string"==typeof d&&d.length>2)if(d=g(d),t=d.charCodeAt(0),43===t||45===t){if(a=d.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(r=d.slice(2),s=r.length,i=0;i<s;i++)if(c=r.charCodeAt(i),c<48||c>o)return NaN;return parseInt(r,n)}return+d};if(r(b,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var x,y=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof y&&(_?l((function(){j.valueOf.call(a)})):c(a)!=b)?d(new h(C(t)),a,y):C(t)},A=n?f(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;A.length>S;S++)i(h,x=A[S])&&!i(y,x)&&v(y,x,m(h,x));y.prototype=j,j.constructor=y,s(o,b,y)}},aeef:function(e,t,a){"use strict";a("5585")},b64b:function(e,t,a){var n=a("23e7"),o=a("7b0b"),r=a("df75"),s=a("d039"),i=s((function(){r(1)}));n({target:"Object",stat:!0,forced:i},{keys:function(e){return r(o(e))}})},c740:function(e,t,a){"use strict";var n=a("23e7"),o=a("b727").findIndex,r=a("44d2"),s="findIndex",i=!0;s in[]&&Array(1)[s]((function(){i=!1})),n({target:"Array",proto:!0,forced:i},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r(s)},d228:function(e,t,a){},d81d:function(e,t,a){"use strict";var n=a("23e7"),o=a("b727").map,r=a("1dde"),s=r("map");n({target:"Array",proto:!0,forced:!s},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(e,t,a){var n=a("23e7"),o=a("83ab"),r=a("56ef"),s=a("fc6a"),i=a("06cf"),c=a("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,a,n=s(e),o=i.f,d=r(n),u={},l=0;while(d.length>l)a=o(n,t=d[l++]),void 0!==a&&c(u,t,a);return u}})},e439:function(e,t,a){var n=a("23e7"),o=a("d039"),r=a("fc6a"),s=a("06cf").f,i=a("83ab"),c=o((function(){s(1)})),d=!i||c;n({target:"Object",stat:!0,forced:d,sham:!i},{getOwnPropertyDescriptor:function(e,t){return s(r(e),t)}})},f212:function(e,t,a){"use strict";a("2cc0")}}]);
//# sourceMappingURL=actividad.0bb1062f.js.map