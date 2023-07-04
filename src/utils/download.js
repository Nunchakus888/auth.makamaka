export const downLoadImage = (href) => {
  if (!href) return;
  const a = document.createElement('a');
  a.href = href;
  // a.download = "output.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const _URL = window.URL || window.webkitURL;
export const calcSizeOfImage = (file, type, cb) => {
  const img = new Image();
  img.src = type === 'file' ? _URL.createObjectURL(file) : file;
  img.onload = function () {
    const {width} = this;
    const {height} = this;
    cb({ width, height, output_size: `${width}x${height}` });
    _URL.revokeObjectURL(img.src);
  };
};
