

# Data Paket - Back End

### Project Set Up

```
1. Run Your Local Database (mongoDB)
2. npm install -g mocha
3. npm install
4. add file .env with format below
5. npm run test (TESTING)
6. npm run dev (RUN PROJECT)
```

**FORMAT .ENV**

```
PORT=3000
MONGO_CONNECT="mongodb://localhost:27017/paket"
```



### Routes

Routes For REST API 

- ##### BASE URL

  ```http
  http://localhost:3000
  ```
  
- **Package**

  | Method |    Routes    |       Description       |
  | :----: | :----------: | :---------------------: |
  |  GET   |   /package   |     Get All Package     |
  |  GET   | /package/:id |    Find One Package     |
  |  POST  |   /package   |      Post  Package      |
  |  PUT   | /package/:id |     Update Package      |
  | PATCH  | /package/:id | Update Discount Package |
  | DELETE | /package/:id |     Delete Package      |



### Code's Status

- **Success Code's**

  | Code Status | Description |
  | :---------: | :---------: |
  |     200     |   Success   |
  |     201     |   Created   |

- **Error Code's**

  | Code Status |          Description           |
  | :---------: | :----------------------------: |
  |     400     | Bad Request / Validation Error |
  |     404     |           Not Found            |
  |     500     |     Internal server error      |
  



### Detail Request

- #### Get All Package

  ------

  Get All Package

  - **URL**

    /package

  - **Method:**

    `GET`

  - **URL Params**

    none

  - **Data Body**
    none

  - **Success Response:**

    - **Code:** 200 </br>
    - **Content:** 

      ```json
      [
          {
              "customer_attribute": {
                  "Nama_Sales": "Radit Fitrawikarsa",
                  "TOP": "14 Hari",
                  "Jenis_Pelanggan": "B2B"
              },
              "custom_field": {
                  "catatan_tambahan": "JANGAN DI BANTING / DI TINDIH"
              },
              "transaction_discount": "0",
              "ttransaction_additional_field": "",
              "transaction_payment_type": "29",
              "koli_data": [
                  "e2cb6d86-0bb9-409b-a1f0-389ed4f2df2d",
                  "3600f10b-4144-4e58-a024-cc3178e7a709",
                  "2937bdbf-315e-4c5e-b139-fd39a3dfd15f"
              ],
              "_id": "5f20588f98c6d44ea9345806",
              "transaction_id": "d0090c40-539f-479a-8274-899b9970bddc",
              "customer_name": "PT. AMARA PRIMATIGA",
              "transaction_amount": "70700",
              "transaction_state": "PAID",
              "transaction_code": "CGKFT20200715121",
              "transaction_order": 121,
              "location_id": "5cecb20b6c49615b174c3e74",
              "organization_id": 6,
              "connote": "f70670b1-c3ef-4caf-bc4f-eefa702092ed",
              "connote_id": "f70670b1-c3ef-4caf-bc4f-eefa702092ed",
              "origin_data": "5cecb20b6c49615b174c3e74",
              "destination_data": "5cecb20b6c49615b174c3e74",
              "currentLocation": {
                  "name": "Hub Jakarta Selatan",
                  "code": "JKTS01",
                  "type": "Agent"
              },
              "createdAt": "2020-07-28T16:55:43.576Z",
              "updatedAt": "2020-07-28T16:55:43.576Z"
          }
      ]
      ```

  

- #### Get Detail Package

  ------

  Get detail Package

  - **URL**

    /package/:id

  - **Method:**

    `GET`

  - **URL Params**
    
    id = [String] transactions_id of package in database
    
  - **Data Body**
    none

  - **Success Response:**

    - **Code:** 200 </br>
    - **Content:** 

      ```json
      {
          "customer_attribute": {
              "Nama_Sales": "Radit Fitrawikarsa",
              "TOP": "14 Hari",
              "Jenis_Pelanggan": "B2B"
          },
          "custom_field": {
              "catatan_tambahan": "JANGAN DI BANTING / DI TINDIH"
          },
          "transaction_discount": "0",
          "ttransaction_additional_field": "",
          "transaction_payment_type": "29",
          "koli_data": [
              "e2cb6d86-0bb9-409b-a1f0-389ed4f2df2d",
              "3600f10b-4144-4e58-a024-cc3178e7a709",
              "2937bdbf-315e-4c5e-b139-fd39a3dfd15f"
          ],
          "_id": "5f20588f98c6d44ea9345806",
          "transaction_id": "d0090c40-539f-479a-8274-899b9970bddc",
          "customer_name": "PT. AMARA PRIMATIGA",
          "transaction_amount": "70700",
          "transaction_state": "PAID",
          "transaction_code": "CGKFT20200715121",
          "transaction_order": 121,
          "location_id": "5cecb20b6c49615b174c3e74",
          "organization_id": 6,
          "connote": "f70670b1-c3ef-4caf-bc4f-eefa702092ed",
          "connote_id": "f70670b1-c3ef-4caf-bc4f-eefa702092ed",
          "origin_data": "5cecb20b6c49615b174c3e74",
          "destination_data": "5cecb20b6c49615b174c3e74",
          "currentLocation": {
              "name": "Hub Jakarta Selatan",
              "code": "JKTS01",
              "type": "Agent"
          },
          "createdAt": "2020-07-28T16:55:43.576Z",
          "updatedAt": "2020-07-28T16:55:43.576Z"
      }
      ```

  

