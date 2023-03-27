//mock图片数据
export const MockList = {
  tmplength: 8
};

//mock生成中的数据
export const MockPending = {
  txt2img: [
    {
      task_id: "11231231",
      start_time: "2022-12-12 00:00",
      prompt: "这个内容是很严肃的内容"
    },
    {
      task_id: "11231231",
      start_time: "2022-12-12 00:00",
      prompt: "这个内容是很严肃的内容1"
    }
  ],
  img2img: [
    {
      task_id: "11231231",
      start_time: "2022-12-12 00:00",
      prompt: "这个内容是很严肃的内容2"
    }
  ],
  inpaint: []
}

export const TYPE = [
  'get_user_pending',
  'get_user_tasks_txt2img',
  'get_user_tasks_img2img',
  'get_user_tasks_inpaint',
  'get_user_fav',
];

