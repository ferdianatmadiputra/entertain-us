(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{168:function(e,t,a){},169:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n,r,i,o,c,l,s=a(0),j=a.n(s),d=a(17),u=a.n(d),b=(a(168),a(169),a(24)),p=a(20),O=a(145),h=a(229),f=a(21),x=a(59),g=Object(p.gql)(n||(n=Object(x.a)(["\nquery {\n  movies {\n    _id\n    title\n    overview\n    poster_path\n    popularity\n    tags\n  }\n  series {\n    _id\n    title\n    overview\n    poster_path\n    popularity\n    tags\n  }\n}\n"]))),v=Object(p.gql)(r||(r=Object(x.a)(["\n  mutation addMovies($input: MovieInput) {\n    addMovies (input: $input) {\n      _id,\n      title,\n      overview,\n      poster_path\n      popularity\n      tags\n    }\n  }\n"]))),m=Object(p.gql)(i||(i=Object(x.a)(["\n  query {\n    movies {\n      _id\n      title\n      overview\n      poster_path\n      popularity\n      tags\n    }\n  }\n"]))),y=Object(p.gql)(o||(o=Object(x.a)(["\n  mutation updateMovies($input: MovieUpdate) {\n    updateMovies (input: $input) {\n      updateCount\n    }\n  }\n"]))),C=Object(p.gql)(c||(c=Object(x.a)(["\n  mutation delMovies($input: ID!) {\n    delMovies (input: $input) {\n      msg\n    }\n  } \n"]))),w=Object(p.gql)(l||(l=Object(x.a)(["\n  query getFavorites {\n    favorites @client\n  }\n"]))),k=a(223),N=a(141),_=a(233),S=a(234),I=a(235),F=a(236),z=a(136),M=a.n(z),q=a(135),D=a.n(q),E=a(256),T=a(105),P=a.n(T),A=a(104),R=a.n(A),W=a(254),B=a(251),L=a(106),V=a.n(L),J=a(58),Q=a(250),U=a(253),$=a(230),Y=a(227),H=a(226),G=a(133),K=a.n(G),X=a(144),Z=a(255),ee=a(134),te=a.n(ee),ae=a(95),ne=a.n(ae),re=a(3),ie=Object(k.a)((function(e){return{style:{color:"#000000",backgroundColor:"transparent"},chipContainer:{display:"flex",justifyContent:"start",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5),margin:0,backgroundColor:"transparent"},chip:{margin:e.spacing(.5),backgroundColor:"#212121"}}}));function oe(e){var t=e.open,a=e.close,n=e.editData,r=ie(),i=Object(s.useState)(""),o=Object(b.a)(i,2),c=o[0],l=o[1],j=Object(p.useMutation)(v),d=Object(b.a)(j,2),u=d[0],O=(d[1].data,Object(p.useMutation)(y)),f=Object(b.a)(O,2),x=f[0],g=(f[1].data,Object(s.useState)(!1)),C=Object(b.a)(g,2),w=C[0],k=C[1],N=Object(s.useState)(n||{title:"",overview:"",poster_path:"",popularity:0,tags:[]}),_=Object(b.a)(N,2),S=_[0],I=_[1];Object(s.useEffect)((function(){n?I(n):t&&I({title:"",overview:"",poster_path:"",popularity:0,tags:[]})}),[n,t]);function F(e,t){var a=e.target.value;"popularity"===t&&(a=+e.target.value),console.log(e);var n=Object(J.a)({},S);n[t]=a,I(n)}return Object(re.jsx)("div",{children:Object(re.jsxs)(U.a,{className:r.style,open:t,onClose:a,PaperProps:{style:{backgroundColor:"Black",color:"grey"}},children:[Object(re.jsxs)(H.a,{id:"form-dialog-title",children:[n?Object(re.jsx)("span",{children:"Edit"}):Object(re.jsx)("span",{children:"Add"})," Movie"]}),Object(re.jsxs)(Y.a,{children:[Object(re.jsx)(Q.a,{label:"Title",color:"secondary",size:"small",error:w,helperText:"title cannot be empty",style:{margin:8},defaultValue:S.title,onChange:function(e){return F(e,"title")},fullWidth:!0,variant:"outlined",required:!0,autoComplete:"off"}),Object(re.jsx)(Q.a,{label:"Overview",color:"secondary",size:"small",style:{margin:8},error:w,helperText:"overview cannot be empty",defaultValue:S.overview,onChange:function(e){return F(e,"overview")},fullWidth:!0,variant:"outlined",required:!0,autoComplete:"off"}),Object(re.jsx)(Q.a,{label:"Poster URL",color:"secondary",size:"small",style:{margin:8},error:w,helperText:"Poster url cannot be empty",defaultValue:S.poster_path,onChange:function(e){return F(e,"poster_path")},fullWidth:!0,variant:"outlined",required:!0,autoComplete:"off"}),Object(re.jsx)(Q.a,{label:"Popularity",color:"secondary",size:"small",style:{margin:8},error:w,helperText:"Input popularity between 0 - 10",defaultValue:S.popularity,onChange:function(e){return F(e,"popularity")},fullWidth:!0,variant:"outlined",required:!0,autoComplete:"off"}),Object(re.jsx)(Q.a,{label:"Tags",color:"secondary",style:{margin:8},size:"small",defaultValue:"",onChange:function(e){l(e.target.value)},error:w,helperText:"Input at least 1 tag",variant:"outlined",required:!0,autoComplete:"off"}),Object(re.jsx)(h.a,{size:"medium",style:{margin:8,color:"grey"},variant:"outlined",onClick:function(){var e=JSON.parse(JSON.stringify(S));e.tags.push(c),I(e),l("")},startIcon:Object(re.jsx)(ne.a,{}),children:"Add Tag"}),Object(re.jsx)(X.a,{component:"ul",className:r.chipContainer,children:S.tags.map((function(e,t){return Object(re.jsx)("li",{children:Object(re.jsx)(Z.a,{label:e,onDelete:(a=e,function(){var e=JSON.parse(JSON.stringify(S));e.tags=e.tags.filter((function(e){return e!==a})),I(e)}),className:r.chip})},t);var a}))})]}),Object(re.jsxs)($.a,{children:[Object(re.jsx)(h.a,{size:"large",style:{margin:8},variant:"contained",color:"secondary",onClick:n?function(e){if(e.preventDefault(),S._id&&S.title&&S.overview&&S.poster_path&&S.popularity>=0&&S.popularity<=10&&S.tags.length>0){var t={_id:S._id,title:S.title,overview:S.overview,poster_path:S.poster_path,popularity:S.popularity,tags:S.tags};x({variables:{input:t},refetchQueries:[{query:m}]}),k(!1),a()}else k(!0)}:function(e){e.preventDefault(),S.title&&S.overview&&S.poster_path&&S.popularity>=0&&S.popularity<=10&&S.tags.length>0?(u({variables:{input:S},refetchQueries:[{query:m}]}),k(!1),a()):k(!0)},startIcon:Object(re.jsx)(K.a,{}),children:"SUBMIT"}),Object(re.jsx)(h.a,{size:"large",style:{margin:8},variant:"outlined",color:"secondary",onClick:a,startIcon:Object(re.jsx)(te.a,{}),children:"CANCEL"})]})]})})}var ce=a(232),le=a(231),se=j.a.forwardRef((function(e,t){return Object(re.jsx)(le.a,Object(J.a)({direction:"up",ref:t},e))}));function je(e){var t=e.open,a=e.close,n=e.delData,r=e.confirmDelete;return Object(s.useEffect)((function(){console.log("modal delete refresh")}),[n,t]),Object(re.jsx)("div",{children:Object(re.jsxs)(U.a,{open:t,TransitionComponent:se,keepMounted:!0,onClose:a,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",PaperProps:{style:{backgroundColor:"Black",color:"grey"}},children:[Object(re.jsx)(H.a,{id:"alert-dialog-slide-title",children:"Delete this Movie?"}),Object(re.jsx)(Y.a,{children:Object(re.jsxs)(ce.a,{id:"alert-dialog-slide-description",children:["Movie ",n.title," will be deleted and cannot be recovered."]})}),Object(re.jsxs)($.a,{children:[Object(re.jsx)(h.a,{onClick:a,color:"primary",children:"Cancel"}),Object(re.jsx)(h.a,{onClick:r,color:"primary",children:"Confirm Delete"})]})]})})}var de=Object(p.makeVar)([]),ue=Object(k.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:"#000000"},gridList:{flexWrap:"nowrap",transform:"translateZ(0)",overflowX:"scroll",overflowY:"hidden",width:"100%",padding:10,"&::-webkit-scrollbar":{width:5},"&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 6px rgba(0, 0, 0, 0.3)"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#150C0C",borderRadius:8}},title:{zIndex:200,color:"#ffffff"},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},tile:{"&:hover":{transform:"scale(1.05)",transitionDuration:300,zIndex:100,cursor:"pointer"},width:300,backgroundColor:"#150C0C"},detail:{padding:10,backgroundColor:"#150C0C"}}}));function be(e){var t=ue(),a=e.data.slice().reverse(),n=j.a.useState(!1),r=Object(b.a)(n,2),i=r[0],o=r[1],c=j.a.useState(""),l=Object(b.a)(c,2),s=l[0],d=l[1],u=j.a.useState({open:!1,id:""}),h=Object(b.a)(u,2),f=h[0],x=h[1],g=j.a.useState(!1),v=Object(b.a)(g,2),y=v[0],k=v[1],z=j.a.useState(!1),q=Object(b.a)(z,2),T=q[0],A=q[1],L=Object(p.useMutation)(C),J=Object(b.a)(L,2),Q=J[0],U=(J[1].data,j.a.useState({_id:""})),$=Object(b.a)(U,2),Y=$[0],H=$[1],G=j.a.useState(!1),K=Object(b.a)(G,2),X=K[0],Z=K[1],ee=Object(p.useQuery)(w),te=ee.data,ae=ee.loading,ne=ee.error,ie="https://image.tmdb.org/t/p/w500/5lqJx0uNKrD1cEKgaqF1LBsLAoi.jpg";if(ae)return Object(re.jsx)("p",{children:"Loading..."});if(ne)return Object(re.jsxs)("p",{children:["Error ",ne.message]});console.log(te,"ini isi data fav");var ce=te.favorites,le=function(e,t){"clickaway"!==t&&o(!1)},se=function(e){x({open:!f.open,id:e})},be=function(e){var t=ce.find((function(t){return t._id===e._id}));console.log(t,"isi isFav"),t?(de(ce.filter((function(t){return t._id!==e._id}))),d("".concat(e.title," removed from your favorites")),o(!0)):(de([].concat(Object(N.a)(ce),[e])),d("".concat(e.title," added to your favorites")),o(!0))};return Object(re.jsxs)("div",{className:t.root,children:[Object(re.jsx)(je,{open:X,close:function(){Z(!1)},delData:T,confirmDelete:function(){Q({variables:{input:Y._id},refetchQueries:[{query:m}]}),Z(!1),d("".concat(Y.title," deleted successfully")),o(!0)}}),Object(re.jsx)(oe,{open:y,close:function(){k(!1)},editData:T}),Object(re.jsx)(_.a,{cellHeight:450,className:t.gridList,cols:0,children:a.map((function(a){return f.open&&f.id===a._id?Object(re.jsxs)(S.a,{className:t.tile,onClick:function(){return se(a._id)},children:[Object(re.jsxs)(B.a,{className:t.detail,children:[Object(re.jsx)(O.a,{variant:"h6",paragraph:!0,children:a.title}),Object(re.jsx)(O.a,{variant:"caption",paragraph:!0,children:a.overview}),Object(re.jsx)("br",{}),Object(re.jsxs)(O.a,{variant:"subtitle1",children:["Tags: ",a.tags.join(", ")]})]}),Object(re.jsx)(I.a,{classes:{root:t.titleBar,title:t.title},actionIcon:"series"===e.type?Object(re.jsx)(re.Fragment,{}):Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(F.a,{"aria-label":"favorite ".concat(a.title),onClick:function(){return function(e){A(e),k(!0)}(a)},children:Object(re.jsx)(D.a,{className:t.title})}),Object(re.jsx)(F.a,{"aria-label":"favorite ".concat(a.title),onClick:function(){return H(a),void Z(!0)},children:Object(re.jsx)(M.a,{className:t.title})})]})})]},a._id):Object(re.jsxs)(S.a,{className:t.tile,children:[Object(re.jsx)("img",{src:a.poster_path,onError:function(e){e.target.src!==ie&&(e.target.onerror=null,e.target.src=ie)},alt:a.title,onClick:function(){return se(a._id)}}),Object(re.jsx)(I.a,{title:a.title,subtitle:Object(re.jsx)(re.Fragment,{children:Object(re.jsxs)(O.a,{children:[a.popularity,"\xa0",Object(re.jsx)(E.a,{name:"read-only",precision:.1,value:a.popularity/2,readOnly:!0,size:"small"})]})}),classes:{root:t.titleBar,title:t.title},actionIcon:"series"===e.type?Object(re.jsx)(re.Fragment,{}):ce.find((function(e){return e._id===a._id}))?Object(re.jsx)(F.a,{"aria-label":"favorite ".concat(a.title),onClick:function(){return be(a)},children:Object(re.jsx)(R.a,{className:t.title})}):Object(re.jsx)(F.a,{"aria-label":"favorite ".concat(a.title),onClick:function(){return be(a)},children:Object(re.jsx)(P.a,{className:t.title})})})]},a._id)}))}),Object(re.jsx)(W.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},ContentProps:{style:{backgroundColor:"#150C0C",color:"#e83b42"}},open:i,autoHideDuration:3e3,onClose:le,message:s,action:Object(re.jsx)(j.a.Fragment,{children:Object(re.jsx)(F.a,{size:"small","aria-label":"close",color:"inherit",onClick:le,children:Object(re.jsx)(V.a,{fontSize:"small"})})})})]})}a(237),a(238),a(241),a(240),a(239),Object(k.a)({root:{width:300,flexWrap:"nowrap",backgroundColor:"#150C0C",marginRight:0,"&:hover":{transform:"scale(1.05)",transitionDuration:300,zIndex:100}},media:{height:400},spacearound:{display:"flex",flexWrap:"no-wrap",justifyContent:"space-between",overflow:"hidden"}});var pe=a(242);function Oe(){return Object(re.jsx)(B.a,{display:"flex",flex:"1",justifyContent:"space-around",children:Object(re.jsx)(pe.a,{size:100})})}var he=Object(k.a)((function(){return{gridList:{width:"100%",height:450},gridContainer:{display:"flex",flexWrap:"no-wrap",justifyContent:"space-between",overflow:"hidden",padding:20},title:{textAlign:"center",margin:10}}}));function fe(){var e=he(),t=(Object(f.f)(),Object(s.useState)(!1)),a=Object(b.a)(t,2),n=a[0],r=a[1],i=Object(p.useQuery)(g),o=i.loading,c=i.error,l=i.data;Object(s.useEffect)((function(){console.log(l)}),[l]);return o?Object(re.jsx)(Oe,{}):c?Object(re.jsx)("p",{children:"error..."}):Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(oe,{open:n,close:function(){r(!1)}}),Object(re.jsxs)("div",{className:e.gridContainer,children:[Object(re.jsx)(O.a,{variant:"h5",className:e.title,component:"h2",children:"MOVIES"}),Object(re.jsxs)(h.a,{variant:"text",color:"primary",size:"small",onClick:function(){r(!0)},children:[Object(re.jsx)(ne.a,{fontSize:"small"}),"\xa0Add New"]})]}),Object(re.jsx)(be,{display:"flex",data:l.movies,type:"movie"}),Object(re.jsxs)("div",{className:e.gridContainer,children:[Object(re.jsx)(O.a,{variant:"h5",className:e.title,component:"h2",children:"SERIES"}),Object(re.jsx)(re.Fragment,{})]}),Object(re.jsx)(be,{display:"flex",data:l.series,type:"series"})]})}var xe=Object(k.a)((function(){return{title:{textAlign:"center",margin:10}}}));function ge(){var e=xe(),t=Object(p.useQuery)(w),a=t.data,n=t.loading,r=t.error;if(n)return Object(re.jsx)(Oe,{});if(r)return Object(re.jsxs)("p",{children:["Error ",r.message]});var i=a.favorites;return 0===i.length?Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(O.a,{variant:"h5",className:e.title,component:"h2",children:"YOUR FAVORITES"}),Object(re.jsx)(O.a,{variant:"h5",className:e.title,component:"h2",children:"IS EMPTY..."})]}):Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(O.a,{variant:"h5",className:e.title,component:"h2",children:"YOUR FAVORITES"}),Object(re.jsx)(be,{display:"flex",data:i,type:"favorite"})]})}var ve=a(140),me=a(249),ye=a(57),Ce=a(245),we=a(246),ke=a(243),Ne=a(138),_e=a.n(Ne),Se=a(137),Ie=a.n(Se),Fe=a(244),ze=Object(k.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},header:{color:"#e83b42",backgroundColor:"#150C0Cad"},navItem:{textDecoration:"none",color:"inherit",display:"flex",alignItems:"center",flexWrap:"wrap"},font:{fontSize:12}}}));function Me(e){var t=e.children,a=e.window,n=Object(ke.a)({target:a?a():void 0});return Object(re.jsx)(le.a,{appear:!1,direction:"down",in:!n,children:t})}function qe(e){var t=ze();return Object(re.jsxs)(j.a.Fragment,{children:[Object(re.jsx)(Fe.a,{}),Object(re.jsx)(Me,Object(J.a)(Object(J.a)({},e),{},{children:Object(re.jsx)(Ce.a,{className:t.header,children:Object(re.jsxs)(we.a,{children:[Object(re.jsx)(O.a,{variant:"h6",className:t.title,children:Object(re.jsxs)(ye.b,{to:"/",className:t.navItem,activeStyle:{color:"#e83b42"},children:[Object(re.jsx)(Ie.a,{}),Object(re.jsx)("span",{className:t.font,children:"\xa0ENTERTAIN US"})]})}),Object(re.jsx)(h.a,{color:"inherit",children:Object(re.jsxs)(ye.b,{to:"/fav",className:t.navItem,activeStyle:{color:"#dd2c00"},children:[Object(re.jsx)("span",{className:t.font,children:"Your Favorites \xa0"}),Object(re.jsx)(_e.a,{})]})})]})})})),Object(re.jsx)(we.a,{})]})}var De=a(248),Ee=a(139),Te=a.n(Ee),Pe=a(247),Ae=Object(k.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2),color:"#e83b42"}}}));function Re(e){var t=Ae(),a=Object(ke.a)({disableHysteresis:!0,threshold:100});return Object(re.jsx)(Pe.a,{in:a,children:Object(re.jsx)("div",{onClick:function(e){window.scroll({top:0,left:0,behavior:"smooth"})},role:"presentation",className:t.root,children:Object(re.jsx)(De.a,{color:"primary",size:"small","aria-label":"scroll back to top",children:Object(re.jsx)(Te.a,{})})})})}var We=Object(ve.a)({palette:{type:"dark",primary:{main:"#e83b42"},secondary:{main:"#e83b42"}}}),Be=Object(k.a)({bg:{backgroundColor:"#000000",color:"#e83b42"}});var Le=function(){var e=Be();return Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(Fe.a,{}),Object(re.jsx)(me.a,{theme:We,children:Object(re.jsxs)(X.a,{width:1,className:e.bg,style:{minHeight:"100vh"},children:[Object(re.jsx)(qe,{}),Object(re.jsxs)(f.c,{children:[Object(re.jsx)(f.a,{path:"/fav",component:ge}),Object(re.jsx)(f.a,{path:"/detail/:id",component:ge}),Object(re.jsx)(f.a,{path:"/",component:fe})]}),Object(re.jsx)(Re,{})]})})]})},Ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,258)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),i(e),o(e)}))},Je=new p.InMemoryCache({typePolicies:{Query:{fields:{favorites:{read:function(){return de()}}}}}}),Qe=new p.ApolloClient({uri:"http://54.179.180.114:4000",cache:Je});u.a.render(Object(re.jsx)(j.a.StrictMode,{children:Object(re.jsx)(p.ApolloProvider,{client:Qe,children:Object(re.jsx)(ye.a,{children:Object(re.jsx)(Le,{})})})}),document.getElementById("root")),Ve()}},[[182,1,2]]]);
//# sourceMappingURL=main.0e90b2c8.chunk.js.map