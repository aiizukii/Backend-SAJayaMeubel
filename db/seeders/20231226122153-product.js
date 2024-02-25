'use strict';
const { v4: uuid } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert("Products", [
        {
          id: uuid(),
          kodebarang: "1",
          namabarang: "Sofa L Besar",
          image: "https://i.ibb.co/rQ94vYD/7.png",
          image2: "",
          image3: "",
          typebarang: "Sofa",
          deskripsibarang: "Semua barang Pre Order (maksimal 7 hari)                                                              Bahan: Kayu akasia bayur                                   Bonus Bantal 10 pcs dan 1 buah meja                               Free ongkir wilayah Bandar Lampung                          ",
          stockbarang: 10,
          satuanbarang: "pcs",
          price: 2800000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          kodebarang: "2",
          namabarang: "Sofa L Minimalis",
          image: "https://i.ibb.co/x11SsZX/8.png",
          image2: "",
          image3: "",
          typebarang: "Sofa",
          deskripsibarang: "Bonus Bantal 4 pcs, Kayu Akasia Bayur, Free Ongkir Bandar Lampung,", 
          stockbarang: 10,
          satuanbarang: "pcs",
          price: 2100000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          kodebarang: "3",
          namabarang: "Sofa L",
          image: "https://i.ibb.co/bmvwZps/Desain-tanpa-judul-4.png",
          image2: "",
          image3: "",
          typebarang: "Sofa",
          deskripsibarang: "Bonus Bantal 3 pcs, Kayu Akasia Bayur, Free Ongkir Bandar Lampung,",
          stockbarang: 10,
          satuanbarang: "pcs",
          price: 2000000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          kodebarang: "4",
          namabarang: "Sofa L",
          image: "https://i.ibb.co/gW4rWQj/4.png",
          image2: "",
          image3: "",
          typebarang: "Sofa",
          deskripsibarang: "Bonus Bantal 5 pcs, Kayu Akasia Bayur",
          stockbarang: 10,
          satuanbarang: "pcs",
          price: 2000000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          kodebarang: "5",
          namabarang: "Sofa L Besar",
          image: "https://i.ibb.co/yfv8nyd/10.png",
          image2: "",
          image3: "",
          typebarang: "Sofa",
          deskripsibarang: "Bonus Bantal 10pcs, Kayu Akasia Bayur",
          stockbarang: 10,
          satuanbarang: "pcs",
          price: 2800000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          kodebarang: "6",
          namabarang: "Sofa Retro L",
          image: "https://i.ibb.co/qs934g0/11.png",
          image2: "",
          image3: "",
          typebarang: "Sofa",
          deskripsibarang: "Bonus Bantal 5 pcs, Bahan Kain Kagawa, Free Ongkir Bandar Lampung",
          stockbarang: 10,
          satuanbarang: "pcs",
          price: 1800000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          kodebarang: "7",
          namabarang: "Sofa Retro L putus",
          image: "https://i.ibb.co/z55g8ZM/13.png",
          image2: "",
          image3: "",
          typebarang: "Sofa",
          deskripsibarang: "Bonus Bantal 5 pcs, bahan kain spon, Kayu Akasia Bayur, Free Ongkir Bandar Lampung",
          stockbarang: 10,
          satuanbarang: "pcs",
          price: 1800000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          kodebarang: "8",
          namabarang: "Sofa Retro L putus ",
          image: "https://i.ibb.co/Bcg7SFS/12.png",
          image2: "",
          image3: "",
          typebarang: "Sofa",
          deskripsibarang: "Bonus Bantal 5pcs, Bahan Kain Mulan/Galaxi, Kayu Akasia Bayur, Free Ongkir Bandar Lampung",
          stockbarang: 10,
          satuanbarang: "pcs",
          price: 1800000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          kodebarang: "9",
          namabarang: "Sofa Retro L putus",
          image: "https://i.ibb.co/Zx861LF/20.png",
          image2: "",
          image3: "",
          typebarang: "Sofa",
          deskripsibarang: "Bonus Bantal 5 pcs, Bahan Kain Kagawa, Free Ongkir Bandar Lampung",
          stockbarang: 10,
          satuanbarang: "pcs",
          price: 2400000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          kodebarang: "10",
          namabarang: "Sofa L ",
          image: "https://i.ibb.co/bbJ6mbN/16.png",
          image2: "",
          image3: "",
          typebarang: "Sofa",
          deskripsibarang: "Bonus Bantal 5 pcs, Bahan Kain Foxi, Kayu Akasia Bayur, Free Ongkir Bandar Lampung",
          stockbarang: 10,
          satuanbarang: "pcs",
          price: 2500000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          kodebarang: "11",
          namabarang: "Sofa Retro",
          image: "https://i.ibb.co/m0Kdx9D/14.png",
          image2: "",
          image3: "",
          typebarang: "Sofa",
          deskripsibarang: "Bonus bantal 3 pcs, Kain Kagawa, Kayu Akasia Bayur, Free Ongkir Bandar Lampung",
          stockbarang: 10,
          satuanbarang: "pcs",
          price: 1800000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          kodebarang: "12",
          namabarang: "Sofa Retro",
          image: "https://i.ibb.co/rbzSLkH/9.png",
          image2: "",
          image3: "",
          typebarang: "Sofa",
          deskripsibarang: "Bonus Bantal 4 pcs, Kain Kagawa, Kayu Akasia Bayur, Free Ongkir Bandar Lampung",
          stockbarang: 10,
          satuanbarang: "pcs",
          price: 2600000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          kodebarang: "13",
          namabarang: "Sofa Retro ",
          image: "https://i.ibb.co/rv4yRS6/3.png",
          image2: "",
          image3: "",
          typebarang: "Sofa",
          deskripsibarang: "Bonus Bantal 4 pcs, Kayu Akasia Bayur, Free Ongkir Bandar Lampung",
          stockbarang: 10,
          satuanbarang: "pcs",
          price: 2000000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          kodebarang: "14",
          namabarang: "Sofa Retro",
          image: "https://i.ibb.co/GMr1Y9k/15.png",
          image2: "",
          image3: "",
          typebarang: "Sofa",
          deskripsibarang: "Bonus Bantal Besar Dan Kecil, Kayu Akasia Bayur, Free Ongkir Bandar Lampung",
          stockbarang: 10,
          satuanbarang: "pcs",
          price: 2500000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          kodebarang: "15",
          namabarang: "Sofa Retro L Putus",
          image: "https://i.ibb.co/g9G1ZYG/1.png",
          image2: "",
          image3: "",
          typebarang: "Sofa",
          deskripsibarang: "Bonus Bantal 6 pcs, Bahan Kain Sahrini, Kayu Akasia Bayur, Free Ongkir Bandar Lampung",
          stockbarang: 10,
          satuanbarang: "pcs",
          price: 4700000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          kodebarang: "16",
          namabarang: "Sofa Retro L",
          image: "https://i.ibb.co/hsSxNDs/17.png",
          image2: "",
          image3: "",
          typebarang: "Sofa",
          deskripsibarang: "Bonus Bantal 3 pcs, Bahan Kain Medili, Kayu Akasia Bayur, Free Ongkir Bandar Lampung",
          stockbarang: 10,
          satuanbarang: "pcs",
          price: 2800000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          kodebarang: "17",
          namabarang: "Sofa Retro L",
          image: "https://i.ibb.co/y56jRwq/21.png",
          image2: "",
          image3: "",
          typebarang: "Sofa",
          deskripsibarang: "Bonus Bantal 3 pcs, Bahan Kain Foxi,Kayu Akasia Bayur, Free Ongkir Bandar Lampung",
          stockbarang: 10,
          satuanbarang: "pcs",
          price: 2000000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          kodebarang: "18",
          namabarang: "Sofa Retro",
          image: "https://i.ibb.co/pZZJknj/18.png",
          image2: "",
          image3: "",
          typebarang: "Sofa",
          deskripsibarang: "Bonus Bantal 4 pcs, Bahan Kain Bludru Poxi, Kayu Akasia Bayur, Free Ongkir Bandar Lampung",
          stockbarang: 10,
          satuanbarang: "pcs",
          price: 2800000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          kodebarang: "19",
          namabarang: "Sofa L",
          image: "https://i.ibb.co/FwBSvFS/22.png",
          image2: "",
          image3: "",
          typebarang: "Sofa",
          deskripsibarang: "Bonus Bantal 5 pcs, Kayu Akasia Bayur, Free Ongkir Bandar Lampung",
          stockbarang: 10,
          satuanbarang: "pcs",
          price: 2000000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    },
  
    async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("Products", null, {});
    },
  };
  
