/**
 * This Remark plugin helps to adjust headings depth in markdown file.
 *
 * @packageDocumentation
 */

import type { Transformer, Processor } from 'unified';
import type {
  Node,
  Heading
} from 'mdast';
import type { VFile } from 'vfile';
import { visit } from 'unist-util-visit';

declare module 'unified' {

  interface Data {
    /**
     * When `processor.data().topHeadingDepth` is specified,
     * plugin '@it-service-npm/remark-heading-adjustment'
     * adjusts all headings so
     * that the depth of the top heading aligns with the given value.
     *
     * @public
     */
    topHeadingDepth?: number
  }

  interface Settings {
    /**
     * When `processor.data().topHeadingDepth` is specified,
     * plugin '@it-service-npm/remark-heading-adjustment'
     * adjusts all headings so
     * that the depth of the top heading aligns with the given value.
     *
     * @public
     */
    topHeadingDepth?: number
  }

};

/**
 * This Remark plugin helps to adjust headings depth in markdown file.
 *
 * When `processor.data().topHeadingDepth` is specified,
 * this plugin adjusts all headings so
 * that the depth of the top heading aligns with the given value.
 *
 * If `processor.data().topHeadingDepth` is not set,
 * the plugin remains inactive.
 *
 * @public
 */
export function remarkHeadingsAdjustment(
  this: Processor
): Transformer {

  const processor: Processor = this;

  return function (tree: Node, _file: VFile): Node {
    const topHeadingDepth: number | undefined =
      processor.data().topHeadingDepth ??
      processor.data().settings?.topHeadingDepth;
    let depthDelta: number | undefined;

    if (typeof topHeadingDepth !== 'undefined') {
      visit(tree,
        'heading',
        function (node: Heading): void {
          node.depth -= (depthDelta ??= node.depth - topHeadingDepth);
        }
      );
    };

    return tree;
  };

};
