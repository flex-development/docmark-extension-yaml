/**
 * @file comments
 * @module docmark-extension-yaml/comments
 */

import { codes, constants } from '@flex-development/docmark-util-symbol'
import type { NormalizedExtension } from '@flex-development/docmark-util-types'
import comment from './comment.mts'

/**
 * The YAML comment syntax extension.
 *
 * @see {@linkcode NormalizedExtension}
 *
 * @const {NormalizedExtension} comments
 */
const comments: NormalizedExtension = {
  [constants.contentTypeSource]: { [codes.numberSign]: comment }
}

export default comments
