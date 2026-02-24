import path from 'node:path';
import { remark } from 'remark';
import * as vFile from 'to-vfile';
import {
  remarkAdjustTopHeadingToH1
} from '@it-service-npm/remark-heading-adjustment';

const testSourceFilesPath: string = path.join(__dirname, 'fixtures');
const testSnapshotsFilesPath: string = path.join(__dirname, 'snapshots');

describe('remark-heading-adjustment', () => {

  it('remarkAdjustTopHeadingToH1 preset adjust top heading depth to 1',
    async () => {
      const outputFile = await remark()
        .use({
          plugins: [remarkAdjustTopHeadingToH1],
        })
        .process(await vFile.read(
          path.join(testSourceFilesPath, 'main.md')
        ));

      await expect(String(outputFile))
        .toMatchFileSnapshot(path.join(testSnapshotsFilesPath, 'output.md'));
    });

});
