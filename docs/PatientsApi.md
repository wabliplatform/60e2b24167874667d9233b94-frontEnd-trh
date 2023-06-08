# TempApi.PatientsApi

All URIs are relative to *http://83.212.100.226:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createpatients**](PatientsApi.md#createpatients) | **POST** /patients | Creates the data
[**deletepatients**](PatientsApi.md#deletepatients) | **DELETE** /patients/{patientsId} | Delete the element
[**getAllpatients**](PatientsApi.md#getAllpatients) | **GET** /patients/getAll | Get all the data
[**getByParamspatients**](PatientsApi.md#getByParamspatients) | **GET** /patients/getByParams | Get all the data based on user query
[**getpatients**](PatientsApi.md#getpatients) | **GET** /patients/{patientsId} | Get the element
[**updatepatients**](PatientsApi.md#updatepatients) | **PUT** /patients/{patientsId} | Updates the element



## createpatients

> Patients createpatients(patients)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PatientsApi();
let patients = new TempApi.Patients(); // Patients | data to be created
apiInstance.createpatients(patients, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patients** | [**Patients**](Patients.md)| data to be created | 

### Return type

[**Patients**](Patients.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletepatients

> deletepatients(patientsId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PatientsApi();
let patientsId = "patientsId_example"; // String | the Id parameter
apiInstance.deletepatients(patientsId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patientsId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllpatients

> [Patients] getAllpatients()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PatientsApi();
apiInstance.getAllpatients((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Patients]**](Patients.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamspatients

> [Patients] getByParamspatients(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PatientsApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamspatients(filter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| the query based on which the search is performed | 

### Return type

[**[Patients]**](Patients.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getpatients

> Patients getpatients(patientsId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PatientsApi();
let patientsId = "patientsId_example"; // String | the Id parameter
apiInstance.getpatients(patientsId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patientsId** | **String**| the Id parameter | 

### Return type

[**Patients**](Patients.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatepatients

> Patients updatepatients(patientsId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PatientsApi();
let patientsId = "patientsId_example"; // String | the Id parameter
let opts = {
  'patients': new TempApi.Patients() // Patients | data to be updated
};
apiInstance.updatepatients(patientsId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patientsId** | **String**| the Id parameter | 
 **patients** | [**Patients**](Patients.md)| data to be updated | [optional] 

### Return type

[**Patients**](Patients.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

