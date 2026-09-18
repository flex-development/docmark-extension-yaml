/**
 * @file Integration Tests - comments
 * @module docmark-extension-yaml/tests/integration/comments
 */

import snapshot from '#tests/utils/snapshot-events'
import { parse, postprocess, preprocess } from '@flex-development/docmark'
import testSubject from '@flex-development/docmark-extension-yaml'
import type {
  Chunk,
  FileLike,
  ParseOptions
} from '@flex-development/docmark-util-types'
import { readSync as read } from 'to-vfile'
import { beforeAll, describe, expect, it } from 'vitest'

describe('integration:comments', () => {
  let options: ParseOptions

  beforeAll(() => {
    options = { extensions: [testSubject] }
  })

  it('should parse yaml comments', () => {
    // Arrange
    const file: FileLike = read('__fixtures__/comment.txt')
    const slice: Chunk[] = preprocess()(file, undefined, true)

    // Act
    const result = postprocess(parse(options).source().write(slice))

    // Expect
    expect(snapshot(result)).toMatchSnapshot()
  })
})
