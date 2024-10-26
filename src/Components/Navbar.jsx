import React from 'react';
import AppBar from '@mui/material/AppBar';
import { styled,alpha } from '@mui/material/styles';
import { Toolbar, Typography} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import MoreIcon from '@mui/icons-material/MoreVert'
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            ROBI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={171} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {/* <AccountCircle /> */}
              
            <Avatar
            alt="Remy Sharp"
            src="data:image/jpeg;base64,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"
          />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}