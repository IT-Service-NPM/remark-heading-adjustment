import { test } from 'node:test';
import path from 'node:path';
import { remarkUsingExample } from './example.ts';

await test('accepts `topHeadingDepth` from settings',
  async (t) => {
    const outputFile = await remarkUsingExample(path.resolve(
      import.meta.dirname, 'fixtures', 'main.md'
    ));
    t.assert.fileSnapshot(
      String(outputFile),
      path.resolve(import.meta.dirname, 'snapshots', 'output.md'),
      { serializers: [(data: string) => data] }
    );
  });
