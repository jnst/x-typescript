# x-typescript

## Environment

```bash
$ node -v
v10.12.0

$ yarn -v
1.10.1
```

## Setup

```bash
$ yarn install
```

## Example

<details>
<summary><b>YAML</b></summary>

```bash
$ yarn start:yaml

✔  success   YAML file content:
{
  "designed_by": [
    "Microsoft"
  ],
  "developer": "Microsoft",
  "first_appeared": "2012-10-01T00:00:00.000Z",
  "version": {
    "stable": "3.1.1",
    "preview": "3.1 RC"
  },
  "filename_extensions": [
    ".ts",
    ".tsx"
  ],
  "website": "http://www.typescriptlang.org/"
}
✨  Done in 0.64s.
```
* [js-yaml](https://github.com/nodeca/js-yaml)
* [fs Promises API](https://nodejs.org/api/fs.html#fs_fs_promises_api)
  * `(node:31251) ExperimentalWarning: The fs.promises API is experimental`
</details>

<details>
<summary><b>Redis</b></summary>

```bash
$ yarn start:redis

✔  success   PONG
✨  Done in 1.69s.
```

* [ioredis](https://github.com/luin/ioredis)
  * FYI: [node_redis](https://github.com/NodeRedis/node_redis) is legacy for ES6

</details>

<details>
<summary><b>Luxon</b></summary>

```bash
$ yarn start:luxon

✔  success   yyyyMMdd  => 20181016
✔  success   yyyy'W'WW => 2018W42
✨  Done in 0.58s.
```

* [luxon](https://github.com/moment/luxon)

</details>

## Code format

```bash
$ yarn format
```

* [Prettier](https://prettier.io/docs/en/index.html)
