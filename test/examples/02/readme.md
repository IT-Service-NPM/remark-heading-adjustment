# Does nothing if `topHeadingDepth` is not specified

`@it-service-npm/remark-heading-adjustment` can
help to adjust headings depth in markdown document.

Without additional `processor` or `file` data
this plugin does nothing.

```typescript file=./example.ts
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

```markdown file=fixtures/main.md
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

```markdown file=snapshots/output.md
# main header (depth 1)

Text 1.

## header 2 (depth 2)

Text 2.

### header 3 (depth 3)

Text 3.

## header 4 (depth 2)

Text 4.
```
