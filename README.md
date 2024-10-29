# @eflite/eslint-config

## Usage

### Install

```bash
pnpm add -D github:eflite/eslint-config
```

### Config `.eslintrc`

```js
import config from '@eflite/eslint-config'

export default config.append({ ignores: ['dist'] })
```
