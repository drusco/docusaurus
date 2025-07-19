---
title: "proxy.set"
hide_table_of_contents: false
---

Type: [`ProxySetEvent`](../../api/interfaces/ProxySetEvent)

Fired when a property value is set.

### Data Properties

#### target

[`Traceable`](../../api/type-aliases/Traceable)

The underlying target object, if applicable. If the proxy was created without a target, this property may be `undefined`.

#### property

[`ObjectKey`](../../api/type-aliases/ObjectKey)

The name or symbol of the property being accessed on the object.

#### value

`unknown`

The new value being assigned to the specified property on the proxy.

### Example

```typescript
import { Nexo } from "nexos";
import type * as nx from "nexos";

const nexo = new Nexo();
const proxy = nexo.create({});

nexo.on("proxy.set", (event: nx.ProxySetEvent) => {
  console.log(`Set ${event.data.property} = ${event.data.value}`);
});

proxy.name = "Nexos"; // Logs: Set name = Nexos
```
