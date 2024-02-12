const heading = React.createElement("div", {}, [
  React.createElement("h1", { id: "heading" }, "hello from react"),
  React.createElement("h2", { id: "heading2" }, "hello from react"),
]);

const root = ReactDOM.createRoot(document.getElementById("container"));
console.log(heading);
root.render(heading);
