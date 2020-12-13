(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{101:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),s=function(e){var r=o.a.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},u=function(e){var r=s(e.components);return o.a.createElement(i.Provider,{value:r},e.children)},y={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=t,f=u["".concat(l,".").concat(m)]||u[m]||y[m]||a;return n?o.a.createElement(f,p(p({ref:r},i),{},{components:n})):o.a.createElement(f,p({ref:r},i))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,l=new Array(a);l[0]=m;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:t,l[1]=p;for(var i=2;i<a;i++)l[i]=n[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return l})),n.d(r,"metadata",(function(){return p})),n.d(r,"rightToc",(function(){return c})),n.d(r,"default",(function(){return s}));var t=n(3),o=n(7),a=(n(0),n(101)),l={title:"Layers control"},p={unversionedId:"example-layers-control",id:"example-layers-control",isDocsHomePage:!1,title:"Layers control",description:"`tsx live noInline",source:"@site/docs/example-layers-control.md",slug:"/example-layers-control",permalink:"/docs/example-layers-control",version:"current",sidebar:"docs",previous:{title:"Tooltips",permalink:"/docs/example-tooltips"},next:{title:"Panes",permalink:"/docs/example-panes"}},c=[],i={rightToc:c};function s(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},i,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0}),'const center = [51.505, -0.09]\nconst rectangle = [\n  [51.49, -0.08],\n  [51.5, -0.06],\n]\n\nrender(\n  <MapContainer center={center} zoom={13} scrollWheelZoom={false}>\n    <LayersControl position="topright">\n      <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">\n        <TileLayer\n          attribution=\'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors\'\n          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\n        />\n      </LayersControl.BaseLayer>\n      <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">\n        <TileLayer\n          attribution=\'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors\'\n          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"\n        />\n      </LayersControl.BaseLayer>\n      <LayersControl.Overlay name="Marker with popup">\n        <Marker position={center}>\n          <Popup>\n            A pretty CSS3 popup. <br /> Easily customizable.\n          </Popup>\n        </Marker>\n      </LayersControl.Overlay>\n      <LayersControl.Overlay checked name="Layer group with circles">\n        <LayerGroup>\n          <Circle\n            center={center}\n            pathOptions={{ fillColor: \'blue\' }}\n            radius={200}\n          />\n          <Circle\n            center={center}\n            pathOptions={{ fillColor: \'red\' }}\n            radius={100}\n            stroke={false}\n          />\n          <LayerGroup>\n            <Circle\n              center={[51.51, -0.08]}\n              pathOptions={{ color: \'green\', fillColor: \'green\' }}\n              radius={100}\n            />\n          </LayerGroup>\n        </LayerGroup>\n      </LayersControl.Overlay>\n      <LayersControl.Overlay name="Feature group">\n        <FeatureGroup pathOptions={{ color: \'purple\' }}>\n          <Popup>Popup in FeatureGroup</Popup>\n          <Circle center={[51.51, -0.06]} radius={200} />\n          <Rectangle bounds={rectangle} />\n        </FeatureGroup>\n      </LayersControl.Overlay>\n    </LayersControl>\n  </MapContainer>,\n)\n')))}s.isMDXComponent=!0}}]);