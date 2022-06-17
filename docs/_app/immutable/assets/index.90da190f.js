self.window = self;
let fulfil_ready;
const ready = new Promise((f) => {
  fulfil_ready = f;
});
self.addEventListener("message", async (event) => {
  switch (event.data.type) {
    case "init":
      try {
        importScripts(`${event.data.svelteUrl}/compiler.js`);
      } catch {
        await import(
          /* @vite-ignore */
          `${event.data.svelteUrl}/compiler.js`
        );
      }
      fulfil_ready();
      break;
    case "compile":
      await ready;
      postMessage(compile(event.data));
      break;
  }
});
const common_options = {
  dev: false,
  css: false
};
function compile({ id, source, options, return_ast }) {
  try {
    const { js, css, ast } = svelte.compile(source, Object.assign({}, common_options, options, { accessors: true }));
    return {
      id,
      result: {
        js: js.code,
        css: css.code || `/* Add a <style> tag to see compiled CSS */`,
        ast: return_ast ? ast : null
      }
    };
  } catch (err) {
    let message = `/* Error compiling component

${err.message}`;
    if (err.frame)
      message += `
${err.frame}`;
    message += `

*/`;
    return {
      id,
      result: {
        js: message,
        css: message
      }
    };
  }
}
//# sourceMappingURL=index.dc5d0e7c.js.map