import React from 'react'
import Logo from '../../component/logo/logo'
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'

@connect(
    state=>state.user,
    {login}
)
class Login extends React.Component{
    constructor(props){
        super(props)

        this.state={
            user:'',
            pwd:''
        }
    }

    handleChange(key, val){
        this.setState({
            [key]:val
        })
    }

    register(){
        this.props.history.push('/register')
    }

    handleLogin(){
        this.props.login(this.state)
    }

    render (){
        return (
            <div>
                <Logo/>
                <h2>登录页</h2>
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={v=>this.handleChange('user',v)}
                        >用户</InputItem>
                        <WhiteSpace/>
                        <InputItem
                            onChange={v=>this.handleChange('user',v)}
                        >密码</InputItem>
                    </List>
                </WingBlank>

                <WingBlank>
                    <Button
                        onClick={this.handleLogin.bind(this)}
                        type="primary">登录</Button>
                    <WhiteSpace/>
                    <Button onClick={this.register.bind(this)} type="primary">注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login;