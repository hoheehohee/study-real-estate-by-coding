import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TreeItem, { TreeItemProps } from '@material-ui/lab/TreeItem';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { Typography } from '@material-ui/core';

type StyledTreeItemProps = TreeItemProps & {
  bgColor?: string;
  color?: string;
  labelIcon: JSX.Element;
  labelInfo?: string;
  labelText: string;
  children?: JSX.Element;
};

const MenuItem = (props: StyledTreeItemProps) => {
  const classes = useStyles();
  const { labelText, labelIcon, labelInfo, color, bgColor, children, ...other } = props;
  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <div className={classes.labelIcon}>
            {labelIcon}
          </div>
          {/* <LabelIcon color="inherit" className={classes.labelIcon} /> */}
          <Typography variant="subtitle2">
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        'color': color ? color : '',
        'background': bgColor ? bgColor: '',
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    >
      {children && children}
    </TreeItem>
  )
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: 'rgb(65, 199, 199)',
    '&:hover > $content': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:focus > $content, &$selected > $content': {
      // backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: 'rgb(65, 199, 199)',
    },
    '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
      // backgroundColor: 'transparent',
    },
  },
  content: {
    color: 'rgb(65, 199, 199)',
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: 'rgb(65, 199, 199)',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
}));

export default MenuItem;