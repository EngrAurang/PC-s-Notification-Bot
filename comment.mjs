import puppeteer from 'puppeteer';
import fetch from 'node-fetch';

(async () => {
    const urls = [
        'https://kurmanchalakhbar.com/almora-four-people-entered-the-house-and-beat-up-the-young-man/',
        'https://chelseyhuffdesign.com/blog/planning-a-spooktacular-event/',
        'https://pickleballacee.com/what-is-the-first-rule-of-dinking-in-pickleball/',
        'https://live.uniminds.com/?p=58',
        'http://cchebreo.com/israel/20180411_083841/',
        'https://lispenservices.com/2023/11/03/toyota-corolla-fielder-wagon/',
        'https://x1bet.us/cac-nha-cai-ca-cuoc-esports-duoc-ua-chuong-nhat-hien-nay/',
        'https://phanipuramtrust.org/last-day-in-vegas/',
        'https://softwarecontable.co/analisis-de-datos-contables-la-nueva-tendencia-para-el-crecimiento-de-las-empresas/',
        'https://tomfitnesslab.com/philips-carina-1200-review-2024-what-you-need-to-know-before-buying/',
        'https://www.seeyeo.com/life/5-life-skills-to-cultivate-before-growing-up/',
        'https://md-businessenglish.com/testimonial/i-fully-achieved-the-goals-i-had-set-myself-with-markus-course/',
        'https://devishop.gives/is-conor-mcgregor-running-for-office-fed-up-ufc-legend-makes-vow-after-violent-attack-in-ireland-the-gateway-pundit/',
        'https://doublefrontlight.com/eine-seite',
        'https://goldenwiggles.com/city-united-mops-casino/',
        'https://lucianaburko.com.br/5-motivos-para-fomentar-a-presenca-feminina-no-marketing-digital-27-04-dia-das-meninas-nas-tecnologias-de-informacao-e-comunicacao/',
        'https://mastersofdisastersinc.com/du-kannst-nichtens-auf-etwas-spekulieren-deinen/',
        'https://sepacosanat.com/gdansk-oil-refinery-2-fw/',
        'https://www.karlalightfoot.com/quotes/signs-sympathy/',
        'https://voyages-ok.com/jour-5/',
        'https://quoti.es/2022/03/09/aprovechar-los-medios-informaticos/',
        'http://reymoro.tech/2021/01/07/how-to-become-successful-python-developer-software/',
        'https://solskinslejren.dk/chat/',
    ];

    const thankYouComments = [
      "Great insights! I never thought about it that way.",
      "This post is a gem. Thank you for sharing!",
      "I completely agree with your perspective.",
      "Interesting read. Can't wait for more!",
      "Well articulated. Your points are valid.",
      "Fantastic post! Keep up the good work.",
      "Thanks for shedding light on this topic.",
      "I appreciate the depth of your analysis.",
      "I learned something new today. Thanks!",
      "Your writing style is engaging and informative.",
      "I resonate with your thoughts on this subject.",
      "Incredible post! Looking forward to more content.",
      "Well researched and presented. Kudos!",
      "This is a must-read for everyone. Important topic!",
      "I couldn't agree more. Well said!",
      "Your perspective adds valuable insights.",
      "I'm sharing this with my friends. Brilliant!",
      "The examples you provided make it crystal clear.",
      "Your passion for the topic is evident. Impressive!",
      "I'm inspired by your thoughtful approach.",
      "Thank you for addressing this issue. Important discussion.",
      "You have a talent for explaining complex concepts simply.",
      "This post deserves more attention. Sharing it!",
      "I love how you approach the topic from different angles.",
      "Your writing always makes me think. Well done!",
      "I appreciate the effort you put into your research.",
      "I'm bookmarking this for future reference. Valuable content.",
      "Your post challenged my thinking. Thank you!",
      "You've successfully captured the essence of the topic.",
      "Insightful and thought-provoking. Well done!",
      "This is a refreshing perspective. Thank you!",
      "I'm eager to read more from you. Keep it up!",
      "I can relate to your experiences. Thanks for sharing.",
      "Your post made me reconsider my stance. Great job!",
      "I love the way you present your ideas. Clear and concise.",
      "Bravo! Your post stands out from the rest.",
      "I'm impressed by the depth of your knowledge.",
      "Your post is a valuable resource. Thank you!",
      "You've tackled a complex topic with ease. Well done!",
      "I appreciate the balance in your argument.",
      "Your post resonated with me on a personal level.",
      "This is exactly what I needed to read today. Thank you!",
      "Your passion for the subject shines through your words.",
      "I can see the effort you put into crafting this. Amazing!",
      "Your post is a breath of fresh air. Keep it up!",
      "I enjoyed reading every word. Thank you for sharing.",
      "You've made a strong case with compelling evidence.",
      "This post deserves to go viral. Sharing it widely!",
      "Your insights are a valuable contribution to the discussion.",
      "Well done on presenting a balanced viewpoint.",
      "I'm looking forward to your future posts. Exciting!",
    ];

    function getRandomThankYouComment() {
        const randomIndex = Math.floor(Math.random() * thankYouComments.length);
        return thankYouComments[randomIndex];
    }

    let browser;
    browser = await puppeteer.launch({ headless: false });
    const totalUrls = urls.length;
    const remainingUrlsThreshold = 15;

    for (let i = 0; i < totalUrls; i++) {

        if (i % 30 === 0) {
          // Close the existing browser and launch a new one
          if (browser) {
            await browser.close();
          }
          browser = await puppeteer.launch({ headless: false });
        }
        const url = urls[i];

        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(0);

        let isUrlProcessed = false;
        let timer;

        // Set a timer for 10 minutes
        const timeoutPromise = new Promise((resolve) => {
            timer = setTimeout(() => {
                resolve();
            }, 10 * 60 * 1000);
        });

        // Wait for either URL processing completion or timeout
        await Promise.race([
            (async () => {
                try {
                    const startTime = Date.now();

                    await page.goto(url);
                    console.log(`${url}`);

                    if (await page.$('#comment') !== null) {
                        await page.type('#comment', getRandomThankYouComment());
                    }
                    if (await page.$('#author') !== null) {
                        await page.type('#author', '8xbet');
                    }
                    if (await page.$('#email') !== null) {
                        await page.type('#email', '8xbett.team@gmail.com');
                    }
                    if (await page.$('#url') !== null) {
                        await page.type('#url', 'https://8xbett.team/');
                    }

                    if (await page.$('#submit') !== null || await page.$('#comment-submit') !== null) {
                        await page.click('#submit, #comment-submit');
                    }

                    isUrlProcessed = true;

                    const endTime = Date.now();
                    const elapsedTime = (endTime - startTime) / 1000; // in seconds

                    if (elapsedTime > 600) { // 10 minutes
                        // Send a message to Telegram if the URL processing exceeds 10 minutes
                        await sendTelegramMessage(`The PC with UltraViewer ID 21888375 and the name PC01, which is running for https://8xbett.team, has not submitted any comments in the last 10 minutes for URL ${url}`);
                    }
                } catch (error) {
                    console.error(`Error processing URL ${url}: ${error.message}`);
                } finally {
                    // Close the tab after processing each URL
                    await page.close();
                    clearTimeout(timer);
                }
            })(),
            timeoutPromise,
        ]);

        // Check if there are 50 URLs remaining
        const remainingUrls = totalUrls - i - 1;
        if (remainingUrls === remainingUrlsThreshold) {
            await sendTelegramMessage(`The PC with UltraViewer ID 21888375 and the name PC01, Only ${remainingUrls} URLs remaining. Total URLs: ${totalUrls}.`);
        }
    }

    // Close the browser after processing all URLs
    await browser.close();

    // Send completion message to Telegram
    await sendTelegramMessage('The PC with UltraViewer ID 21888375 and the name PC01, which is running for https://8xbett.studio, has finished accessing the sites.');

})();

async function sendTelegramMessage(message) {
    const botToken = '6809793194:AAHAlM9zAfB4EbTOfoZTdcO5sncn70WFTCA';
    const chatId = '6207003190';

    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const params = new URLSearchParams({
        chat_id: chatId,
        text: message,
    });

    const response = await fetch(`${apiUrl}?${params}`);
    const responseData = await response.json();

    if (!responseData.ok) {
        console.error(`Error sending message to Telegram: ${responseData.description}`);
    }
}
