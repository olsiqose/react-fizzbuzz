(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(47),i=n.n(o),s=(n(58),n(17)),l=n(18),c=n(20),u=n(19),m=n(21),d=(n(60),n(61),n(51)),p=n.n(d),f=n(52),h=n.n(f),b=n(49),g=n.n(b),v=n(48),y=n.n(v),E="https://olsiqose.com/symfony-fizzbuzz/web",w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={text:"",errors:[],results:[]},n.handleChange=function(e){n.setState({text:e.target.value})},n.renderErrors=function(){var e=n.state.errors;if(e)return e.map(function(e,t){return n.renderSingleError(e,t)})},n.sendRequest=function(){if(n.clearErrors(),n.validateInput()){var e=n.state.text;y.a.get("".concat(E,"/api/fizzbuzz?number=").concat(e)).then(function(e){return n.setState({results:e.data.fizzbuzz})}).catch(function(e){return n.setState({errors:["Uups something went wrong"]})})}},n.validateInput=function(){var e=n.state,t=e.text,r=(e.errors,!0);return""===t&&(n.setState({errors:["Fill in the input"]}),r=!1),n.isNumber(t)||(n.setState({errors:["Value should be a number"]}),r=!1),parseInt(t)<=0&&(n.setState({errors:["Value should be bigger than 0"]}),r=!1),r},n.isNumber=function(e){return!isNaN(parseInt(e))&&!isNaN(e-0)},n.clearErrors=function(){n.setState({errors:[]})},n.renderSingleError=function(e,t){return a.a.createElement("div",{key:t},a.a.createElement(g.a,{style:{fontSize:12}}),e,a.a.createElement("br",null))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){document.body.style.backgroundColor="#ededee"}},{key:"render",value:function(){return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("div",{style:{margin:"auto",width:550,padding:5}},a.a.createElement(p.a,{elevation:1,style:z.paper},a.a.createElement("div",{className:"error alert-danger",style:z.errorContainer},this.renderErrors()),a.a.createElement(h.a,{variant:"headline",component:"h3",style:z.typography},"FizzBuzz."),a.a.createElement("div",null,a.a.createElement("div",{className:"form-group"},a.a.createElement("input",{className:"form-control",type:"text",placeholder:"Please enter the number",onChange:this.handleChange,value:this.state.input,name:"name"})),a.a.createElement("div",{className:"form-group"},a.a.createElement("textarea",{className:"form-control",value:this.state.results,style:z.textAreaStyle,disabled:!0,rows:"6",cols:"50"})),a.a.createElement("div",{className:"form-group"},a.a.createElement("button",{className:"btn btn-info",style:z.submitButton,onClick:this.sendRequest},"Submit"))))))}}]),t}(r.Component),z={paper:{padding:5},errorContainer:{borderRadius:"0.2em",fontSize:14},submitButton:{width:"100%"},typography:{padding:5},textAreaStyle:{letterSpacing:2}},S=w,N=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{style:{marginTop:50}},a.a.createElement(S,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(166);i.a.render(a.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,t,n){e.exports=n(168)},58:function(e,t,n){},60:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},61:function(e,t,n){}},[[53,2,1]]]);
//# sourceMappingURL=main.4ba6c80c.chunk.js.map