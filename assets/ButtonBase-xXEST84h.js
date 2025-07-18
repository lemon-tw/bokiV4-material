var Pt=Object.defineProperty;var Vt=(e,t,n)=>t in e?Pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ot=(e,t,n)=>Vt(e,typeof t!="symbol"?t+"":t,n);import{r as l,R as H}from"./index-D4H_InIO.js";import{_ as Bt,c as x,b as at,s as Q,g as St,a as wt}from"./memoTheme-DQLz_w2O.js";import{j as N}from"./jsx-runtime-BO8uF4Og.js";import{u as lt}from"./DefaultPropsProvider-CwqFt9v8.js";import{d as Dt,_ as Lt,b as jt,c as it,u as kt,a as _}from"./TransitionGroupContext-CaPC4DFa.js";import{k as Z}from"./emotion-react.browser.esm-D6104Ad_.js";import{u as st}from"./useForkRef-Tlf6rvD7.js";function rt(e){try{return e.matches(":focus-visible")}catch{}return!1}class G{constructor(){ot(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new G}static use(){const t=Dt(G.create).current,[n,a]=l.useState(!1);return t.shouldMount=n,t.setShouldMount=a,l.useEffect(t.mountEffect,[n]),t}mount(){return this.mounted||(this.mounted=Nt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...t)})}stop(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...t)})}pulsate(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...t)})}}function vt(){return G.use()}function Nt(){let e,t;const n=new Promise((a,o)=>{e=a,t=o});return n.resolve=e,n.reject=t,n}function $t(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function tt(e,t){var n=function(i){return t&&l.isValidElement(i)?t(i):i},a=Object.create(null);return e&&l.Children.map(e,function(o){return o}).forEach(function(o){a[o.key]=n(o)}),a}function Ft(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var a=Object.create(null),o=[];for(var i in e)i in t?o.length&&(a[i]=o,o=[]):o.push(i);var s,p={};for(var u in t){if(a[u])for(s=0;s<a[u].length;s++){var f=a[u][s];p[a[u][s]]=n(f)}p[u]=n(u)}for(s=0;s<o.length;s++)p[o[s]]=n(o[s]);return p}function v(e,t,n){return n[t]!=null?n[t]:e.props[t]}function It(e,t){return tt(e.children,function(n){return l.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:v(n,"appear",e),enter:v(n,"enter",e),exit:v(n,"exit",e)})})}function Ut(e,t,n){var a=tt(e.children),o=Ft(t,a);return Object.keys(o).forEach(function(i){var s=o[i];if(l.isValidElement(s)){var p=i in t,u=i in a,f=t[i],d=l.isValidElement(f)&&!f.props.in;u&&(!p||d)?o[i]=l.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:v(s,"exit",e),enter:v(s,"enter",e)}):!u&&p&&!d?o[i]=l.cloneElement(s,{in:!1}):u&&p&&l.isValidElement(f)&&(o[i]=l.cloneElement(s,{onExited:n.bind(null,s),in:f.props.in,exit:v(s,"exit",e),enter:v(s,"enter",e)}))}}),o}var zt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Ot={component:"div",childFactory:function(t){return t}},et=function(e){Lt(t,e);function t(a,o){var i;i=e.call(this,a,o)||this;var s=i.handleExited.bind($t(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,i){var s=i.children,p=i.handleExited,u=i.firstRender;return{children:u?It(o,p):Ut(o,s,p),firstRender:!1}},n.handleExited=function(o,i){var s=tt(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(p){var u=Bt({},p.children);return delete u[o.key],{children:u}}))},n.render=function(){var o=this.props,i=o.component,s=o.childFactory,p=jt(o,["component","childFactory"]),u=this.state.contextValue,f=zt(this.state.children).map(s);return delete p.appear,delete p.enter,delete p.exit,i===null?H.createElement(it.Provider,{value:u},f):H.createElement(it.Provider,{value:u},H.createElement(i,p,f))},t}(H.Component);et.propTypes={};et.defaultProps=Ot;function At(e){const{className:t,classes:n,pulsate:a=!1,rippleX:o,rippleY:i,rippleSize:s,in:p,onExited:u,timeout:f}=e,[d,h]=l.useState(!1),M=x(t,n.ripple,n.rippleVisible,a&&n.ripplePulsate),V={width:s,height:s,top:-(s/2)+i,left:-(s/2)+o},b=x(n.child,d&&n.childLeaving,a&&n.childPulsate);return!p&&!d&&h(!0),l.useEffect(()=>{if(!p&&u!=null){const D=setTimeout(u,f);return()=>{clearTimeout(D)}}},[u,p,f]),N.jsx("span",{className:M,style:V,children:N.jsx("span",{className:b})})}const g=at("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Xt=80,Yt=Z`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Kt=Z`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Wt=Z`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Ht=Q("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),_t=Q(At,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Yt};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${g.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
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
    animation-name: ${Kt};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Wt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Gt=l.forwardRef(function(t,n){const a=lt({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:s,...p}=a,[u,f]=l.useState([]),d=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[u]);const M=l.useRef(!1),V=kt(),b=l.useRef(null),D=l.useRef(null),C=l.useCallback(c=>{const{pulsate:y,rippleX:R,rippleY:I,rippleSize:L,cb:U}=c;f(E=>[...E,N.jsx(_t,{classes:{ripple:x(i.ripple,g.ripple),rippleVisible:x(i.rippleVisible,g.rippleVisible),ripplePulsate:x(i.ripplePulsate,g.ripplePulsate),child:x(i.child,g.child),childLeaving:x(i.childLeaving,g.childLeaving),childPulsate:x(i.childPulsate,g.childPulsate)},timeout:J,pulsate:y,rippleX:R,rippleY:I,rippleSize:L},d.current)]),d.current+=1,h.current=U},[i]),$=l.useCallback((c={},y={},R=()=>{})=>{const{pulsate:I=!1,center:L=o||y.pulsate,fakeElement:U=!1}=y;if((c==null?void 0:c.type)==="mousedown"&&M.current){M.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(M.current=!0);const E=U?null:D.current,B=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let S,T,w;if(L||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)S=Math.round(B.width/2),T=Math.round(B.height/2);else{const{clientX:z,clientY:j}=c.touches&&c.touches.length>0?c.touches[0]:c;S=Math.round(z-B.left),T=Math.round(j-B.top)}if(L)w=Math.sqrt((2*B.width**2+B.height**2)/3),w%2===0&&(w+=1);else{const z=Math.max(Math.abs((E?E.clientWidth:0)-S),S)*2+2,j=Math.max(Math.abs((E?E.clientHeight:0)-T),T)*2+2;w=Math.sqrt(z**2+j**2)}c!=null&&c.touches?b.current===null&&(b.current=()=>{C({pulsate:I,rippleX:S,rippleY:T,rippleSize:w,cb:R})},V.start(Xt,()=>{b.current&&(b.current(),b.current=null)})):C({pulsate:I,rippleX:S,rippleY:T,rippleSize:w,cb:R})},[o,C,V]),Y=l.useCallback(()=>{$({},{pulsate:!0})},[$]),F=l.useCallback((c,y)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&b.current){b.current(),b.current=null,V.start(0,()=>{F(c,y)});return}b.current=null,f(R=>R.length>0?R.slice(1):R),h.current=y},[V]);return l.useImperativeHandle(n,()=>({pulsate:Y,start:$,stop:F}),[Y,$,F]),N.jsx(Ht,{className:x(g.root,i.root,s),ref:D,...p,children:N.jsx(et,{component:null,exit:!0,children:u})})});function qt(e){return St("MuiButtonBase",e)}const Jt=at("MuiButtonBase",["root","disabled","focusVisible"]),Qt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:a,classes:o}=e,s=wt({root:["root",t&&"disabled",n&&"focusVisible"]},qt,o);return n&&a&&(s.root+=` ${a}`),s},Zt=Q("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Jt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),le=l.forwardRef(function(t,n){const a=lt({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:s,className:p,component:u="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:b="a",onBlur:D,onClick:C,onContextMenu:$,onDragLeave:Y,onFocus:F,onFocusVisible:c,onKeyDown:y,onKeyUp:R,onMouseDown:I,onMouseLeave:L,onMouseUp:U,onTouchEnd:E,onTouchMove:B,onTouchStart:S,tabIndex:T=0,TouchRippleProps:w,touchRippleRef:z,type:j,...O}=a,A=l.useRef(null),m=vt(),ut=st(m.ref,z),[k,K]=l.useState(!1);f&&k&&K(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const ct=m.shouldMount&&!d&&!f;l.useEffect(()=>{k&&M&&!d&&m.pulsate()},[d,M,k,m]);const pt=P(m,"start",I,h),ft=P(m,"stop",$,h),dt=P(m,"stop",Y,h),ht=P(m,"stop",U,h),mt=P(m,"stop",r=>{k&&r.preventDefault(),L&&L(r)},h),bt=P(m,"start",S,h),gt=P(m,"stop",E,h),Mt=P(m,"stop",B,h),Rt=P(m,"stop",r=>{rt(r.target)||K(!1),D&&D(r)},!1),yt=_(r=>{A.current||(A.current=r.currentTarget),rt(r.target)&&(K(!0),c&&c(r)),F&&F(r)}),q=()=>{const r=A.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Et=_(r=>{M&&!r.repeat&&k&&r.key===" "&&m.stop(r,()=>{m.start(r)}),r.target===r.currentTarget&&q()&&r.key===" "&&r.preventDefault(),y&&y(r),r.target===r.currentTarget&&q()&&r.key==="Enter"&&!f&&(r.preventDefault(),C&&C(r))}),xt=_(r=>{M&&r.key===" "&&k&&!r.defaultPrevented&&m.stop(r,()=>{m.pulsate(r)}),R&&R(r),C&&r.target===r.currentTarget&&q()&&r.key===" "&&!r.defaultPrevented&&C(r)});let W=u;W==="button"&&(O.href||O.to)&&(W=b);const X={};W==="button"?(X.type=j===void 0?"button":j,X.disabled=f):(!O.href&&!O.to&&(X.role="button"),f&&(X["aria-disabled"]=f));const Ct=st(n,A),nt={...a,centerRipple:i,component:u,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:k},Tt=Qt(nt);return N.jsxs(Zt,{as:W,className:x(Tt.root,p),ownerState:nt,onBlur:Rt,onClick:C,onContextMenu:ft,onFocus:yt,onKeyDown:Et,onKeyUp:xt,onMouseDown:pt,onMouseLeave:mt,onMouseUp:ht,onDragLeave:dt,onTouchEnd:gt,onTouchMove:Mt,onTouchStart:bt,ref:Ct,tabIndex:f?-1:T,type:j,...X,...O,children:[s,ct?N.jsx(Gt,{ref:ut,center:i,...w}):null]})});function P(e,t,n,a=!1){return _(o=>(n&&n(o),a||e[t](o),!0))}export{le as B,et as T,rt as i};
