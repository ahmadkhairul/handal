const data = {
  orderNumber: "order-001",
  from: "Singapura",
  to: "Indonesia",
  ETA: "20-04-2020",
  status: "Pilih Forwarder",
  type: "Import",
  cargoType: "Laut",
  incoterms: "FOB",
  containerType: "FCL 20 Dry",
  itemList: [
    {
      id: "item-001",
      name: "PCB Board Merk A",
      HSCode: 12345678,
      weight: 10,
      volume: 10,
      total: 20,
      price: 50000,
      totalPrice: 20 * 50000
    },
    {
      id: "item-001",
      name: "PCB Board Merk B",
      HSCode: 12345678,
      weight: 10,
      volume: 10,
      total: 20,
      price: 50000,
      totalPrice: 20 * 50000
    },
    {
      id: "item-001",
      name: "PCB Board Merk C",
      HSCode: 12345678,
      weight: 10,
      volume: 10,
      total: 20,
      price: 50000,
      totalPrice: 20 * 50000
    }
  ]
};

console.log(data);
