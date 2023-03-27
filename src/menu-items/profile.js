// assets
import { IconBrandChrome, IconHelp, IconUser, IconDashboard, IconWindmill } from '@tabler/icons';
import CollectionsIcon from '@mui/icons-material/Collections';
import {Trans} from 'react-i18next';
import defaultLanguage from 'i18n/defaultLanguage';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
// constant
const icons = { IconBrandChrome, IconHelp, IconUser, IconDashboard, IconWindmill,CollectionsIcon, AnalyticsOutlinedIcon };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: <Trans i18nKey="toolbar.profile">{ defaultLanguage.toolbar.profile }</Trans>,
      type: 'item',
      url: '/profile/user',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'Generating',
      title: <Trans i18nKey="profile.Pending_task">{ defaultLanguage.profile.Pending_task }</Trans>,
      type: 'item',
      url: '/profile/generating',
      icon: icons.IconUser,
      breadcrumbs: false
    },
    {
      id: 'text2pic',
      title: <Trans i18nKey="profile.mytxt2img">{ defaultLanguage.profile.mytxt2img }</Trans>,
      type: 'item',
      url: '/profile/text2img',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'pic2pic',
      title: <Trans i18nKey="profile.myi2i">{ defaultLanguage.profile.myi2i }</Trans>,
      type: 'item',
      url: '/profile/img2img',
      icon: icons.IconWindmill,
      breadcrumbs: false
    },
    {
      id: 'modify2pic',
      title: <Trans i18nKey="profile.myinpaint">{ defaultLanguage.profile.myinpaint }</Trans>,
      type: 'item',
      url: '/profile/partial2img',
      icon: icons.IconHelp,
      breadcrumbs: false
    },
    {
      id: 'collect',
      title: <Trans i18nKey="profile.myfavorite">{ defaultLanguage.profile.myfavorite }</Trans>,
      type: 'item',
      url: '/profile/collect',
      icon: icons.CollectionsIcon,
      breadcrumbs: false
    },
    {
      id: 'record',
      title: <Trans i18nKey="profile.myrecord">{ defaultLanguage.profile.myrecord }</Trans>,
      type: 'item',
      url: '/profile/record',
      icon: icons.AnalyticsOutlinedIcon,
      breadcrumbs: false
    }
  ]
};

export default other;
