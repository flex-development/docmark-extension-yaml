/**
 * @file comment
 * @module docmark-extension-yaml/comment
 */

import { factoryLineComment } from '@flex-development/docmark-factory-line'
import { codes, lang, tt } from '@flex-development/docmark-util-symbol'
import type {
  ContinuableConstruct,
  NamedConstruct
} from '@flex-development/docmark-util-types'

/**
 * The YAML comment construct.
 *
 * This construct is expected to run at the `source` content level.
 *
 * @const {ContinuableConstruct & NamedConstruct} comment
 */
const comment: ContinuableConstruct & NamedConstruct = factoryLineComment({
  construct: { name: `${tt.comment}:${lang.yaml}` },
  fields: { lang: lang.yaml },
  markers: { code: codes.numberSign }
})

export default comment
