import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
const appTitle = 'はしびろのサイト'; 

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Settings', path: '/settings' },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        {appTitle}
      </Typography>
      <List role="navigation">
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={{
                textAlign: 'center',
                '&.active': {
                  backgroundColor: 'action.selected',
                  '& .MuiListItemText-primary': {
                    fontWeight: 'bold',
                  },
                },
              }}
              end={item.path === '/'} // ルートの重複マッチ防止
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ position: 'relative', justifyContent: 'center' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ position: 'absolute', left: 16 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            {appTitle}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
  variant="temporary"
  anchor="left"
  open={mobileOpen}
  onClose={handleDrawerToggle}
  ModalProps={{ keepMounted: true }}
  sx={{
    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
  }}
>
  {drawer}
</Drawer>
    </>
  );
}

export default Header;
