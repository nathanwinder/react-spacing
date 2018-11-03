require.config({
  baseUrl: "./"
});

require(["FontMetrics"], fm => {
  window.FontMetrics = fm;

  const div = document.createElement("div");
  div.className = "ready";
  document.body.append(div);
});
