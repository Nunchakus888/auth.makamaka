import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import {CircularProgress, Grid, Pagination, Stack} from "@mui/material";
import MainCard from "../cards/MainCard";
import {useEffect} from "react";
import * as Api from "../../api";
import useToast from "../../hooks/useToast";
import {TYPE} from "../../utils/constant/profileConstant";
import {Trans} from 'react-i18next';
import defaultLanguage from 'i18n/defaultLanguage';
import useNavigateParams from 'hooks/useNavigateParams';
import {useState} from "react";

export const ProfileImageList = (payload) => {
  const {form, type} = payload;
  const [imageList, setimageList] = React.useState(form);
  const [page,setpage] = React.useState(1);
  const [maxpage,setmaxPage] = React.useState(-1);
  const [originimglist, setOriginimgList] = React.useState(form);
  const toast = useToast();
  const navigate = useNavigateParams();
  const [templist, setTemplist] = useState(false);

  const handleChange = async (event, value) => {
    setpage(value);
    const {code, info, msg} = await Api.get_user_common_imagelist(value,TYPE[type]);
    if(code === 0){
      setimageList(fixedList(info['tasks']['tasks']));
    }else {
      toast(msg || Api.ERROR_MESSAGE, { variant: 'error' });
    }
  };


  //把深层数据遍历出来
  const fixedList = (form) => {
    const ImageLists = []
    form.forEach((item, index) => {
      item['images'].forEach(image =>{
        ImageLists.push({
          'image': image['middle'],
          'prompt': item['prompt'],
          'start_time': item['start_time'],
          'init_img': item['init_img'],
          'task_id': item['task_id'],
          'task_type': item['task_type']
        })
      });
    });
    return ImageLists;
  };

  const findImgList = (taskid) => {
    // console.log(originimglist.find(i => i.task_id === taskid.currentTarget.id).images)
    //跳转传值
    const current = originimglist.find(i => i.task_id === taskid.currentTarget.id)
    if (current) {
      const { task_id, task_type } = current;
      navigate('/paint', { task_type, task_id });
    }
  };


  useEffect(() => {
    if(maxpage === -1){
      //setimageList(fixedList(form));
      Api.get_user_common_imagelist(page, TYPE[type])
        .then(({ code, info}) => {
          // 设置总页数与图像数据
          if (code === 0) {
            setmaxPage(info['tasks']['pages'] + 1);
            type === 4 ? setimageList(fixedList(info['tasks']))
              : setimageList(fixedList(info['tasks']['tasks']))
            setOriginimgList(info?.tasks?.tasks);
            setTemplist(true);
          }
        })
        .catch(e => e);
    }
  },[maxpage]);

  return (
    <Stack spacing={2}>
      <MainCard>
        {templist ? imageList.length == 0 ? (
          <Alert severity="info" sx={{ p: 1 }}>
            <AlertTitle><Trans i18nKey="profile.info">{ defaultLanguage.profile.info }</Trans></AlertTitle>
            <Trans i18nKey="profile.Sorry_info1">{ defaultLanguage.profile.Sorry_info1 }</Trans><strong>--<Trans i18nKey="profile.Sorry_info2">{ defaultLanguage.profile.Sorry_info2 }</Trans></strong>
          </Alert>
        ) : (
          <>
            <ImageList
              sx={{
                width: '100%',
                height: '67vh'
              }}
              cols={4}>
              {imageList.map((item, index) => (
                <ImageListItem
                  key={item.image}
                  id={item.task_id}
                  onClick={findImgList}
                >
                  <Box
                    key={index}
                    sx={{ width: 200, marginRight: 0, my: 1.5, ml: 5.5 }}>
                    {item ? (
                      <img
                        style={{ width: 240, height: 220, objectFit: 'contain'}}
                        alt={item.prompt} src={item.image}
                        loading="lazy"
                      />
                    ) : (
                      <Skeleton variant="rectangular" width={210} height={118} />
                    )}
                    {item ? (
                      <Box sx={{ pr: 2}}>
                        <Typography
                          gutterBottom
                          variant="body2"
                          style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            webkitLineClamp: '3',
                            webkitBoxOrient: 'vertical',
                            width: '15vw'
                          }}
                        >
                          {item.prompt ? item.prompt.toString() : 'No prompt'}
                        </Typography>
                        <Typography display="block" variant="caption" color="text.secondary">
                          {item.task_id}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {`${item.start_time}`}
                        </Typography>
                        {/*<Button></Button>*/}
                      </Box>
                    ) : (
                      <Box sx={{ pt: 0.5 }}>
                        <Skeleton />
                        <Skeleton width="60%" />
                      </Box>
                    )}
                  </Box>
                </ImageListItem>
              ))}
            </ImageList>
            <Grid display="flex" justifyContent="center" alignItems="center">
              <Pagination count={maxpage} page={page} onChange={handleChange} />
            </Grid>
          </>
        ) : (
          <>
            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ height:`calc(100vh - 155px)`, }}>
              {new Array(8).fill(0).map((_, index) => (
                <Grid item xs={2} md={3} key={index}>
                  <Box key={index} sx={{ width: 240, marginRight: 0.5, my: 2 }}>
                    <Skeleton variant="rectangular" width={240} height={200} />
                    <Box>
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </MainCard>
    </Stack>
  );
}


