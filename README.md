# three-182-bun

To run if Bun is installed:

```bash
bun install
bun index.js
```

To run with Docker:

```bash
docker build -t three-182-bun .
docker run -it three-182-bun
```

Error:

```bash
73269 |         [ ClampToEdgeWrapping ]: 'clamp',
73270 |         [ MirroredRepeatWrapping ]: 'mirror'
73271 | };
73272 |
73273 | const gpuShaderStageLib = {
73274 |         'vertex': GPUShaderStage.VERTEX,
                   ^
TypeError: undefined is not an object (evaluating 'GPUShaderStage.VERTEX')
      at /Users/verekia/Local/Code/three-182-server-gpu-bug/node_modules/three/build/three.webgpu.js:73274:12
      at loadAndEvaluateModule (2:1)

```
