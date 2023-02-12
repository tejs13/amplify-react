import React, {Component} from 'react';
import { Breadcrumb, Layout, Menu} from 'antd';
import {  CodeOutlined } from '@ant-design/icons';
import Parent from '../../LearningExcercise/ParentChild/Parent';

const { Header, Content, Footer, Sider } = Layout;




class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showSideNavBar : true
            
        }
        this.toggleCollapse = this.toggleCollapse.bind(this)
       
    }

    toggleCollapse(e) {
        console.log(e)

        this.setState(this.state.showSideNavBar ? {showSideNavBar: false } : {showSideNavBar: true} )
    }

    handleNavClick = (e) => {
        console.log(e)
    }



    render(){
        return(
            <>
            {/* <h1> </h1> */}
            <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={this.state.showSideNavBar} onCollapse={this.toggleCollapse}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} >
                <h1 style={{float: 'inherit'}}>Excs</h1>
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={this.handleNavClick}>

                    <Menu.Item key="1">
                    <CodeOutlined />
                        <span>Parent Child </span>
                    </Menu.Item>

                </Menu>
            </Sider>
                <Layout className="site-layout">
                    <Header style={{ padding: 0, background: '#FCFEFF' }}  >
                        <h2 style={{ textAlign: 'center' }}>Dashboard Screen</h2>
                    </Header> 
                    <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Task</Breadcrumb.Item>
                        <Breadcrumb.Item>1</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, minHeight: '70vh', background: '#FCFEFF' }}>
                        <Parent/>
                    </div>
                    </Content>
                    <Footer style={{ textAlign: 'center',padding: 14, minHeight: '18vh' }}>Blkcat.in ©2023 Created by Tejaskumar</Footer>
                </Layout>

            </Layout>
             

            </>
           

        )
    }
    
}

export default Dashboard