import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import './App.css';
import Checkbox from './main/checkbox';
import MCheckbox from './main/metriccheck';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


const App = () => {
  const [modelDetails, setModelDetails] = useState({});
  const [fileContents,setfileContents]=useState({});
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const fileContents = reader.result;
      setfileContents(fileContents);
    };
  };
  
  const onFinish = (values) => {
    setModelDetails(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="App">
      <h1>Create new model approval document</h1>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Model Name"
          name="modelName"
          rules={[
            {
              required: true,
              message: 'Please input your model name!',
            },
          ]}
        >
          <Input className='size'/>
        </Form.Item>
        &nbsp;

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: 'Please input your model description!',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
         &nbsp;

        <Form.Item
          label="Tech Stack (Numpy, Pandas, Scikit_learn,Tensor flow and Pytorch)"
          name="modeltech"
          rules={[
            {
              required:false,
              message: 'Please select technology used!'
            },
          ]}
        >
          <Checkbox />
 
        </Form.Item>
        &nbsp;
    
        <Form.Item
          label="Upload Model"
          name="modelupload"
          rules={[
            {
            required:true,
            message: 'Please select the model!',
            },
          ]}
        >
       
          <input type="file" onChange={handleFileUpload} />
        </Form.Item>
        &nbsp;
    
        <Form.Item
          label="Upload Test Data"
          name="modeldata"
          rules={[
            {
              required:true,
              message: 'Please select the tested data!'
            },
          ]}
        >
        <Input type="file" onChange={handleFileUpload} />
        </Form.Item>
          &nbsp;

        <Form.Item
          label="Metric(Accuracy or Precision)"
          name="modelmetric"
          rules={[
            {
              required:false,
              message: 'Please select metric!'
            },
          ]}
        >
          <MCheckbox/>
          
        </Form.Item>
          &nbsp;

        <Form.Item {...tailLayout}>
          <h5><Button type="primary" htmlType="submit">
            Generate Model
          </Button></h5>
        </Form.Item>

      </Form>
        
      {modelDetails.modelName && (
        <div>
          <b><h2>Model details:</h2></b>
          <p>Name: {modelDetails.modelName}</p>
          <p>Description: {modelDetails.description}</p>
          <p>Tech Stack: {modelDetails.modeltech}</p>
          <p>Upload model: {modelDetails.modelupload}</p>
          <p>Upload data: {modelDetails.modeldata}</p>
          <p>Metric: {modelDetails.modelmetric}</p>
          
        </div>
      )}
    </div>
  );
};

export default App;

