const asia = {
    "Afghanistan": "Kabul",
    "Armenia": "Yerevan",
    "Azerbaijan": "Baku",
    "Bahrain": "Manama",
    "Bangladesh": "Dhaka",
    "Bhutan": "Thimphu",
    "Brunei": "Bandar Seri Begawan",
    "Cambodia": "Phnom Penh",
    "China": "Beijing",
    "Georgia": "Tbilisi",
    "India": "New Delhi",
    "Indonesia": "Jakarta",
    "Iran": "Tehran",
    "Iraq": "Baghdad",
    "Israel": "Jerusalem",
    "Japan": "Tokyo",
    "Jordan": "Amman",
    "Kazakhstan": "Nur-Sultan",
    "Kuwait": "Kuwait City",
    "Kyrgyzstan": "Bishkek",
    "Laos": "Vientiane",
    "Lebanon": "Beirut",
    "Malaysia": "Kuala Lumpur",
    "Maldives": "Malé",
    "Mongolia": "Ulaanbaatar",
    "Myanmar": "Naypyidaw",
    "Nepal": "Kathmandu",
    "North Korea": "Pyongyang",
    "Oman": "Muscat",
    "Pakistan": "Islamabad",
    "Palestine": "Ramallah",
    "Philippines": "Manila",
    "Qatar": "Doha",
    "Russia": "Moscow",
    "Saudi Arabia": "Riyadh",
    "Singapore": "Singapore",
    "South Korea": "Seoul",
    "Sri Lanka": "Sri Jayawardenepura Kotte",
    "Syria": "Damascus",
    "Taiwan": "Taipei",
    "Tajikistan": "Dushanbe",
    "Thailand": "Bangkok",
    "Turkey": "Ankara",
    "Turkmenistan": "Ashgabat",
    "United Arab Emirates": "Abu Dhabi",
    "Uzbekistan": "Tashkent",
    "Vietnam": "Hanoi",
    "Yemen": "Sana'a"
};

function checkCountry() {
    const input = document.getElementById("country").value.trim();

    // Normalize input capitalization
    const country = input
        .toLowerCase()
        .replace(/\b\w/g, c => c.toUpperCase());

    if (!asia[country]) {
        alert("INVALID COUNTRY: COUNTRY IS EITHER INVALID OR NOT IN ASIA");
        document.getElementById("result").innerHTML = "";
        return;
    }

    const capital = asia[country];
    
    document.getElementById("result").innerHTML = `
        <h2>${country}</h2>
        <p><strong>Capital:</strong> ${capital}</p>
        <img src="https://flagsapi.com/${countryCode(country)}/flat/64.png">
    `;
}

// Convert country name → ISO code for flag API
function countryCode(country) {
    const codes = {
        "Afghanistan": "AF", "Armenia": "AM", "Azerbaijan": "AZ", "Bahrain": "BH",
        "Bangladesh": "BD", "Bhutan": "BT", "Brunei": "BN", "Cambodia": "KH",
        "China": "CN", "Georgia": "GE", "India": "IN", "Indonesia": "ID",
        "Iran": "IR", "Iraq": "IQ", "Israel": "IL", "Japan": "JP",
        "Jordan": "JO", "Kazakhstan": "KZ", "Kuwait": "KW", "Kyrgyzstan": "KG",
        "Laos": "LA", "Lebanon": "LB", "Malaysia": "MY", "Maldives": "MV",
        "Mongolia": "MN", "Myanmar": "MM", "Nepal": "NP", "North Korea": "KP",
        "Oman": "OM", "Pakistan": "PK", "Palestine": "PS", "Philippines": "PH",
        "Qatar": "QA", "Russia": "RU", "Saudi Arabia": "SA", "Singapore": "SG",
        "South Korea": "KR", "Sri Lanka": "LK", "Syria": "SY", "Taiwan": "TW",
        "Tajikistan": "TJ", "Thailand": "TH", "Turkey": "TR", "Turkmenistan": "TM",
        "United Arab Emirates": "AE", "Uzbekistan": "UZ", "Vietnam": "VN",
        "Yemen": "YE"
    };
    return codes[country];
}
