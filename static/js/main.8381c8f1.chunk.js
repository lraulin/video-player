(this["webpackJsonpvideo-player"]=this["webpackJsonpvideo-player"]||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){},30:function(e,t,i){"use strict";i.r(t);var s=i(1),u=i.n(s),n=i(5),a=i.n(n),r=(i(13),i(3)),o=(i(14),i(6)),c=i(0),l=function(e){var t=e.video,i=e.playNext;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(o.a,{videoId:t.youTubeId,onEnd:i,onReady:function(e){return e.target.playVideo()},opts:{height:"390",width:"640",playerVars:{autoplay:1}}})})},d=function(e){var t=e.video,i=e.setSelectedVideo;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("button",{onClick:function(){return i(t.youTubeId)},children:t.title})})},m=function(e){var t=e.videos,i=e.setSelectedVideo;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Playlist"}),Object(c.jsx)("ul",{children:t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(d,{video:e,setSelectedVideo:i},e.youTubeId)})}))})]})},b=[{title:"Pavel Tsatsouline Interview (Full Episode) | The Tim Ferriss Show (Podcast)",embedUrl:"https://www.youtube.com/embed/UGshHR1OjJ8",youTubeId:"UGshHR1OjJ8",attachments:[{title:"Att1",url:"https://www.irs.gov/pub/irs-pdf/f1040sa.pdf"},{title:"Att2",url:"https://www.fda.gov/media/144414/download"}],description:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ex eu metus venenatis sodales. Phasellus non iaculis augue, quis dignissim eros. Sed sodales, erat quis ullamcorper tristique, odio libero tristique sem, et faucibus velit metus quis elit. Pellentesque accumsan et felis et efficitur. Proin sit amet tortor sed nibh efficitur tempus ut vitae leo. Nullam tempus odio sollicitudin maximus placerat. Integer sed dolor dui. Integer dignissim ante ut eros pellentesque molestie. Aliquam pharetra dui at orci auctor consequat. Mauris vehicula porttitor enim sed consectetur. Duis ornare odio a turpis suscipit finibus. Pellentesque aliquam metus quam, quis auctor elit efficitur nec."]},{title:"How to Control Your Metabolism by Thyroid & Growth Hormone | Huberman Lab Podcast #17",embedUrl:"https://www.youtube.com/embed/x7qbJeRxWGw",youTubeId:"x7qbJeRxWGw",attachments:[{title:"Att1",url:"https://www.irs.gov/pub/irs-pdf/f1040sa.pdf"},{title:"Att2",url:"https://www.fda.gov/media/144414/download"}],description:["Sed lacus dolor, aliquet tristique commodo id, lobortis non ante. Donec ultrices blandit arcu at commodo. Vivamus malesuada ante vitae nibh accumsan, vitae tristique nunc auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sed nisi ac enim placerat venenatis vitae a leo. Nulla a feugiat lacus. Vivamus luctus tristique mauris, a tempus lacus iaculis eu. Donec varius euismod leo eu scelerisque. Mauris venenatis rhoncus neque, eget aliquam massa pellentesque eget. Fusce sagittis rutrum justo ut laoreet."]},{title:"Ryan Dahl: Original Node.js presentation",embedUrl:"https://www.youtube.com/embed/ztspvPYybIY",youTubeId:"M3BM9TB-8yA",attachments:[{title:"Att1",url:"https://www.irs.gov/pub/irs-pdf/f1040sa.pdf"},{title:"Att2",url:"https://www.fda.gov/media/144414/download"}],description:["Sed laoreet id orci sit amet varius. Vestibulum maximus eros ipsum. Vestibulum dignissim sem non tellus maximus, euismod suscipit odio vulputate. Sed euismod a est ut vulputate. Integer sit amet fermentum libero, sed hendrerit diam. Sed a feugiat ante, sit amet euismod tellus. Sed consequat, ex vel dignissim congue, neque ligula dictum tellus, quis scelerisque nisi magna ut ante. Fusce varius mauris nec nibh tristique placerat. Nulla efficitur nunc erat, ac ultrices neque iaculis sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam molestie eleifend commodo. Sed lobortis, felis laoreet mollis tincidunt, leo augue ornare urna, nec aliquet mauris elit eu nunc."]}],h=function(e){var t=e.description;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Description"}),t.map((function(e){return Object(c.jsx)("p",{children:e},"".substr(0,15))}))]})},p=function(e){var t=e.attachments;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Attachments"}),Object(c.jsx)("ul",{children:t.map((function(e){return Object(c.jsx)("a",{href:e.url,download:!0,children:e.title})}))})]})},j=function(){var e=Object(s.useState)(b),t=Object(r.a)(e,1)[0],i=Object(s.useState)(0),u=Object(r.a)(i,2),n=u[0],a=u[1],o=Object(s.useState)(!1),d=Object(r.a)(o,1)[0],j=function(){return t[n]};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("h1",{children:["Now Playing: ",j().title]}),Object(c.jsx)("button",{onClick:function(){var e=n-1;e<0&&(e=d?t.length-1:0),a(e)},children:"Prev"}),Object(c.jsx)("button",{onClick:function(){var e=n+1;e>=t.length&&(e=d?0:t.length-1),a(e===t.length?0:e)},children:"Next"}),Object(c.jsx)(l,{video:j()}),Object(c.jsx)(m,{videos:t,setSelectedVideo:function(e){return a(t.findIndex((function(t){return t.youTubeId===e})))}}),Object(c.jsx)(p,{attachments:j().attachments}),Object(c.jsx)(h,{description:j().description})]})},f=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,31)).then((function(t){var i=t.getCLS,s=t.getFID,u=t.getFCP,n=t.getLCP,a=t.getTTFB;i(e),s(e),u(e),n(e),a(e)}))};a.a.render(Object(c.jsx)(u.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),f()}},[[30,1,2]]]);
//# sourceMappingURL=main.8381c8f1.chunk.js.map