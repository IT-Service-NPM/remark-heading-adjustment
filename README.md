# @it-service-npm/remark-heading-adjustment Remark plugin

[![GitHub release][github-release]][github-release-url]
[![NPM release][npm]][npm-url]
[![Node version][node]][node-url]
[![Dependencies status][deps]][deps-url]
[![Install size][size]][size-url]

[![CI Status][build]][build-url]
[![Tests Results][tests]][tests-url]
[![Coverage status][coverage]][coverage-url]

[![Semantic Versioning](https://img.shields.io/badge/Semantic%20Versioning-v2.0.0-green.svg?logo=semver)](https://semver.org/lang/ru/spec/v2.0.0.html)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-v1.0.0-yellow.svg?logo=git)](https://conventionalcommits.org)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)

[![VS Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?logo=visual%20studio%20code)](https://code.visualstudio.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-333333.svg?logo=typescript)](http://www.typescriptlang.org/)
[![EditorConfig](https://img.shields.io/badge/EditorConfig-333333.svg?logo=editorconfig)](https://editorconfig.org)
[![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)](https://eslint.org)

[github-release]: https://img.shields.io/github/v/release/IT-Service-NPM/remark-heading-adjustment.svg?sort=semver&logo=github

[github-release-url]: https://github.com/IT-Service-NPM/remark-heading-adjustment/releases

[npm]: https://img.shields.io/npm/v/@it-service-npm/remark-heading-adjustment.svg?logo=npm

[npm-url]: https://www.npmjs.com/package/@it-service-npm/remark-heading-adjustment

[node]: https://img.shields.io/node/v/@it-service-npm/remark-heading-adjustment.svg

[node-url]: https://nodejs.org

[deps]: https://img.shields.io/librariesio/release/npm/@it-service-npm/remark-heading-adjustment

[deps-url]: https://libraries.io/npm/@it-service-npm%2Fremark-heading-adjustment

[size]: https://packagephobia.com/badge?p=@it-service-npm/remark-heading-adjustment

[size-url]: https://packagephobia.com/result?p=@it-service-npm/remark-heading-adjustment

[build]: https://github.com/IT-Service-NPM/remark-heading-adjustment/actions/workflows/ci.yml/badge.svg?branch=main

[build-url]: https://github.com/IT-Service-NPM/remark-heading-adjustment/actions/workflows/ci.yml

[tests]: https://img.shields.io/endpoint?logo=vitest&url=https%3A%2F%2Fgist.githubusercontent.com%2Fsergey-s-betke%2Fd70e4de09a490afc9fb7a737363b231a%2Fraw%2Fremark-heading-adjustment-junit-tests.json

[tests-url]: https://github.com/IT-Service-NPM/remark-heading-adjustment/actions/workflows/ci.yml

[coverage]: https://coveralls.io/repos/github/IT-Service-NPM/remark-heading-adjustment/badge.svg?branch=main

[coverage-url]: https://coveralls.io/github/IT-Service-NPM/remark-heading-adjustment?branch=main

This Remark plugin helps to adjust headings depth in markdown file.

When `processor.data().topHeadingDepth` is specified,
this plugin adjusts all headings so
that the depth of the top heading aligns with the given value.

If `processor.data().topHeadingDepth` is not set,
the plugin remains inactive.

## Contents

- [@it-service-npm/remark-heading-adjustment Remark plugin](#it-service-npmremark-heading-adjustment-remark-plugin)
  - [Contents](#contents)
  - [Install](#install)
  - [Examples](#examples)
    - [Adjustment headings depth when `topHeadingDepth` specified](#adjustment-headings-depthwhen-topheadingdepth-specified)
    - [Does nothing if `topHeadingDepth` is not specified](#does-nothing-if-topheadingdepth-is-not-specified)
    - [Adjustment headings depth when `topHeadingDepth` specified in settings](#adjustment-headings-depthwhen-topheadingdepth-specified-in-settings)
    - [Adjust top heading depth to H1](#adjust-top-heading-depth-toh1)
  - [API](#api)
  - [License](#license)

## Install

```sh
npm install --save-dev @it-service-npm/remark-heading-adjustment
```

## Examples

### Adjustment headings depth when `topHeadingDepth` specified

`@it-service-npm/remark-heading-adjustment` can
help to adjust headings depth in markdown document.

When `processor.data().topHeadingDepth` is specified,
this plugin adjusts all headings (shift they up or down) so
that the depth of the top heading aligns with the given value.

```typescript file=test/examples/01/example.ts
import { remark } from 'remark';
import * as vFile from 'to-vfile';
import {
  remarkHeadingsAdjustment
} from '@it-service-npm/remark-heading-adjustment';
import type { VFile } from 'vfile';

export async function remarkUsingExample(
  filePath: string
): Promise<VFile> {
  return remark()
    .data('topHeadingDepth', 3)
    .use(remarkHeadingsAdjustment)
    .process(await vFile.read(filePath));
};

```

Source files:

main.md:

```markdown file=test/examples/01/fixtures/main.md
# main header (depth 1)

Text 1.

## header 2 (depth 2)

Text 2.

### header 3 (depth 3)

Text 3.

## header 4 (depth 2)

Text 4.

```

Remark output:

```markdown file=test/examples/01/snapshots/output.md
### main header (depth 1)

Text 1.

#### header 2 (depth 2)

Text 2.

##### header 3 (depth 3)

Text 3.

#### header 4 (depth 2)

Text 4.

```

### Does nothing if `topHeadingDepth` is not specified

`@it-service-npm/remark-heading-adjustment` can
help to adjust headings depth in markdown document.

Without additional `processor` or `file` data
this plugin does nothing.

```typescript file=test/examples/02/example.ts
import { remark } from 'remark';
import * as vFile from 'to-vfile';
import {
  remarkHeadingsAdjustment
} from '@it-service-npm/remark-heading-adjustment';
import type { VFile } from 'vfile';

export async function remarkUsingExample(
  filePath: string
): Promise<VFile> {
  return remark()
    .use(remarkHeadingsAdjustment)
    .process(await vFile.read(filePath));
};

```

Source files:

main.md:

```markdown file=test/examples/02/fixtures/main.md
# main header (depth 1)

Text 1.

## header 2 (depth 2)

Text 2.

### header 3 (depth 3)

Text 3.

## header 4 (depth 2)

Text 4.

```

Remark output:

```markdown file=test/examples/02/snapshots/output.md
# main header (depth 1)

Text 1.

## header 2 (depth 2)

Text 2.

### header 3 (depth 3)

Text 3.

## header 4 (depth 2)

Text 4.

```

### Adjustment headings depth when `topHeadingDepth` specified in settings

When `processor.data().topHeadingDepth` is not specified,
this plugin accepts `topHeadingDepth` from settings.

```typescript file=test/examples/03/example.ts
import { remark } from 'remark';
import * as vFile from 'to-vfile';
import {
  remarkHeadingsAdjustment
} from '@it-service-npm/remark-heading-adjustment';
import type { VFile } from 'vfile';

export async function remarkUsingExample(
  filePath: string
): Promise<VFile> {
  return remark()
    .use({
      plugins: [remarkHeadingsAdjustment],
      settings: {
        topHeadingDepth: 1
      }
    })
    .process(await vFile.read(filePath));
};

```

Source files:

main.md:

```markdown file=test/examples/03/fixtures/main.md
## main header (depth 1)

Text 1.

### header 2 (depth 2)

Text 2.

#### header 3 (depth 3)

Text 3.

### header 4 (depth 2)

Text 4.

```

Remark output:

```markdown file=test/examples/03/snapshots/output.md
# main header (depth 1)

Text 1.

## header 2 (depth 2)

Text 2.

### header 3 (depth 3)

Text 3.

## header 4 (depth 2)

Text 4.

```

### Adjust top heading depth to H1

This plugin works with remark CLI to standardize heading levels,
ensuring that the top-level heading depth is always 1.

.remarkrc.mjs:

```javascript file=test/examples/04/.remarkrc.mjs
import {
  remarkAdjustTopHeadingToH1
} from '@it-service-npm/remark-heading-adjustment';

export default {
  plugins: [
    remarkAdjustTopHeadingToH1
  ]
}

```

Source files:

main.md:

```markdown file=test/examples/04/fixtures/main.md
## top level header

Text 1.

### header 2

Text 2.

#### header 3

Text 3.

### header 4

Text 4.

```

Remark output:

```markdown file=test/examples/04/snapshots/output.md
# top level header

Text 1.

## header 2

Text 2.

### header 3

Text 3.

## header 4

Text 4.

```

## API

Please, read the [API reference](/docs/index.md).

## License

[MIT](LICENSE) © [Sergei S. Betke](https://github.com/sergey-s-betke)
