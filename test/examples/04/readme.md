# Adjust top heading depth to H1

The plugin exports a preset called `remarkAdjustTopHeadingToH1`.
This preset includes the `remarkHeadingsAdjustment` plugin
with settings `{topHeadingDepth: 1}`.

These are meant for use in .remarkrc files
and help normalize the depth of the top-level heading.

.remarkrc.mjs:

```javascript
import remarkDirective from 'remark-directive';
import {
  remarkAdjustTopHeadingToH1
} from '@it-service-npm/remark-heading-adjustment';
import { remarkIncludeCode } from '@it-service-npm/remark-include-code/async';

export default {
  plugins: [
    remarkDirective,
    remarkAdjustTopHeadingToH1,
    [remarkIncludeCode, {
      useEditorConfig: true,
      trimFinalNewline: true,
      trimExtraIndent: true
    }],
  ]
}
```

Source files:

main.md:

```markdown
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

```markdown
# top level header

Text 1.

## header 2

Text 2.

### header 3

Text 3.

## header 4

Text 4.
```
