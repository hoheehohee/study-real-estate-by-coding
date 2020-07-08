import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink as RouterLink } from 'react-router-dom';
import { ArrowDropDown, ArrowRight, Mail } from '@material-ui/icons';
import { List, ListItem, Button } from '@material-ui/core';
import { TreeView } from '@material-ui/lab';

import { Pages } from '../../Sidebar';
import MenuItem from '../MenuItem';
interface Props {
  pages: Pages[];
  className: any;
}

const CustomRouterLink = forwardRef((props: any, ref: any) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));

const SidebarNav = ({ className, pages, ...rest }: Props) => {
  const classes = useStyles();
  return (
    <TreeView
      className={classes.root}
      defaultExpanded={['3']}
      defaultCollapseIcon={<ArrowDropDown />}
      defaultExpandIcon={<ArrowRight />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      {
        pages.map((page: Pages, idx: number) => (
          <MenuItem key={idx} nodeId={String(idx + 1)} labelText={page.title} labelIcon={page.icon}>
            <React.Fragment>
              {
                (page.children && page.children.length > 0) && (
                  page.children.map((cPage: Pages, cIdx: number) => (
                    <MenuItem key={idx} nodeId={String((cIdx + 1) + (idx + 1))} labelText={cPage.title} labelIcon={cPage.icon} color="#1a73e8"/>
                  ))
                )
              }
            </React.Fragment>
          </MenuItem>
        ))
      }
      {/* <MenuItem nodeId="1" labelText="All Mail" labelIcon={Mail} /> */}
    </TreeView>
  )
  // return (
  //   <List
  //     {...rest}
  //     className={clsx(classes.root, className)}
  //   >
  //     {
  //       pages.map((page: Pages) => (
  //         <ListItem
  //           className={classes.item}
  //           disableGutters
  //           key={page.title}
  //         >
  //           <Button
  //             activeClassName={classes.active}
  //             className={classes.button}
  //             component={CustomRouterLink}
  //             to={page.href}
  //           >
  //             <div className={classes.icon}>{page.icon}</div>
  //             {page.title}
  //           </Button>
  //         </ListItem>
  //       ))
  //     }
  //   </List>
  // );
};

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: '#38BDBB',
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: '#38BDBB',
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));

export default SidebarNav;