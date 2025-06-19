var It=Object.defineProperty;var Bt=(t,e,n)=>e in t?It(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Y=(t,e,n)=>Bt(t,typeof e!="symbol"?e+"":e,n);import{r as u,R as X}from"./index-D4H_InIO.js";import{_ as Dt,c as x,g as ct,s as tt,b as Lt,u as st,d as vt}from"./createSvgIcon-CKKfgglB.js";import{j as k}from"./jsx-runtime-BO8uF4Og.js";import{u as pt}from"./DefaultPropsProvider-CH6vpq24.js";import{u as jt,k as et}from"./defaultPalette-CxKQFA3H.js";function G(t){const e=u.useRef(t);return jt(()=>{e.current=t}),u.useRef((...n)=>(0,e.current)(...n)).current}const at={};function ft(t,e){const n=u.useRef(at);return n.current===at&&(n.current=t(e)),n}const kt=[];function Nt(t){u.useEffect(t,kt)}class nt{constructor(){Y(this,"currentId",null);Y(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});Y(this,"disposeEffect",()=>this.clear)}static create(){return new nt}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function Ot(){const t=ft(nt.create).current;return Nt(t.disposeEffect),t}function ut(t){try{return t.matches(":focus-visible")}catch{}return!1}function $t(t){return typeof t.main=="string"}function Ft(t,e=[]){if(!$t(t))return!1;for(const n of e)if(!t.hasOwnProperty(n)||typeof t[n]!="string")return!1;return!0}function he(t=[]){return([,e])=>e&&Ft(e,t)}class q{constructor(){Y(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new q}static use(){const e=ft(q.create).current,[n,i]=u.useState(!1);return e.shouldMount=n,e.setShouldMount=i,u.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=zt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function Ut(){return q.use()}function zt(){let t,e;const n=new Promise((i,r)=>{t=i,e=r});return n.resolve=t,n.reject=e,n}function _t(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function J(t,e){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},J(t,e)}function At(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,J(t,e)}const lt=X.createContext(null);function Yt(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function rt(t,e){var n=function(o){return e&&u.isValidElement(o)?e(o):o},i=Object.create(null);return t&&u.Children.map(t,function(r){return r}).forEach(function(r){i[r.key]=n(r)}),i}function Xt(t,e){t=t||{},e=e||{};function n(d){return d in e?e[d]:t[d]}var i=Object.create(null),r=[];for(var o in t)o in e?r.length&&(i[o]=r,r=[]):r.push(o);var s,p={};for(var l in e){if(i[l])for(s=0;s<i[l].length;s++){var f=i[l][s];p[i[l][s]]=n(f)}p[l]=n(l)}for(s=0;s<r.length;s++)p[r[s]]=n(r[s]);return p}function j(t,e,n){return n[e]!=null?n[e]:t.props[e]}function Kt(t,e){return rt(t.children,function(n){return u.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:j(n,"appear",t),enter:j(n,"enter",t),exit:j(n,"exit",t)})})}function Wt(t,e,n){var i=rt(t.children),r=Xt(e,i);return Object.keys(r).forEach(function(o){var s=r[o];if(u.isValidElement(s)){var p=o in e,l=o in i,f=e[o],d=u.isValidElement(f)&&!f.props.in;l&&(!p||d)?r[o]=u.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:j(s,"exit",t),enter:j(s,"enter",t)}):!l&&p&&!d?r[o]=u.cloneElement(s,{in:!1}):l&&p&&u.isValidElement(f)&&(r[o]=u.cloneElement(s,{onExited:n.bind(null,s),in:f.props.in,exit:j(s,"exit",t),enter:j(s,"enter",t)}))}}),r}var Ht=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},Gt={component:"div",childFactory:function(e){return e}},ot=function(t){At(e,t);function e(i,r){var o;o=t.call(this,i,r)||this;var s=o.handleExited.bind(Yt(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(r,o){var s=o.children,p=o.handleExited,l=o.firstRender;return{children:l?Kt(r,p):Wt(r,s,p),firstRender:!1}},n.handleExited=function(r,o){var s=rt(this.props.children);r.key in s||(r.props.onExited&&r.props.onExited(o),this.mounted&&this.setState(function(p){var l=Dt({},p.children);return delete l[r.key],{children:l}}))},n.render=function(){var r=this.props,o=r.component,s=r.childFactory,p=_t(r,["component","childFactory"]),l=this.state.contextValue,f=Ht(this.state.children).map(s);return delete p.appear,delete p.enter,delete p.exit,o===null?X.createElement(lt.Provider,{value:l},f):X.createElement(lt.Provider,{value:l},X.createElement(o,p,f))},e}(X.Component);ot.propTypes={};ot.defaultProps=Gt;function qt(t){const{className:e,classes:n,pulsate:i=!1,rippleX:r,rippleY:o,rippleSize:s,in:p,onExited:l,timeout:f}=t,[d,h]=u.useState(!1),M=x(e,n.ripple,n.rippleVisible,i&&n.ripplePulsate),V={width:s,height:s,top:-(s/2)+o,left:-(s/2)+r},b=x(n.child,d&&n.childLeaving,i&&n.childPulsate);return!p&&!d&&h(!0),u.useEffect(()=>{if(!p&&l!=null){const B=setTimeout(l,f);return()=>{clearTimeout(B)}}},[l,p,f]),k.jsx("span",{className:M,style:V,children:k.jsx("span",{className:b})})}const g=ct("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Q=550,Zt=80,Jt=et`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Qt=et`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,te=et`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,ee=tt("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ne=tt(qt,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Jt};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${g.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${g.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${g.childLeaving} {
    opacity: 0;
    animation-name: ${Qt};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${te};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,re=u.forwardRef(function(e,n){const i=pt({props:e,name:"MuiTouchRipple"}),{center:r=!1,classes:o={},className:s,...p}=i,[l,f]=u.useState([]),d=u.useRef(0),h=u.useRef(null);u.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const M=u.useRef(!1),V=Ot(),b=u.useRef(null),B=u.useRef(null),C=u.useCallback(c=>{const{pulsate:R,rippleX:y,rippleY:$,rippleSize:D,cb:F}=c;f(E=>[...E,k.jsx(ne,{classes:{ripple:x(o.ripple,g.ripple),rippleVisible:x(o.rippleVisible,g.rippleVisible),ripplePulsate:x(o.ripplePulsate,g.ripplePulsate),child:x(o.child,g.child),childLeaving:x(o.childLeaving,g.childLeaving),childPulsate:x(o.childPulsate,g.childPulsate)},timeout:Q,pulsate:R,rippleX:y,rippleY:$,rippleSize:D},d.current)]),d.current+=1,h.current=F},[o]),N=u.useCallback((c={},R={},y=()=>{})=>{const{pulsate:$=!1,center:D=r||R.pulsate,fakeElement:F=!1}=R;if((c==null?void 0:c.type)==="mousedown"&&M.current){M.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(M.current=!0);const E=F?null:B.current,S=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let w,T,I;if(D||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)w=Math.round(S.width/2),T=Math.round(S.height/2);else{const{clientX:U,clientY:L}=c.touches&&c.touches.length>0?c.touches[0]:c;w=Math.round(U-S.left),T=Math.round(L-S.top)}if(D)I=Math.sqrt((2*S.width**2+S.height**2)/3),I%2===0&&(I+=1);else{const U=Math.max(Math.abs((E?E.clientWidth:0)-w),w)*2+2,L=Math.max(Math.abs((E?E.clientHeight:0)-T),T)*2+2;I=Math.sqrt(U**2+L**2)}c!=null&&c.touches?b.current===null&&(b.current=()=>{C({pulsate:$,rippleX:w,rippleY:T,rippleSize:I,cb:y})},V.start(Zt,()=>{b.current&&(b.current(),b.current=null)})):C({pulsate:$,rippleX:w,rippleY:T,rippleSize:I,cb:y})},[r,C,V]),K=u.useCallback(()=>{N({},{pulsate:!0})},[N]),O=u.useCallback((c,R)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&b.current){b.current(),b.current=null,V.start(0,()=>{O(c,R)});return}b.current=null,f(y=>y.length>0?y.slice(1):y),h.current=R},[V]);return u.useImperativeHandle(n,()=>({pulsate:K,start:N,stop:O}),[K,N,O]),k.jsx(ee,{className:x(g.root,o.root,s),ref:B,...p,children:k.jsx(ot,{component:null,exit:!0,children:l})})});function oe(t){return Lt("MuiButtonBase",t)}const ie=ct("MuiButtonBase",["root","disabled","focusVisible"]),se=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:i,classes:r}=t,s=vt({root:["root",e&&"disabled",n&&"focusVisible"]},oe,r);return n&&i&&(s.root+=` ${i}`),s},ae=tt("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ie.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),me=u.forwardRef(function(e,n){const i=pt({props:e,name:"MuiButtonBase"}),{action:r,centerRipple:o=!1,children:s,className:p,component:l="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:b="a",onBlur:B,onClick:C,onContextMenu:N,onDragLeave:K,onFocus:O,onFocusVisible:c,onKeyDown:R,onKeyUp:y,onMouseDown:$,onMouseLeave:D,onMouseUp:F,onTouchEnd:E,onTouchMove:S,onTouchStart:w,tabIndex:T=0,TouchRippleProps:I,touchRippleRef:U,type:L,...z}=i,_=u.useRef(null),m=Ut(),dt=st(m.ref,U),[v,W]=u.useState(!1);f&&v&&W(!1),u.useImperativeHandle(r,()=>({focusVisible:()=>{W(!0),_.current.focus()}}),[]);const ht=m.shouldMount&&!d&&!f;u.useEffect(()=>{v&&M&&!d&&m.pulsate()},[d,M,v,m]);const mt=P(m,"start",$,h),bt=P(m,"stop",N,h),gt=P(m,"stop",K,h),Mt=P(m,"stop",F,h),yt=P(m,"stop",a=>{v&&a.preventDefault(),D&&D(a)},h),Rt=P(m,"start",w,h),Et=P(m,"stop",E,h),xt=P(m,"stop",S,h),Ct=P(m,"stop",a=>{ut(a.target)||W(!1),B&&B(a)},!1),Tt=G(a=>{_.current||(_.current=a.currentTarget),ut(a.target)&&(W(!0),c&&c(a)),O&&O(a)}),Z=()=>{const a=_.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},Pt=G(a=>{M&&!a.repeat&&v&&a.key===" "&&m.stop(a,()=>{m.start(a)}),a.target===a.currentTarget&&Z()&&a.key===" "&&a.preventDefault(),R&&R(a),a.target===a.currentTarget&&Z()&&a.key==="Enter"&&!f&&(a.preventDefault(),C&&C(a))}),Vt=G(a=>{M&&a.key===" "&&v&&!a.defaultPrevented&&m.stop(a,()=>{m.pulsate(a)}),y&&y(a),C&&a.target===a.currentTarget&&Z()&&a.key===" "&&!a.defaultPrevented&&C(a)});let H=l;H==="button"&&(z.href||z.to)&&(H=b);const A={};H==="button"?(A.type=L===void 0?"button":L,A.disabled=f):(!z.href&&!z.to&&(A.role="button"),f&&(A["aria-disabled"]=f));const St=st(n,_),it={...i,centerRipple:o,component:l,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:v},wt=se(it);return k.jsxs(ae,{as:H,className:x(wt.root,p),ownerState:it,onBlur:Ct,onClick:C,onContextMenu:bt,onFocus:Tt,onKeyDown:Pt,onKeyUp:Vt,onMouseDown:mt,onMouseLeave:yt,onMouseUp:Mt,onDragLeave:gt,onTouchEnd:Et,onTouchMove:xt,onTouchStart:Rt,ref:St,tabIndex:f?-1:T,type:L,...A,...z,children:[s,ht?k.jsx(re,{ref:dt,center:o,...I}):null]})});function P(t,e,n,i=!1){return G(r=>(n&&n(r),i||t[e](r),!0))}export{me as B,lt as T,At as _,_t as a,Ot as b,he as c,G as u};
