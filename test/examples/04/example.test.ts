import { test } from 'node:test';
import path from 'node:path';
import { remark } from 'remark';
import * as vFile from 'to-vfile';
import {
  remarkAdjustTopHeadingToH1
} from '@it-service-npm/remark-heading-adjustment';

await test('`remarkAdjustTopHeadingToH`1` preset adjust top heading depth to 1',
  async (t) => {
    const outputFile = await remark()
      .use({
        plugins: [remarkAdjustTopHeadingToH1],
      })
      .process(await vFile.read(path.resolve(
        import.meta.dirname, 'fixtures', 'main.md'
      )));
    t.assert.fileSnapshot(
      String(outputFile),
      path.resolve(import.meta.dirname, 'snapshots', 'output.md'),
      { serializers: [(data: string) => data] }
    );

  });
