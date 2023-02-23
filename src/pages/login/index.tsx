import {Button, Form, Input, message} from 'antd';
import {useStore} from "../../store";
import {useNavigate} from 'react-router-dom'
import {useState} from "react";

const Login = () => {
    console.log('登录页面')
    const login = useStore((state)=>state.login)
    const [loading,setLoading]= useState(false)
    const navigate = useNavigate()

    const onFinish = async (values: any) => {
        setLoading(true)
        const result = await login(values)
        setLoading(false)
        if (result){
            message.success('登录成功')
            navigate('/')
        }else {
            message.error('登录失败')
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{display:'flex',height:'100vh',justifyContent:'center',alignItems:'center'}}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login
