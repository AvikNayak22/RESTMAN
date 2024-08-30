import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  logo: {
    width: 150,
  },
});

const Header = () => {
  const classes = useStyles();

  return <img src="./RESTMAN-logo.png" alt="logo" className={classes.logo} />;
};

export default Header;
