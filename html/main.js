webix.ready(function () {
    webix.ui({
        rows: [
            { view: "template", type: "header", template: "ระบบรายงานรายการสั่งซื้อสินค้า" },
            {
                id: "customerForm", view: "form", type: "clean", cols: [
                    { view: "button", width: 120, label: "เลือกลูกค้า", css: "webix_primary" },
                    { view: "text", labelPosition: "left", labelAlign: "right", name: "customerID", width: 200, label: "รหัส", editable: false },
                    { view: "text", labelPosition: "left", labelAlign: "right", name: "customerName", width: 200, label: "ชื่อร้านค้า", editable: false },
                    { view: "text", labelPosition: "left", labelAlign: "right", name: "Address", width: 200, label: "ที่อยู่", editable: false },
                    {},
                    { view: "button", width: 120, label: "ประวัติลูกค้า", css: "webix_primary" },
                ]
            },
            {
                view: "tabview",
                cells: [
                    {
                        header: "เทียน",
                        body: {
                            view: "datatable",
                            id: "p_candle_table",
                            select: "cell",
                            fillspace: true,
                            scroll: true,
                            css: "rows",
                            math: true,
                            editable: true,
                            columns: [
                                { id: "id", header: [textCenter("No.")], width: 40, editable: false },
                                { id: "products", header: [textCenter("รายการสินค้า"), { placehlder: "ค้นหาสินค้า", content: "textFilter" }], minWidth: 200, fillspace: true, editable: false, },
                                { id: "brand", width: 100, editable: false, header: [textCenter("ตรา"), { content: "selectFilter" }], css: { "text-align": "center" } },
                                { id: "white", header: [textCenter("สีขาว")], width: 120, editor: "text", css: { "text-align": "right" } },
                                { id: "yellow", header: [textCenter("สีเหลือง")], width: 120, editor: "text", css: { "text-align": "right" } },
                                { id: "red", header: [textCenter("สีแดง")], width: 120, editor: "text", css: { "text-align": "right" } },
                                { id: "pink", header: [textCenter("สีชมพู")], width: 120, editor: "text", css: { "text-align": "right" } },
                                { id: "total", header: [textCenter("รวม")], width: 120, editable: false, css: { "text-align": "right" }, math: "[$r,white]+[$r,yellow]+[$r,red]+[$r,pink]" },
                            ],
                            // data: [
                            //     { id: 1, products: "5*8*150 DB", brand: "ดอกบัว", pcs: "ลัง" },
                            //     { id: 2, products: "5*8*150 A", brand: "อูฐ", pcs: "ลัง" },
                            //     { id: 3, products: "6*8*150", brand: "อูฐ", pcs: "ลัง" },
                            //     { id: 4, products: "7*6*120 DB", brand: "ดอกบัว", pcs: "ลัง" },
                            //     { id: 5, products: "7*6*150 DB", brand: "ดอกบัว", pcs: "ลัง" },
                            //     { id: 6, products: "7*6*120 B", brand: "อูฐ", pcs: "ลัง" },
                            //     { id: 7, products: "7*6*150 B", brand: "อูฐ", pcs: "ลัง" },
                            //     { id: 8, products: "7*6*120 A", brand: "ชฎา", pcs: "ลัง" },
                            //     { id: 9, products: "8*6*90 DB", brand: "ดอกบัว", pcs: "ลัง" },
                            //     { id: 10, products: "8*6*90 B", brand: "อูฐ", pcs: "ลัง" },
                            //     { id: 11, products: "8*6*70 A", brand: "ชฎา", pcs: "ลัง" },
                            //     { id: 12, products: "9*6*50", brand: "ชฎา", pcs: "ลัง" },
                            //     { id: 13, products: "5*24*50", brand: "อูฐ", pcs: "ลัง" },
                            //     { id: 14, products: "6*6*100", brand: "อูฐ", pcs: "ลัง" },
                            //     { id: 15, products: "8*2*100", brand: "อูฐ", pcs: "ลัง" },
                            //     { id: 16, products: "10*2*50", brand: "ชฎา", pcs: "ลัง" },
                            //     { id: 17, products: "15*2*30", brand: "ชฎา", pcs: "ลัง" },
                            //     { id: 18, products: "20*2*30", brand: "ชฎา", pcs: "ลัง" },
                            //     { id: 19, products: "3*60*40", brand: "อูฐ", pcs: "ลัง" },
                            //     { id: 20, products: "4*4*30", brand: "อูฐ", pcs: "ลัง" },
                            //     { id: 21, products: "5*4*30", brand: "อูฐ", pcs: "ลัง" },
                            //     { id: 22, products: "6*4*30", brand: "อูฐ", pcs: "ลัง" },
                            //     { id: 23, products: "8*4*30", brand: "อูฐ", pcs: "ลัง" },
                            //     { id: 24, products: "9*1*12", brand: "อูฐ", pcs: "ลัง" },
                            //     { id: 25, products: "9*4*30 สั้น", brand: "อูฐ", pcs: "ลัง" },
                            //     { id: 26, products: "6*5*24 ญี่ปุ่น", brand: "ญี่ปุ่น", pcs: "ลัง" },
                            //     { id: 27, products: "8*5*24 ญี่ปุ่น", brand: "ญี่ปุ่น", pcs: "ลัง" },
                            //     { id: 28, products: "เทียนฮกเกี้ยน", brand: "อูฐ", pcs: "ลัง" },
                            //     { id: 29, products: "ขี้ผึ้ง เบอร์ 8/46", brand: "อูฐ", pcs: "ลัง" },
                            //     { id: 30, products: "เทียนอวยพร 8*8/50ห่อ", brand: "อวยพร", pcs: "ลัง" },
                            //     { id: 31, products: "เทียนอวยพร 9*6/36ห่อ", brand: "อวยพร", pcs: "ลัง" },
                            //     { id: 32, products: "4*8 (ถุงแก้ว)", brand: "-", pcs: "ลัง" },
                            //     { id: 33, products: " 5*6 (ถุงแก้ว) ", brand: "-", pcs: "ลัง" },
                            //     { id: 34, products: "8*2 (ถุงแก้ว)", brand: "-", pcs: "ลัง" },
                            //     { id: 35, products: "9*2 (ถุงแก้ว)", brand: "-", pcs: "ลัง" },
                            //     { id: 36, products: "เทียนแผ่น /12kg", brand: "-", pcs: "ลัง" },
                            //     { id: 37, products: "เทียนคู่เบอร์ 55 ", brand: "อูฐ", pcs: "มัด" },
                            //     { id: 38, products: "เทียนคู่เบอร์ 4", brand: "อูฐ", pcs: "มัด" },
                            //     { id: 39, products: "เทียนคู่เบอร์ 3", brand: "อูฐ", pcs: "มัด" },
                            //     { id: 40, products: "เทียนคู่เบอร์ 3", brand: "พยานาค", pcs: "" },
                            //     { id: 41, products: "เทียนคู่เบอร์ 2", brand: "พญานาค", pcs: "มัด" },
                            //     { id: 42, products: "เทียนคู่เบอร์ 1", brand: "อูฐ", pcs: "มัด" },
                            //     { id: 43, products: "เทียนคู่เบอร์ 1", brand: "พญานาค", pcs: "มัด" },
                            //     { id: 44, products: "เทียนคู่เบอร์ 9", brand: "อูฐ", pcs: "มัด" },
                            //     { id: 45, products: "เทียนคู่เบอร์ 15 สั้น", brand: "อูฐ", pcs: "มัด" },
                            //     { id: 46, products: "เทียนคู่เบอร์ 15 สั้น", brand: "พญานาค", pcs: "มัด" },
                            //     { id: 47, products: "เทียน 2*4/36 เล่ม", brand: "ชฎา", pcs: "ลัง" },
                            //     { id: 48, products: "เทียน 2*6/36 เล่ม", brand: "ชฎา", pcs: "ลัง" },
                            //     { id: 49, products: "เทียน 2*9/35 เล่ม", brand: "ชฎา", pcs: "ลัง" },
                            // ],
                        }
                    },
                    {
                        header: "ธูป",
                        body: {
                            view: "datatable",
                        }
                    }
                ]
            },
        ]
    });
});
