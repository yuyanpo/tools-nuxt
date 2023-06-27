export const navLists = [
  { title: '首页', link: '/' },
  {
    title: '格式化工具',
    children: [
      { title: 'JSON格式化', link: '/format/json' },
      { title: 'HTML格式化/压缩', link: '/format/html' },
      { title: 'Javascript格式化/压缩', link: '/format/javascript' },
      { title: 'CSS格式化/压缩', link: '/format/css' },
      { title: 'SQL格式化/压缩', link: '/format/sql' },
      { title: 'JSON/XML互转', link: '/format/json2xml' },
      { title: 'XML格式化', link: '/format/xml' },
    ],
  },
  {
    title: '编码/加密',
    children: [
      { title: 'Base64编码/解码', link: '/encrypt/base64' },
      { title: 'UTF-8编码汉字互转', link: '/encrypt/utf8' },
      { title: 'ASCii编码汉字互转', link: '/encrypt/ascii' },
      { title: 'URL编码/解码', link: '/encrypt/url' },
    ],
  },
  {
    title: '文档/手册',
    children: [
      { title: 'HTTP状态码', link: '/doc/http_code' },
      { title: 'HTTP请求方法', link: '/doc/http_method' },
    ],
  },
  { title: '关于', link: '/about' },
]
