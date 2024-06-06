
/**
 *
 * @param routes
 * @returns 返回符合vitepress的路由格式
 * {
 *  text: '前端笔记'
 *  item: []
 * }
 */
export function formatter(routes) {
  return Object.keys(routes).map(text => {
    if (!routes[text].length) {
      return {
        text,
        items: []
      }
    }
    let items = routes[text].map(el => {
      let strs = el.split('/')
      return {
        text: strs[strs.length - 1].replace('.md', ''),
        link: el.replace('.md', ''),
      }
    });
    return {
      text,
      items
    }
  })
};
