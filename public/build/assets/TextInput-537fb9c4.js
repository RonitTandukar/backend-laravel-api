import{a as s,r as e}from"./app-01da8152.js";function i({message:t,className:o="",...a}){return t?s("p",{...a,className:"text-sm text-red-600 dark:text-red-400 "+o,children:t}):null}const l=e.forwardRef(function({type:o="text",className:a="",isFocused:d=!1,...u},c){const n=e.useRef(null);return e.useImperativeHandle(c,()=>({focus:()=>{var r;return(r=n.current)==null?void 0:r.focus()}})),e.useEffect(()=>{var r;d&&((r=n.current)==null||r.focus())},[]),s("input",{...u,type:o,className:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm "+a,ref:n})});export{i as I,l as T};
