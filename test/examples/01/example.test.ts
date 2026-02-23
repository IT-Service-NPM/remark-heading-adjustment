import path from 'node:path';
import { remarkUsingExample } from './example.ts';

const testSourceFilesPath: string = path.join(__dirname, 'fixtures');
const testSnapshotsFilesPath: string = path.join(__dirname, 'snapshots');

describe('remark-heading-adjustment', () => {

  it('does nothing without additional data', async () => {
    const _cwd = process.cwd();
    try {
      process.chdir(__dirname);

      const outputFile = await remarkUsingExample(
        path.join(testSourceFilesPath, 'main.md')
      );

      await expect(String(outputFile))
        .toMatchFileSnapshot(path.join(testSnapshotsFilesPath, 'output.md'));

    } finally {
      process.chdir(_cwd);
    };

  });

});
