[@iota-pico/core](../README.md) > [ConsoleLogger](../classes/consolelogger.md)

# Class: ConsoleLogger

Implementation of ILogger which sends to the this.\_loggingObject.

## Hierarchy

**ConsoleLogger**

## Implements

* [ILogger](../interfaces/ilogger.md)

## Index

### Constructors

* [constructor](consolelogger.md#constructor)

### Methods

* [banner](consolelogger.md#banner)
* [error](consolelogger.md#error)
* [info](consolelogger.md#info)
* [log](consolelogger.md#log)
* [warning](consolelogger.md#warning)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ConsoleLogger**(loggingObject?: *`Console`*): [ConsoleLogger](consolelogger.md)

*Defined in [loggers/consoleLogger.ts:13](https://github.com/iota-pico/core/tree/master/src/loggers/consoleLogger.ts#L13*

Create and instance of the console logger.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` loggingObject | `Console` |  The object to send all the logging to. |

**Returns:** [ConsoleLogger](consolelogger.md)
A new instance of ConsoleLogger.

___

## Methods

<a id="banner"></a>

###  banner

▸ **banner**(message: *`string`*, ...args: *`any`[]*): `void`

*Implementation of [ILogger](../interfaces/ilogger.md).[banner](../interfaces/ilogger.md#banner)*

*Defined in [loggers/consoleLogger.ts:29](https://github.com/iota-pico/core/tree/master/src/loggers/consoleLogger.ts#L29*

Send banner to the logger.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log. |
| `Rest` args | `any`[] |  Additional parameters to log. |

**Returns:** `void`

___
<a id="error"></a>

###  error

▸ **error**(message: *`string`*, err?: *`any`*, ...args: *`any`[]*): `void`

*Implementation of [ILogger](../interfaces/ilogger.md).[error](../interfaces/ilogger.md#error)*

*Defined in [loggers/consoleLogger.ts:72](https://github.com/iota-pico/core/tree/master/src/loggers/consoleLogger.ts#L72*

Send error to the logger.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log. |
| `Optional` err | `any` |  An error object to log. |
| `Rest` args | `any`[] |  Additional parameters to log. |

**Returns:** `void`

___
<a id="info"></a>

###  info

▸ **info**(message: *`string`*, ...args: *`any`[]*): `void`

*Implementation of [ILogger](../interfaces/ilogger.md).[info](../interfaces/ilogger.md#info)*

*Defined in [loggers/consoleLogger.ts:51](https://github.com/iota-pico/core/tree/master/src/loggers/consoleLogger.ts#L51*

Send information to the logger.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log. |
| `Rest` args | `any`[] |  Additional parameters to log. |

**Returns:** `void`

___
<a id="log"></a>

###  log

▸ **log**(message: *`string`*, ...args: *`any`[]*): `void`

*Implementation of [ILogger](../interfaces/ilogger.md).[log](../interfaces/ilogger.md#log)*

*Defined in [loggers/consoleLogger.ts:41](https://github.com/iota-pico/core/tree/master/src/loggers/consoleLogger.ts#L41*

Send log to the logger.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log. |
| `Rest` args | `any`[] |  Additional parameters to log. |

**Returns:** `void`

___
<a id="warning"></a>

###  warning

▸ **warning**(message: *`string`*, ...args: *`any`[]*): `void`

*Implementation of [ILogger](../interfaces/ilogger.md).[warning](../interfaces/ilogger.md#warning)*

*Defined in [loggers/consoleLogger.ts:61](https://github.com/iota-pico/core/tree/master/src/loggers/consoleLogger.ts#L61*

Send warning to the logger.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  The message to log. |
| `Rest` args | `any`[] |  Additional parameters to log. |

**Returns:** `void`

___

