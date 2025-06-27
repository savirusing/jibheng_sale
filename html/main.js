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
                                    select: "cell",
                                    fillspace: true,
                                    scroll: true,
                                    css: "rows",
                                    math: true,
                                    editable: true,
                                    columns: [
                                        { id: "id", header: [textCenter("No.")], width: 40, editable: false },
                                        { id: "product", header: [textCenter("รายการสินค้า"), { placeholder: "ค้นหาสินค้า", content: "textFilter" }], width: 200, fillspace: true, editable: false, },
                                        { id: "brand", width: 100, editable: false, header: [textCenter("ตรา"), { content: "selectFilter" }], css: { "text-align": "center" } },
                                        { id: "white", header: [textCenter("สีขาว")], width: 100, editor: "text", css: { "text-align": "right" } },
                                        { id: "yellow", header: [textCenter("สีเหลือง")], width: 100, editor: "text", css: { "text-align": "right" } },
                                        { id: "red", header: [textCenter("สีแดง")], width: 100, editor: "text", css: { "text-align": "right" } },
                                        { id: "pink", header: [textCenter("สีชมพู")], width: 100, editor: "text", css: { "text-align": "right" } },
                                        { id: "total", header: [textCenter("รวม")], width: 100, editable: false, css: { "text-align": "right" }, math: "[$r,white]+[$r,yellow]+[$r,red]+[$r,pink]" },
                                    ],
                                    url: function () {
                                        return fetchData(link.candle01);
                                    },
                                    on: {
                                        onDataUpdate: function () {
                                            let order_items = this.find(function (obj) {
                                                return obj.total != 0;
                                            })
                                            // console.log(order_items);
                                            let order_sep = [];
                                            let i = 0;
                                            for (let item_arr of Object.entries(order_items)) {
                                                let item = item_arr[1];
                                                // console.log(item);
                                                let pre_product = item.product + " " + item.brand + " ";
                                                if (item.white > 0) order_sep.push({ id: i++, product: pre_product + "สีขาว", quantity: item.white });
                                                if (item.yellow > 0) order_sep.push({ id: i++, product: pre_product + "สีเหลือง", quantity: item.yellow });
                                                if (item.red > 0) order_sep.push({ id: i++, product: pre_product + "สีแดง", quantity: item.red });
                                                if (item.pink > 0) order_sep.push({ id: i++, product: pre_product + "สีชมพู", quantity: item.pink });
                                            }
                                            $$("order").clearAll();
                                            $$("order").parse(order_sep);
                                            // console.log(order_sep);
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
                                    view: "datatable",
                                    width: 550,
                                    id: "order",
                                    fillspace: true,
                                    select: "row",
                                    css: "rows",
                                    columns: [
                                        { id: "product", header: [textCenter("รายการ"), { content: "textFilter" }], width: 250, fillspace: true },
                                        { id: "quantity", header: [textCenter("จำนวน")], width: 100 },
                                    ],
                                    data: [],
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
                                        { id: "product", header: [textCenter("รายการ"), { content: "textFilter" }], width: 250, fillspace: true },
                                        { id: "quantity", header: [textCenter("จำนวน")], width: 100 },
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