- #### Create Package

  ------

  Create Package.

  - **URL**

    /package

  - **Method:**

    `POST`

  - **URL Params**
    none

  - **Data Body**
    
    ```json
    {
        "transaction_id": "d0090c40-539f-479a-8274-899b9970bddc",
        "customer_name": "PT. AMARA PRIMATIGA",
        "customer_code": "1678593",
        "transaction_amount": "70700",
        "transaction_discount": "0",
        "transaction_additional_field": "",
        "transaction_payment_type": "29",
        "transaction_state":"PAID",
        "transaction_code": "CGKFT20200715121",
        "transaction_order": 121,
        "location_id": "5cecb20b6c49615b174c3e74",
        "organization_id": 6,
        "transaction_payment_type_name": "Invoice",
        "transaction_cash_amount": 0,
        "transaction_cash_change": 0,
        "Nama_Sales": "Radit Fitrawikarsa",
        "TOP": "14 Hari",
        "Jenis_Pelanggan": "B2B",
        "connote": "f70670b1-c3ef-4caf-bc4f-eefa702092ed",
        "connote_id": "f70670b1-c3ef-4caf-bc4f-eefa702092ed",
        "origin_data": "5cecb20b6c49615b174c3e74",
        "destination_data":"5cecb20b6c49615b174c3e74",
        "koli_data": [
            "e2cb6d86-0bb9-409b-a1f0-389ed4f2df2d",
            "3600f10b-4144-4e58-a024-cc3178e7a709",
            "2937bdbf-315e-4c5e-b139-fd39a3dfd15f"
                
        ],
        "catatan_tambahan": "JANGAN DI BANTING \/ DI TINDIH",
        "name": "Hub Jakarta Selatan",
        "code": "JKTS01",
        "type": "Agent"
        
    }
    ```
    
  - **Success Response**
  
    - **Code: 201** </br>
    - **Content:** 
  
      ```json
      {
          "message": " Data Package Created "
      }
      ```
  
  
  
- #### **Update Package**
  
  ------
  
  Update All Data Package
  
  - **URL**
  
    /news/:id
  
  - **Method:**
  
    `PUT`
  
  - **URL Params**
    id = [String] transactions_id of data package
  
  - **Data Body**
  
    ```json
      {
        "transaction_id": "d0090c40-539f-479a-8274-899b9970bddc",
        "customer_name": "PT. AMARA PRIMATIGA",
        "customer_code": "1678593",
        "transaction_amount": "70700",
        "transaction_discount": "0",
        "transaction_additional_field": "",
        "transaction_payment_type": "29",
        "transaction_state":"PAID",
        "transaction_code": "CGKFT20200715121",
        "transaction_order": 121,
        "location_id": "5cecb20b6c49615b174c3e74",
        "organization_id": 6,
        "transaction_payment_type_name": "Invoice",
        "transaction_cash_amount": 0,
        "transaction_cash_change": 0,
        "Nama_Sales": "Radit Fitrawikarsa",
        "TOP": "14 Hari",
        "Jenis_Pelanggan": "B2B",
        "connote": "f70670b1-c3ef-4caf-bc4f-eefa702092ed",
        "connote_id": "f70670b1-c3ef-4caf-bc4f-eefa702092ed",
        "origin_data": "5cecb20b6c49615b174c3e74",
        "destination_data":"5cecb20b6c49615b174c3e74",
        "koli_data": [
            "e2cb6d86-0bb9-409b-a1f0-389ed4f2df2d",
            "3600f10b-4144-4e58-a024-cc3178e7a709",
            "2937bdbf-315e-4c5e-b139-fd39a3dfd15f"
                
        ],
        "catatan_tambahan": "JANGAN DI BANTING \/ DI TINDIH",
        "name": "Hub Jakarta Selatan",
        "code": "JKTS01",
        "type": "Agent"
        
    }
    ```
  
  - **Success Response**
  
    - **Code: 200**</br>
    - **Content:** 
  
      ```json
      {
          "message": "all data updated"
      }
      ```
  
  
  
- #### **Update Discount Package**

  ------

  Update Data status Package

  - **URL**

    /package/:id

  - **Method:**

    `PATCH`

  - **URL Params**
    id = [String] transactions_id of data Package

  - **Data Body**

    ```json
    {
        "transaction_discount": "30"
    }
    ```

  - **Success Response**

    - **Code: 200**</br>
    - **Content:** 

      ```json
      {
          "message": " data transaction discount updated "
      }
      ```

  

- #### **Delete Package**

  ------

  Delete Data Package

  - **URL**

    /package/:id

  - **Method:**

    `DELETE`

  - **URL Params**
    id = [String] transactions_id of data Package

  - **Data Body**

    none

  - **Success Response**

    - **Code: 200**</br>
    - **Content:** 

      ```json
      {
          "message": "data was deleted"
      }
      ```
  

