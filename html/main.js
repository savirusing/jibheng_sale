webix.ui({
    rows: [
        { view: "template", type: "header", template: "ระบบรายงานรายการสั่งซื้อสินค้า" },
        {
            id: "customerForm", view: "form", cols: [
                { view: "button", width: 120, label: "เลือกลูกค้า", css: "webix_primary" },
                { view: "text", labelPosition: "left", labelAlign: "right", name: "customerID", width: 200, label: "รหัส", editable: false },
                { view: "text", labelPosition: "left", labelAlign: "right", name: "customerName", width: 200, label: "ชื่อร้านค้า", editable: false },
                { view: "text", labelPosition: "left", labelAlign: "right", name: "Address", width: 200, label: "ที่อยู่", editable: false },
            ]
        },
        {
            view: "tabview",
            height: 350,
            cells: [
                {
                    header: "เทียน",
                    body: {
                        view: "datatable",
                        // autoConfig: true,
                        select: "cell",
                        css: "rows",
                        editable: true,
                        columns: [
                            { id: "id", header: "No.", width: 40, editable: false },
                            { id: "products", header: [{ text: "รายการสินค้า", css: { "text-align": "center" } }, { placehlder: "ค้นหาสินค้า", content: "textFilter" }], minWidth: 200, fillspace: true, editable: false, },
                            { id: "brand", width: 100, editable: false, header: ["ตรา", { content: "selectFilter" }], css: { "text-align": "center" } },
                            { id: "white", header: "สีขาว", width: 120, editor: "text", css: { "text-align": "right" } },
                            { id: "yellow", header: "สีเหลือง", width: 120, editor: "text", css: { "text-align": "right" } },
                            { id: "red", header: "สีแดง", width: 120, editor: "text", css: { "text-align": "right" } },
                            { id: "pink", header: "สีชมพู", width: 120, editor: "text", css: { "text-align": "right" } },
                            { id: "total", header: "รวม", width: 120, editable: false, css: { "text-align": "right" } },
                        ],
                        data: [
                            { id: 1, products: "5x8x150 DB", brand: "ดอกบัว", pcs: "ลัง" },
                            { id: 2, products: "5x8x150 A", brand: "อูฐ", pcs: "ลัง" },
                            { id: 3, products: "6x8x150 A", brand: "อูฐ", pcs: "ลัง" },
                            { id: 4, products: "7x6x120 DB", brand: "ดอกบัว", pcs: "ลัง" },
                        ],
                        on: {
                            onDataUpdate: function (id, data, old) {
                                let total = Number(data.white) + Number(data.yellow) + Number(data.red) + Number(data.pink)
                                this.updateItem(id, { total: total });
                            },
                        }
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