import { Box, MenuItem, Select, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  component: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  select: {
    width: 150,
    height: 40,
  },
  textfield: {
    width: "100%",
    background: "#f6f6f6",
  },
  button: {
    width: 100,
    height: 40,
    marginLeft: [5, "!important"],
  },
});

const Form = () => {
  const classes = useStyles();

  return (
    <Box className={classes.component}>
      <Select label="POST" className={classes.select}>
        <MenuItem value="POST">POST</MenuItem>
        <MenuItem value="GET">GET</MenuItem>
      </Select>
      <TextField size="small" className={classes.textfield} />
      <Button className={classes.button} variant="contained">
        Send
      </Button>
    </Box>
  );
};

export default Form;
