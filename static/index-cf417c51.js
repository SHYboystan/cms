import{d as w,l as A,r as p,m as q,c as s,e as i,f,H as C,G as S,t as I,x as E,p as G,k as O,_ as V,N as P,b as g,E as x,w as _,i as h,h as U,g as T,v as z}from"./index-b8a5cb9a.js";const F=o=>(G("data-v-dbd4943e"),o=o(),O(),o),H={class:"tag-container"},L=F(()=>f("div",{class:"tag-title"},"标签",-1)),R={class:"tag-body"},j={class:"tag-left scrollbar"},J=["onClick"],K={class:"tag-content scrollbar"},M=["onClick"],Q={class:"select-tag"},W=w({__name:"AddTag",props:{sourceData:Array},emits:["getSelectValue"],setup(o,{emit:r}){const v=o,{sourceData:d}=A(v),n=p([]),l=p([]),k=q(()=>d.value.filter(t=>t.check).length),b=t=>{const{id:a}=t;l.value=d.value.filter(e=>e.parentId===a)},y=t=>{t.check=!t.check;let a=d.value.filter(e=>e.check);r("getSelectValue",a)};return(()=>{n.value=d.value.filter(a=>a.parentId===0);const t=n.value[0].id;l.value=d.value.filter(a=>a.parentId===t)})(),(t,a)=>(s(),i("div",H,[L,f("div",R,[f("div",j,[(s(!0),i(C,null,S(n.value,e=>(s(),i("div",{class:"tag-li",onClick:u=>b(e)},I(e.name),9,J))),256))]),f("div",K,[(s(!0),i(C,null,S(l.value,e=>(s(),i("div",{class:E(["tag-item",e.check?"is-selected":""]),onClick:u=>y(e)},I(e.name),11,M))),256))])]),f("div",Q,"已选择 "+I(k.value)+" 个标签",1)]))}});const X=V(W,[["__scopeId","data-v-dbd4943e"]]),Y=w({__name:"index",props:{view:{type:Boolean,default:!1},sourceData:{type:Array,default:()=>[]},modelTag:{type:Array,default:()=>[]}},emits:["update:modelTag"],setup(o,{emit:r}){const v=o,{modelTag:d,sourceData:n}=A(v),l=p([]),k=p(!1),b=t=>{let a=[];l.value=l.value.filter(e=>e.id!==t.id),l.value.map(e=>{a.push(e.id)}),r("update:modelTag",a)},y=t=>{l.value=t;let a=[];t.map(e=>{a.push(e.id)}),r("update:modelTag",a)},$=()=>{let t=d==null?void 0:d.value;if(l.value=[],t){n==null||n.value.map(e=>{e.check=t.includes(e.id)});let a=n.value.filter(e=>e.required);a&&a.length&&a.map(e=>{let u=n.value.filter(m=>m.parentId===e.id);u.some(m=>t.includes(m.id))||(u[0].check=!0,r("update:modelTag",[...t,u[0].id]))}),l.value=n==null?void 0:n.value.filter(e=>t.includes(e.id))}};return P([d,n],()=>{$()},{immediate:!0}),(t,a)=>{const e=g("a-tag"),u=g("a-tooltip"),m=g("PlusCircleOutlined"),D=g("a-button"),B=g("a-popover");return s(),i("div",null,[(s(!0),i(C,null,S(l.value,c=>(s(),i(C,{key:c.id},[c.name.length>20?(s(),x(u,{key:0,title:c.name},{default:_(()=>[h(e,{color:"blue",closable:!o.view,onClose:N=>b(c)},{default:_(()=>[T(I(`${c.name.slice(0,20)}...`),1)]),_:2},1032,["closable","onClose"])]),_:2},1032,["title"])):(s(),x(e,{key:1,color:"blue",closable:!o.view,onClose:N=>b(c)},{default:_(()=>[T(I(c.name),1)]),_:2},1032,["closable","onClose"]))],64))),128)),o.view?z("",!0):(s(),x(B,{key:0,visible:k.value,"onUpdate:visible":a[0]||(a[0]=c=>k.value=c),trigger:"click"},{content:_(()=>[h(X,{onGetSelectValue:y,sourceData:U(n)},null,8,["sourceData"])]),default:_(()=>[h(D,{class:"tag-button"},{icon:_(()=>[h(m)]),default:_(()=>[T(" 添加标签 ")]),_:1})]),_:1},8,["visible"]))])}}});const Z=V(Y,[["__scopeId","data-v-9c750e5a"]]),ee={class:"c-tag-container"},te=w({__name:"index",setup(o){const r=p([11,12]),v=p([{id:1,name:"不良人",parentId:0},{id:2,name:"幻音坊",parentId:0},{id:3,name:"玄冥教",parentId:0},{id:4,name:"通文馆",parentId:0},{id:5,name:"饶江",parentId:0},{id:6,name:"漠北",parentId:0},{id:7,name:"殇组织",parentId:0},{id:8,name:"蜀",parentId:0},{id:9,name:"吴",parentId:0},{id:11,name:"李星云",parentId:1},{id:12,name:"姬如雪",parentId:1},{id:13,name:"张子凡",parentId:1},{id:15,name:"段成天",parentId:1},{id:16,name:"袁天罡",parentId:1},{id:17,name:"上官云雀",parentId:1},{id:18,name:"温涛",parentId:1}]);return(d,n)=>(s(),i("div",ee,[h(Z,{modelTag:r.value,"onUpdate:modelTag":n[0]||(n[0]=l=>r.value=l),sourceData:v.value},null,8,["modelTag","sourceData"])]))}});const ne=V(te,[["__scopeId","data-v-ec5182da"]]);export{ne as default};
