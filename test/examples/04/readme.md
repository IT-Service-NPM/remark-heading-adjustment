# Adjust top heading depth to H1

The plugin exports a preset called `remarkAdjustTopHeadingToH1`.
This preset includes the `remarkHeadingsAdjustment` plugin
with settings `{topHeadingDepth: 1}`.

These are meant for use in .remarkrc files
and help normalize the depth of the top-level heading.

.remarkrc.mjs:

```javascript file=./.remarkrc.mjs
```

Source files:

main.md:

```markdown file=fixtures/main.md
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

```markdown file=snapshots/output.md
```
