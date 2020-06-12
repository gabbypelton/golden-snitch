import puppeteer from "puppeteer";
import express from "express";
import moment from "moment";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email, password, group, days } = req.body;
    const browser = await puppeteer.launch();
    const page = await browser.newPage({
      defaultViewport: null,
    });
    await page.setViewport({ width: 800, height: 1000 });
    await page.goto("https://facebook.com", {
      waitUntil: "networkidle2",
    });
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
    await page.goto(`https://facebook.com/groups/${group}`, {
      waitUntil: "networkidle2",
    });
    await page.evaluate(() => {
      const spans = Array.from(document.querySelectorAll("span"));
      spans.forEach((span) => {
        if (span.innerText.toLowerCase().includes("repl")) {
          span.click();
        }
      });
    });
    await page.screenshot({ path: "example.png" });
    await browser.close();
    res.status(200).json({ success: true });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error });
  }
});

export default router;
