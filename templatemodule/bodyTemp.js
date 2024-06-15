const bodyTemp = function(content,script) {
  return `
  <div id="root">
    ${content}
  </div>
  <script src="${script}"></script>
  `;
}