const heading = React.createElement("h1", { id: "header" }, "hey bhai ");
const heading2 = React.createElement("h2", { id: "header2" }, "hey dusra bhai");
const children = React.createElement("div", { id: "children" }, [
  heading,
  heading2,
]);

const parent = React.createElement("div", { id: "parent" }, children);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
