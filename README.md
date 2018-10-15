# x-typescript

## Environment

```bash
$ node -v
v10.10.0

$ yarn -v
1.9.4
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
```
* [js-yaml](https://github.com/nodeca/js-yaml)
* [fs Promises API](https://nodejs.org/api/fs.html#fs_fs_promises_api)
  * `(node:31251) ExperimentalWarning: The fs.promises API is experimental`
</details>

<details>
<summary><b>Redis</b></summary>

```bash
$ yarn start:redis
```

* [ioredis](https://github.com/luin/ioredis)
  * FYI: [node_redis](https://github.com/NodeRedis/node_redis) is legacy for ES6

</details>

<details>
<summary><b>Luxon</b></summary>

```bash
$ yarn start:luxon
```

* [luxon](https://github.com/moment/luxon)

</details>

## Code format

```bash
$ yarn format
```

* [Prettier](https://prettier.io/docs/en/index.html)
