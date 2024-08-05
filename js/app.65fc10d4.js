(function(){"use strict";var e={5012:function(e,t,n){var a=n(3751),o=n(641);function s(e,t,n,a,s,r){const i=(0,o.g2)("PostsList");return(0,o.uX)(),(0,o.Wv)(i)}var r=n(33);const i=e=>((0,o.Qi)("data-v-7e6b9ec6"),e=e(),(0,o.jt)(),e),c=i((()=>(0,o.Lk)("h2",{class:"text-center border-bottom mb-5 pb-3 mt-0 text-uppercase"},"Lista postów",-1))),l={key:0,class:"text-center"},u={key:1,class:"container"},d={class:"row g-3 p-0"},g={class:"card p-0 rounded h-100"},p={class:"card-title text-capitalize text-bg-light rounded rounded-bottom-5 p-2 px-3"},P=["onClick"],h={class:"card-body bg-light pt-1 rounded rounded-top-5 d-flex flex-column justify-content-between"},m={class:"text-start mt-0 mb-3 text-muted border-bottom"},f=i((()=>(0,o.Lk)("strong",null,"Autor:",-1))),b={class:"text-start"},v={class:"text-end mt-3 mb-0"},k=["onClick"],y={class:"pagination-container"},x=["disabled"],C=["onClick","disabled"],L=["onClick"],w=["disabled"];function j(e,t,n,s,i,j){return(0,o.uX)(),(0,o.CE)("div",null,[c,0===e.getData.length?((0,o.uX)(),(0,o.CE)("p",l," Brak danych do wyświetlenia ")):(0,o.Q3)("",!0),e.getData.length>0?((0,o.uX)(),(0,o.CE)("div",u,[(0,o.Lk)("ul",d,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.getData,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.id,class:"col-12 col-sm-6 col-md-6 list-unstyled"},[(0,o.Lk)("div",g,[(0,o.Lk)("h3",p,[(0,o.eW)((0,r.v_)(j.shortenTitle(e.title))+" ",1),(0,o.Lk)("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:t=>j.deletePost(e.id)},null,8,P)]),(0,o.Lk)("div",h,[(0,o.Lk)("p",m,[(0,o.Lk)("span",null,[f,(0,o.eW)(" "+(0,r.v_)(e.userName),1)])]),(0,o.Lk)("div",b,(0,r.v_)(j.shortenText(e.body,e.id)),1),(0,o.Lk)("p",v,[(0,o.Lk)("span",{class:"link-primary",onClick:t=>j.toggleText(e.id)},(0,r.v_)(i.expandedPosts.has(e.id)?"Zwiń":"Zobacz więcej"),9,k)])])])])))),128))]),(0,o.Lk)("div",y,[(0,o.Lk)("button",{onClick:t[0]||(t[0]=(...t)=>e.prevPage&&e.prevPage(...t)),class:"pagination-button",disabled:1===e.currentPage},"Poprzednia",8,x),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.totalPages,(t=>((0,o.uX)(),(0,o.CE)("button",{key:t,onClick:n=>e.changePage(t),class:(0,r.C4)(["pagination-button d-none d-md-block",{active:t===e.currentPage}]),disabled:t===e.currentPage},(0,r.v_)(t),11,C)))),128)),(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.currentPage=t),class:"pagination-select d-md-none d-lg-none",onChange:t[2]||(t[2]=t=>e.changePage(t.target.value))},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.totalPages,(t=>((0,o.uX)(),(0,o.CE)("option",{key:t,onClick:n=>e.changePage(t)},(0,r.v_)(t),9,L)))),128))],544),[[a.u1,e.currentPage]]),(0,o.Lk)("button",{onClick:t[3]||(t[3]=(...t)=>e.nextPage&&e.nextPage(...t)),class:"pagination-button",disabled:e.currentPage===e.totalPages},"Następna",8,w)])])):(0,o.Q3)("",!0)])}n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var O=n(6278),E={computed:{...(0,O.L8)(["getData","totalPages"]),...(0,O.aH)(["currentPage"])},data(){return{expandedPosts:new Set}},methods:{...(0,O.i0)(["changePage","nextPage","prevPage"]),shortenText(e,t){return this.expandedPosts.has(t)?e:e.length>100?e.slice(0,100)+"...":e},toggleText(e){this.expandedPosts.has(e)?this.expandedPosts.delete(e):this.expandedPosts.add(e)},shortenTitle(e){return e.length>20?e.slice(0,20)+"...":e},deletePost(e){this.$store.dispatch("deletePost",e)}}},T=n(6262);const X=(0,T.A)(E,[["render",j],["__scopeId","data-v-7e6b9ec6"]]);var _=X,D={name:"App",components:{PostsList:_},methods:{...(0,O.i0)(["fetchData"])},created(){this.fetchData()}};const A=(0,T.A)(D,[["render",s]]);var S=A,I=n(4335),F=(0,O.y$)({state:{posts:[],users:[],currentPage:1,itemsPerPage:10},mutations:{setPosts(e,t){e.posts=t},setUsers(e,t){e.users=t},setCurrentPage(e,t){e.currentPage=t},incrementPage(e){e.currentPage++},decrementPage(e){e.currentPage--},deletePost(e,t){e.posts=e.posts.filter((e=>e.id!==t))}},actions:{async fetchData({commit:e}){try{const[t,n]=await Promise.all([I.A.get("https://jsonplaceholder.typicode.com/posts"),I.A.get("https://jsonplaceholder.typicode.com/users")]);e("setPosts",t.data),e("setUsers",n.data)}catch(t){console.error("Error fetching data:",t)}},changePage({commit:e},t){e("setCurrentPage",t)},nextPage({commit:e,state:t}){t.currentPage<t.posts.length/t.itemsPerPage&&e("incrementPage")},prevPage({commit:e,state:t}){t.currentPage>1&&e("decrementPage")},deletePost({commit:e},t){e("deletePost",t)}},getters:{getData(e){const t=(e.currentPage-1)*e.itemsPerPage,n=e.currentPage*e.itemsPerPage,a=e.posts.map((t=>{const n=e.users.find((e=>e.id===t.userId));return{...t,userName:n?n.name:"Unknown"}}));return a.slice(t,n)},totalPages(e){return Math.ceil(e.posts.length/e.itemsPerPage)}}});(0,a.Ef)(S).use(F).mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,s){if(!a){var r=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],s=e[u][2];for(var i=!0,c=0;c<a.length;c++)(!1&s||r>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(i=!1,s<r&&(r=s));if(i){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[a,o,s]}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,s,r=a[0],i=a[1],c=a[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var u=c(n)}for(t&&t(a);l<r.length;l++)s=r[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},a=self["webpackChunklist"]=self["webpackChunklist"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(5012)}));a=n.O(a)})();
//# sourceMappingURL=app.65fc10d4.js.map