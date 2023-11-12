import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useState } from 'react'

export const Footer = () => {



  const pages = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Donation',
      path: '/donations'
    },
    {
      name: 'AboutUs',
      path: '/'
    }];

  const [value,setValue] = useState(undefined);

  return (

    <footer>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{
        height:"80px",
        width: '100%',
        marginTop: "120px",
        backgroundColor: 'black',
      }}
    >

      {pages.map((page, index)=><BottomNavigationAction key={index} label={page.name} href={page.path} sx={{color: "white"}}/>)}


    </BottomNavigation>

    </footer>
  );
}
