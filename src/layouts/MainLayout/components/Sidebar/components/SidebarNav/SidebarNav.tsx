import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowDropDown, ArrowRight } from '@material-ui/icons';
import { TreeView } from '@material-ui/lab';

import { Pages } from '../../Sidebar';
import MenuItem from '../MenuItem';
import palette from 'theme/palette';
interface Props {
  pages: Pages[];
  className: any;
}


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
          <MenuItem 
            key={idx} 
            nodeId={String(idx + 1)} 
            labelText={page.title} 
            labelIcon={page.icon}
            page={page.href}
          >
            <React.Fragment>
              {
                (page.children && page.children.length > 0) && (
                  page.children.map((cPage: Pages, cIdx: number) => (
                    <MenuItem
                      key={String((cIdx + 1) + (idx + 1))} 
                      nodeId={String((cIdx + 1) + (idx + 1))} 
                      labelText={cPage.title} 
                      labelIcon={cPage.icon}
                      page={cPage.href}
                      color={'red'}
                      // bgColor={palette.textColor}
                    />
                  ))
                )
              }
            </React.Fragment>
          </MenuItem>
        ))
      }
    </TreeView>
  )
};

const useStyles = makeStyles((theme) => ({
  root: {
      height: 264,
      flexGrow: 1,
      maxWidth: 400,
    },
}));

export default SidebarNav;