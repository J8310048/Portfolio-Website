const express = require('express');
const axios = require('axios');
const cors = require('cors');
const qs = require('qs');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));

app.use(express.json());

// 🔄 Refresh Zoho Access Token
async function refreshAccessToken() {
    const data = qs.stringify({
        refresh_token: process.env.ZREFRESH_TOKEN,
        client_id: process.env.ZCLIENT_ID,
        client_secret: process.env.ZCLIENT_SECRET,
        grant_type: 'refresh_token'
    });

    const response = await axios.post(
        'https://accounts.zoho.com/oauth/v2/token',
        data,
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    return response.data.access_token;
}

// ✅ 1️⃣ GET ACCESS TOKEN
app.post('/zoho-token', async (req, res) => {
    try {
        const accessToken = await refreshAccessToken();
        res.json({ access_token: accessToken });
    } catch (err) {
        console.error("Error getting token:", err.response?.data || err);
        res.status(500).json({ error: "Failed to get token" });
    }
});

// ✅ 2️⃣ SEND LEAD TO ZOHO
app.post('/zoho-lead', async (req, res) => {
    try {
        const accessToken = await refreshAccessToken();

        const zohoResponse = await axios.post(
            'https://www.zohoapis.com/crm/v8/Leads',
            { data: [req.body] },
            {
                headers: {
                    'Authorization': `Zoho-oauthtoken ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        res.json(zohoResponse.data);

    } catch (err) {
        console.error("Error sending lead:", err.response?.data || err);
        res.status(err.response?.status || 500).json(err.response?.data);
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
