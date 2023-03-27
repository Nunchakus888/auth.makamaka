export const outputSize = {
  '2:3': {
    M: '512x768',
    L: '1024x1536',
    '3K': '2048x3072',
    '6K': '4096x6144'
  },
  '1:1': {
    M: '640x640',
    L: '1024x1024',
    '3K': '3072x3072',
    '6K': '6144x6144'
  },
  '3:2': {
    M: '768x512',
    L: '1536x1024',
    '3K': '3072x2048',
    '6K': '6144x4096'
  }
};

/**
 * 数据结构转换
 * {
 *  '768x512': { size: 'M', scale: '3:2' }
 * }
 */
export const backSteppingOutputSize = Object.keys(outputSize).reduce((c, n) => {
  const item = outputSize[n];
  return Object.keys(item).reduce((size, next) => {
    c[item[next]] = { size: next, scale: n };
    return c;
  }, {});
}, {});
