# three-182-server-gpu-bug

To install dependencies:

```bash
bun install
```

To run:

```bash
bun test
```

index.test.ts:

```
# Unhandled error between tests
-------------------------------
73269 |         [ ClampToEdgeWrapping ]: 'clamp',
73270 |         [ MirroredRepeatWrapping ]: 'mirror'
73271 | };
73272 |
73273 | const gpuShaderStageLib = {
73274 |         'vertex': GPUShaderStage.VERTEX,
                   ^
TypeError: undefined is not an object (evaluating 'GPUShaderStage.VERTEX')
```
