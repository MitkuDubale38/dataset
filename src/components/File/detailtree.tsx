import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem, { TreeItemProps } from "@material-ui/lab/TreeItem";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import InfoIcon from "@material-ui/icons/Info";
declare module "csstype" {
  interface Properties {
    "--tree-view-color"?: string;
    "--tree-view-bg-color"?: string;
  }
}

type StyledTreeItemProps = TreeItemProps & {
  bgColor?: string;
  color?: string;
  labelIcon?: React.ElementType<SvgIconProps>;
  labelInfo?: string;
  labelText: string;
};

const useTreeItemStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      color: theme.palette.common.white,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      // fontWeight: theme.typography.fontWeightMedium,
      "$expanded > &": {
        fontWeight: theme.typography.fontWeightRegular,
      },
    },
    group: {
      marginLeft: 0,
      "& $content": {
        paddingLeft: theme.spacing(2),
      },
    },
    expanded: {},
    selected: {},
    label: {
      fontWeight: "inherit",
      color: "inherit",
    },
    labelRoot: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0.5, 0),
    },
    labelIcon: {
      marginRight: theme.spacing(1),
    },
    labelText: {
      fontWeight: "inherit",
      flexGrow: 1,
    },
  })
);

function StyledTreeItem(props: StyledTreeItemProps) {
  const classes = useTreeItemStyles();
  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor,
    ...other
  } = props;
  console.log(LabelIcon);
  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          {LabelIcon !== undefined ? (
            <LabelIcon color="inherit" className={classes.labelIcon} />
          ) : null}
          <Typography variant="body2" noWrap className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor,
      }}
      classes={{
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

export default function FileTreeView() {
  const Files = [
    {
      Name: "datafrom_demo",
      value: [
        { Name: "dataset_1" },
        { Name: "dataset_5_from_script_bildr" },
        { Name: "dataset_3_incremental_date" },
        { Name: "dataset_4_incremental_snapshot" },
        { Name: "reporting_gb" },
      ],
    },
    {
      Name: "datafrom_set2",
      value: [],
    },
  ];
  return (
    <TreeView
      defaultExpanded={["3"]}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      {Files.map((row, index) => (
        <StyledTreeItem
          nodeId={(index++).toString()}
          key={index}
          labelText={row.Name}
          // labelIcon={Folder}
        >
          {row.value.length > 0 && row.value !== undefined
            ? row.value.map((row_item, index_two) => (
                <StyledTreeItem
                  key={index_two}
                  nodeId={(index++).toString()}
                  labelText={row_item.Name}
                  labelIcon={VisibilityOutlinedIcon}
                  color="#1a73e8"
                  bgColor="#e8f0fe"
                ></StyledTreeItem>
              ))
            : null}
        </StyledTreeItem>
      ))}
    </TreeView>
  );
}
