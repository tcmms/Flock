import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as S}from"./index-oxIuDU2I.js";import{T as k}from"./index-iUUChC4Y.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-TJOQIVf4.js";import"./List-DpcyPBqC.js";import"./extends-CF3RwP-h.js";import"./index-BUbyd2uB.js";import"./index-Dn0hWNo5.js";import"./index-ChhEEol8.js";import"./toArray-QdoN5Rqg.js";import"./reactNode-CHTsHNSU.js";import"./SizeContext-6SbbsRse.js";import"./iconUtil-DTH6REU8.js";import"./pickAttrs-BoNuQqbq.js";import"./conductUtil-Hgjqn-LZ.js";import"./omit-3QAACPn7.js";import"./Keyframes-B1gXKyPf.js";import"./index-CPWzGJ2l.js";import"./util-Co9wUNrq.js";import"./genStyleUtils-lByCByip.js";import"./collapse-pgbaNnxn.js";import"./AntdIcon-CmaM0TST.js";import"./shadow-DTVO8V5H.js";import"./LoadingOutlined-Cogr-EmL.js";import"./motion-CGP6LHXs.js";import"./useMergeSemantic-BtH1ep6T.js";const F=k.DirectoryTree,n=[{title:"src",key:"0",children:[{title:"components",key:"0-0",children:[{title:"Button.tsx",key:"0-0-0",isLeaf:!0},{title:"Input.tsx",key:"0-0-1",isLeaf:!0},{title:"Select.tsx",key:"0-0-2",isLeaf:!0}]},{title:"utils",key:"0-1",children:[{title:"helpers.ts",key:"0-1-0",isLeaf:!0},{title:"constants.ts",key:"0-1-1",isLeaf:!0}]}]},{title:"public",key:"1",children:[{title:"index.html",key:"1-0",isLeaf:!0},{title:"favicon.ico",key:"1-1",isLeaf:!0}]},{title:"package.json",key:"2",isLeaf:!0},{title:"tsconfig.json",key:"3",isLeaf:!0}],De={title:"Data Display/Tree",component:k,tags:["autodocs"],parameters:{docs:{description:{component:"Tree — hierarchical tree structure for displaying nested data."}}}},c={args:{treeData:n,defaultExpandAll:!0}},u={name:"With checkbox",args:{treeData:n,checkable:!0,defaultExpandAll:!0,defaultCheckedKeys:["0-0-0","0-0-1"]}},p={args:{treeData:n,draggable:!0,defaultExpandAll:!0}},h={name:"Directory tree",render:()=>r.jsx(F,{treeData:n,defaultExpandAll:!0,multiple:!0})},f={name:"With search",render:()=>{const[s,g]=S.useState(""),[x,i]=S.useState(["0","0-0","0-1","1"]),D=(a,t)=>{const e=[],l=(v,o,C)=>{for(const d of v){if(d.key===o)return e.push(...C),!0;if(d.children&&l(d.children,o,[...C,d.key]))return!0}return!1};return l(t,a,[]),e},L=a=>{const t=a.target.value;if(g(t),t){const e=[],l=v=>{for(const o of v)o.title.toLowerCase().includes(t.toLowerCase())&&e.push(...D(o.key,n)),o.children&&l(o.children)};l(n),i([...new Set(e)])}};return r.jsxs("div",{children:[r.jsx("input",{placeholder:"Search tree…",value:s,onChange:L,style:{width:"100%",marginBottom:"var(--flock-space-2)",padding:"var(--flock-padding-xxs) var(--flock-padding-xs)",border:"var(--flock-line-width) solid var(--flock-color-border)",borderRadius:"var(--flock-radius-sm)"}}),r.jsx(k,{treeData:n,expandedKeys:x,onExpand:i,titleRender:a=>{const t=a.title;if(!s)return r.jsx("span",{children:t});const e=t.toLowerCase().indexOf(s.toLowerCase());return e===-1?r.jsx("span",{children:t}):r.jsxs("span",{children:[t.slice(0,e),r.jsx("span",{style:{color:"var(--flock-color-error)"},children:t.slice(e,e+s.length)}),t.slice(e+s.length)]})}})]})}},m={name:"With line",args:{treeData:n,showLine:!0,defaultExpandAll:!0}},y={name:"Async load",render:()=>{const[s,g]=S.useState([{title:"Expand me",key:"0"},{title:"Another node",key:"1"},{title:"Leaf node",key:"2",isLeaf:!0}]),x=({key:i})=>new Promise(D=>{setTimeout(()=>{g(L=>{const a=t=>t.map(e=>e.key===i?{...e,children:[{title:`${e.title} — Child 1`,key:`${i}-0`,isLeaf:!0},{title:`${e.title} — Child 2`,key:`${i}-1`,isLeaf:!0}]}:e.children?{...e,children:a(e.children)}:e);return a(L)}),D()},800)});return r.jsx(k,{treeData:s,loadData:x})}};var E,K,A;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    treeData,
    defaultExpandAll: true
  }
}`,...(A=(K=c.parameters)==null?void 0:K.docs)==null?void 0:A.source}}};var w,b,T;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'With checkbox',
  args: {
    treeData,
    checkable: true,
    defaultExpandAll: true,
    defaultCheckedKeys: ['0-0-0', '0-0-1']
  }
}`,...(T=(b=u.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var j,R,W;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    treeData,
    draggable: true,
    defaultExpandAll: true
  }
}`,...(W=(R=p.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var V,P,$;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Directory tree',
  render: () => <DirectoryTree treeData={treeData} defaultExpandAll multiple />
}`,...($=(P=h.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var N,B,O;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'With search',
  render: () => {
    const [searchValue, setSearchValue] = React.useState('');
    const [expandedKeys, setExpandedKeys] = React.useState<React.Key[]>(['0', '0-0', '0-1', '1']);
    const getAllParentKeys = (key: string, data: DataNode[]): string[] => {
      const keys: string[] = [];
      const findParent = (nodes: DataNode[], targetKey: string, parents: string[]) => {
        for (const node of nodes) {
          if (node.key === targetKey) {
            keys.push(...parents);
            return true;
          }
          if (node.children) {
            if (findParent(node.children, targetKey, [...parents, node.key as string])) return true;
          }
        }
        return false;
      };
      findParent(data, key, []);
      return keys;
    };
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchValue(value);
      if (value) {
        const flatKeys: string[] = [];
        const flatten = (nodes: DataNode[]) => {
          for (const node of nodes) {
            if ((node.title as string).toLowerCase().includes(value.toLowerCase())) {
              flatKeys.push(...getAllParentKeys(node.key as string, treeData));
            }
            if (node.children) flatten(node.children);
          }
        };
        flatten(treeData);
        setExpandedKeys([...new Set(flatKeys)]);
      }
    };
    return <div>
        <input placeholder="Search tree…" value={searchValue} onChange={handleSearch} style={{
        width: '100%',
        marginBottom: 'var(--flock-space-2)',
        padding: 'var(--flock-padding-xxs) var(--flock-padding-xs)',
        border: 'var(--flock-line-width) solid var(--flock-color-border)',
        borderRadius: 'var(--flock-radius-sm)'
      }} />
        <Tree treeData={treeData} expandedKeys={expandedKeys} onExpand={setExpandedKeys} titleRender={node => {
        const title = node.title as string;
        if (!searchValue) return <span>{title}</span>;
        const index = title.toLowerCase().indexOf(searchValue.toLowerCase());
        if (index === -1) return <span>{title}</span>;
        return <span>
                {title.slice(0, index)}
                <span style={{
            color: 'var(--flock-color-error)'
          }}>{title.slice(index, index + searchValue.length)}</span>
                {title.slice(index + searchValue.length)}
              </span>;
      }} />
      </div>;
  }
}`,...(O=(B=f.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var I,_,H;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'With line',
  args: {
    treeData,
    showLine: true,
    defaultExpandAll: true
  }
}`,...(H=(_=m.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var M,q,z;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Async load',
  render: () => {
    const [data, setData] = React.useState<DataNode[]>([{
      title: 'Expand me',
      key: '0'
    }, {
      title: 'Another node',
      key: '1'
    }, {
      title: 'Leaf node',
      key: '2',
      isLeaf: true
    }]);
    const onLoadData = ({
      key
    }: any) => new Promise<void>(resolve => {
      setTimeout(() => {
        setData(prev => {
          const addChildren = (nodes: DataNode[]): DataNode[] => nodes.map(node => {
            if (node.key === key) {
              return {
                ...node,
                children: [{
                  title: \`\${node.title} — Child 1\`,
                  key: \`\${key}-0\`,
                  isLeaf: true
                }, {
                  title: \`\${node.title} — Child 2\`,
                  key: \`\${key}-1\`,
                  isLeaf: true
                }]
              };
            }
            if (node.children) return {
              ...node,
              children: addChildren(node.children)
            };
            return node;
          });
          return addChildren(prev);
        });
        resolve();
      }, 800);
    });
    return <Tree treeData={data} loadData={onLoadData} />;
  }
}`,...(z=(q=y.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const Le=["Default","WithCheckbox","Draggable","DirectoryTreeStory","WithSearch","WithLine","AsyncLoad"];export{y as AsyncLoad,c as Default,h as DirectoryTreeStory,p as Draggable,u as WithCheckbox,m as WithLine,f as WithSearch,Le as __namedExportsOrder,De as default};
