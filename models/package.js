const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const { Schema, model } = mongoose
const uuid = require('uuid')

const packageSchema = new Schema({
  transaction_id: {
    type: String,
    default: uuid.v1,
    unique: true
  },
  customer_name: {
    type: String,
    required: [true, 'customer name must be required']
  },
  transaction_amount: {
    type: String,
    required: [true, 'transaction amount must be required']
  },
  transaction_discount: {
    type: String,
    default: '0'
  },
  transaction_additional_field: {
    type: String,
    default: ''
  },
  transaction_payment_type: {
    type: String,
    default: '0'
  },
  transaction_state: {
    type: String,
    required: [true, 'transaction state must be required']
  },
  transaction_code: {
    type: String,
    required: [true, 'transaction code must be required']
  },
  transaction_order: {
    type: Number,
    required: [true, 'transaction order must be required']
  },
  location_id: {
    type: Schema.Types.ObjectId,
    ref: 'Location',
    required: [true, 'location id must be required']
  },
  organization_id: {
    type: Number,
    required: [true, 'organization id must be required']
  },
  customer_attribute:{
    Nama_Sales: {
      type: String
    },
    TOP:{
      type: String
    },
    Jenis_Pelanggan:{
      type: String
    }
  },
  connote:{
    type: String,
    default: uuid.v1,
  },
  connote_id:{
    type: String,
    required:[ true, 'connote must be required'],
    unique: true
  },
  origin_data:{
    type: String
  },
  destination_data:{
    type: String
  },
  koli_data:[
    {
      type: String,
      default: uuid.v1,
    }
  ],
  custom_field:{
    catatan_tambahan:{
      type: String,
      required: [ true, 'catatan tambahan must be required']
    }
  },
  currentLocation:{
    name:{
      type: String,
      required: [ true, 'name current location must be required']
    },
    code:{
      type: String,
      required: [ true, 'code current location must be required']
    },
    type:{
      required: [ true, 'type current location must be required']
    }
  }
}, { timestamps: true, versionKey: false })

packageSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} Package already exist' });

const Package = model('Package', packageSchema)
module.exports = Package