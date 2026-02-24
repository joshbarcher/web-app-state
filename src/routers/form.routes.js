import express from "express";

const router = express.Router();

router.get("/signup/step/1", (req, res) => {
    res.render("step1", {
        signup: {},
        theme: req.theme,
        bodyClass: req.bodyClass
    });
});

router.post("/signup/step/1", (req, res) => {
    

    res.redirect("/signup/step/2");
});

router.get("/signup/step/2", (req, res) => {
    res.render("step2", {
        signup: {},
        theme: req.theme,
        bodyClass: req.bodyClass
    });
});

router.post("/signup/step/2", (req, res) => {
    

    res.redirect("/signup/step/3");
});

router.get("/signup/step/3", (req, res) => {
    res.render("step3", {
        signup: {},
        theme: req.theme,
        bodyClass: req.bodyClass
    });
});

router.post("/signup/step/3", (req, res) => {
    
    res.redirect("/signup/done");
});

router.get("/signup/done", (req, res) => {
    res.render("done", {
        signup: {},
        theme: req.theme,
        bodyClass: req.bodyClass
    });
});

export default router;