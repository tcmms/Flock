import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{a3 as He,af as De}from"./WeatherClimateWindIcon-B7IaNujn.js";import{R as ze,r as n}from"./index-oxIuDU2I.js";import{R as Te}from"./DownOutlined-BT1hZG-W.js";import{C as ce,c as y,b as G,o as we,r as Xe,u as Ae}from"./index-TJOQIVf4.js";import{t as J}from"./toArray-QdoN5Rqg.js";import{p as me}from"./pickAttrs-BoNuQqbq.js";import{c as je}from"./reactNode-CHTsHNSU.js";import{i as k}from"./isNonNullable-Hl1s-5mn.js";import"./index-BUbyd2uB.js";import{D as _e}from"./dropdown-gP6BfAqY.js";import{g as Fe,m as We}from"./genStyleUtils-lByCByip.js";import{u as ke}from"./useMergeSemantic-BtH1ep6T.js";import"./_commonjsHelpers-CqkleIqs.js";import"./AntdIcon-CmaM0TST.js";import"./shadow-DTVO8V5H.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./SizeContext-6SbbsRse.js";import"./LeftOutlined-BgKLBUDz.js";import"./RightOutlined-BYxQZ77H.js";import"./EllipsisOutlined-CEeg_Xck.js";import"./index-CxTbkWiH.js";import"./useControlledState-tu5D_1Ht.js";import"./KeyCode-iX0y3px_.js";import"./Overflow-DnrDsobS.js";import"./Keyframes-B1gXKyPf.js";import"./motion-BDSEuMuf.js";import"./extends-CF3RwP-h.js";import"./focus-Bn7U5BjS.js";import"./omit-3QAACPn7.js";import"./placements-BDsFN2kw.js";import"./roundedArrow-CTehBM3O.js";import"./PurePanel-Bl8FDyk0.js";import"./useZIndex-4Tk46FxA.js";import"./useCSSVarCls-DSIlCV5N.js";import"./motion-CGP6LHXs.js";import"./index-BemBm_5k.js";import"./ContextIsolator-CerttSOP.js";import"./context-M28mY0tC.js";import"./Compact-SEgaOlnH.js";import"./useSize-BVGoiTzB.js";import"./useOrientation-CvsZ8lA6.js";import"./fade-BcJF4FJN.js";import"./zoom-pxgP0w3E.js";import"./colors-Bemwkw5B.js";import"./color-Cdu72wSx.js";import"./collapse-pgbaNnxn.js";import"./move-Bvj_4Dg2.js";const L=ze.createContext({}),B=({children:e})=>{const{getPrefixCls:r}=n.useContext(ce),t=r("breadcrumb"),o=n.useContext(L),{classNames:s,styles:a}=o;return n.createElement("li",{className:y(`${t}-separator`,s==null?void 0:s.separator),style:a==null?void 0:a.separator,"aria-hidden":"true"},e===""?e:e||"/")};B.__ANT_BREADCRUMB_SEPARATOR=!0;function Le(e,r){if(!k(e.title))return null;const t=Object.keys(r).join("|");return typeof e.title=="object"?e.title:String(e.title).replace(new RegExp(`:(${t})`,"g"),(o,s)=>r[s]||o)}function pe(e,r,t,o){if(!k(t))return null;const{className:s,onClick:a,...i}=r,l={...me(i,{data:!0,aria:!0}),onClick:a};return o!==void 0?n.createElement("a",{...l,className:y(`${e}-link`,s),href:o},t):n.createElement("span",{...l,className:y(`${e}-link`,s)},t)}function Oe(e,r){return(o,s,a,i,l)=>{if(r)return r(o,s,a,i);const m=Le(o,s);return pe(e,o,m,l)}}const ue=e=>{const{prefixCls:r,separator:t="/",children:o,menu:s,dropdownProps:a,href:i,dropdownIcon:l}=e,m=n.useContext(L),{classNames:f,styles:u}=m,S=(x=>{if(s){const I={...a};if(s){const{items:g,...H}=s||{};I.menu={...H,items:g==null?void 0:g.map(({key:D,title:z,label:T,path:N,...w},X)=>{let c=T??z;return N&&(c=n.createElement("a",{href:`${i}${N}`},c)),{...w,key:D??X,label:c}})}}return n.createElement(_e,{placement:"bottom",...I},n.createElement("span",{className:`${r}-overlay-link`},x,l))}return x})(o);return k(S)?n.createElement(n.Fragment,null,n.createElement("li",{className:y(`${r}-item`,f==null?void 0:f.item),style:u==null?void 0:u.item},S),t&&n.createElement(B,null,t)):null},de=e=>{const{prefixCls:r,children:t,href:o,...s}=e,{getPrefixCls:a}=n.useContext(ce),i=a("breadcrumb",r);return n.createElement(ue,{...s,prefixCls:i},pe(i,s,t,o))};de.__ANT_BREADCRUMB_ITEM=!0;const qe=e=>{const{componentCls:r,iconCls:t,calc:o}=e;return{[r]:{...Xe(e),color:e.itemColor,fontSize:e.fontSize,[t]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},[`${r}-item a`]:{color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${G(e.paddingXXS)}`,borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:o(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover},...we(e)},[`${r}-item:last-child`]:{color:e.lastItemColor},[`${r}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${r}-link`]:{[`
          > ${t} + span,
          > ${t} + a
        `]:{marginInlineStart:e.marginXXS}},[`${r}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:`0 ${G(e.paddingXXS)}`,marginInline:o(e.marginXXS).mul(-1).equal(),[`> ${t}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}}}},Ke=e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS}),Ue=Fe("Breadcrumb",e=>{const r=We(e,{});return qe(r)},Ke);function Ve(e){const{breadcrumbName:r,children:t,...o}=e,s={title:r,...o};return t&&(s.menu={items:t.map(({breadcrumbName:a,...i})=>({...i,title:a}))}),s}function Ge(e,r){return n.useMemo(()=>e||(r?r.map(Ve):null),[e,r])}const Je=(e,r)=>{if(r===void 0)return r;let t=(r||"").replace(/^\//,"");return Object.keys(e).forEach(o=>{t=t.replace(`:${o}`,e[o])}),t},Qe=e=>{const{prefixCls:r,separator:t,style:o,className:s,rootClassName:a,routes:i,items:l,children:m,itemRender:f,params:u={},classNames:q,styles:S,dropdownIcon:x,...I}=e,{getPrefixCls:g,direction:H,className:D,style:z,classNames:T,styles:N,separator:w,dropdownIcon:X}=Ae("breadcrumb"),c=t??w??"/",fe=x??X??n.createElement(Te,null);let A;const C=g("breadcrumb",r),[ge,Ce]=Ue(C),E=Ge(l,i),be=n.useMemo(()=>({...e,separator:c}),[e,c]),[j,_]=ke([T,q],[N,S],{props:be}),he=Oe(C,f);if(E&&E.length>0){const d=[],b=l||i;A=E.map((p,M)=>{const{path:Ie,key:Ne,type:Ee,menu:K,onClick:Me,className:$e,style:Pe,separator:Re,dropdownProps:ve}=p,F=Je(u,Ie);F!==void 0&&d.push(F);const U=Ne??M;if(Ee==="separator")return n.createElement(B,{key:U},Re);const V={},Be=M===E.length-1;K&&(V.menu=K);let{href:W}=p;return d.length&&F!==void 0&&(W=`#/${d.join("/")}`),n.createElement(ue,{key:U,...V,...me(p,{data:!0,aria:!0}),className:$e,style:Pe,dropdownProps:ve,dropdownIcon:fe,href:W,separator:Be?"":c,onClick:Me,prefixCls:C},he(p,u,b,d,W))})}else if(m){const d=J(m).length;A=J(m).map((b,p)=>{if(!b)return b;const M=p===d-1;return je(b,{separator:M?"":c,key:p})})}const ye=y(C,D,{[`${C}-rtl`]:H==="rtl"},s,a,j.root,ge,Ce),Se={..._.root,...z,...o},xe=n.useMemo(()=>({classNames:j,styles:_}),[j,_]);return n.createElement(L.Provider,{value:xe},n.createElement("nav",{className:ye,style:Se,...I},n.createElement("ol",null,A)))},O=Qe;O.Item=de;O.Separator=B;const Ur={title:"Navigation/Breadcrumb",component:O,tags:["autodocs"]},$={args:{items:[{title:"Home"},{title:"Merchants"},{title:"Detail"}]}},P={args:{separator:">",items:[{title:"Home"},{title:"Payments"},{title:"Transaction #1234"}]}},R={args:{items:[{title:h.jsx(He,{style:{fontSize:"1em"}})},{title:h.jsxs(h.Fragment,{children:[h.jsx(De,{style:{fontSize:"1em"}})," ",h.jsx("span",{children:"Merchants"})]})},{title:"Flock Coffee"}]}},v={args:{items:[{title:"Home"},{title:"Merchants",menu:{items:[{key:"1",label:"Active Merchants"},{key:"2",label:"Pending Merchants"},{key:"3",label:"Archived Merchants"}]}},{title:"Flock Coffee"}]}};var Q,Y,Z;$.parameters={...$.parameters,docs:{...(Q=$.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'Home'
    }, {
      title: 'Merchants'
    }, {
      title: 'Detail'
    }]
  }
}`,...(Z=(Y=$.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,te;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    separator: '>',
    items: [{
      title: 'Home'
    }, {
      title: 'Payments'
    }, {
      title: 'Transaction #1234'
    }]
  }
}`,...(te=(re=P.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,ne,se;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    items: [{
      title: <BuildingConstructionHomeHouseIcon style={{
        fontSize: '1em'
      }} />
    }, {
      title: <><BuildingConstructionStoreIcon style={{
          fontSize: '1em'
        }} /> <span>Merchants</span></>
    }, {
      title: 'Flock Coffee'
    }]
  }
}`,...(se=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ae,ie,le;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'Home'
    }, {
      title: 'Merchants',
      menu: {
        items: [{
          key: '1',
          label: 'Active Merchants'
        }, {
          key: '2',
          label: 'Pending Merchants'
        }, {
          key: '3',
          label: 'Archived Merchants'
        }]
      }
    }, {
      title: 'Flock Coffee'
    }]
  }
}`,...(le=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const Vr=["Default","WithSeparator","WithIcon","WithDropdownMenu"];export{$ as Default,v as WithDropdownMenu,R as WithIcon,P as WithSeparator,Vr as __namedExportsOrder,Ur as default};
