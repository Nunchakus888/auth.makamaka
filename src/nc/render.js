import './render.css';
import { Card, Button, Typography } from '@mui/material';
import { Trans } from 'react-i18next';
const NcRender = () => {
  return (
    <div id="nc-captcha-container" className="nc-captcha-container">
      <Card sx={{ minWidth: 500, minHeight: 200, display: 'flex',  justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography variant='h2' style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center'}}>
        滑块验证
        </Typography>
        <div>
          <div id="captcha" style={{position: 'relative', display:'flex', justifyContent:'center', marginBottom: '30px',}}/>
        </div>
        <Button 
          variant="contained" 
          onClick={() => {
            window?.nc.switch();
          }}
          sx={{background: 'linear-gradient(to right, #2ddfff, #f47dff);', width: 300}}
        >
          <Trans i18nKey="confirm.ngBtn"/>
        </Button>
      </Card>
    </div>
  )
}

export default NcRender
