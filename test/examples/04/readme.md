# Adjust top heading depth to H1

This plugin works with remark CLI to standardize heading levels,
ensuring that the top-level heading depth is always 1.

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
