---
title: Proxy Events
hide_table_of_contents: false
---

## Overview

Nexos emits fine-grained events for each JavaScript Proxy trap. These events allow you to observe and modify low-level behavior of objects and functions in real time — enabling powerful debugging, instrumentation, or dynamic behavior injection.

This page serves as a complete reference to all `proxy.*` events that can be listened to and handled within Nexos.

---

## Core Proxy Events

These are general-purpose proxy events that aren't tied to specific traps:

- [proxy](../api/interfaces/ProxyCreateEvent.md) — Emitted whenever a new proxy is created.
- [proxy.error](./error-handling.md#proxy-specific-errors) — Captures exceptions thrown during proxy operations.

## Proxy Trap Events

Each Proxy trap in JavaScript corresponds to a `proxy.*` event. You can hook into these to monitor or override behavior at a very granular level:

- [proxy.get](../api/interfaces/ProxyGetEvent.md)
- [proxy.set](../api/interfaces/ProxySetEvent.md)
- [proxy.has](../api/interfaces/ProxyHasEvent.md)
- [proxy.apply](../api/interfaces/ProxyApplyEvent.md)
- [proxy.construct](../api/interfaces/ProxyConstructEvent.md)
- [proxy.ownKeys](../api/interfaces/ProxyOwnKeysEvent.md)
- [proxy.getOwnPropertyDescriptor](../api/interfaces/ProxyGetOwnPropertyDescriptorEvent.md)
- [proxy.defineProperty](../api/interfaces/ProxyDefinePropertyEvent.md)
- [proxy.deleteProperty](../api/interfaces/ProxyDeletePropertyEvent.md)
- [proxy.getPrototypeOf](../api/interfaces/ProxyGetPrototypeOfEvent.md)
- [proxy.setPrototypeOf](../api/interfaces/ProxySetPrototypeOfEvent.md)
- [proxy.isExtensible](../api/interfaces/ProxyIsExtensibleEvent.md)
- [proxy.preventExtensions](../api/interfaces/ProxyPreventExtensionsEvent.md)
