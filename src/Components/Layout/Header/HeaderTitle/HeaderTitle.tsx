import React, { Component, Fragment } from "react";
import "Components/Layout/Header/HeaderTitle/HeaderTitle.scss";
import { ClassName, Str, Title } from "Config/Util/constants";

interface TitleState {
    isShown: boolean
}

interface TitleProps {
    title?: string
}

class HeaderTitle extends Component<TitleProps, TitleState>{
    
    constructor(props: any) {
        super(props);
        this.state = {
            isShown: true
        };
    }

    toggleShownHandler(){
        this.setState((currState: TitleState) => {
            return { isShown: !currState.isShown }
        }) // merge the states rathar than override like useState
    }

    render(){
        const header = this.state.isShown ? Title.MAIN : Str.EMPTY;

        return <Fragment>
            <div className={ClassName.HEADER_TITLE}>
                <button onClick={this.toggleShownHandler.bind(this)}>
                    {this.state.isShown ? 'Hide' : 'Show'}
                </button>
                <div >
                    <h1>{header}</h1>
                </div>
            </div>
        </Fragment>;
    }
}

export default HeaderTitle;