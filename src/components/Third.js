import React from 'react'
import { Grid2 } from '@mui/material'
import Box from '@mui/material/Box';
import useScreenWidth from '../hook/useScreenWidth';

const Third = () => {

  const width = useScreenWidth();

  return (
    <div className='section'>
      {width > 1024 ? (
        <Box sx={{ flexGrow: 1, display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center', padding: '1em' }}>
          <Grid2 container spacing={2} sx={{ width: '90%', backgroundColor: "#acdabe" }}>
            <Grid2 size={6} sx={{ display: 'flex', alignItems: 'center' }}>
              <Box>
                <img src="img/2.jpeg" style={{ width: "80%" }}></img>
              </Box>
            </Grid2>
            <Grid2 sx={{ display: 'flex', flexDirection: 'column' }} size={6}>
              {/* <img src="img/logo-s1.png" style={{ width : "30%"}}></img> */}
              <h3 style={{ margin: '40% 10px 0 7%', textAlign: 'left' }}>Assistant</h3>
              {/* <h4 style={{margin : '0 10px 0 7%', textAlign: 'left'}}>By D Nine Herbal</h4> */}
              <div style={{ margin: '25px 0 0 7%', textAlign: 'left', color: '#fff', fontSize: '1.5em' }}>
                Miss Worawan Wannapha is one of the members of the
                Mo Boonruang Traditional Thai Medicine Community Enterprise. She plays an important role in handcrafting each product with skill and meticulous attention. Currently,
                Miss Worawan is 57 years old. She uses her experience and handcrafting skills to create high-quality products delivered directly to customers.
              </div>
              {/* <div style={{margin : '25px 0 0 7%', textAlign: 'left', color: '#fff', fontSize: '1.5em'}}>               
                  By applying traditional Thai medicine knowledge, the group develops various products such as herbal inhalers, balms, and other items related to herbal remedies. These products are rooted in local wisdom that has been passed down through generations.
                </div> */}
              {/* <h5 style={{margin : '25px 10px 0 7%', textAlign: 'left'}}>Mor Boonruang Traditional Thai Medicine Herbal</h5> */}
            </Grid2>
          </Grid2>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1, display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
          <img src="img/s3-mb.png" style={{ width: "90%" }}></img>
        </Box>
      )
      }
    </div>
  )
}

export default Third;
// #acdabe