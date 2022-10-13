import React, { useEffect, useState } from 'react'
// @import dependencies
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  UserOutlined,
  LockOutlined
} from '@ant-design/icons'
import { Button, Input, Space, Form } from 'antd'
import { useHistory } from 'react-router-dom'
// @import utils
import { isEmailAddress, isNotEmpty } from 'utils/validationHelpers'
import { getItemFromLocalStorage } from 'utils/localStorage'
// @improt store & actions
import { useDispatch, useSelector } from 'react-redux'
import { toaster } from 'redux/globalReducers/Toaster'
import { signIn } from './Store'
// @import global reducers
import { dropdowns } from 'redux/globalReducers/Dropdowns/index'

const SignIn = props => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const history = useHistory()
  const userToken = getItemFromLocalStorage('accessToken')
  const store = useSelector(state => state)

  const loginStatus = props?.history?.location?.userState
  useEffect(() => {
    if (loginStatus) {
      dispatch(toaster({ type: 'success', message: 'Logged out successfully' }))
    }
  }, [loginStatus])

  useEffect(() => {
    if (userToken !== '' && userToken !== null) {
      history.push('/')
    }
  }, [userToken])

  const [signInData, setSignInData] = useState({
    email: null,
    password: null
  })
  const handleChange = e => {
    signInData[e.target.name] = e.target.value
    setSignInData({ ...signInData })
  }
  const isValidated = () => {
    return (
      isEmailAddress()(signInData.email).isValid &&
      isNotEmpty()(signInData.password).isValid
    )
  }

  const handleSubmit = async () => {
    if (isValidated()) {
      const response = await dispatch(signIn(signInData))
      if (response?.payload?.status === 200) {
        history.push({ pathname: '/', userState: true })
        response?.payload?.data &&
          dispatch(dropdowns(response?.payload?.data?.data?.companyId))
      } else {
        dispatch(toaster({ type: 'error', message: 'Something went wrong' }))
      }
    } else {
      dispatch(toaster({ type: 'error', message: 'Invalid username/password' }))
    }
  }

  return (
    <div className="login-signup">
      <Space direction="vertical" size={[12, 16]}>
        <h3>Sign In</h3>
        <Form form={form} name="login" onFinish={handleSubmit}>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!'
              },
              { required: true, message: 'Please enter your email!' }
            ]}
          >
            <div>
              <span className="label">Email or Username</span>

              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                name="email"
                type="email"
                size="large"
                onChange={e => handleChange(e)}
                on
                placeholder="Enter your email or username"
              />
            </div>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <div>
              <span className="label">Password</span>
              <Input.Password
                size="large"
                type="password"
                name="password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                iconRender={visible =>
                  visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                }
                visibilityToggle
                onChange={handleChange}
                placeholder="Enter your Password"
              />
            </div>
          </Form.Item>
          <div>
            <Button
              loading={store?.auth?.loading}
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length).length
              }
              size="large"
              onClick={handleSubmit}
              block
              type="primary"
            >
              Sign In
            </Button>
          </div>
        </Form>
        <div>
          <Button size="large" href="/signup" block type="link">
            Sign Up
          </Button>
        </div>
        <div>
          <Button block type="link" size="small">
            Forgot Password?
          </Button>
        </div>
      </Space>
    </div>
  )
}

export default SignIn
