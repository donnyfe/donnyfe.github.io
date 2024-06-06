import { formatter } from '../../../utils/formatter'
import {
  // series
  algorithmSeries,
  patternSeries,
  // guide
  jsGuide,
  regexGuide,
  cliGuide,
  deployGuide,
  // performance
  webPerformance,
  geekPerformanceSeries,
  // safe
  webSafe,
  // style
  webStyle,
} from './sidebars';

export default {
  // 数据结构与算法
  '/algorithm/': formatter(algorithmSeries),
  // 设计模式
  '/pattern/': formatter(patternSeries),
  // 性能优化
  '/performance/': formatter(webPerformance),
  '/performance-geek/': formatter(geekPerformanceSeries),
  // 前端安全
  '/safe/': formatter(webSafe),
  // 前端规范
  '/style/': formatter(webStyle),
  // 开发指南
  '/guide/js/': formatter(jsGuide),
  '/guide/regexp/': formatter(regexGuide),
  '/guide/deploy/': formatter(deployGuide),
  '/guide/cli/': formatter(cliGuide),
}
