(this.webpackJsonpreactpractice=this.webpackJsonpreactpractice||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),r=n.n(a),s=n(14),i=n.n(s),o=(n(25),n(26),function(){return Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{className:"text-center",children:"Employee Directory"}),Object(c.jsx)("p",{className:"text-center",children:"Click on column headers to filter by heading or use the search box to narrow your results."})]})}),l=n(3),h=n(4),d=n(15),u=n(16),j=n(19),m=n(18),b=(n(27),function(e){return Object(c.jsx)("nav",{className:"navbar navbar-light bg-light justify-content-center",children:Object(c.jsx)("form",{className:"form-inline m-2",onSubmit:e.handleFormSubmit,children:Object(c.jsx)("input",{className:"form-control",value:e.value,name:"search",onChange:e.handleInputChange,type:"search",placeholder:"Search"})})})}),p=(n(28),function(e){return Object(c.jsxs)("table",{className:"table table-striped table-sortable text-center",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Image"}),Object(c.jsx)("th",{scope:"col","data-field":"name","data-sortable":"true",children:Object(c.jsx)("span",{onClick:function(){return e.sortBy("name","last","first")},children:"Name"})}),Object(c.jsx)("th",{scope:"col",children:Object(c.jsx)("span",{onClick:function(){return e.sortBy("phone")},children:"Phone"})}),Object(c.jsx)("th",{scope:"col",children:Object(c.jsx)("span",{onClick:function(){return e.sortBy("email")},children:"Email"})}),Object(c.jsx)("th",{scope:"col",children:Object(c.jsx)("span",{onClick:function(){return e.sortBy("dob","date")},children:"DOB"})})]})}),Object(c.jsx)("tbody",{children:e.state.filteredEmployees.map((function(t){var n=t.name,a=n.first,r=n.last,s="".concat(a," ").concat(r),i=e.formatDate(t.dob.date);return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("img",{src:t.picture.thumbnail,alt:s})}),Object(c.jsx)("td",{className:"align-middle",children:s}),Object(c.jsx)("td",{className:"align-middle",children:Object(c.jsx)("a",{href:"tel:+1".concat(t.phone),children:t.phone})}),Object(c.jsx)("td",{className:"align-middle email",children:Object(c.jsx)("a",{href:"mailto:".concat(t.email),children:t.email})}),Object(c.jsx)("td",{className:"align-middle",children:i})]},t.login.uuid)}))})]})}),f=n(17),O=n.n(f),x=function(){return O.a.get("https://randomuser.me/api/?results=50&nat=us")},y=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={search:"",employees:[],filteredEmployees:[],sortDirections:e.initialSortDirections},e.handleInputChange=function(t){var n=t.target.value;e.setState({search:n}),e.filterEmployees(n.toLowerCase().trim())},e.handleFormSubmit=function(e){e.preventDefault()},e.sortBy=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=e.state.filteredEmployees;e.state.sortDirections[t]?e.setState({filteredEmployees:a.reverse(),sortDirections:Object(h.a)(Object(h.a)({},e.initialSortDirections),{},Object(l.a)({},t,"asc"===e.state.sortDirections[t]?"desc":"asc"))}):(a=e.state.filteredEmployees.sort((function(e,a){return e=e[t],a=a[t],n?c&&e[n]===a[n]?e[c].localeCompare(a[c]):e[n].localeCompare(a[n]):e.localeCompare(a)})),e.setState({filteredEmployees:a,sortDirections:Object(h.a)(Object(h.a)({},e.initialSortDirections),{},Object(l.a)({},t,"asc"))}))},e.filterEmployees=function(t){t?e.setState({filteredEmployees:e.state.employees.filter((function(n){return n.name.first.toLowerCase().concat(" ",n.name.last.toLowerCase()).includes(t)||n.phone.includes(t)||n.phone.replace(/[^\w\s]/gi,"").includes(t)||n.email.includes(t)||e.formatDate(n.dob.date).includes(t)}))}):e.setState({filteredEmployees:e.state.employees})},e.formatDate=function(e){e=new Date(e);var t=[];return t.push(("0"+(e.getMonth()+1)).slice(-2)),t.push(("0"+e.getDate()).slice(-2)),t.push(e.getFullYear()),t.join("-")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;x().then((function(t){return e.setState({employees:t.data.results,filteredEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(c.jsx)("div",{className:"container mt-4",children:Object(c.jsx)(p,{state:this.state,sortBy:this.sortBy,filterEmployees:this.filterEmployees,formatDate:this.formatDate})})]})}},{key:"initialSortDirections",get:function(){return{name:"",phone:"",email:"",dob:""}}}]),n}(a.Component),g=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o,{}),Object(c.jsx)(y,{})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),v()}},[[47,1,2]]]);
//# sourceMappingURL=main.d9b8091f.chunk.js.map