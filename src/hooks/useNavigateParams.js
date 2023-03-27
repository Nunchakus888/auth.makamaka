import { createSearchParams, useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate();

  return (pathname, params, ...others) => {
    const path = {
      pathname,
      search: createSearchParams(params).toString(),
      ...others
    };
    navigate(path);
  };
};
