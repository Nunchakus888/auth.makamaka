import data from './en.json';

const options = [
  {
    name: '中文',
    code: 'zh_cn',
    submitCode: 'zh-CN'
  },
  {
    name: 'English',
    code: 'en'
  },
  {
    name: 'にほんご',
    code: 'jp'
  },
  {
    name: '한국어',
    code: 'kr'
  },
  {
    name: '繁體中文',
    code: 'zh_tw',
    submitCode: 'zh-TW'
  }
];

// 默认语言采用英文
export const code = 'en';

export default {
  ...data.en.translation,
  options
};
