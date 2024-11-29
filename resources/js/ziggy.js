const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"posts.create":{"uri":"posts\/create","methods":["GET","HEAD"]},"posts.store":{"uri":"posts","methods":["POST"]},"posts.show":{"uri":"posts\/{post}","methods":["GET","HEAD"],"parameters":["post"],"bindings":{"post":"id"}},"posts.edit":{"uri":"posts\/{post}\/edit","methods":["GET","HEAD"],"parameters":["post"],"bindings":{"post":"id"}},"posts.update":{"uri":"posts\/{post}","methods":["PUT","PATCH"],"parameters":["post"],"bindings":{"post":"id"}},"posts.destroy":{"uri":"posts\/{post}","methods":["DELETE"],"parameters":["post"],"bindings":{"post":"id"}},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
