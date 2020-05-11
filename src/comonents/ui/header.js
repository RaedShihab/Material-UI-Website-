import React from 'react';
import {
    AppBar,
    Toolbar,
    useScrollTrigger,
    Tab,
    Tabs,
    Button,
    Menu,
    MenuItem,
    useMediaQuery
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';

import logo from '../../assets/logo.svg'

const useStyles = makeStyles(theme=> ({
    ToolbarMargin: {...theme.mixins.toolbar, marginBottom: '3em'},
    logo: {
      height: '8em',
      // [theme.breakpoints.down('md')]: {
      //   height: '7em',
      // },
    },
    logoContainer: {
      padding: 0,
      '&:hover': {
        background: 'transparent'
      },
    },
    tabContainer: {
      marginLeft: 'auto',
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: '25px'
    },
    button: {
      ...theme.typography.estimate,
      borderRadius: '50px',
      marginLeft: '50px',
      marginRight: '25px',
      height: '45px',
    },
    menu: {
      background: theme.palette.common.blue,
      color: 'white',
      borderRadius: '0px'
    },
    menueItem: {
      ...theme.typography.tab,
      opacity: 0.7,
      '&:hover': {
        opacity: 1
      }
    }
}))

function ElevationScroll(props) {
    const { children } = props;
    //event listener : make trigger object when start scrolling
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 5 : 0,
    });
  }
   
export default function Header(props) {
  const classes= useStyles();
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const [value, setValue] = React.useState(0);
  const handleChange = (e, v)=> {
    setValue(v)
  }

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handleClickTab = (e)=> {
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false)
  };

  const handleClickMenuItem = (e, i)=> {
    setAnchorEl(null);
    setOpen(false)
    setSelectedIndex(i)
  }

  const menuOptions = [
    {name: 'Sevises', link: '/services'},
    {name: 'softwareServices', link: '/softwareServices'},
    {name: 'mobileDevelopment', link: '/mobileDevelopment'},
    {name: 'webDevelopment', link: '/webDevelopment'}
  ]

  const pathname = window.location.pathname

  React.useEffect(()=> {
    console.log(theme.breakpoints.down('md'))
    switch (pathname) {
      case '/':
        if(value!==0)
        setValue(0)
        break;
      case '/services':
        if(value!==1)
        setValue(1)
        setSelectedIndex(0)
        break;
      case '/revelution':
        if(value!==2)
        setValue(2)
        break;
      case '/about':
        if(value!==3)
        setValue(3)
        break;
      case '/contact':
        if(value!==4)
        setValue(4)
        break;
      case '/softwareServices':
        if(value!==1)
        setValue(1)
        setSelectedIndex(1)
        break;
      case '/mobileDevelopment':
        if(value!==1)
        setValue(1)
        setSelectedIndex(2)
        break;
      case '/webDevelopment':
        if(value!==1)
        setValue(1)
        setSelectedIndex(3)
        break;
      case '/estimate':
      if(value!==5)
      setValue(5)
      break;

      default:
        break;
    }
  }, [value, pathname])

  const tabs = (
    <React.Fragment>
      <Tabs
        aria-haspopup={anchorEl?"true": undefined}
        aria-owns={anchorEl?"simple-menu": undefined}
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
        >
        <Tab component={Link} className={classes.tab} to={'/'} label="Home"/>
        <Tab
          component={Link} 
          className={classes.tab} 
          to={'/services'} 
          label="Services"
          onMouseOver={(e)=>handleClickTab(e)}
          />
        <Tab component={Link} className={classes.tab} to={'/revelution'} label="The Revolution"/>
        <Tab component={Link} className={classes.tab} to={'/about'} label="About Us"/>
        <Tab component={Link} className={classes.tab} to={'/contact'} label="Contact Us"/>
      </Tabs>
      <Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
      <Menu
      classes={{
        paper: classes.menu
      }}
      id="simple-menu"
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      MenuListProps={{
        onMouseLeave: handleClose
      }}
      elevation={0}
      >
        {
          menuOptions.map((option, i)=> (
            <MenuItem
            classes={{
              root: classes.menueItem
            }}
            key={i}
            component={Link}
            to={option.link}
            onClick={(e)=>{handleClickMenuItem(e, i); setValue(1); handleClose()}}
            selected={ i === selectedIndex && value === 1 }
            >
              {option.name}
            </MenuItem>
          ))
        }
      </Menu>
    </React.Fragment>
  )

    return(
      <React.Fragment>
           <ElevationScroll>
                <AppBar position='fixed'>
                    <Toolbar disableGutters>
                      <Button disableRipple component={Link} to='/' className={classes.logoContainer} onClick={()=> setValue(0)}>
                       <img alt="company logo" className={classes.logo} src={logo}/>
                      </Button>
                      {matches? null: tabs } 
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.ToolbarMargin} />
      </React.Fragment>
    );
}