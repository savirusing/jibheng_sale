webix.ui({
    rows: [
        { view: "template", type: "header", template: "ระบบรายงานรายการสั่งซื้อสินค้า" },
        {
            id: "customerForm", view: "form", type: "space", cols: [
                { view: "button", width: 100, type: "icon", icon: "mdi mdi-account-search", label: "เลือกลูกค้า" },
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
                        editable: true,
                        columns: [
                            { id: "id", header: "ลำดับ", width: 30, editable: false },
                            { id: "products", header: ["รายการสินค้า", { content: "textFilter" }], minWidth: 200, fillspace: true, editable: false, },
                            { id: "brand", header: "ตรา", width: 60, editable: false, header: ["ตรา", { content: "selectFilter" }] },
                            { id: "white", header: "สีขาว", width: 60, editor: "text" },
                            { id: "yellow", header: "สีเหลือง", width: 60, editor: "text" },
                            { id: "red", header: "สีแดง", width: 60, editor: "text" },
                            { id: "pink", header: "สีชมพู", width: 60, editor: "text" },
                        ],
                        data: [
                            { id: 1, products: "5x8x150 DB", brand: "ดอกบัว", pcs: "ลัง" },
                            { id: 2, products: "5x8x150 A", brand: "อูฐ", pcs: "ลัง" },
                            { id: 3, products: "6x8x150 A", brand: "อูฐ", pcs: "ลัง" },
                            { id: 4, products: "7x6x120 DB", brand: "ดอกบัว", pcs: "ลัง" },
                        ],
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