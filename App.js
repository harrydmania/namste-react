const heading  = React.createElement('p'
,{id:"first"},
[React.createElement('h3'
,{id:"two"},
"my first application from h2 tag"),
React.createElement('h3'
,{id:"three"},
"my first application from h3 tag")]
);
const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);