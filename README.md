# x-typescript

## Environment

```bash
$ node -v
v10.13.0

$ yarn -v
1.12.3
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

<details>
<summary><b>Enum</b></summary>

```bash
$ yarn start:enum

✔  success   _____ Standard access _____
✔  success   by name : BRONZE
✔  success   by value: 2
✔  success   _____ Added functions _____
✔  success   #names : BRONZE,SILVER,GOLD,Platinum,Diamond
✔  success   #values: 1,2,3,4,5
✔  success   #length: 5
✨  Done in 0.81s.
```

</details>

<details>
<summary><b>Ranking</b></summary>

```bash
$ yarn start:ranking

✔  success   50 users generated.
✔  success   #listByHighScore => 5 users found.
⬤  debug     {"userId":41,"name":"user-41","grade":"DIAMOND","score":9960}
⬤  debug     {"userId":20,"name":"user-20","grade":"DIAMOND","score":9904}
⬤  debug     {"userId":28,"name":"user-28","grade":"SILVER","score":9668}
⬤  debug     {"userId":32,"name":"user-32","grade":"PLATINUM","score":9184}
⬤  debug     {"userId":30,"name":"user-30","grade":"DIAMOND","score":9144}
✔  success   #getByUserId => 1: {"userId":1,"name":"user-1","grade":"SILVER","score":7867}
☒  complete
✨  Done in 2.65s.
```

</details>

## Code format by [Prettier](https://prettier.io/docs/en/index.html)

```bash
$ yarn format
```
