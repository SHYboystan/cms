import{d as r,r as f,b as t,c as m,e as x,i as a,w as l,g as v,a3 as n,_ as b}from"./index-b8a5cb9a.js";const g=r({__name:"index",setup(h){const i=e=>{e.file.status!=="uploading"&&console.log(e.file,e.fileList),e.file.status==="done"?n.success(`${e.file.name} file uploaded successfully`):e.file.status==="error"&&n.error(`${e.file.name} file upload failed.`)},d={authorization:"authorization-text"},o=f([]);return(e,s)=>{const c=t("upload-outlined"),u=t("a-button"),_=t("a-upload");return m(),x("div",null,[a(_,{"file-list":o.value,"onUpdate:fileList":s[0]||(s[0]=p=>o.value=p),name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:d,onChange:i},{default:l(()=>[a(u,null,{default:l(()=>[a(c),v(" Click to Upload ")]),_:1})]),_:1},8,["file-list"])])}}});const w=b(g,[["__scopeId","data-v-2178bf4b"]]);export{w as default};
