(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{101:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),l=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return t?a.a.createElement(m,p(p({ref:n},i),{},{components:t})):a.a.createElement(m,p({ref:n},i))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<o;i++)c[i]=t[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},97:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(101)),c={title:"Core architecture"},p={unversionedId:"core-architecture",id:"core-architecture",isDocsHomePage:!1,title:"Core architecture",description:"Introduction",source:"@site/docs/core-architecture.md",slug:"/core-architecture",permalink:"/docs/core-architecture",version:"current",sidebar:"docs",previous:{title:"React Leaflet Core",permalink:"/docs/core-introduction"},next:{title:"Core API",permalink:"/docs/core-api"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Identifying necessary Leaflet APIs",id:"identifying-necessary-leaflet-apis",children:[]},{value:"First version",id:"first-version",children:[]},{value:"Improved update logic",id:"improved-update-logic",children:[]},{value:"Element hook factory",id:"element-hook-factory",children:[]},{value:"Layer lifecycle hook",id:"layer-lifecycle-hook",children:[]},{value:"Higher-level createPathHook",id:"higher-level-createpathhook",children:[]},{value:"Component factory",id:"component-factory",children:[]},{value:"Supporting children elements",id:"supporting-children-elements",children:[]},{value:"Higher-level component factory",id:"higher-level-component-factory",children:[]}],i={rightToc:s};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"This page describes the core architecture by presenting how to build an example ",Object(o.b)("inlineCode",{parentName:"p"},"Square")," layer component using the APIs provided by React Leaflet's core."),Object(o.b)("p",null,"Most of React Leaflet's public APIs are using the core APIs as described in this page to provide their functionalities."),Object(o.b)("h2",{id:"identifying-necessary-leaflet-apis"},"Identifying necessary Leaflet APIs"),Object(o.b)("p",null,"The first step to implement a component in React Leaflet is to identify the necessary APIs made available by Leaflet and potentially third-party plugins to achieve the desired functionalities."),Object(o.b)("p",null,"For our ",Object(o.b)("inlineCode",{parentName:"p"},"Square")," component, we'll support two properties: a ",Object(o.b)("inlineCode",{parentName:"p"},"center")," position and the square's ",Object(o.b)("inlineCode",{parentName:"p"},"size"),"."),Object(o.b)("p",null,"By using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://leafletjs.com/reference-1.7.1.html#rectangle"}),"Leaflet's ",Object(o.b)("inlineCode",{parentName:"a"},"Rectangle")," class"),", we can add a rectangle to the map, so this is the base we'll use for our ",Object(o.b)("inlineCode",{parentName:"p"},"Square"),".\nLeaflet's ",Object(o.b)("inlineCode",{parentName:"p"},"Rectangle")," constructor needs to be provided bounds, so we'll also use the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://leafletjs.com/reference-1.7.1.html#latlng-tobounds"}),Object(o.b)("inlineCode",{parentName:"a"},"toBounds")," method of the ",Object(o.b)("inlineCode",{parentName:"a"},"LatLng")," class")," to converts our ",Object(o.b)("inlineCode",{parentName:"p"},"center")," and ",Object(o.b)("inlineCode",{parentName:"p"},"size")," props to bounds."),Object(o.b)("h2",{id:"first-version"},"First version"),Object(o.b)("p",null,"To get started, let's simply focus on adding the square to the map, using the following code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{1-16,26}","{1-16,26}":!0}),'function Square(props) {\n  const context = useLeafletContext()\n\n  useEffect(() => {\n    const bounds = L.latLng(props.center).toBounds(props.size)\n    const square = new L.Rectangle(bounds)\n    const container = context.layerContainer || context.map\n    container.addLayer(square)\n\n    return () => {\n      container.removeLayer(square)\n    }\n  })\n\n  return null\n}\n\nconst center = [51.505, -0.09]\n\nrender(\n  <MapContainer center={center} zoom={13} scrollWheelZoom={false}>\n    <TileLayer\n      attribution=\'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors\'\n      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\n    />\n    <Square center={center} size={1000} />\n  </MapContainer>,\n)\n')),Object(o.b)("p",null,"First, we need to access the context created by the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-map#mapcontainer"}),Object(o.b)("inlineCode",{parentName:"a"},"MapContainer")," component"),", by calling the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/core-api#useleafletcontext"}),Object(o.b)("inlineCode",{parentName:"a"},"useLeafletContext")," hook exported by the core APIs"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const context = useLeafletContext()\n")),Object(o.b)("p",null,"Then, we use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html#useeffect"}),"React's ",Object(o.b)("inlineCode",{parentName:"a"},"useEffect")," hook")," to create the square instance, using the props to calculate the bounds to provide to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://leafletjs.com/reference-1.7.1.html#rectangle"}),"Leaflet's ",Object(o.b)("inlineCode",{parentName:"a"},"Rectangle")," constructor"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const bounds = L.latLng(props.center).toBounds(props.size)\nconst square = new L.Rectangle(bounds)\n")),Object(o.b)("p",null,"The created layer needs to be added to a container provided in the context, either a parent container such as a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-components#layergroup"}),Object(o.b)("inlineCode",{parentName:"a"},"LayerGroup")),", or the ",Object(o.b)("inlineCode",{parentName:"p"},"Map")," instance created with the context:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const container = context.layerContainer || context.map\ncontainer.addLayer(square)\n")),Object(o.b)("p",null,"We also need to return the cleaning up function for the ",Object(o.b)("inlineCode",{parentName:"p"},"useEffect")," hook, that removes the layer from the container:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"return () => {\n  container.removeLayer(square)\n}\n")),Object(o.b)("p",null,"Finally, the ",Object(o.b)("inlineCode",{parentName:"p"},"Square")," component needs to return a valid React node, but as the rendering of the layer is performed by Leaflet, it only returns ",Object(o.b)("inlineCode",{parentName:"p"},"null"),"."),Object(o.b)("h2",{id:"improved-update-logic"},"Improved update logic"),Object(o.b)("p",null,"The first version of the code successfully works for simple cases, but it has a drawback: every time the component is rendered, the ",Object(o.b)("inlineCode",{parentName:"p"},"useEffect")," callback will run and add/remove the square to/from the map, possibly unnecessarily if the props haven't changed."),Object(o.b)("p",null,"This is usually not the expected behavior when using React, because the virtual DOM will check what updates are necessary to apply to the DOM. In React Leaflet, DOM rendering is performed by Leaflet, so we need to implement more logic to avoid unnecessary changes to the DOM, as in the following code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{1-3,7-8,10-18,20-28}","{1-3,7-8,10-18,20-28}":!0}),'function getBounds(props) {\n  return L.latLng(props.center).toBounds(props.size)\n}\n\nfunction Square(props) {\n  const context = useLeafletContext()\n  const squareRef = useRef()\n  const propsRef = useRef(props)\n\n  useEffect(() => {\n    squareRef.current = new L.Rectangle(getBounds(props))\n    const container = context.layerContainer || context.map\n    container.addLayer(squareRef.current)\n\n    return () => {\n      container.removeLayer(squareRef.current)\n    }\n  }, [])\n\n  useEffect(() => {\n    if (\n      props.center !== propsRef.current.center ||\n      props.size !== propsRef.current.size\n    ) {\n      squareRef.current.setBounds(getBounds(props))\n    }\n    propsRef.current = props\n  }, [props.center, props.size])\n\n  return null\n}\n\nconst center = [51.505, -0.09]\n\nrender(\n  <MapContainer center={center} zoom={13} scrollWheelZoom={false}>\n    <TileLayer\n      attribution=\'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors\'\n      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\n    />\n    <Square center={center} size={1000} />\n  </MapContainer>,\n)\n')),Object(o.b)("p",null,"First, we extract the function that returns bounds from props, as this logic will be needed in two places:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"function getBounds(props) {\n  return L.latLng(props.center).toBounds(props.size)\n}\n")),Object(o.b)("p",null,"We also need to keep references to the Leaflet element instance and the props, by leveraging the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html#useref"}),Object(o.b)("inlineCode",{parentName:"a"},"useRef")," hook"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const squareRef = useRef()\nconst propsRef = useRef(props)\n")),Object(o.b)("p",null,"Finally, we separate the logic for adding and removing the layer from the logic to update it, by setting the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect"}),"dependencies argument of the ",Object(o.b)("inlineCode",{parentName:"a"},"useEffect")," hook"),". The first ",Object(o.b)("inlineCode",{parentName:"p"},"useEffect")," callback will be only called when the component is mounted and unmounted (setting the dependencies to ",Object(o.b)("inlineCode",{parentName:"p"},"[]"),"), while the second ",Object(o.b)("inlineCode",{parentName:"p"},"useEffect")," callback will be called whenever the props change, and conditionally apply the update to the layer:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"useEffect(() => {\n  squareRef.current = new L.Rectangle(getBounds(props))\n  const container = context.layerContainer || context.map\n  container.addLayer(squareRef.current)\n\n  return () => {\n    container.removeLayer(squareRef.current)\n  }\n}, [])\n\nuseEffect(() => {\n  if (\n    props.center !== propsRef.current.center ||\n    props.size !== propsRef.current.size\n  ) {\n    squareRef.current.setBounds(getBounds(props))\n  }\n  propsRef.current = props\n}, [props.center, props.size])\n")),Object(o.b)("h2",{id:"element-hook-factory"},"Element hook factory"),Object(o.b)("p",null,"The above code gets very repetitive as it's needed for most components in React Leaflet, this is why the core APIs provide functions such as the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/core-api#createelementhook"}),Object(o.b)("inlineCode",{parentName:"a"},"createElementHook")," factory")," to simplify the process:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{5-7,9-13,15,19}","{5-7,9-13,15,19}":!0}),'function getBounds(props) {\n  return L.latLng(props.center).toBounds(props.size)\n}\n\nfunction createSquare(props, context) {\n  return { instance: new L.Rectangle(getBounds(props)), context }\n}\n\nfunction updateSquare(instance, props, prevProps) {\n  if (props.center !== prevProps.center || props.size !== prevProps.size) {\n    instance.setBounds(getBounds(props))\n  }\n}\n\nconst useSquareElement = createElementHook(createSquare, updateSquare)\n\nfunction Square(props) {\n  const context = useLeafletContext()\n  const elementRef = useSquareElement(props, context)\n\n  useEffect(() => {\n    const container = context.layerContainer || context.map\n    container.addLayer(elementRef.current.instance)\n\n    return () => {\n      container.removeLayer(elementRef.current.instance)\n    }\n  }, [])\n\n  return null\n}\n\nconst center = [51.505, -0.09]\n\nrender(\n  <MapContainer center={center} zoom={13} scrollWheelZoom={false}>\n    <TileLayer\n      attribution=\'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors\'\n      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\n    />\n    <Square center={center} size={1000} />\n  </MapContainer>,\n)\n')),Object(o.b)("p",null,"First, instead of having the Leaflet element creation and updating logic in ",Object(o.b)("inlineCode",{parentName:"p"},"useEffect")," callbacks, we can extract them to standalone functions implementing the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/core-api#createelementhook"}),"expected interface"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"function createSquare(props, context) {\n  return { instance: new L.Rectangle(getBounds(props)), context }\n}\n\nfunction updateSquare(instance, props, prevProps) {\n  if (props.center !== prevProps.center || props.size !== prevProps.size) {\n    instance.setBounds(getBounds(props))\n  }\n}\n")),Object(o.b)("p",null,"Based on these functions, we can create a ",Object(o.b)("inlineCode",{parentName:"p"},"useSquareElement")," hook:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const useSquareElement = createElementHook(createSquare, updateSquare)\n")),Object(o.b)("p",null,"This hook will keep track of the element's instance and props, so a single ",Object(o.b)("inlineCode",{parentName:"p"},"useEffect")," hook can be used to handle the addition and removal of the layer:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const elementRef = useSquareElement(props, context)\n\nuseEffect(() => {\n  const container = context.layerContainer || context.map\n  container.addLayer(elementRef.current.instance)\n\n  return () => {\n    container.removeLayer(elementRef.current.instance)\n  }\n}, [])\n")),Object(o.b)("h2",{id:"layer-lifecycle-hook"},"Layer lifecycle hook"),Object(o.b)("p",null,"The core APIs provide additional hooks to handle specific pieces of logic. Here, we can replace the ",Object(o.b)("inlineCode",{parentName:"p"},"useEffect")," hook used previously to add and remove the layer by the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/core-api#uselayerlifecycle"}),Object(o.b)("inlineCode",{parentName:"a"},"useLayerLifecycle")," hook"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{20}","{20}":!0}),'function getBounds(props) {\n  return L.latLng(props.center).toBounds(props.size)\n}\n\nfunction createSquare(props, context) {\n  return { instance: new L.Rectangle(getBounds(props)), context }\n}\n\nfunction updateSquare(instance, props, prevProps) {\n  if (props.center !== prevProps.center || props.size !== prevProps.size) {\n    instance.setBounds(getBounds(props))\n  }\n}\n\nconst useSquareElement = createElementHook(createSquare, updateSquare)\n\nfunction Square(props) {\n  const context = useLeafletContext()\n  const elementRef = useSquareElement(props, context)\n  useLayerLifecycle(elementRef.current, context)\n\n  return null\n}\n\nconst center = [51.505, -0.09]\n\nrender(\n  <MapContainer center={center} zoom={13} scrollWheelZoom={false}>\n    <TileLayer\n      attribution=\'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors\'\n      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\n    />\n    <Square center={center} size={1000} />\n  </MapContainer>,\n)\n')),Object(o.b)("h2",{id:"higher-level-createpathhook"},"Higher-level createPathHook"),Object(o.b)("p",null,"The core APIs also provide higher-level factory functions implementing logic shared by different hooks, such as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/core-api#createpathhook"}),Object(o.b)("inlineCode",{parentName:"a"},"createPathHook")),".\nHere we can extract the logic previously implemented in the component to a hook factory, and simply call the created hook in the component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{16,19}","{16,19}":!0}),'function getBounds(props) {\n  return L.latLng(props.center).toBounds(props.size)\n}\n\nfunction createSquare(props, context) {\n  return { instance: new L.Rectangle(getBounds(props)), context }\n}\n\nfunction updateSquare(instance, props, prevProps) {\n  if (props.center !== prevProps.center || props.size !== prevProps.size) {\n    instance.setBounds(getBounds(props))\n  }\n}\n\nconst useSquareElement = createElementHook(createSquare, updateSquare)\nconst useSquare = createPathHook(useSquareElement)\n\nfunction Square(props) {\n  useSquare(props)\n  return null\n}\n\nconst center = [51.505, -0.09]\n\nrender(\n  <MapContainer center={center} zoom={13} scrollWheelZoom={false}>\n    <TileLayer\n      attribution=\'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors\'\n      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\n    />\n    <Square center={center} size={1000} />\n  </MapContainer>,\n)\n')),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/core-api#createpathhook"}),Object(o.b)("inlineCode",{parentName:"a"},"createPathHook"))," also implements further logic, notably calling the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/core-api#useeventhandlers"}),Object(o.b)("inlineCode",{parentName:"a"},"useEventHandlers"))," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/core-api#uselayerlifecycle"}),Object(o.b)("inlineCode",{parentName:"a"},"useLayerLifecycle"))," hooks as well."),Object(o.b)("h2",{id:"component-factory"},"Component factory"),Object(o.b)("p",null,"Following the changes above, we can see that the ",Object(o.b)("inlineCode",{parentName:"p"},"Square")," component gets very simple as all the logic is implemented in the ",Object(o.b)("inlineCode",{parentName:"p"},"useSquare")," hook. We can replace it by the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/core-api#createleafcomponent"}),Object(o.b)("inlineCode",{parentName:"a"},"createLeafComponent")," function")," that implements similar logic:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{17}","{17}":!0}),'function getBounds(props) {\n  return L.latLng(props.center).toBounds(props.size)\n}\n\nfunction createSquare(props, context) {\n  return { instance: new L.Rectangle(getBounds(props)), context }\n}\n\nfunction updateSquare(instance, props, prevProps) {\n  if (props.center !== prevProps.center || props.size !== prevProps.size) {\n    instance.setBounds(getBounds(props))\n  }\n}\n\nconst useSquareElement = createElementHook(createSquare, updateSquare)\nconst useSquare = createPathHook(useSquareElement)\nconst Square = createLeafComponent(useSquare)\n\nconst center = [51.505, -0.09]\n\nrender(\n  <MapContainer center={center} zoom={13} scrollWheelZoom={false}>\n    <TileLayer\n      attribution=\'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors\'\n      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\n    />\n    <Square center={center} size={1000} />\n  </MapContainer>,\n)\n')),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/core-api#createleafcomponent"}),Object(o.b)("inlineCode",{parentName:"a"},"createLeafComponent"))," also provides additional logic in order to make the Leaflet element instance available using React's ",Object(o.b)("inlineCode",{parentName:"p"},"ref"),"."),Object(o.b)("h2",{id:"supporting-children-elements"},"Supporting children elements"),Object(o.b)("p",null,"All the steps above focus on displaying the ",Object(o.b)("inlineCode",{parentName:"p"},"Square")," element only. However, it is common for React Leaflet components to also have children when possible. Our ",Object(o.b)("inlineCode",{parentName:"p"},"Square")," being a Leaflet layer, overlays such as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-components#popup"}),Object(o.b)("inlineCode",{parentName:"a"},"Popup"))," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-components#tooltip"}),Object(o.b)("inlineCode",{parentName:"a"},"Tooltip"))," could be attached to it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{6-7,18,28-30}","{6-7,18,28-30}":!0}),'function getBounds(props) {\n  return L.latLng(props.center).toBounds(props.size)\n}\n\nfunction createSquare(props, context) {\n  const instance = new L.Rectangle(getBounds(props))\n  return { instance, context: { ...context, overlayContainer: instance } }\n}\n\nfunction updateSquare(instance, props, prevProps) {\n  if (props.center !== prevProps.center || props.size !== prevProps.size) {\n    instance.setBounds(getBounds(props))\n  }\n}\n\nconst useSquareElement = createElementHook(createSquare, updateSquare)\nconst useSquare = createPathHook(useSquareElement)\nconst Square = createContainerComponent(useSquare)\n\nconst center = [51.505, -0.09]\n\nrender(\n  <MapContainer center={center} zoom={13} scrollWheelZoom={false}>\n    <TileLayer\n      attribution=\'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors\'\n      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\n    />\n    <Square center={center} size={1000}>\n      <Popup>Hello Popup</Popup>\n    </Square>\n  </MapContainer>,\n)\n')),Object(o.b)("p",null,"In order to support these overlays, we need to update the ",Object(o.b)("inlineCode",{parentName:"p"},"createSquare")," function to set the created layer as the context's ",Object(o.b)("inlineCode",{parentName:"p"},"overlayContainer"),". Note that the ",Object(o.b)("inlineCode",{parentName:"p"},"context")," object returned ",Object(o.b)("strong",{parentName:"p"},"must be a copy")," of the one provided in the function arguments, the function ",Object(o.b)("strong",{parentName:"p"},"must not mutate")," the provided ",Object(o.b)("inlineCode",{parentName:"p"},"context"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"function createSquare(props, context) {\n  const instance = new L.Rectangle(getBounds(props))\n  return { instance, context: { ...context, overlayContainer: instance } }\n}\n")),Object(o.b)("p",null,"We also need to replace the component factory by one taking care of providing the changed context and rendering the children, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/core-api#createcontainercomponent"}),Object(o.b)("inlineCode",{parentName:"a"},"createContainerComponent")),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const Square = createContainerComponent(useSquare)\n")),Object(o.b)("p",null,"In addition to the ",Object(o.b)("inlineCode",{parentName:"p"},"createLeafComponent")," and ",Object(o.b)("inlineCode",{parentName:"p"},"createContainerComponent")," functions, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/core-api#createoverlaycomponent"}),Object(o.b)("inlineCode",{parentName:"a"},"createOverlayComponent"))," can be used to create overlays such as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-components#popup"}),Object(o.b)("inlineCode",{parentName:"a"},"Popup"))," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-components#tooltip"}),Object(o.b)("inlineCode",{parentName:"a"},"Tooltip")),"."),Object(o.b)("h2",{id:"higher-level-component-factory"},"Higher-level component factory"),Object(o.b)("p",null,"Most of React Leaflet's APIs are React components abstracting the logic of creating and interacting with Leaflet elements.\nThe different hooks and factories exposed by the core APIs implement various pieces of logic that need to be combined to create components, and in some cases the same series of functions are used to create different components."),Object(o.b)("p",null,"In the previous step, we combine the following three functions to create the component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const useSquareElement = createElementHook(createSquare, updateSquare)\nconst useSquare = createPathHook(useSquareElement)\nconst Square = createContainerComponent(useSquare)\n")),Object(o.b)("p",null,"This logic is similar for other types of layers and is therefore provided as a higher-level component factory, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/core-api#createpathcomponent"}),Object(o.b)("inlineCode",{parentName:"a"},"createPathComponent")),", as used below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{16}","{16}":!0}),'function getBounds(props) {\n  return L.latLng(props.center).toBounds(props.size)\n}\n\nfunction createSquare(props, context) {\n  const instance = new L.Rectangle(getBounds(props))\n  return { instance, context: { ...context, overlayContainer: instance } }\n}\n\nfunction updateSquare(instance, props, prevProps) {\n  if (props.center !== prevProps.center || props.size !== prevProps.size) {\n    instance.setBounds(getBounds(props))\n  }\n}\n\nconst Square = createPathComponent(createSquare, updateSquare)\n\nconst center = [51.505, -0.09]\n\nrender(\n  <MapContainer center={center} zoom={13} scrollWheelZoom={false}>\n    <TileLayer\n      attribution=\'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors\'\n      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\n    />\n    <Square center={center} size={1000}>\n      <Popup>Hello Popup</Popup>\n    </Square>\n  </MapContainer>,\n)\n')),Object(o.b)("p",null,"The core APIs export other ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/core-api#high-level-component-factories"}),"high-level component factories")," that can be used in a similar way."))}l.isMDXComponent=!0}}]);