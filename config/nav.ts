export const navLists = [
  { title: '首页', path: '/' },
  {
    title: '格式化工具',
    path: 'format',
    children: [
      { title: 'JSON格式化', path: 'json' },
      { title: 'HTML格式化/压缩', path: 'html' },
      { title: 'Javascript格式化/压缩', path: 'javascript' },
      // { title: 'CSS格式化/压缩', path: '/format/css' },
      // { title: 'SQL格式化/压缩', path: '/format/sql' },
      // { title: 'JSON/XML互转', path: '/format/json2xml' },
      // { title: 'XML格式化', path: '/format/xml' },
    ],
  },
  {
    title: '编码/加密',
    path: 'encrypt',
    children: [
      { title: 'Base64编码/解码', path: 'base64' },
      { title: 'UTF-8编码汉字互转', path: 'utf8' },
      { title: 'ASCii编码汉字互转', path: 'ascii' },
      { title: 'URL编码/解码', path: 'url' },
    ],
  },
  {
    title: '文档/手册',
    path: 'doc',
    children: [
      { title: 'HTTP状态码', path: 'http_code' },
      { title: 'HTTP请求方法', path: 'http_method' },
    ],
  },
  { title: '关于', path: '/about' },
]
