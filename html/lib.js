function textCenter(text) {
    return { text: text, css: { "text-align": "center" } };
}
let main_link = "https://script.google.com/macros/s/AKfycbwQ4WH9Zh6zVrF41DZ0whj4obHLsbOI8UQuuAXBTD8BqyTaGqkbpTPpHvlcqTMSr9Zq/exec";
let link = {
    candle01: main_link + "?sheet=candle01",
    history: main_link + "?sheet=history",
}

function convertSheetData(data) {
    const [header, ...rows] = data;
    return rows.map(row => {
        let obj = {};
        row.forEach((val, i) => obj[header[i]] = val);
        return obj;
    });
}

function fetchData(linkToLoad) {
    return fetch(linkToLoad)
        .then(res => res.json())
        .then(data => {
            return convertSheetData(data); // ← ฟังก์ชันแปลงข้อมูลให้เป็น array of objects
        });
};

function refreshData() {
    $$("p_candle_table").define({ url: function () { fetchData(link.candle01) } });
    $$("p_candle_table").refresh();
}