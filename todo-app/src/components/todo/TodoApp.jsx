import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import withNavigation from "./WithNavigation";
import withParams from "./WithParams";
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from "./LoginComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import TodoComponent from "./TodoComponent";

class TodoApp extends Component {
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        const TodoComponentWithParamsAndNavigation = withParams(withNavigation(TodoComponent));
        const ListTodosComponentWithNavigation = withNavigation(ListTodosComponent)
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponentWithNavigation/>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation/>}/>
                        <Route path="/login" element={<LoginComponentWithNavigation/>}/>
                        <Route path="/welcome/:name" element={
                            <AuthenticatedRoute>
                            <WelcomeComponentWithParams />
                            </AuthenticatedRoute>
                        } /> 
                        <Route path="/todos" element={
                            <AuthenticatedRoute>
                                <ListTodosComponentWithNavigation /> 
                            </AuthenticatedRoute>
                        } />
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                            <LogoutComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path="/todos/:id" element={ 
                            <AuthenticatedRoute>
                                <TodoComponentWithParamsAndNavigation />
                            </AuthenticatedRoute>
                        } />
                        <Route path="*" element={<ErrorComponent/>}/>
                    </Routes>
                    <FooterComponent/> 
                </Router>
                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
        )
    }
}

export default TodoApp