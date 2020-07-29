const Package = require('../models/package')

class packageController{

  static async create(req, res, next){
    try{
      const {
        transaction_id,
        customer_name, 
        customer_code,
        transaction_amount,
        transaction_discount,
        transaction_additional_field,
        transaction_payment_type,
        transaction_state,
        transaction_code,
        transaction_order,
        location_id,
        organization_id,
        transaction_payment_type_name,
        transaction_cash_amount,
        transaction_cash_change,
        Nama_Sales,
        TOP,
        Jenis_Pelanggan,
        connote,
        connote_id,
        origin_data,
        destination_data,
        koli_data,
        catatan_tambahan,
        name,
        code,
        type
      } = req.body
      // console.log(req.body.customer_attribute.Nama_Sales)

      const data = await Package.create({
        transaction_id,
        customer_name, 
        customer_code,
        transaction_amount,
        transaction_discount,
        transaction_additional_field,
        transaction_payment_type,
        transaction_state,
        transaction_code,
        transaction_order,
        location_id,
        organization_id,
        transaction_payment_type_name,
        transaction_cash_amount,
        transaction_cash_change,
        connote,
        connote_id,
        origin_data,
        destination_data,
        customer_attribute: { 
          Nama_Sales,
          TOP,
          Jenis_Pelanggan,
        },
        koli_data,
        custom_field:{
          catatan_tambahan
        },
        currentLocation:{
          name,
          code,
          type
        }
      })
      res.status(201).json({ message: ' Data Package Created '})
    }
    catch(err){
      next(err)
    }
  }

  static async findAll(req, res, next){
    try{
      const data = await Package.find({})
      res.status(200).json(data)
    }
    catch(err){
      next(err)
    }
  }

  static async findById(req, res, next){
    try{
      const { id } = req.params
      const data = await Package.findOne({ transaction_id: id })
      res.status(200).json(data)
    }
    catch(err){
      next(err)
    }
  }

  static async updateAll(req, res, next){
    try{
      const {
        transaction_id,
        customer_name, 
        customer_code,
        transaction_amount,
        transaction_discount,
        transaction_additional_field,
        transaction_payment_type,
        transaction_state,
        transaction_code,
        transaction_order,
        location_id,
        organization_id,
        transaction_payment_type_name,
        transaction_cash_amount,
        transaction_cash_change,
        Nama_Sales,
        TOP,
        Jenis_Pelanggan,
        connote,
        connote_id,
        origin_data,
        destination_data,
        koli_data,
        catatan_tambahan,
        name,
        code,
        type
      } = req.body

      const { id } = req.params
      const data = await Package.findOne( {transaction_id : id})

      if(data){
        const dataUpdated = await Package.update({
          transaction_id,
          customer_name, 
          customer_code,
          transaction_amount,
          transaction_discount,
          transaction_additional_field,
          transaction_payment_type,
          transaction_state,
          transaction_code,
          transaction_order,
          location_id,
          organization_id,
          transaction_payment_type_name,
          transaction_cash_amount,
          transaction_cash_change,
          connote,
          connote_id,
          origin_data,
          destination_data,
          customer_attribute: { 
            Nama_Sales, TOP,
            Jenis_Pelanggan,
          },
          koli_data,
          custom_field:{
            catatan_tambahan
          },
          currentLocation:{
            name,
            code,
            type
          }
        }).where({transaction_id: id})
        res.status(200).json({ message: 'all data updated' })
      } else {
        next({ status: 400, message: 'Data Not Found'})
      }

    }
    catch(err){
      next(err)
    }
  }

  static async updateOne(req, res, next){
    try{
      const { id } = req.params
      const { transaction_discount } = req.body
      const data = await Package.findOne( {transaction_id: id})
      if(data){
        const dataUpdated = await Package.update({ transaction_discount }).where({transaction_id: id})
        res.status(200).json({ message: ' data transaction discount updated '})
      } else {
        next({status: 400, message: 'Data Not Found'})
      }
    }
    catch(err){
      next(err)
    }
  }

  static async delete(req, res, next){
    try{
      const { id } = req.params
      const data = await Package.findOne({ transaction_id: id})
      if(data){
        const data = await Package.remove({ transaction_id: id})
        res.status(200).json({ message: `data was deleted`})
      } else {
        next({status: 400, message: 'Data Not Found'})
      }
    }
    catch(err){
      next(err)
    }
  }

}

module.exports = packageController

