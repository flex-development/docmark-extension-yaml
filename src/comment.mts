/**
 * @file comment
 * @module docmark-extension-yaml/comment
 */

import { factoryLineComment } from '@flex-development/docmark-factory-line'
import { codes } from '@flex-development/docmark-util-symbol'
import type { ContinuableConstruct } from '@flex-development/docmark-util-types'

/**
 * The YAML comment construct.
 *
 * This construct is expected to run at the `source` content level.
 *
 * @see {@linkcode ContinuableConstruct}
 *
 * @const {ContinuableConstruct} comment
 */
const comment: ContinuableConstruct = factoryLineComment({
  markers: { code: codes.numberSign }
})

export default comment
