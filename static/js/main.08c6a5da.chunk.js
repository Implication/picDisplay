(this.webpackJsonppicdisplay=this.webpackJsonppicdisplay||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),c=a.n(s),i=a(7),o=a.n(i),u=a(18),l=a(2),m=a(3),p=a(5),h=a(4),f=a(6),d=a(19),b=a.n(d).a.create({baseURL:"https://api.unsplash.com/",headers:{Authorization:"Client-ID OrnnyTnGcAaxttdRpCHWhWosCHB20rRqnIeWUoom4X0"}}),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={term:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.term)},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("label",{htmlFor:"",className:"ui label",style:{display:"inline"}},"Image Search"),r.a.createElement("form",{onSubmit:this.onFormSubmit,action:"",className:"ui form"},r.a.createElement("input",{type:"search",name:"search",value:this.state.term,id:"",placeholder:"Enter a search term",className:"field",onChange:function(t){return e.setState({term:t.target.value})}})))}}]),t}(n.Component),g=(a(43),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).setSpans=function(){var e=a.imageRef.current.clientHeight,t=Math.ceil(e/5+1);a.setState({spans:t})},a.imageRef=r.a.createRef(),a.state={spans:0},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},r.a.createElement("img",{ref:this.imageRef,key:this.props.id,src:this.props.src,alt:this.props.alt}))}}]),t}(r.a.Component)),y=function(e){var t=e.images.map((function(e){var t=e.description,a=e.id,n=e.urls;return r.a.createElement(g,{key:a,src:n.regular,alt:t})}));return r.a.createElement("div",{className:"image-list"},t)},O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={images:[]},a.onSearchSubmit=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("search/photos",{params:{query:t}});case 2:n=e.sent,console.log(n.data.results),a.setState({images:n.data.results});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(v,{onSubmit:this.onSearchSubmit}),r.a.createElement(y,{images:this.state.images}))}}]),t}(n.Component);c.a.render(r.a.createElement(O,null),document.querySelector("#root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.08c6a5da.chunk.js.map