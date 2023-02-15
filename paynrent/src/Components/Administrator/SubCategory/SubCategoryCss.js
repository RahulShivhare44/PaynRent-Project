import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  color: {
    background: "#CDBBF6",
    height: "110vh",
  },
  box: {
    width: "70%",
    height: 250,
    padding: 10,
    borderRadius: 10,
    border: "2px solid #ecf0f1",
    boxShadow: "1px 1px 4px 4px #ecf0f1",
    background: "#D0F5A5",
    marginTop: "3%",
    marginLeft: "20%",
  },
  headingStyle: {
    fontWidth: 24,
    fontWeight: "bold",
    letterSpacing: 1,

    paddingBottom: 5,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
