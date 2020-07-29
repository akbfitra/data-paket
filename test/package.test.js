const chai = require('chai')
const chaiHTTP = require('chai-http')
const expect = chai.expect
const app = require('../app.js')

const Package = require('../models/package')


chai.use(chaiHTTP)

after(function(done){
  if(process.env.NODE_ENV === 'testing'){
    Package.deleteMany({})
      .then( data => {
        console.log('database package was deleted')
        done()
      })
      .catch(err => {
        console.log(err)
      })
  }
})

let packageId = "d0090c40-539f-479a-8274-899b9970bddc"


describe('Package Testing', () => {
  describe('Package Create Testing (POST) /package', () => {
    describe('success testing', () => {
      it('should create data package with status(201) and send object(message is Data Package Created )', (done) => {
        let data = {
            transaction_id: "d0090c40-539f-479a-8274-899b9970bddc",
            customer_name: "PT. AMARA PRIMATIGA",
            customer_code: "1678593",
            transaction_amount: "70700",
            transaction_discount: "0",
            transaction_additional_field: "",
            transaction_payment_type: "29",
            transaction_state:"PAID",
            transaction_code: "CGKFT20200715121",
            transaction_order: 121,
            location_id: "5cecb20b6c49615b174c3e74",
            organization_id: 6,
            transaction_payment_type_name: "Invoice",
            transaction_cash_amount: 0,
            transaction_cash_change: 0,
            Nama_Sales: "Radit Fitrawikarsa",
            TOP: "14 Hari",
            Jenis_Pelanggan: "B2B",
            connote: "f70670b1-c3ef-4caf-bc4f-eefa702092ed",
            connote_id: "f70670b1-c3ef-4caf-bc4f-eefa702092ed",
            origin_data: "5cecb20b6c49615b174c3e74",
            destination_data:"5cecb20b6c49615b174c3e74",
            koli_data: [
                "e2cb6d86-0bb9-409b-a1f0-389ed4f2df2d",
                "3600f10b-4144-4e58-a024-cc3178e7a709",
                "2937bdbf-315e-4c5e-b139-fd39a3dfd15f"
            ],
            catatan_tambahan: "JANGAN DI BANTING \/ DI TINDIH",
            name: "Hub Jakarta Selatan",
            code: "JKTS01",
            type: "Agent"
          
          }
        
        chai.request(app)
          .post('/package')
          .send(data)
          .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(201)
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.all.keys('message')
            done()
          })
      })
    })
    describe('error testing', () =>{
      it('should send an error with status (400) and send object error with message customer name is required', (done) => {
        let data = {
            transaction_id: "d0090c40-539f-479a-8274-899b9970bddc2",
            customer_code: "1678593",
            transaction_amount: "70700",
            transaction_discount: "0",
            transaction_additional_field: "",
            transaction_payment_type: "29",
            transaction_state:"PAID",
            transaction_code: "CGKFT20200715121",
            transaction_order: 121,
            location_id: "5cecb20b6c49615b174c3e74",
            organization_id: 6,
            transaction_payment_type_name: "Invoice",
            transaction_cash_amount: 0,
            transaction_cash_change: 0,
            Nama_Sales: "Radit Fitrawikarsa",
            TOP: "14 Hari",
            Jenis_Pelanggan: "B2B",
            connote: "f70670b1-c3ef-4caf-bc4f-eefa702092ed",
            connote_id: "f70670b1-c3ef-4caf-bc4f-eefa702092ed1",
            origin_data: "5cecb20b6c49615b174c3e74",
            destination_data:"5cecb20b6c49615b174c3e74",
            koli_data: [
                "e2cb6d86-0bb9-409b-a1f0-389ed4f2df2d",
                "3600f10b-4144-4e58-a024-cc3178e7a709",
                "2937bdbf-315e-4c5e-b139-fd39a3dfd15f"
            ],
            catatan_tambahan: "JANGAN DI BANTING \/ DI TINDIH",
            name: "Hub Jakarta Selatan",
            code: "JKTS01",
            type: "Agent"
          
          }
        chai.request(app)
          .post('/package')
          .send(data)
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(400);
            expect(res.body).to.be.an('object')
            expect(res.body.message).to.be.an('array').to.be.includes('customer name must be required')
            done()
          })
      })
      
    })
  })
  describe('Get All package Testing (GET) /package', () => {
    describe('success testing', () => {
      it('should get data package with status(200) and send array of object with key (_id,customer_attribute, custom_field, transaction_discount, transaction_additional_field, transaction_payment_type)', (done) => {
        chai.request(app)
          .get('/package')
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('array')
            expect(res.body[0]).to.be.an('object').that.all.have.keys(
            "_id",
            "connote",
            "connote_id",
            "createdAt",
            "currentLocation",
            "custom_field",
            "customer_attribute",
            "customer_name",
            "destination_data",
            "koli_data",
            "location_id",
            "organization_id",
            "origin_data",
            "transaction_additional_field",
            "transaction_amount",
            "transaction_code",
            "transaction_discount",
            "transaction_id",
            "transaction_order",
            "transaction_payment_type",
            "transaction_state",
            "updatedAt")
            done()
          })
      })
    })
  })
  describe('Get All package Testing (GET) /package/:id', () => {
    describe('success testing', () => {
      it('should get data package with status(200) and send array of object with key (_id,customer_attribute, custom_field, transaction_discount, transaction_additional_field, transaction_payment_type)', (done) => {
        chai.request(app)
          .get(`/package/${packageId}`)
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('object')
            expect(res.body).that.all.have.keys("_id",
            "connote",
            "connote_id",
            "createdAt",
            "currentLocation",
            "custom_field",
            "customer_attribute",
            "customer_name",
            "destination_data",
            "koli_data",
            "location_id",
            "organization_id",
            "origin_data",
            "transaction_additional_field",
            "transaction_amount",
            "transaction_code",
            "transaction_discount",
            "transaction_id",
            "transaction_order",
            "transaction_payment_type",
            "transaction_state",
            "updatedAt")
            done()
          })
      })
    })
  })
  describe('Update Data Package Testing (PUT) /package/:id', () => {
    describe('success testing', () => {
      it('should get data package with status(200) and send object with key (message: all data updated)', (done) => {
        let data = {
          transaction_id: "d0090c40-539f-479a-8274-899b9970bddc",
          customer_code: "1678593",
          transaction_amount: "70700",
          transaction_discount: "0",
          transaction_additional_field: "",
          transaction_payment_type: "29",
          transaction_state:"NOT PAID",
          transaction_code: "CGKFT20200715121",
          transaction_order: 121,
          location_id: "5cecb20b6c49615b174c3e74",
          organization_id: 6,
          transaction_payment_type_name: "Invoice",
          transaction_cash_amount: 0,
          transaction_cash_change: 0,
          Nama_Sales: "Radit Fitrawikarsa",
          TOP: "14 Hari",
          Jenis_Pelanggan: "B2B",
          connote: "f70670b1-c3ef-4caf-bc4f-eefa702092ed",
          connote_id: "f70670b1-c3ef-4caf-bc4f-eefa702092ed1as",
          origin_data: "5cecb20b6c49615b174c3e74",
          destination_data:"5cecb20b6c49615b174c3e74",
          koli_data: [
              "e2cb6d86-0bb9-409b-a1f0-389ed4f2df2d",
              "3600f10b-4144-4e58-a024-cc3178e7a709",
              "2937bdbf-315e-4c5e-b139-fd39a3dfd15f"
          ],
          catatan_tambahan: "JANGAN DI BANTING \/ DI TINDIH",
          name: "Hub Jakarta Selatan",
          code: "JKTS01",
          type: "Agent"
        
        }
        chai.request(app)
          .put(`/package/${packageId}`)
          .send(data)
          .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.all.keys('message')
            done()
          })
      })
    })
  })
  
  describe('Update Data Status Package Testing (PATCH) /package/:id', () => {
    describe('success testing', () => {
      it('should get data package with status(200) and send object with key (message with data: data transaction discount updated)', (done) => {
        let data = {
          transaction_discount: '10'
        }
        chai.request(app)
          .patch(`/package/d0090c40-539f-479a-8274-899b9970bddc`)
          .send(data)
          .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.all.keys('message')
            done()
          })
      })
    })
  })

  describe('Delete Data  Package Testing (DELETE) /package/:id', () => {
    describe('success testing', () => {
      it('should get data package with status(200) and send object with key (message: data was deleted)', (done) => {
        chai.request(app)
          .delete(`/package/${packageId}`)
          .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.all.keys('message')
            done()
          })
      })
    })
  })
})
