import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TreeItem, { TreeItemProps } from '@material-ui/lab/TreeItem';

interface Props {
  bgColor?: string;
  color?: string;
  labelIcon: JSX.Element;
  labelInfo?: string;
  labelText: string;
  page: string;
  children?: JSX.Element;
  nodeId: string;
}



const MenuItem = (props: Props & TreeItemProps & RouteComponentProps) => {
  const classes = useStyles();
  const { labelText, labelIcon, labelInfo, color, bgColor, children, page, nodeId, history } = props;

  const onClick = () => {
    history.push(page);
  };
  console.log('%c##### debug-color: ', 'color: #058FD7', color);
  return (
    <TreeItem
      onClick={onClick}
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
      nodeId={nodeId}
    >
      {children}
    </TreeItem>
  )
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: 'rgb(65, 199, 199)',
    '&:focus > $content, &$selected > $content': {
      '& h6': {
        textDecoration: 'underline'
      },
      color: 'rgb(65, 199, 199)',
    },
    '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
      backgroundColor: 'transparent',
    },
  },
  content: {
    color: theme.palette.text.secondary,
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

export default withRouter(MenuItem);