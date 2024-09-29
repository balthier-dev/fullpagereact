import React from 'react'
import { Grid2 } from '@mui/material'
import Box from '@mui/material/Box';
import useScreenWidth from '../hook/useScreenWidth';

const First = () => {

  const width = useScreenWidth();

  return (
    <div className='section'>
      {width > 1024 ? (
        <Box sx={{ flexGrow: 1, display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center', padding: '1em' }}>
          <Grid2 container spacing={2} sx={{ width: '90%', border: "2px solid #c35273" }}>
            <Grid2 sx={{ display: 'flex', flexDirection: 'column' }} size={6}>
              <img src="img/logo-s1.png" style={{ width: "30%" }}></img>
              <h3 style={{ margin: '0 10px 0 7%', textAlign: 'left' }}>Boon ruang</h3>
              <h4 style={{ margin: '0 10px 0 7%', textAlign: 'left' }}>By D Nine Herbal</h4>
              <div style={{ margin: '25px 0 0 7%', textAlign: 'left', color: '#fff', fontSize: '1.5em' }}>
                Mor Boonruang Traditional Thai Medicine Herbal Community Enterprise is a community-based business group focused on producing and selling products made from Thai herbs.
              </div>
              <div style={{ margin: '25px 0 0 7%', textAlign: 'left', color: '#fff', fontSize: '1.5em' }}>
                By applying traditional Thai medicine knowledge, the group develops various products such as herbal inhalers, balms, and other items related to herbal remedies. These products are rooted in local wisdom that has been passed down through generations.
              </div>
              {/* <h5 style={{margin : '25px 10px 0 7%', textAlign: 'left'}}>Mor Boonruang Traditional Thai Medicine Herbal</h5> */}
            </Grid2>
            <Grid2 size={6} sx={{ display: 'flex', alignItems: 'center' }}>

              <Box>
                <img src="img/Boonruang.png" style={{ width: "80%" }}></img>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Grid2 container spacing={2} sx={{ width: '100%', borderBottom: "2px solid #c35273" }}>
            <img src="img/logo-s1.png" style={{ width: "60%" }}></img>
          </Grid2>
          <Box>
            <Grid2 sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} size={12}>
              <Box sx={{ borderBottom: "2px solid #c35273" }}>
                <img src="img/s1-mb.png" style={{ width: "100%" }}></img>
              </Box>
              <div style={{ margin: '8% 0 0 0', marginBottom: '0.5em', fontSize: '5em', color: '#fff' }}>BOON RUANG</div>
              <div style={{ margin: 0, color: '#fff', fontSize: '3em'}}>BY D NINE HERBAL</div>
              <div style={{ margin: '10% 0 0 0', textAlign: 'center', color: '#fff', fontSize: '2.2em', paddingLeft: '10%', paddingRight: '10%' }}>
                Mor Boonruang Traditional Thai Medicine Herbal
                Community Enterprise is a community-based business group focused on producing and selling products made from Thai herbs.
              </div>
              <div style={{ margin: '6% 0 6% 0', textAlign: 'center', color: '#fff', fontSize: '2.2em', paddingLeft: '10%', paddingRight: '10%' }}>
                By applying traditional Thai medicine knowledge, the group develops various products such as herbal inhalers, balms, and other items related to herbal remedies. These products are rooted in local wisdom that has been passed down through generations.
              </div>
              {/* <h5 style={{margin : '25px 10px 0 7%', textAlign: 'left'}}>Mor Boonruang Traditional Thai Medicine Herbal</h5> */}
            </Grid2>
          </Box>
        </Box>
      )}
    </div>
  )
}
export default First;