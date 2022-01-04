window.BENCHMARK_DATA = {
  lastUpdate: 1641265772320,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          committer: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          distinct: true,
          id: 'd86e2a68ed45222b0d7a76317d15af98289b5f69',
          message: 'chore: publish\n\n - @napi-rs/cli@2.2.1',
          timestamp: '2022-01-04T10:59:51+08:00',
          tree_id: '76793bec16a81220701a3017a2c69969e16e7aef',
          url: 'https://github.com/napi-rs/napi-rs/commit/d86e2a68ed45222b0d7a76317d15af98289b5f69',
        },
        date: 1641265771106,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 45141471,
            range: '±0.37%',
            unit: 'ops/sec',
            extra: '92 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 592981558,
            range: '±0.13%',
            unit: 'ops/sec',
            extra: '91 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 16090085,
            range: '±0.34%',
            unit: 'ops/sec',
            extra: '90 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 590376193,
            range: '±0.14%',
            unit: 'ops/sec',
            extra: '95 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 309304,
            range: '±9.64%',
            unit: 'ops/sec',
            extra: '60 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 1380979,
            range: '±4.14%',
            unit: 'ops/sec',
            extra: '75 samples',
          },
          {
            name: 'createArray#createArrayJson',
            value: 32977,
            range: '±0.11%',
            unit: 'ops/sec',
            extra: '93 samples',
          },
          {
            name: 'createArray#create array for loop',
            value: 6473,
            range: '±0.16%',
            unit: 'ops/sec',
            extra: '95 samples',
          },
          {
            name: 'createArray#create array with serde trait',
            value: 6459,
            range: '±0.16%',
            unit: 'ops/sec',
            extra: '94 samples',
          },
          {
            name: 'getArrayFromJs#get array from json string',
            value: 13720,
            range: '±0.79%',
            unit: 'ops/sec',
            extra: '93 samples',
          },
          {
            name: 'getArrayFromJs#get array from serde',
            value: 8843,
            range: '±0.25%',
            unit: 'ops/sec',
            extra: '93 samples',
          },
          {
            name: 'getArrayFromJs#get array with for loop',
            value: 11127,
            range: '±0.09%',
            unit: 'ops/sec',
            extra: '93 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 349277,
            range: '±5.21%',
            unit: 'ops/sec',
            extra: '75 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 306967,
            range: '±4.92%',
            unit: 'ops/sec',
            extra: '83 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 332657,
            range: '±4.75%',
            unit: 'ops/sec',
            extra: '79 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 289888,
            range: '±4.82%',
            unit: 'ops/sec',
            extra: '81 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 28374,
            range: '±1.83%',
            unit: 'ops/sec',
            extra: '77 samples',
          },
          {
            name: 'Async task#ThreadSafeFunction',
            value: 331,
            range: '±3.01%',
            unit: 'ops/sec',
            extra: '67 samples',
          },
          {
            name: 'Async task#Tokio future to Promise',
            value: 23068,
            range: '±1.21%',
            unit: 'ops/sec',
            extra: '84 samples',
          },
          {
            name: 'Query#query * 100',
            value: 1660,
            range: '±1.99%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
          {
            name: 'Query#query * 1',
            value: 22723,
            range: '±2.22%',
            unit: 'ops/sec',
            extra: '80 samples',
          },
        ],
      },
    ],
  },
}
