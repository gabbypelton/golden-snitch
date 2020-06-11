import puppeteer from "puppeteer";
import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://facebook.com");
    const { email, password } = req.body;
    await page.evaluate(
      (email, password) => {
        document.getElementById("email").value = email;
        document.getElementById("pass").value = password;
        document.getElementById("loginbutton").click();
      },
      email,
      password
    );
    await page.waitForNavigation();
    await page.screenshot({ path: "example.png" });
    await browser.close();
    res.status(200).json({ success: true });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error });
  }
});

export default router;
