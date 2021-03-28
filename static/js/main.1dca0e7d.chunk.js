(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={contactsContainer:"Contacts_contactsContainer__14ltp",contactsList:"Contacts_contactsList__1Wnes",contactItem:"Contacts_contactItem__3ahLt",btn:"Contacts_btn__th1yf"}},18:function(t,e,n){t.exports={Form:"Form_Form__3kBlv",button:"Form_button__2kBwB"}},42:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){},50:function(t,e,n){},54:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(13),o=n.n(r),i=n(6),s=(n(42),n(1)),u=function(t){var e=t.text;return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:e})})};u.defaultProps={text:""};var l=u,b=function(t){var e=t.text;return Object(s.jsx)("header",{className:"AppBar",children:Object(s.jsx)(l,{text:e})})},j=(n(44),function(t){var e=t.children;return Object(s.jsx)("div",{className:"Container",children:e})}),d=function(t){var e=t.children;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(b,{text:"React. Redux. HomeWork-5. PhoneBook."}),Object(s.jsx)(j,{children:e})]})},h=(n(45),function(t){var e=t.text;return Object(s.jsx)("h2",{className:"Title",children:e})}),m=n(10),O=n(24),f=n(25),x=n(30),p=n(29),v=n(18),C=n.n(v),g=n(55),_=n(7),y={addContact:Object(_.b)("contact/add",(function(t){var e=t.name,n=t.number;return{payload:{id:Object(g.a)(),name:e,number:n}}})),deleteContact:Object(_.b)("contact/delete"),changeFilter:Object(_.b)("contact/changeFilter")},F=function(t){Object(x.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(O.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(m.a)({},c,a))},t.handleSubmit=function(e){if(e.preventDefault(),t.state.name)return t.props.onSubmit(t.state),void t.reset();alert("Please enter Name")},t.reset=function(){t.setState({name:"",number:""})},t.nameInputId=Object(g.a)(),t.phoneInputId=Object(g.a)(),t}return Object(f.a)(n,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("form",{className:C.a.Form,onSubmit:this.handleSubmit,children:[Object(s.jsxs)("label",{htmlFor:this.nameInputId,children:["Name:",Object(s.jsx)("input",{type:"text",name:"name",value:this.state.name,id:this.nameInputId,onChange:this.handleChange})]}),Object(s.jsxs)("label",{htmlFor:this.phoneInputId,children:["Phone:",Object(s.jsx)("input",{type:"tel",name:"number",value:this.state.number,id:this.phoneInputId,onChange:this.handleChange})]}),Object(s.jsx)("button",{type:"submit",className:C.a.button,children:"Add contact"})]})})}}]),n}(c.Component),I=Object(i.b)(null,(function(t){return{onSubmit:function(e){return t(y.addContact(e))}}}))(F),k=(n(46),function(t){var e=t.value,n=t.onChange;return Object(s.jsxs)("label",{className:"Filter",children:["Find contact by name",Object(s.jsx)("input",{type:"text",value:e,onChange:n})]})});k.defaultProps={value:""};var N,w=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)})).length?e:""},L=Object(i.b)((function(t){var e=t.contacts,n=e.filter,c=e.items;return{value:w(c,n)}}),(function(t){return{onChange:function(e){return t(y.changeFilter(e.target.value))}}}))(k),S=n(11),B=n.n(S),D=function(t){var e=t.name,n=t.number,c=t.onDeliteContact;return Object(s.jsxs)(s.Fragment,{children:[e,": ",n,Object(s.jsx)("button",{type:"button",className:B.a.btn,onClick:c,children:"Delete"})]})},P=function(t,e){var n=e.toLowerCase(),c=t.filter((function(t){return t.name.toLowerCase().includes(n)}));return c.length?c:t},A=Object(i.b)((function(t){var e=t.contacts,n=e.filter,c=e.items;return{list:P(c,n)}}),(function(t){return{onDeliteContact:function(e){return t(y.deleteContact(e))}}}))((function(t){var e=t.list,n=t.onDeliteContact;return Object(s.jsx)("div",{className:B.a.contactsContainer,children:Object(s.jsx)("ul",{className:B.a.contactsList,children:e.length>0&&e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(s.jsx)("li",{className:B.a.contactItem,children:Object(s.jsx)(D,{name:c,number:a,onDeliteContact:function(){return n(e)}})},e)}))})})})),T=Object(i.b)((function(t){return{contacts:t.contacts.items}}))((function(t){var e=t.contacts;return Object(s.jsxs)(d,{children:[Object(s.jsx)(h,{text:"Phonebook"}),Object(s.jsx)(I,{}),e.length>0&&Object(s.jsx)(h,{text:"Contacts"}),e.length>1&&Object(s.jsx)(L,{}),Object(s.jsx)(A,{})]})})),J=n(28),R=n(26),W=n(14),z=n(3),E=Object(_.c)([],(N={},Object(m.a)(N,y.addContact,(function(t,e){var n=e.payload;return t.filter((function(t){return n.name===t.name})).length?(alert("".concat(n.name," is already in contacts")),t):[].concat(Object(W.a)(t),[n])})),Object(m.a)(N,y.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),N)),H=Object(_.c)("",Object(m.a)({},y.changeFilter,(function(t,e){return e.payload}))),M=Object(z.c)({items:E,filter:H}),q=n(8),G=n(27),K=n.n(G),Q=Object(W.a)(Object(_.d)({serializableCheck:{ignoredActions:[q.a,q.f,q.b,q.c,q.d,q.e]}})),U={key:"contact",storage:K.a,blacklist:["filter"]},V=Object(_.a)({reducer:Object(z.c)({contacts:Object(q.g)(U,M)}),middleware:Q,devTools:!1}),X={store:V,persistor:Object(q.h)(V)};n(49),n(50);o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(i.a,{store:X.store,children:Object(s.jsx)(R.a,{loading:null,persistor:X.persistor,children:Object(s.jsx)(J.a,{children:Object(s.jsx)(T,{})})})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.1dca0e7d.chunk.js.map