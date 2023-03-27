import {
  Box,
  Card,
  List,
  Slider,
  FormLabel,
  Typography,
  ListItemText,
  Autocomplete,
  ListItemButton,
  CardActionArea,
  ImageListItemBar,
  TextareaAutosize,
} from '@mui/material';
import { useRequest } from 'ahooks';

import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';

import ImageListItem from '@mui/material/ImageListItem';
import CardMedia from '@mui/material/CardMedia';
import { ContentCopy, PhotoCamera, Clear } from '@mui/icons-material';
import * as Api from 'api';

import useToast from 'hooks/useToast';
import * as React from 'react';
import { useState } from 'react';
import { calcSizeOfImage } from 'utils/download';

export const commonProps = ({ k: name, placeholder, form }) => ({
  placeholder,
  name,
  value: form.getFieldProps(name).value,
  onChange(e, v) {
    form.setFieldValue(name, v === undefined ? e.target.value : v);
  }
});

export const ContentContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  '&.MuiBox-root': {
    position: 'absolute',
    padding: 0,
    top: theme.spacing(1),
    left: theme.spacing(1),
    right: theme.spacing(1),
    bottom: theme.spacing(1),
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingBottom: theme.spacing(2)
  }
}));

export const UploadImage = (payload) => {
  const { k, v, columns, label, options, form, cb } = payload;
  const toast = useToast();

  const [loading, setLoading] = useState(!1);
  const currentField = form.getFieldProps(k);

  const upload = async (event) => {
    setLoading(!0);
    const imageFile = event.target.files[0];
    const formData = new FormData();
    formData.append('init_img', imageFile);
    const { code, msg, info } = await Api.upload_img(formData).catch((e) => e);
    if (code === 0) {
      calcSizeOfImage(imageFile, 'file', (params) => {
        cb({ src: info, ...params });
        setLoading(!1);
        // 两次上传同一文件，则不会触发onchange，需要手动清除value
        event.target.value = '';
      });
    } else {
      toast(msg || '上传失败', { variant: 'error' });
      setLoading(!1);
      event.target.value = '';
    }
  };

  return (
    <ImageListItem key={k} sx={{ width: '100%' }}>
      <Card>
        <CardActionArea>
          <CardMedia component="img" height="200" image={currentField?.value} />
        </CardActionArea>
      </Card>
      <ImageListItemBar
        position="top"
        actionPosition="left"
        sx={{ mt: 10, background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, ' + 'rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%)', ml: 14.5 }}
        actionIcon={
          <LoadingButton
            loading={loading}
            loadingPosition="end"
            variant="contained"
            component="label"
            endIcon={<PhotoCamera />}
            sx={{
              opacity: 0.8,
              ":hover": {
                opacity: 1
              }
            }}
          >
            {label}
            <input hidden accept="image/*" type="file" onChange={upload} />
          </LoadingButton>
        }
      />
    </ImageListItem>
  );
};

export const HackRadioGroup = (payload) => {
  const { k, v, columns, label, options, form, cb } = payload;

  const currentField = form.getFieldProps(k);
  return (
    <Box key={k}>
      <FormLabel>{label}</FormLabel>
      <List sx={{ display: 'grid', gap: 1, gridTemplateColumns: '1fr '.repeat(columns || 2) }}>
        {options?.map((item) => (
          <ListItemButton
            sx={{
              border: 'solid',
              borderWidth: '0.8px',
              borderRadius: '4px',
              borderColor: '#978EFB',
              textAlign: 'center',
              py: 0.5
            }}
            key={item.value}
            selected={item.value === currentField.value}
            onClick={() => {
              // 反选逻辑
              // const newV = currentField.value === item.value ? '' : item.value;
              form.setFieldValue(k, item.value);
              cb?.(item.value);
            }}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export const RowFormLabel = ({ label, children, ...rest }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" gap={2} sx={{ py: 1 }} {...rest}>
      <FormLabel>
        <Typography sx={{ lineHeight: '1.5rem' }} noWrap>
          {label}
        </Typography>
      </FormLabel>
      {children}
    </Box>
  );
};

export const RowFormSlider = ({ form, ...rest }) => {
  return (
    <RowFormLabel label={rest.label}>
      <Slider size="small" onChangeCommitted={rest?.cb} {...rest.fieldProps} {...commonProps({ ...rest, form })} color="secondary" />
      <Typography fontSize={'0.75rem'}>{`${form.getFieldProps(rest.k).value}/${rest.fieldProps.max}`}</Typography>
    </RowFormLabel>
  );
};

export const TextareaItem = (payload) => {
  const { k, labelAction, noLabel, label, form, ...others } = payload;
  const {
    data: { info: { suggest_tags: options } = {} } = {},
    loading,
    run
  } = useRequest(Api.querySuggestPrompt, {
    throttleWait: 1500,
    manual: true
  });
  const toast = useToast();
  const [keyword, setKeyword] = useState('');

  return (
    <Box sx={{ my: 1 }} key={k}>
      {noLabel ? null : <RowFormLabel label={label}>{labelAction?.()}</RowFormLabel>}
      <TextareaAutosize
        placeholder={others.placeholder}
        spellCheck={!1}
        value={form.getFieldProps(k).value}
        minRows={5}
        maxRows={12}
        // maxLength={others.max}
        style={{ width: '100%', maxWidth: '100%', minWidth: '100%', fontFamily: 'Roboto,sans-serif' }}
        onInput={e => {
          form.setFieldValue(k, e.target.value);
        }}
      >
      </TextareaAutosize>
    </Box>
  );
};
