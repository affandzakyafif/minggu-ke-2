var jualMobil = {
    iklan: function () {
        document.write(`BU, saya  ${this.nama} , jual mobil ${this.merek} , tahun ${this.tahun} ,bekas`)
    }
};
var H = Object.create (jualMobil)

H.nama = 'tompel'
H.merek = 'avanza'
H.tahun = '2017'
H.iklan()