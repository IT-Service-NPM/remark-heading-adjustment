import { test } from 'node:test';
import path from 'node:path';
import {
  remarkUsingExample as remarkExampleWithData
} from './example.ts';
import {
  remarkUsingExample as remarkExampleWithoutData
} from './example-without-data.ts';

await test('plugin adjusts all headings if `topHeadingDepth` is specified',
  async (t) => {
    const outputFile = await remarkExampleWithData(path.resolve(
      import.meta.dirname, 'fixtures', 'main.md'
    ));
    t.assert.fileSnapshot(
      String(outputFile),
      path.resolve(import.meta.dirname, 'snapshots', 'output.md'),
      { serializers: [(data: string) => data] }
    );
  });

await test('plugin does nothing when `topHeadingDepth` is undefined',
  async (t) => {
    const outputFile = await remarkExampleWithoutData(path.resolve(
      import.meta.dirname, 'fixtures', 'main.md'
    ));
    t.assert.fileSnapshot(
      String(outputFile),
      path.resolve(import.meta.dirname, 'snapshots', 'output-without-data.md'),
      { serializers: [(data: string) => data] }
    );
  });
