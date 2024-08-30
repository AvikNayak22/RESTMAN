import { TableCell, TableRow, Checkbox, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tablecell: {
    border: "1px solid rgba(224, 224, 224, 1)",
    borderCollapse: "collapse",
    padding: ["7px 5px", "!important"],
  },
  checkbox: {
    padding: ["2xp 5px", "!important"],
  },
});

const AddRow = () => {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell className={classes.tablecell}>
        <Checkbox size="large" className={classes.checkbox} />
      </TableCell>
      <TableCell className={classes.tablecell}>
        <TextField />
      </TableCell>
      <TableCell className={classes.tablecell}>
        <TextField />
      </TableCell>
    </TableRow>
  );
};

export default AddRow;
