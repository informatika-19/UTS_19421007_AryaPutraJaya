const monggoose = require('mongoose')
const Schema = monggoose.Schema

const PenjualanLampu = new Schema ({
    JenisLampu: {
        type: String
    },
    MerkLampu: {
        type: String
    },
    HargaLampu: {
        type: String
    }
})
module.exports = monggoose.model('lampu', PenjualanLampu)