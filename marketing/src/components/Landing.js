import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import MaterialLink from "@mui/material/Link";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MaterialLink component={Link} to="/" color="inherit">
        Your Website
      </MaterialLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
    },
  },
  icon: {
    marginRight: "8px",
  },
  heroContent: {
    backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "64px 0 48px",
    color: "#ffffff",
  },
  heroButtons: {
    marginTop: "32px",
    display: "flex",
    gap: "16px",
  },
  cardGrid: {
    paddingTop: "64px",
    paddingBottom: "64px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
    },
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
    padding: "24px",
  },
  footer: {
    backgroundColor: "#212121",
    padding: "48px",
    color: "#ffffff",
    marginTop: "64px",
  },
}));

const cards = [
  { id: 1, image: "https://picsum.photos/400/300?random=1" },
  { id: 2, image: "https://picsum.photos/400/300?random=2" },
  { id: 3, image: "https://picsum.photos/400/300?random=3" },
  { id: 4, image: "https://picsum.photos/400/300?random=4" },
  { id: 5, image: "https://picsum.photos/400/300?random=5" },
  { id: 6, image: "https://picsum.photos/400/300?random=6" },
  { id: 7, image: "https://picsum.photos/400/300?random=7" },
  { id: 8, image: "https://picsum.photos/400/300?random=8" },
  { id: 9, image: "https://picsum.photos/400/300?random=9" },
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="inherit"
              gutterBottom
            >
              Welcome to Our Platform
            </Typography>
            <Typography variant="h5" align="center" color="inherit" paragraph>
              Discover amazing features and services designed to help you
              succeed. Start your journey with us today and experience the
              difference.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                style={{ width: "100%" }}
              >
                <Grid item xs="auto">
                  <Link to="/pricing">
                    <Button variant="contained" color="secondary" size="large">
                      View Pricing
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs="auto">
                  <Link to="/pricing">
                    <Button
                      variant="outlined"
                      style={{ borderColor: "white", color: "white" }}
                      size="large"
                    >
                      Learn More
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={3} justifyContent="center">
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Stay Connected
        </Typography>
        <Typography variant="body2" align="center" component="p">
          Join thousands of happy customers. Subscribe to get the latest
          updates.
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
