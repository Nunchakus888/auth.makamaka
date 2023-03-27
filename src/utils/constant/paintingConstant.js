import {Trans} from 'react-i18next';
import defaultLanguage from 'i18n/defaultLanguage';


const commonParamsOfPaintingRequest = [
  'scale',
  'prompt',
  'n_samples',
  'model_name',
  'neg_prompt',
  'ddim_steps',
  'output_size',
  'auto_weight',
  'profession_mode',
  'select_seed'
];

export const profession_mode_params = ['ddim_steps', 'scale'];
export const fmtStr2ArrParams = ['prompt', 'neg_prompt'];

/**
 * 功能决定，顺序不可变，index 唯一索引
 */
export const paintTabs = [
  {
    label: <Trans i18nKey="painting.txt2img">{ defaultLanguage.painting.txt2img }</Trans>,
    value: 'txt2img',
    api: {
      post: 'txt2img_submit',
      demo: 'txt2img',
    },
    params: commonParamsOfPaintingRequest,
    /**
     model_name	string	true	"beta_v0.3.1"	用到的模型名称
     prompt	string	true	"one girl, beautiful"	描述
     neg_prompt	string	true	"unsafe"	反向描述
     n_samples	int	true	4	生成图片的数量
     ddim_steps	int	true	30	生成步数
     scale	float	true	7.0	文本控制力度
     output_size	string	true	"640x640"	选择的图片尺寸
     auto_weight	bool	true	True	自动权重
     select_seed	int	true	0	随机数种子。如果是-1的话代表不指定
     */
  },
  {
    label: <Trans i18nKey="painting.i2i">{ defaultLanguage.painting.i2i }</Trans>,
    value: 'img2img',
    api: {
      post: 'img2img_submit',
      demo: 'img2img',
    },
    params: [
      ...commonParamsOfPaintingRequest,
      'init_img',
      'strength',
    ],
    /**
     model_name	string	true	"beta_v0.3.1"	用到的模型名称
     init_img	string	true	"http://47.99.81.169:8002/img2img-save/2022-11-21/30b7443a-696e-11ed-b78b-1232d127bc82.png"	图片路径
     prompt	string	true	"one girl, beautiful"	描述
     neg_prompt	string	true	"unsafe"	反向描述
     n_samples	int	true	4	生成图片的数量
     ddim_steps	int	true	30	生成步数
     strength	float	true	0.9	图片变化力度
     scale	float	true	7.0	文本控制力度
     auto_weight	bool	true	True	自动权重
     select_seed	int	true	0	随机数种子。如果是-1的话代表不指定
     */
  },
  {
    label: <Trans i18nKey="painting.inpaint">{ defaultLanguage.painting.inpaint }</Trans>,
    value: 'inpaint',
    api: {
      post: 'inpaint_submit',
      demo: 'inpaint',
    },
    params: [
      ...commonParamsOfPaintingRequest,
      'init_img',
      'strength',
      'mask',
      'background_start_x',
      'background_end_x',
      'background_start_y',
      'background_end_y',
    ],
    /**
     model_name	string	true	"beta_v0.3.1"	用到的模型名称
     init_img	string	true	"http://47.99.81.169:8002/img2img-save/2022-11-21/30b7443a-696e-11ed-b78b-1232d127bc82.png"	图片路径
     prompt	string	true	"one girl, beautiful"	描述
     neg_prompt	string	true	"unsafe"	反向描述
     n_samples	int	true	4	生成图片的数量
     ddim_steps	int	true	30	生成步数
     strength	float	true	0.9	图片变化力度
     mask	base64	true	""
     background_start_x	int	true	0	mask在原图上的起始位置x
     background_end_x	int	true	640	mask在原图上的结束位置x
     background_start_y	int	true	0	mask在原图上的起始位置y
     background_end_y	int	true	640	mask在原图上的结束位置y
     scale	float	true	7.0	文本控制力度
     auto_weight	bool	true	True	自动权重
     select_seed	int	true	0	随机数种子。如果是-1的话代表不指定
     */
  }
];

export const PAINTING_TYPE_K = 'PAINTING_TYPE_K';
export const K = {
  paintingTypeK: 'PAINTING_TYPE_K',
  txt2img: paintTabs[0].value,
  img2img: paintTabs[1].value,
  inpaint: paintTabs[2].value,
  imageList: 'imageList',
  profession_mode: 'profession_mode',
  methodType: 'methodType',
  init_img: 'init_img',
  output_size: 'output_size',
  os_scale: 'os_scale',
  os_size: 'os_size',
  model_name: 'model_name',
  neg_prompt: 'neg_prompt',
  // 辅助字段，交互用
  neg_prompt_assist_k: 'neg_prompt_assist_k',
  select_seed: 'select_seed',
  editing: 'editing'
};

/**
 nums	row	Column
 1	  1	  1
 2	  1	  2
 3	  2	  2
 4	  2	  2
 5	  2	  3
 6	  2	  3
 7	  3	  3
 8	  3	  3
 9	  3	  3
 10	  3	  4

 * @type {{}}
 */
export const imageLayoutSet = {
  1: {
    cols: 8,
    0: [6, 6],
    sx: {
      gridColumnStart: 2,
      gridRowStart: 2,
      gridRowEnd: 8,
    }
  },
  2: {
    cols: 2,
    cell: [1, 1],
  },
  3: {
    cols: 2,
    cell: [2, 2],
  },
  4: {
    cols: 2,
    cell: [2, 2],
  },
  5: {
    cols: 6,
    common: [2, 2],
    0: [3, 3],
    1: [3, 3],
  },
  6: {
    cols: 3,
  },
  7: {
    cols: 3,
  },
  8: {
    cols: 3,
  },
  9: {
    cols: 3,
  },
  10: {
    cols: 8,
    common: [2, 2],
    0: [4, 4],
    1: [4, 4]
  },
};
