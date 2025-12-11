import { describe, test, expect } from "bun:test"

import { WebGPURenderer } from "three/webgpu"

describe("import errors", () => {
  test("should import WebGPURenderer", () => {
    expect(WebGPURenderer).toBeDefined()
  })
})
