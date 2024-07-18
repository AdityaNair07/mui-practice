import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const CustomCard1 = () => {
  return (
    <>
      <Card sx={{ backgroundColor: "palevioletred", width: 250, height: 300 }}>
        <CardMedia
          image="https://images.pexels.com/photos/2694040/pexels-photo-2694040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          sx={{ width: "100%", height: "50%" }}
          title="Image"
        />
        <CardContent>
          <Typography variant="h6">Card Title</Typography>
          <Typography variant="body">Card Subtitle</Typography>
        </CardContent>
        <CardActions>
          <Button sx={{ backgroundColor: "paleturquoise", color: "white" }}>
            Click me
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CustomCard1;
