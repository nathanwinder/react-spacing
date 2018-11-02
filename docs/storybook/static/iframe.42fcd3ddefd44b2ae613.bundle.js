(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,r){"use strict";var n=r(65);class o extends n.PureComponent{render(){let e;let t=this.props.value+(this.props.valueAdjustment||0);return this.props.debug&&(e={},"object"==typeof this.props.debug?(e.backgroundColor=this.props.debug.color||"#00FF0055",(!0===this.props.debug.border||this.props.debug.borderColor)&&(e.borderWidth=1,t>1&&(t-=2),e.borderStyle="solid",e.borderColor=this.props.debug.borderColor||"green")):e.backgroundColor="#00FF0055"),n.createElement("div",{style:Object.assign({display:"flex",flexDirection:"column",flex:1,minWidth:t,maxWidth:t},e)})}}o.sizeProps=["value"],o.adjustmentProps=["valueAdjustment"];class a extends n.PureComponent{render(){const e=this.props.all,t=this.props.vertical,r=this.props.horizontal,o=this.props.top||t||e||0,a=this.props.left||r||e||0,i=this.props.bottom||t||e||0,s=this.props.right||r||e||0,c=this.props.allAdjustment,l=this.props.verticalAdjustment,u=this.props.horizontalAdjustment,d=this.props.topAdjustment||l||c||0,g=this.props.leftAdjustment||u||c||0,p=this.props.bottomAdjustment||l||c||0,b=this.props.rightAdjustment||u||c||0;let m;this.props.debug&&(m="object"==typeof this.props.debug&&this.props.debug.color||"#FF000055");const f=this.props.debug?{borderStyle:"solid",borderTopWidth:o+d,borderLeftWidth:a+g,borderBottomWidth:i+p,borderRightWidth:s+b,borderColor:m}:{paddingTop:o+d,paddingLeft:a+g,paddingBottom:i+p,paddingRight:s+b};return n.createElement("div",{style:Object.assign({display:"flex",flexDirection:"column",flex:1},f)},this.props.children||null)}}a.sizeProps=["all","vertical","horizontal","top","bottom","left","right"],a.adjustmentProps=["allAdjustment","verticalAdjustment","horizontalAdjustment","topAdjustment","bottomAdjustment","leftAdjustment","rightAdjustment"];class i extends n.PureComponent{render(){let e;let t=this.props.value+(this.props.valueAdjustment||0);return this.props.debug&&(e={},"object"==typeof this.props.debug?(e.backgroundColor=this.props.debug.color||"#0077FF55",(!0===this.props.debug.border||this.props.debug.borderColor)&&(e.borderWidth=1,t>1&&(t-=2),e.borderStyle="solid",e.borderColor=this.props.debug.borderColor||"blue")):e.backgroundColor="#0077FF55"),n.createElement("div",{style:Object.assign({display:"flex",flexDirection:"row",height:this.props.value+(this.props.valueAdjustment||0)},e)})}}i.sizeProps=["value"],i.adjustmentProps=["valueAdjustment"],r.d(t,"a",function(){return o}),r.d(t,"b",function(){return a}),r.d(t,"c",function(){return i})},449:function(e,t,r){r(178),r(450),e.exports=r(451)},451:function(e,t,r){"use strict";r.r(t),function(e){var t=r(71),n=r(464);Object(t.configure)(function(){n.keys().forEach(function(e){return n(e)})},e)}.call(this,r(134)(e))},464:function(e,t,r){var n={"./basics.stories.tsx":465,"./debug.stories.tsx":472,"./debugging.stories.tsx":473};function o(e){var t=a(e);return r(t)}function a(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id=464},465:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"withStorySource",function(){return l}),r.d(t,"__STORY__",function(){return u}),r.d(t,"__ADDS_MAP__",function(){return d});var n=r(347),o=r(71),a=r(17),i=r(0),s=r(8),c=r(50),l=r(143).withStorySource,u="import { boolean, withKnobs } from '@storybook/addon-knobs';\nimport { storiesOf } from '@storybook/react';\nimport { Inline, Inset, Stack } from '@winderful/react-spacing';\nimport * as React from 'react';\nimport { Box } from './Box';\nimport { Page } from './Page';\n\nconst debug = (value: any = true) => (boolean('debug', !!value) ? value || true : false);\nstoriesOf('react-spacing/basics', module)\n  .addDecorator(withKnobs)\n  .add('Inline', () => (\n    <Page direction=\"row\">\n      <Box grow />\n      <Inline value={20} debug={debug()} />\n      <Box grow />\n    </Page>\n  ))\n  .add('Stack', () => (\n    <Page>\n      <Box grow />\n      <Stack value={20} debug={debug()} />\n      <Box grow />\n    </Page>\n  ))\n  .add('Inset', () => (\n    <Page>\n      <Inset all={20} debug={debug()}>\n        <Box grow />\n      </Inset>\n    </Page>\n  ))\n\n  .add('Inset, Inline, Stack Layout', () => (\n    <Page>\n      <Inset all={20} debug={debug()}>\n        <Box column grow>\n          <Box grow />\n          <Box wrap>\n            {[1, 2, 3, 4, 5].map(i => (\n              <Box>\n                Item {i} <Inline value={5} debug={debug()} />\n              </Box>\n            ))}\n          </Box>\n        </Box>\n        <Stack value={10} debug={debug()} />\n        <Box>\n          <Box grow basis={0}>\n            <Inset horizontal={10} vertical={5} debug={debug()}>\n              <Box>Cancel</Box>\n            </Inset>\n          </Box>\n          <Inline value={10} debug={debug()} />\n          <Box grow basis={0}>\n            <Inset horizontal={10} vertical={5} debug={debug()}>\n              <Box shrink>Ok</Box>\n            </Inset>\n          </Box>\n        </Box>\n      </Inset>\n    </Page>\n  ));\n",d={"react-spacing/basics@Inset, Inline, Stack Layout":{startLoc:{col:7,line:33},endLoc:{col:3,line:62}},"react-spacing/basics@Inset":{startLoc:{col:7,line:25},endLoc:{col:3,line:31}},"react-spacing/basics@Stack":{startLoc:{col:7,line:18},endLoc:{col:3,line:24}},"react-spacing/basics@Inline":{startLoc:{col:7,line:11},endLoc:{col:3,line:17}}},g=function(e){return void 0===e&&(e=!0),!!Object(n.boolean)("debug",!!e)&&(e||!0)};Object(o.storiesOf)("react-spacing/basics",e).addDecorator(l(u,d)).addDecorator(n.withKnobs).add("Inline",function(){return i.createElement(c.a,{direction:"row"},i.createElement(s.a,{grow:!0}),i.createElement(a.a,{value:20,debug:g()}),i.createElement(s.a,{grow:!0}))}).add("Stack",function(){return i.createElement(c.a,null,i.createElement(s.a,{grow:!0}),i.createElement(a.c,{value:20,debug:g()}),i.createElement(s.a,{grow:!0}))}).add("Inset",function(){return i.createElement(c.a,null,i.createElement(a.b,{all:20,debug:g()},i.createElement(s.a,{grow:!0})))}).add("Inset, Inline, Stack Layout",function(){return i.createElement(c.a,null,i.createElement(a.b,{all:20,debug:g()},i.createElement(s.a,{column:!0,grow:!0},i.createElement(s.a,{grow:!0}),i.createElement(s.a,{wrap:!0},[1,2,3,4,5].map(function(e){return i.createElement(s.a,null,"Item ",e," ",i.createElement(a.a,{value:5,debug:g()}))}))),i.createElement(a.c,{value:10,debug:g()}),i.createElement(s.a,null,i.createElement(s.a,{grow:!0,basis:0},i.createElement(a.b,{horizontal:10,vertical:5,debug:g()},i.createElement(s.a,null,"Cancel"))),i.createElement(a.a,{value:10,debug:g()}),i.createElement(s.a,{grow:!0,basis:0},i.createElement(a.b,{horizontal:10,vertical:5,debug:g()},i.createElement(s.a,{shrink:!0},"Ok"))))))})}.call(this,r(134)(e))},472:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"withStorySource",function(){return c}),r.d(t,"__STORY__",function(){return l}),r.d(t,"__ADDS_MAP__",function(){return u});var n=r(71),o=r(17),a=r(0),i=r(8),s=r(50),c=r(143).withStorySource,l="import { storiesOf } from '@storybook/react';\r\nimport { Inline, Inset, Stack } from '@winderful/react-spacing';\r\nimport * as React from 'react';\r\nimport { Box } from './Box';\r\nimport { Page } from './Page';\r\n\r\nstoriesOf('react-spacing/basic debugging', module)\r\n  .add('Debug space', () => (\r\n    <Page direction=\"row\">\r\n      <Inset all={20} debug={true}>\r\n        <Box column grow>\r\n          <Box grow>\r\n            <Box grow />\r\n            <Inline value={20} debug={true} />\r\n            <Box grow />\r\n          </Box>\r\n          <Stack value={20} debug={true} />\r\n          <Box grow />\r\n        </Box>\r\n      </Inset>\r\n    </Page>\r\n  ))\r\n\r\n  .add('Set debug options', () => (\r\n    <Page direction=\"row\">\r\n      <Inset all={20} debug={{ color: 'red' }}>\r\n        <Box column grow>\r\n          <Box grow>\r\n            <Box grow />\r\n            <Inline value={20} debug={{ color: 'teal', borderColor: 'red' }} />\r\n            <Box grow />\r\n          </Box>\r\n          <Stack value={20} debug={{ color: 'yellow', border: true }} />\r\n          <Box grow />\r\n        </Box>\r\n      </Inset>\r\n    </Page>\r\n  ));\r\n",u={"react-spacing/basic debugging@Set debug options":{startLoc:{col:7,line:24},endLoc:{col:3,line:38}},"react-spacing/basic debugging@Debug space":{startLoc:{col:7,line:8},endLoc:{col:3,line:22}}};Object(n.storiesOf)("react-spacing/basic debugging",e).addDecorator(c(l,u)).add("Debug space",function(){return a.createElement(s.a,{direction:"row"},a.createElement(o.b,{all:20,debug:!0},a.createElement(i.a,{column:!0,grow:!0},a.createElement(i.a,{grow:!0},a.createElement(i.a,{grow:!0}),a.createElement(o.a,{value:20,debug:!0}),a.createElement(i.a,{grow:!0})),a.createElement(o.c,{value:20,debug:!0}),a.createElement(i.a,{grow:!0}))))}).add("Set debug options",function(){return a.createElement(s.a,{direction:"row"},a.createElement(o.b,{all:20,debug:{color:"red"}},a.createElement(i.a,{column:!0,grow:!0},a.createElement(i.a,{grow:!0},a.createElement(i.a,{grow:!0}),a.createElement(o.a,{value:20,debug:{color:"teal",borderColor:"red"}}),a.createElement(i.a,{grow:!0})),a.createElement(o.c,{value:20,debug:{color:"yellow",border:!0}}),a.createElement(i.a,{grow:!0}))))})}.call(this,r(134)(e))},473:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"withStorySource",function(){return l}),r.d(t,"__STORY__",function(){return u}),r.d(t,"__ADDS_MAP__",function(){return d});var n=r(71),o=r(155),a=r(17),i=r(0),s=r(8),c=r(50),l=r(143).withStorySource,u="import { storiesOf } from '@storybook/react';\r\nimport { createDebugContext, withDebugProps } from '@winderful/react-debugging';\r\nimport * as spacing from '@winderful/react-spacing';\r\nimport * as React from 'react';\r\nimport { Box } from './Box';\r\nimport { Page } from './Page';\r\n\r\nfunction usingWinderfulDebugging() {\r\n  interface DebugOptions {\r\n    inline: spacing.IInlineDebugOptions;\r\n    inset: spacing.IInsetDebugOptions;\r\n    stack: spacing.IStackDebugOptions;\r\n  }\r\n  const debugContext = createDebugContext<DebugOptions>(false);\r\n  return {\r\n    DebugContext: debugContext,\r\n    Inline: withDebugProps(spacing.Inline, debugContext, 'inline'),\r\n    Inset: withDebugProps(spacing.Inset, debugContext, 'inset'),\r\n    Stack: withDebugProps(spacing.Stack, debugContext, 'stack'),\r\n  };\r\n}\r\n\r\nstoriesOf(`react-spacing/advanced debugging`, module).add('Activate debugging scope from component', () => {\r\n  // see implementation above for details on importing\r\n  // @winderful/react-debugging\r\n  const { Inset, Stack, Inline } = usingWinderfulDebugging();\r\n\r\n  // not necessary to set debug attributes on the components\r\n  return (\r\n    <Page direction=\"row\">\r\n      <Inset all={20} debug={true} debugScope={true}>\r\n        <Box column grow>\r\n          <Box grow>\r\n            <Box grow />\r\n            <Inline value={20} />\r\n            <Box grow />\r\n          </Box>\r\n          <Stack value={20} />\r\n          <Box grow />\r\n        </Box>\r\n      </Inset>\r\n    </Page>\r\n  );\r\n});\r\n",d={"@Activate debugging scope from component":{startLoc:{col:58,line:23},endLoc:{col:1,line:44}}};Object(n.storiesOf)("react-spacing/advanced debugging",e).addDecorator(l(u,d)).add("Activate debugging scope from component",function(){var e=function(){var e=Object(o.a)(!1);return{DebugContext:e,Inline:Object(o.b)(a.a,e,"inline"),Inset:Object(o.b)(a.b,e,"inset"),Stack:Object(o.b)(a.c,e,"stack")}}(),t=e.Inset,r=e.Stack,n=e.Inline;return i.createElement(c.a,{direction:"row"},i.createElement(t,{all:20,debug:!0,debugScope:!0},i.createElement(s.a,{column:!0,grow:!0},i.createElement(s.a,{grow:!0},i.createElement(s.a,{grow:!0}),i.createElement(n,{value:20}),i.createElement(s.a,{grow:!0})),i.createElement(r,{value:20}),i.createElement(s.a,{grow:!0}))))})}.call(this,r(134)(e))},50:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n=r(154),o=r(0),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.b(t,e),t.prototype.render=function(){return o.createElement("div",{style:{display:"flex",flexDirection:this.props.direction||"column",width:300,minHeight:200,flex:1,margin:1,padding:1,borderRadius:2,border:"1px solid rgba(0,0,0,0.15)",boxShadow:"0px 0px 2px 0px #00000022"}},this.props.children||null)},t}(o.PureComponent)},8:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n=r(154),o=r(0),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.b(t,e),t.prototype.render=function(){var e=!0===this.props.grow?1:!1===this.props.grow?void 0:this.props.grow||0,t=!0===this.props.shrink?1:!1===this.props.shrink?void 0:this.props.shrink||1,r=void 0===this.props.basis?"auto":this.props.basis,a=!0===this.props.wrap?"wrap":this.props.wrap||"nowrap";return o.createElement("div",{style:n.a({display:"flex",flexDirection:this.props.column?"column":"row",minHeight:this.props.column?void 0:"1em",flexGrow:e,flexShrink:t,flexBasis:r,margin:1,padding:1,borderRadius:4,border:"1px solid rgba(0,0,0,0.15)",borderStyle:"dashed",flexWrap:a},this.props.style)},this.props.children||null)},t}(o.PureComponent)}},[[449,2,4]]]);
//# sourceMappingURL=iframe.42fcd3ddefd44b2ae613.bundle.js.map