import * as React from "react";
import "../css/hello.less";

export interface HelloProps { 
    compiler: string;
    framework: string;
}

export interface HelloState { 
}

export class Hello extends React.Component<HelloProps, HelloState> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
