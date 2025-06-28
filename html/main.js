webix.ready(function () {
    webix.ui({
        rows: [
            { view: "template", type: "header", template: "ระบบรายงานรายการสั่งซื้อสินค้า" },
            {
                id: "customerForm", view: "form", type: "clean", cols: [
                    { view: "button", width: 120, label: "เลือกลูกค้า", css: "webix_primary" },
                    {
                        view: "text", labelPosition: "left", labelAlign: "right", name: "customer_id", width: 200, label: "รหัส", editable: false, on: {
                            onChange: function (new_text, old_text) {
                                $$("history").filter("#customer_id#", new_text);
                            }
                        }
                    },
                    { view: "text", labelPosition: "left", labelAlign: "right", name: "customer_name", width: 200, label: "ชื่อร้านค้า", editable: false },
                    { view: "text", labelPosition: "left", labelAlign: "right", name: "address", width: 200, label: "ที่อยู่", editable: false },
                    { view: "text", labelPosition: "left", labelAlign: "right", name: "phone", width: 200, label: "โทร", editable: false },
                    {},
                    {
                        view: "button", width: 120, label: "ข้อมูลไม่ขึ้น?", css: "webix_danger", click: function () {
                            refreshData();
                        }
                    },
                ]
            },
            {
                cols: [
                    {
                        view: "tabview",
                        cells: [
                            {
                                header: "เทียน",
                                body: {
                                    view: "datatable",
                                    id: "p_candle_table",
                                    select: "row",
                                    fillspace: true,
                                    scroll: true,
                                    css: "rows",
                                    math: true,
                                    tooltip: true,
                                    editable: true,
                                    columns: [
                                        { id: "id", header: [textCenter("No.")], width: 40, editable: false },
                                        { id: "product", header: [{ placeholder: "ค้นหาสินค้า", content: "textFilter" }], minWidth: 200, fillspace: true, editable: false, },
                                        { id: "brand", width: 100, editable: false, header: [{ placeholder: "ตรา", content: "selectFilter" }], css: { "text-align": "center" } },
                                        { id: "color", width: 120, editable: false, header: [{ placeholder: "สี", content: "selectFilter" }], css: { "text-align": "center" } },
                                        { id: "price", width: 120, editor: "text", header: [textCenter("ราคา")], css: { "text-align": "right" }, numberFormat: "1,111.00" },
                                        { id: "quantity", header: [textCenter("จำนวน")], width: 100, editor: "text", css: { "text-align": "right" } },
                                        { id: "pcs", header: [textCenter("หน่วย")], width: 80, editable: false, css: { "text-align": "center" }, tooltip: "#remark#" },
                                    ],
                                    url: function () {
                                        return fetchData(link.candle01);
                                    },
                                    on: {
                                        onBeforeEditStart: function (obj) {
                                            if (obj.column == "price") {
                                                webix.confirm("ต้องการอนุญาตแก้ไขราคา?", "confirm-warning")
                                                    .then()
                                                    .fail(function () {
                                                        $$("p_candle_table").editCancel();
                                                    });
                                            }
                                        },
                                        onDataUpdate: function () {
                                            $$("order").sync($$("p_candle_table"), function () {
                                                this.filter(function (data) {
                                                    return data.quantity > 0;
                                                });
                                            });
                                            let count_order_list = $$("order").count();
                                            let count_order_total = 0;
                                            $$("order").data.each(function (row) {
                                                count_order_total = count_order_total + Number(row.quantity);
                                            });
                                            console.log(count_order_list);
                                            $$("total_order_count").define("label", "จำนวนทั้งสิ้น " + count_order_list + " รายการ");
                                            $$("total_order_count").refresh();
                                            $$("total_order_quantity").define("label", "รวมเป็น " + count_order_total + " ชิ้น");
                                            $$("total_order_quantity").refresh();
                                        }
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
                    { view: "resizer" },
                    {
                        view: "tabview",
                        cells: [
                            {
                                header: "รายการสั่งซื้อบิลนี้",
                                body: {
                                    rows: [
                                        {
                                            view: "datatable",
                                            width: 550,
                                            id: "order",
                                            fillspace: true,
                                            select: "row",
                                            css: "rows",
                                            columns: [
                                                { id: "product", header: [textCenter("รายการ"), { content: "textFilter" }], width: 250, fillspace: true, template: "#product# - #brand# - สี#color#", },
                                                { id: "quantity", header: [textCenter("จำนวน")], width: 100, css: { "text-align": "right" } },
                                                { id: "price", header: [textCenter("ราคา")], width: 100, css: { "text-align": "right" }, numberFormat: "1,111.00D" },
                                                { id: "pcs", header: [textCenter("หน่วย")], width: 100, css: { "text-align": "center" } },
                                            ],
                                            data: [],
                                            on: {
                                                onDataUpdate: function () {

                                                }
                                            }
                                        },
                                        {
                                            view: "form", type: "clean", cols: [
                                                { view: "label", width: 200, id: "total_order_count", label: "จำนวนทั้งสิ้น 0 รายการ" },
                                                {},
                                                { view: "label", css: { "text-align": "right" }, width: 200, id: "total_order_quantity", label: "รวมเป็น 0 ชิ้น" },
                                            ]
                                        },
                                        {
                                            view: "button", css: "webix_primary", label: "ยืนยันคำสั่งซื้อ", click: function () {
                                                let data = $$("order").serialize();
                                                console.log(data);
                                                // webix.ajax().post(link.history,)
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                header: "ประวัติลูกค้า",
                                body: {
                                    view: "datatable",
                                    width: 550,
                                    id: "history",
                                    fillspace: true,
                                    select: "row",
                                    css: "rows",
                                    columns: [
                                        { id: "timestamp", header: [textCenter("สั่งซื้อเมื่อ"), { content: "selectFilter" }], width: 200 },
                                        { id: "product", header: [textCenter("รายการ"), { content: "textFilter" }], minWidth: 250, fillspace: true },
                                        { id: "quantity", header: [textCenter("จำนวน")], width: 100 },
                                        { id: "pcs", header: [textCenter("หน่วย")], width: 100 },
                                    ],
                                    url: function () {
                                        return fetchData(link.history);
                                    },
                                }
                            }
                        ],
                    },

                ]
            },
        ]
    });
});
