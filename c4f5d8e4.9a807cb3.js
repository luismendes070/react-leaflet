(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{145:function(n,e,t){"use strict";var r={};t.r(r),t.d(r,"useAttribution",(function(){return a})),t.d(r,"updateCircle",(function(){return i})),t.d(r,"createContainerComponent",(function(){return m})),t.d(r,"createDivOverlayComponent",(function(){return y})),t.d(r,"createLeafComponent",(function(){return b})),t.d(r,"CONTEXT_VERSION",(function(){return s})),t.d(r,"LeafletContext",(function(){return f})),t.d(r,"LeafletProvider",(function(){return d})),t.d(r,"useLeafletContext",(function(){return p})),t.d(r,"createControlHook",(function(){return O})),t.d(r,"createDivOverlayHook",(function(){return h})),t.d(r,"addClassName",(function(){return w})),t.d(r,"removeClassName",(function(){return E})),t.d(r,"updateClassName",(function(){return L})),t.d(r,"createElementHook",(function(){return x})),t.d(r,"useEventHandlers",(function(){return v})),t.d(r,"createControlComponent",(function(){return M})),t.d(r,"createLayerComponent",(function(){return N})),t.d(r,"createOverlayComponent",(function(){return S})),t.d(r,"createPathComponent",(function(){return z})),t.d(r,"createTileLayerComponent",(function(){return T})),t.d(r,"updateGridLayer",(function(){return H})),t.d(r,"createLayerHook",(function(){return k})),t.d(r,"useLayerLifecycle",(function(){return P})),t.d(r,"updateMediaOverlay",(function(){return _})),t.d(r,"withPane",(function(){return C})),t.d(r,"createPathHook",(function(){return I})),t.d(r,"usePathOptions",(function(){return R}));var o={};t.r(o),t.d(o,"useMap",(function(){return G})),t.d(o,"useMapEvent",(function(){return A})),t.d(o,"useMapEvents",(function(){return B})),t.d(o,"AttributionControl",(function(){return V})),t.d(o,"Circle",(function(){return Z})),t.d(o,"CircleMarker",(function(){return D})),t.d(o,"FeatureGroup",(function(){return J})),t.d(o,"GeoJSON",(function(){return U})),t.d(o,"ImageOverlay",(function(){return W})),t.d(o,"LayerGroup",(function(){return $})),t.d(o,"LayersControl",(function(){return F})),t.d(o,"MapConsumer",(function(){return X})),t.d(o,"MapContainer",(function(){return Y})),t.d(o,"Marker",(function(){return K})),t.d(o,"Pane",(function(){return en})),t.d(o,"Polygon",(function(){return tn})),t.d(o,"Polyline",(function(){return rn})),t.d(o,"Popup",(function(){return on})),t.d(o,"Rectangle",(function(){return un})),t.d(o,"ScaleControl",(function(){return cn})),t.d(o,"SVGOverlay",(function(){return sn})),t.d(o,"TileLayer",(function(){return fn})),t.d(o,"Tooltip",(function(){return dn})),t.d(o,"VideoOverlay",(function(){return pn})),t.d(o,"WMSTileLayer",(function(){return mn})),t.d(o,"ZoomControl",(function(){return yn}));var u=t(0),c=t.n(u);function a(n,e){const t=Object(u.useRef)(e);Object(u.useEffect)((function(){e!==t.current&&null!=n.attributionControl&&(null!=t.current&&n.attributionControl.removeAttribution(t.current),null!=e&&n.attributionControl.addAttribution(e)),t.current=e}),[n,e])}function i(n,e,t){e.center!==t.center&&n.setLatLng(e.center),null!=e.radius&&e.radius!==t.radius&&n.setRadius(e.radius)}var l=t(23);const s=1,f=Object(u.createContext)(null),d=f.Provider;function p(){const n=Object(u.useContext)(f);if(null==n)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return n}function m(n){function e(e,t){const{instance:r,context:o}=n(e).current;return Object(u.useImperativeHandle)(t,(()=>r)),null==e.children?null:c.a.createElement(d,{value:o},e.children)}return Object(u.forwardRef)(e)}function y(n){function e(e,t){const[r,o]=Object(u.useState)(!1),{instance:c}=n(e,o).current;Object(u.useImperativeHandle)(t,(()=>c)),Object(u.useEffect)((function(){r&&c.update()}),[c,r,e.children]);const a=c._contentNode;return a?Object(l.createPortal)(e.children,a):null}return Object(u.forwardRef)(e)}function b(n){function e(e,t){const{instance:r}=n(e).current;return Object(u.useImperativeHandle)(t,(()=>r)),null}return Object(u.forwardRef)(e)}function O(n){return function(e){const t=p(),r=n(e,t),{instance:o}=r.current,c=Object(u.useRef)(e.position),{position:a}=e;return Object(u.useEffect)((function(){return o.addTo(t.map),function(){o.remove()}}),[t.map,o]),Object(u.useEffect)((function(){null!=a&&a!==c.current&&(o.setPosition(a),c.current=a)}),[o,a]),r}}function v(n,e){const t=Object(u.useRef)();Object(u.useEffect)((function(){return null!=e&&n.instance.on(e),t.current=e,function(){null!=t.current&&n.instance.off(t.current),t.current=null}}),[n,e])}function C(n,e){var t;const r=null!=(t=n.pane)?t:e.pane;return r?{...n,pane:r}:n}function h(n,e){return function(t,r){const o=p(),u=n(C(t,o),o);return a(o.map,t.attribution),v(u.current,t.eventHandlers),e(u.current,o,t,r),u}}var g=t(102);function j(n){return n.split(" ").filter(Boolean)}function w(n,e){j(e).forEach((e=>{g.DomUtil.addClass(n,e)}))}function E(n,e){j(e).forEach((e=>{g.DomUtil.removeClass(n,e)}))}function L(n,e,t){null!=n&&t!==e&&(null!=e&&e.length>0&&E(n,e),null!=t&&t.length>0&&w(n,t))}function x(n,e){return null==e?function(e,t){return Object(u.useRef)(n(e,t))}:function(t,r){const o=Object(u.useRef)(n(t,r)),c=Object(u.useRef)(t),{instance:a}=o.current;return Object(u.useEffect)((function(){c.current!==t&&(e(a,t,c.current),c.current=t)}),[a,t,r]),o}}function P(n,e){Object(u.useEffect)((function(){var t;const r=null!=(t=e.layerContainer)?t:e.map;return r.addLayer(n.instance),function(){r.removeLayer(n.instance)}}),[e,n])}function k(n){return function(e){const t=p(),r=n(C(e,t),t);return a(t.map,e.attribution),v(r.current,e.eventHandlers),P(r.current,t),r}}function R(n,e){const t=Object(u.useRef)();Object(u.useEffect)((function(){if(e.pathOptions!==t.current){var r;const o=null!=(r=e.pathOptions)?r:{};n.instance.setStyle(o),t.current=o}}),[n,e])}function I(n){return function(e){const t=p(),r=n(C(e,t),t);return v(r.current,e.eventHandlers),P(r.current,t),R(r.current,e),r}}function M(n){return b(O(x((function(e,t){return{instance:n(e),context:t}}))))}function N(n,e){return m(k(x(n,e)))}function S(n,e){return y(h(x(n),e))}function z(n,e){return m(I(x(n,e)))}function T(n,e){return b(k(x(n,e)))}function H(n,e,t){const{opacity:r,zIndex:o}=e;null!=r&&r!==t.opacity&&n.setOpacity(r),null!=o&&o!==t.zIndex&&n.setZIndex(o)}function _(n,e,t){e.bounds instanceof g.LatLngBounds&&e.bounds!==t.bounds&&n.setBounds(e.bounds),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=e.zIndex&&e.zIndex!==t.zIndex&&n.setZIndex(e.zIndex)}function G(){return p().map}function A(n,e){const t=G();return Object(u.useEffect)((function(){return t.on(n,e),function(){t.off(n,e)}}),[t,n,e]),t}function B(n){const e=G();return Object(u.useEffect)((function(){return e.on(n),function(){e.off(n)}}),[e,n]),e}const V=M((function(n){return new g.Control.Attribution(n)})),Z=z((function({center:n,children:e,...t},r){const o=new g.Circle(n,t);return{instance:o,context:{...r,overlayContainer:o}}}),i),D=z((function({center:n,children:e,...t},r){const o=new g.CircleMarker(n,t);return{instance:o,context:{...r,overlayContainer:o}}}),i),J=z((function({children:n,...e},t){const r=new g.FeatureGroup([],e);return{instance:r,context:{...t,layerContainer:r,overlayContainer:r}}})),U=z((function({data:n,...e},t){const r=new g.GeoJSON(n,e);return{instance:r,context:{...t,overlayContainer:r}}})),W=N((function({bounds:n,url:e,...t},r){const o=new g.ImageOverlay(e,n,t);return{instance:o,context:{...r,overlayContainer:o}}}),(function(n,e,t){_(n,e,t),e.url!==t.url&&n.setUrl(e.url)})),$=N((function({children:n,...e},t){const r=new g.LayerGroup([],e);return{instance:r,context:{...t,layerContainer:r}}})),F=m(O(x((function({children:n,...e},t){const r=new g.Control.Layers(void 0,void 0,e);return{instance:r,context:{...t,layersControl:r}}}),(function(n,e,t){e.collapsed!==t.collapsed&&(!0===e.collapsed?n.collapse():n.expand())}))));function q(n){return function(e){const t=p(),r=Object(u.useRef)(e),[o,a]=Object(u.useState)(null),{layersControl:i,map:l}=t,s=Object(u.useCallback)((e=>{null!=i&&(r.current.checked&&l.addLayer(e),n(i,e,r.current.name),a(e))}),[i,l]),f=Object(u.useCallback)((n=>{null==i||i.removeLayer(n),a(null)}),[i]),m=Object(u.useMemo)((()=>({...t,layerContainer:{addLayer:s,removeLayer:f}})),[t,s,f]);return Object(u.useEffect)((()=>{null!==o&&r.current!==e&&(!0!==e.checked||null!=r.current.checked&&!1!==r.current.checked?!0!==r.current.checked||null!=e.checked&&!1!==e.checked||l.removeLayer(o):l.addLayer(o),r.current=e)})),e.children?c.a.createElement(d,{value:m},e.children):null}}function X({children:n}){return n(G())}function Y({children:n,className:e,id:t,placeholder:r,style:o,whenCreated:a,...i}){const l=Object(u.useRef)(null),f=function(n,e){const[t,r]=Object(u.useState)(null);return Object(u.useEffect)((()=>{if(null!==n.current&&null===t){const t=new g.Map(n.current,e);null!=e.center&&null!=e.zoom?t.setView(e.center,e.zoom):null!=e.bounds&&t.fitBounds(e.bounds,e.boundsOptions),null!=e.whenReady&&t.whenReady(e.whenReady),r(t)}}),[n,t,e]),t}(l,i),p=Object(u.useRef)(!1);Object(u.useEffect)((()=>{null!=f&&!1===p.current&&null!=a&&(p.current=!0,a(f))}),[f,a]);const m=Object(u.useMemo)((()=>f?{__version:s,map:f}:null),[f]),y=m?c.a.createElement(d,{value:m},n):null!=r?r:null;return c.a.createElement("div",{ref:l,className:e,id:t,style:o},y)}F.BaseLayer=q((function(n,e,t){n.addBaseLayer(e,t)})),F.Overlay=q((function(n,e,t){n.addOverlay(e,t)}));const K=N((function({position:n,...e},t){const r=new g.Marker(n,e);return{instance:r,context:{...t,overlayContainer:r}}}),(function(n,e,t){e.position!==t.position&&n.setLatLng(e.position),null!=e.icon&&e.icon!==t.icon&&n.setIcon(e.icon),null!=e.zIndexOffset&&e.zIndexOffset!==t.zIndexOffset&&n.setZIndexOffset(e.zIndexOffset),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=n.dragging&&e.draggable!==t.draggable&&(!0===e.draggable?n.dragging.enable():n.dragging.disable())})),Q=["mapPane","markerPane","overlayPane","popupPane","shadowPane","tilePane","tooltipPane"];function nn(n,e){const{[e]:t,...r}=n;return r}function en(n){console.log("render pane",n);const e=p(),t=Object(u.useRef)(),r=Object(u.useMemo)((()=>({...e,pane:n.name})),[]);return Object(u.useLayoutEffect)((()=>(console.log("layout effect",n),t.current=function(n,e){var t;const r=n.name;if(-1!==Q.indexOf(r))throw new Error(`You must use a unique name for a pane that is not a default Leaflet pane: ${r}`);if(null!=e.map.getPane(r))throw new Error(`A pane with this name already exists: ${r}`);const o=null!=(t=n.pane)?t:e.pane,u=o?e.map.getPane(o):void 0,c=e.map.createPane(r,u);return null!=n.className&&w(c,n.className),null!=n.style&&Object.keys(n.style).forEach((e=>{c.style[e]=n.style[e]})),c}(n,e),function(){console.log("remove pane",n.name);const t=e.map.getPane(n.name);null==t||null==t.remove||t.remove(),null!=e.map._panes&&(e.map._panes=nn(e.map._panes,n.name),e.map._paneRenderers=nn(e.map._paneRenderers,n.name))})),[]),console.log("render pane",n.name,t.current),null!=n.children&&null!=t.current?Object(l.createPortal)(c.a.createElement(d,{value:r},n.children),t.current):null}const tn=z((function({positions:n,...e},t){const r=new g.Polygon(n,e);return{instance:r,context:{...t,overlayContainer:r}}}),(function(n,e,t){e.positions!==t.positions&&n.setLatLngs(e.positions)})),rn=z((function({positions:n,...e},t){const r=new g.Polyline(n,e);return{instance:r,context:{...t,overlayContainer:r}}}),(function(n,e,t){e.positions!==t.positions&&n.setLatLngs(e.positions)})),on=S((function(n,e){return{instance:new g.Popup(n,e.overlayContainer),context:e}}),(function(n,e,t,r){const{onClose:o,onOpen:c,position:a}=t;Object(u.useEffect)((function(){const{instance:t}=n;function u(n){n.popup===t&&(t.update(),r(!0),null==c||c())}function i(n){n.popup===t&&(r(!1),null==o||o())}return e.map.on({popupopen:u,popupclose:i}),null==e.overlayContainer?(null!=a&&t.setLatLng(a),t.openOn(e.map)):e.overlayContainer.bindPopup(t),function(){e.map.off({popupopen:u,popupclose:i}),null==e.overlayContainer?e.map.removeLayer(t):e.overlayContainer.unbindPopup()}}),[n,e,r,o,c,a])})),un=z((function({bounds:n,...e},t){const r=new g.Rectangle(n,e);return{instance:r,context:{...t,overlayContainer:r}}}),(function(n,e,t){e.bounds!==t.bounds&&n.setBounds(e.bounds)})),cn=M((function(n){return new g.Control.Scale(n)})),an=k(x((function(n,e){const{attributes:t,bounds:r,...o}=n,u=document.createElementNS("http://www.w3.org/2000/svg","svg");return u.setAttribute("xmlns","http://www.w3.org/2000/svg"),null!=t&&Object.keys(t).forEach((n=>{u.setAttribute(n,t[n])})),{instance:new g.SVGOverlay(u,r,o),container:u,context:e}}),_));function ln({children:n,...e},t){const{instance:r,container:o}=an(e).current;return Object(u.useImperativeHandle)(t,(()=>r)),null==o||null==n?null:Object(l.createPortal)(n,o)}const sn=Object(u.forwardRef)(ln),fn=T((function({url:n,...e},t){return{instance:new g.TileLayer(n,C(e,t)),context:t}}),H),dn=S((function(n,e){return{instance:new g.Tooltip(n,e.overlayContainer),context:e}}),(function(n,e,t,r){const{onClose:o,onOpen:c}=t;Object(u.useEffect)((function(){const t=e.overlayContainer;if(null==t)return;const{instance:u}=n,a=n=>{n.tooltip===u&&(u.update(),r(!0),null==c||c())},i=n=>{n.tooltip===u&&(r(!1),null==o||o())};return t.on({tooltipopen:a,tooltipclose:i}),t.bindTooltip(u),function(){t.off({tooltipopen:a,tooltipclose:i}),t.unbindTooltip()}}),[n,e,r,o,c])})),pn=N((function({bounds:n,url:e,...t},r){const o=new g.VideoOverlay(e,n,t);var u;!0===t.play&&(null==(u=o.getElement())||u.play());return{instance:o,context:{...r,overlayContainer:o}}}),(function(n,e,t){_(n,e,t),"string"==typeof e.url&&e.url!==t.url&&n.setUrl(e.url);const r=n.getElement();null!=r&&(!0!==e.play||t.play?e.play||!0!==t.play||r.pause():r.play())})),mn=T((function({params:n={},url:e,...t},r){return{instance:new g.TileLayer.WMS(e,{...n,...C(t,r)}),context:r}}),(function(n,e,t){H(n,e,t),null!=e.params&&e.params!==t.params&&n.setParams(e.params)})),yn=M((function(n){return new g.Control.Zoom(n)})),bn={L:g,React:c.a,...r,...c.a,...o};e.a=bn},91:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return b}));var r=t(132),o=t.n(r),u=t(0),c=t.n(u),a=t(107),i=t(106),l=t(22),s=t(115),f=t(146),d=t(120),p=t(92),m=t.n(p);function y({text:n}){const{isDarkTheme:e}=Object(s.a)(),t=e?"logo-title-alt":"logo-title";return c.a.createElement("h1",{className:"hero__title"},c.a.createElement("img",{src:Object(i.a)(`img/${t}.svg`),alt:n,width:"480"}))}function b(){const{siteConfig:n={}}=Object(l.default)();return c.a.createElement(d.a,{title:n.title,description:"React components for Leaflet maps"},c.a.createElement("header",{className:o()("hero",m.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement(y,{text:n.title}),c.a.createElement("p",{className:"hero__subtitle"},n.tagline),c.a.createElement("div",{className:m.a.buttons},c.a.createElement(a.a,{className:o()("button button--outline button--primary button--lg",m.a.getStarted),to:Object(i.a)("docs/start-introduction")},"Get Started")))),c.a.createElement("main",null,c.a.createElement(f.a,{live:!0,noInline:!0,className:"tsx"},'const position = [51.505, -0.09]\n        \nrender(\n  <MapContainer center={position} zoom={13} scrollWheelZoom={false}>\n    <TileLayer\n      attribution=\'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors\'\n      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\n    />\n    <Marker position={position}>\n      <Popup>\n        A pretty CSS3 popup. <br /> Easily customizable.\n      </Popup>\n    </Marker>\n  </MapContainer>\n)')))}}}]);