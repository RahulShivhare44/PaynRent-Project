import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  box: {
    width: "90%",
    height: 200,
    padding: 10,
    borderRadius: 10,
    marginTop: "5%",
    background: "#CDBBF6",
  },
  dialogContainer: {
    display: "flex",
    width: "80%",
    background: "#CDBBF6",
    height: "100%",

    paddingLeft: "20%",
  },
  dialogBox: {
    width: "90%",
    height: 540,
    background: "#CDBBF6",
    marginTop: "5%",
    padding: 10,
    borderRadius: 10,
  },
  headingStyle: {
    fontWidth: 24,
    fontWeight: "bold",
    letterSpacing: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },

  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
