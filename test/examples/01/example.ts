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
    .data('topHeadingDepth', 3)
    .use(remarkHeadingsAdjustment)
    .process(await vFile.read(filePath));
};
