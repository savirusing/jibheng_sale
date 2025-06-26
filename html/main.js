webix.ui({
    rows: [
        { view: "template", type: "header", template: "ระบบรายงานรายการสั่งซื้อสินค้า" },
        {
            view: "datatable",
            // autoConfig: true,
            editable: true,
            columns: [
                { id: "id", name: "ลำดับ", width: 30, editable: false },
                { id: "products", name: "รายการสินค้า", minWidth: 200, fillspace: true, editable: false, filter: "textFilter" },
                { id: "brand", name: "ตรา", width: 60, editable: false, filter: "selectFilter" },
                { id: "white", name: "สีขาว", width: 60, editor: "text" },
                { id: "yellow", name: "สีเหลือง", width: 60, editor: "text" },
                { id: "red", name: "สีแดง", width: 60, editor: "text" },
                { id: "pink", name: "สีชมพู", width: 60, editor: "text" },
            ],
            data: [
                { id: 1, products: "5x8x150 DB", brand: "ดอกบัว", pcs: "ลัง" },
                { id: 2, products: "5x8x150 A", brand: "อูฐ", pcs: "ลัง" },
                { id: 3, products: "6x8x150 A", brand: "อูฐ", pcs: "ลัง" },
                { id: 4, products: "7x6x120 DB", brand: "ดอกบัว", pcs: "ลัง" },
            ],
        }
    ]
});