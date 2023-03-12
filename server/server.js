const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const registeruser = require("./usermodel");
const reviewmodel = require("./reviewmodel");
const middleware = require("./middleware");

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

/*****************  MONGOOSE CONNECTION  ********************************************  */

mongoose.connect(process.env.MONGO_URL).then(() => console.log("db connected"));

/*****************  REGISTER  ********************************************  */

app.post("/register", async (req, res) => {
  try {
    const {
      fullname,
      username,
      instaId,
      age,
      email,
      section,
      password,
      confirmpassword,
    } = req.body;
    const exist1 = await registeruser.findOne({ username });
    const exist2 = await registeruser.findOne({ email });
    const exist3 = await registeruser.findOne({ fullname });

    if (exist1) {
      return res.status(400).send("Username already exist");
    }
    if (exist2) {
      return res.status(400).send("Email already exist");
    }
    if (exist3) {
      return res.status(400).send("Fullname Already exist");
    }
    if (password != confirmpassword) {
      return res.status(400).send("Passswords doesn't match");
    }
    let newUser = new registeruser({
      fullname,
      username,
      instaId,
      age,
      email,
      section,
      password,
      confirmpassword,
    });
    newUser.save();
    return res.status(200).send("User added Suucessfully");
  } catch (error) {
    console.log("error in register", error);
    return res.status(400).send("Unable to add User");
  }
});

/*****************  LOGIN  ********************************************  */

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const exist = await registeruser.findOne({ email });
    if (!exist) {
      return res.status(400).send("Email does not exist");
    }
    if (exist.password !== password) {
      return res.status(400).send("Invalid password");
    }
    let payload = {
      user: {
        id: exist.id,
      },
    };
    jwt.sign(
      payload,
      process.env.JWT_PASSWORD,
      { expiresIn: 360000000 },
      (err, token) => {
        if (err) throw err;
        return res.json({ token });
      }
    );
  } catch (error) {
    console.log("error in login", error);
    return res.status(400).send("Unable to signIn , Token Expired");
  }
});

/*****************  ALL PROFILES ********************************************  */

app.get("/allprofiles", middleware, async (req, res) => {
  try {
    let allprofiles = await registeruser.find();
    return res.json(allprofiles);
  } catch (error) {
    console.log("error in allprofiles", error);
    return res.status(400).send("Unable to get all profiles");
  }
});

/*****************  MY PROFILE  ********************************************  */

app.get("/myprofile", middleware, async (req, res) => {
  try {
    let user = await registeruser.findById(req.user.id);
    return res.json(user);
  } catch (error) {
    console.log("error in myprofile");
    return res.status(400).send("Unable to get My profile");
  }
});

/***************** ADD REVIEW  ********************************************  */

app.post("/addreview", middleware, async (req, res) => {
  try {
    const { taker, rating, comment, likes } = req.body;
    const exist = await registeruser.findById(req.user.id);
    const newReview = new reviewmodel({
      giver: exist.username,
      taker,
      rating,
      comment,
      likes,
    });
    newReview.save();
    return res.status(200).send("Review added Suucessfully");
  } catch (error) {
    console.log("error in addreview");
    return res.status(400).send("Unable to get add review");
  }
});

/*****************  MY REVIEWS  ********************************************  */

app.get("/myreviews", middleware, async (req, res) => {
  try {
    let allreviews = reviewmodel.find();
    let myreviews = (await allreviews).filter(
      (review) => review.taker.toString() === req.user.id.toString()
    );
    return res.json(myreviews);
  } catch (error) {
    console.log("error in myreviews", error);
    return res.status(400).send("error in my reviews");
  }
});

app.get("/", (req, res) => {
  return res.send("Hello World..");
});

app.listen(process.env.PORT, () =>
  console.log(`Listening on Port ${process.env.PORT}`)
);
