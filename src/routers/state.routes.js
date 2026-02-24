import express from "express";

const router = express.Router();

/* ---------------------------
   Cookies Example
---------------------------- */

router.get("/cookies", (req, res) => {
    res.render("cookies", {
        theme: "",
        bodyClass:"",
        themeClicks: ""
    });
});

router.post("/state/cookies", (req, res) => {
    

    res.redirect("/cookies");
});


/* ---------------------------
   Profile Session Example
---------------------------- */

router.get("/profile", (req, res) => {
    res.render("profile", {
        theme: req.theme,
        bodyClass: req.bodyClass,
        themeClicks: req.themeClicks,
        profile: {}
    });
});

router.post("/state/profile", (req, res) => {
    

    res.redirect("/profile");
});

export default router;