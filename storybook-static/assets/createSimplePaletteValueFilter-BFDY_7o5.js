var It=Object.defineProperty;var Bt=(t,e,n)=>e in t?It(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _=(t,e,n)=>Bt(t,typeof e!="symbol"?e+"":e,n);import{r as u,R as X}from"./index-D4lIrffr.js";import{_ as Dt,b as x,a as ct,s as tt,g as Lt,u as st,d as jt}from"./useForkRef-DKvbwOfq.js";import{j as N}from"./jsx-runtime-D_zvdyIk.js";import{u as pt}from"./DefaultPropsProvider-C_D9gtOx.js";import{u as kt,k as et}from"./useEnhancedEffect-BJR13lql.js";function G(t){const e=u.useRef(t);return kt(()=>{e.current=t}),u.useRef((...n)=>(0,e.current)(...n)).current}function at(t){try{return t.matches(":focus-visible")}catch{}return!1}const ut={};function ft(t,e){const n=u.useRef(ut);return n.current===ut&&(n.current=t(e)),n}class q{constructor(){_(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new q}static use(){const e=ft(q.create).current,[n,i]=u.useState(!1);return e.shouldMount=n,e.setShouldMount=i,u.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=Ot(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function Nt(){return q.use()}function Ot(){let t,e;const n=new Promise((i,r)=>{t=i,e=r});return n.resolve=t,n.reject=e,n}function vt(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function J(t,e){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},J(t,e)}function $t(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,J(t,e)}const lt=X.createContext(null);function Ft(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function nt(t,e){var n=function(o){return e&&u.isValidElement(o)?e(o):o},i=Object.create(null);return t&&u.Children.map(t,function(r){return r}).forEach(function(r){i[r.key]=n(r)}),i}function Ut(t,e){t=t||{},e=e||{};function n(d){return d in e?e[d]:t[d]}var i=Object.create(null),r=[];for(var o in t)o in e?r.length&&(i[o]=r,r=[]):r.push(o);var s,p={};for(var l in e){if(i[l])for(s=0;s<i[l].length;s++){var f=i[l][s];p[i[l][s]]=n(f)}p[l]=n(l)}for(s=0;s<r.length;s++)p[r[s]]=n(r[s]);return p}function k(t,e,n){return n[e]!=null?n[e]:t.props[e]}function zt(t,e){return nt(t.children,function(n){return u.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:k(n,"appear",t),enter:k(n,"enter",t),exit:k(n,"exit",t)})})}function At(t,e,n){var i=nt(t.children),r=Ut(e,i);return Object.keys(r).forEach(function(o){var s=r[o];if(u.isValidElement(s)){var p=o in e,l=o in i,f=e[o],d=u.isValidElement(f)&&!f.props.in;l&&(!p||d)?r[o]=u.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:k(s,"exit",t),enter:k(s,"enter",t)}):!l&&p&&!d?r[o]=u.cloneElement(s,{in:!1}):l&&p&&u.isValidElement(f)&&(r[o]=u.cloneElement(s,{onExited:n.bind(null,s),in:f.props.in,exit:k(s,"exit",t),enter:k(s,"enter",t)}))}}),r}var Yt=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},_t={component:"div",childFactory:function(e){return e}},rt=function(t){$t(e,t);function e(i,r){var o;o=t.call(this,i,r)||this;var s=o.handleExited.bind(Ft(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(r,o){var s=o.children,p=o.handleExited,l=o.firstRender;return{children:l?zt(r,p):At(r,s,p),firstRender:!1}},n.handleExited=function(r,o){var s=nt(this.props.children);r.key in s||(r.props.onExited&&r.props.onExited(o),this.mounted&&this.setState(function(p){var l=Dt({},p.children);return delete l[r.key],{children:l}}))},n.render=function(){var r=this.props,o=r.component,s=r.childFactory,p=vt(r,["component","childFactory"]),l=this.state.contextValue,f=Yt(this.state.children).map(s);return delete p.appear,delete p.enter,delete p.exit,o===null?X.createElement(lt.Provider,{value:l},f):X.createElement(lt.Provider,{value:l},X.createElement(o,p,f))},e}(X.Component);rt.propTypes={};rt.defaultProps=_t;const Xt=[];function Kt(t){u.useEffect(t,Xt)}class ot{constructor(){_(this,"currentId",null);_(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});_(this,"disposeEffect",()=>this.clear)}static create(){return new ot}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function Wt(){const t=ft(ot.create).current;return Kt(t.disposeEffect),t}function Ht(t){const{className:e,classes:n,pulsate:i=!1,rippleX:r,rippleY:o,rippleSize:s,in:p,onExited:l,timeout:f}=t,[d,h]=u.useState(!1),M=x(e,n.ripple,n.rippleVisible,i&&n.ripplePulsate),V={width:s,height:s,top:-(s/2)+o,left:-(s/2)+r},b=x(n.child,d&&n.childLeaving,i&&n.childPulsate);return!p&&!d&&h(!0),u.useEffect(()=>{if(!p&&l!=null){const B=setTimeout(l,f);return()=>{clearTimeout(B)}}},[l,p,f]),N.jsx("span",{className:M,style:V,children:N.jsx("span",{className:b})})}const g=ct("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Q=550,Gt=80,qt=et`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Zt=et`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Jt=et`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Qt=tt("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),te=tt(Ht,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${qt};
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
    animation-name: ${Zt};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Jt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,ee=u.forwardRef(function(e,n){const i=pt({props:e,name:"MuiTouchRipple"}),{center:r=!1,classes:o={},className:s,...p}=i,[l,f]=u.useState([]),d=u.useRef(0),h=u.useRef(null);u.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const M=u.useRef(!1),V=Wt(),b=u.useRef(null),B=u.useRef(null),C=u.useCallback(c=>{const{pulsate:R,rippleX:y,rippleY:$,rippleSize:D,cb:F}=c;f(E=>[...E,N.jsx(te,{classes:{ripple:x(o.ripple,g.ripple),rippleVisible:x(o.rippleVisible,g.rippleVisible),ripplePulsate:x(o.ripplePulsate,g.ripplePulsate),child:x(o.child,g.child),childLeaving:x(o.childLeaving,g.childLeaving),childPulsate:x(o.childPulsate,g.childPulsate)},timeout:Q,pulsate:R,rippleX:y,rippleY:$,rippleSize:D},d.current)]),d.current+=1,h.current=F},[o]),O=u.useCallback((c={},R={},y=()=>{})=>{const{pulsate:$=!1,center:D=r||R.pulsate,fakeElement:F=!1}=R;if((c==null?void 0:c.type)==="mousedown"&&M.current){M.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(M.current=!0);const E=F?null:B.current,S=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let w,T,I;if(D||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)w=Math.round(S.width/2),T=Math.round(S.height/2);else{const{clientX:U,clientY:L}=c.touches&&c.touches.length>0?c.touches[0]:c;w=Math.round(U-S.left),T=Math.round(L-S.top)}if(D)I=Math.sqrt((2*S.width**2+S.height**2)/3),I%2===0&&(I+=1);else{const U=Math.max(Math.abs((E?E.clientWidth:0)-w),w)*2+2,L=Math.max(Math.abs((E?E.clientHeight:0)-T),T)*2+2;I=Math.sqrt(U**2+L**2)}c!=null&&c.touches?b.current===null&&(b.current=()=>{C({pulsate:$,rippleX:w,rippleY:T,rippleSize:I,cb:y})},V.start(Gt,()=>{b.current&&(b.current(),b.current=null)})):C({pulsate:$,rippleX:w,rippleY:T,rippleSize:I,cb:y})},[r,C,V]),K=u.useCallback(()=>{O({},{pulsate:!0})},[O]),v=u.useCallback((c,R)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&b.current){b.current(),b.current=null,V.start(0,()=>{v(c,R)});return}b.current=null,f(y=>y.length>0?y.slice(1):y),h.current=R},[V]);return u.useImperativeHandle(n,()=>({pulsate:K,start:O,stop:v}),[K,O,v]),N.jsx(Qt,{className:x(g.root,o.root,s),ref:B,...p,children:N.jsx(rt,{component:null,exit:!0,children:l})})});function ne(t){return Lt("MuiButtonBase",t)}const re=ct("MuiButtonBase",["root","disabled","focusVisible"]),oe=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:i,classes:r}=t,s=jt({root:["root",e&&"disabled",n&&"focusVisible"]},ne,r);return n&&i&&(s.root+=` ${i}`),s},ie=tt("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${re.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),he=u.forwardRef(function(e,n){const i=pt({props:e,name:"MuiButtonBase"}),{action:r,centerRipple:o=!1,children:s,className:p,component:l="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:b="a",onBlur:B,onClick:C,onContextMenu:O,onDragLeave:K,onFocus:v,onFocusVisible:c,onKeyDown:R,onKeyUp:y,onMouseDown:$,onMouseLeave:D,onMouseUp:F,onTouchEnd:E,onTouchMove:S,onTouchStart:w,tabIndex:T=0,TouchRippleProps:I,touchRippleRef:U,type:L,...z}=i,A=u.useRef(null),m=Nt(),dt=st(m.ref,U),[j,W]=u.useState(!1);f&&j&&W(!1),u.useImperativeHandle(r,()=>({focusVisible:()=>{W(!0),A.current.focus()}}),[]);const ht=m.shouldMount&&!d&&!f;u.useEffect(()=>{j&&M&&!d&&m.pulsate()},[d,M,j,m]);const mt=P(m,"start",$,h),bt=P(m,"stop",O,h),gt=P(m,"stop",K,h),Mt=P(m,"stop",F,h),yt=P(m,"stop",a=>{j&&a.preventDefault(),D&&D(a)},h),Rt=P(m,"start",w,h),Et=P(m,"stop",E,h),xt=P(m,"stop",S,h),Ct=P(m,"stop",a=>{at(a.target)||W(!1),B&&B(a)},!1),Tt=G(a=>{A.current||(A.current=a.currentTarget),at(a.target)&&(W(!0),c&&c(a)),v&&v(a)}),Z=()=>{const a=A.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},Pt=G(a=>{M&&!a.repeat&&j&&a.key===" "&&m.stop(a,()=>{m.start(a)}),a.target===a.currentTarget&&Z()&&a.key===" "&&a.preventDefault(),R&&R(a),a.target===a.currentTarget&&Z()&&a.key==="Enter"&&!f&&(a.preventDefault(),C&&C(a))}),Vt=G(a=>{M&&a.key===" "&&j&&!a.defaultPrevented&&m.stop(a,()=>{m.pulsate(a)}),y&&y(a),C&&a.target===a.currentTarget&&Z()&&a.key===" "&&!a.defaultPrevented&&C(a)});let H=l;H==="button"&&(z.href||z.to)&&(H=b);const Y={};H==="button"?(Y.type=L===void 0?"button":L,Y.disabled=f):(!z.href&&!z.to&&(Y.role="button"),f&&(Y["aria-disabled"]=f));const St=st(n,A),it={...i,centerRipple:o,component:l,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:j},wt=oe(it);return N.jsxs(ie,{as:H,className:x(wt.root,p),ownerState:it,onBlur:Ct,onClick:C,onContextMenu:bt,onFocus:Tt,onKeyDown:Pt,onKeyUp:Vt,onMouseDown:mt,onMouseLeave:yt,onMouseUp:Mt,onDragLeave:gt,onTouchEnd:Et,onTouchMove:xt,onTouchStart:Rt,ref:St,tabIndex:f?-1:T,type:L,...Y,...z,children:[s,ht?N.jsx(ee,{ref:dt,center:o,...I}):null]})});function P(t,e,n,i=!1){return G(r=>(n&&n(r),i||t[e](r),!0))}function se(t){return typeof t.main=="string"}function ae(t,e=[]){if(!se(t))return!1;for(const n of e)if(!t.hasOwnProperty(n)||typeof t[n]!="string")return!1;return!0}function me(t=[]){return([,e])=>e&&ae(e,t)}export{he as B,me as c};
