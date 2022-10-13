import React from "react";
import "./Signup.css";
import { Button, Col, Input, Row, Space } from "antd";

class SignUp extends React.Component {
  render() {
    return (
      <Row className="auth-container" align="middle" justify="center">
        <Col className="content" span={10}>
          <Space direction="vertical" size="large">
            <div>
              {/* {pathname === "/signin" && this.renderSignIn()}
              {pathname === "/signup" && this.renderSignup()} */}

              <div className="login-signup">
                <Space direction="vertical" size={[12, 18]}>
                  <h3>Sign Up</h3>
                  <div>
                    <span className="label">First Name</span>
                    <Input size="large" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <span className="label">Last Name</span>
                    <Input size="large" placeholder="Enter your last name" />
                  </div>
                  <div>
                    <span className="label">Phone</span>
                    <Input size="large" placeholder="Enter your phone/mobile" />
                  </div>
                  <div>
                    <span className="label">Choose Password</span>
                    <Input size="large" type="password" placeholder="Password" />
                  </div>
                  <div>
                    <span className="label">Confirm Password</span>
                    <Input size="large" type="password" placeholder="Password" />
                  </div>
                  <div>
                    <Button size="large" block type="primary">
                      SignUp
                    </Button>
                  </div>
                  <div>
                    <Button size="large" href="/signin" block type="link">
                      Sign In
                    </Button>
                  </div>
                </Space>
              </div>
            </div>
          </Space>
        </Col>
        <Col span={14} className="artwork md:block hidden lg:block"></Col>
      </Row>

    );
  }
}

export default SignUp;
