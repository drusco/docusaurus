---
title: "proxy.isExtensible"
hide_table_of_contents: false
---

Type: [`ProxyEvent`](../../api/classes/ProxyEvent)

Fired when checking if new properties can be added to the proxy.

```typescript
const proxy = nexo.create({});

nexo.on("proxy.isExtensible", () => {
  console.log("Checking extensibility");
});

Object.isExtensible(proxy); // Logs: Checking extensibility
```
