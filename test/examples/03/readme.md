# Adjustment headings depth when `topHeadingDepth` specified in settings

When `processor.data().topHeadingDepth` is not specified,
this plugin accepts `topHeadingDepth` from settings.

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

```markdown file=fixtures/main.md
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
