(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{101:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=r,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||a;return t?o.a.createElement(d,c(c({ref:n},p),{},{components:t})):o.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},62:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(101)),i={title:"External state"},c={unversionedId:"example-external-state",id:"example-external-state",isDocsHomePage:!1,title:"External state",description:"`tsx live noInline",source:"@site/docs/example-external-state.md",slug:"/example-external-state",permalink:"/docs/example-external-state",version:"current",sidebar:"docs",previous:{title:"React control",permalink:"/docs/example-react-control"},next:{title:"Map placeholder",permalink:"/docs/example-map-placeholder"}},l=[],p={rightToc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0}),"const center = [51.505, -0.09]\nconst zoom = 13\n\nfunction DisplayPosition({ map }) {\n  const [position, setPosition] = useState(map.getCenter())\n\n  const onClick = useCallback(() => {\n    map.setView(center, zoom)\n  }, [map])\n\n  const onMove = useCallback(() => {\n    setPosition(map.getCenter())\n  }, [map])\n\n  useEffect(() => {\n    map.on('move', onMove)\n    return () => {\n      map.off('move', onMove)\n    }\n  }, [map, onMove])\n\n  return (\n    <p>\n      latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}\n      <button onClick={onClick}>reset</button>\n    </p>\n  )\n}\n\nfunction ExternalStateExample() {\n  const [map, setMap] = useState(null)\n\n  const displayMap = useMemo(\n    () => (\n      <MapContainer\n        center={center}\n        zoom={zoom}\n        scrollWheelZoom={false}\n        whenCreated={setMap}>\n        <TileLayer\n          attribution='&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors'\n          url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n        />\n      </MapContainer>\n    ),\n    [],\n  )\n\n  return (\n    <div>\n      {map ? <DisplayPosition map={map} /> : null}\n      {displayMap}\n    </div>\n  )\n}\n\nrender(<ExternalStateExample />)\n")))}s.isMDXComponent=!0}}]);