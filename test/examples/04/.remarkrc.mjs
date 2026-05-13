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
