import React, { Component } from 'react';

class Week3 extends Component {
    constructor(props){
        super(props)
        this.state={
            noidung:''
        }
    }
    GuiDuLieu = (event) => {
        event.preventDefault()
        this.props.pBaoCao3(this.state)
        this.Tat()
    }
    DoiDuLieu=(event)=>{
        var target = event.target
        var name = target.name
        var value = target.value
        this.setState({
            [name]:value
        })
    }
    Tat = () => {
        this.props.pTat3()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.GuiDuLieu}>
                <div className="marginbottom">
                <label className="weektext">Noi dung bao cao thuc tap tuan 3:</label><br />
                        <textarea className="textarea" name="noidung" value={this.state.noidung} onChange={this.DoiDuLieu}></textarea>
                    </div>
                    <div className="marginbottom buttonwrap-1">
                        <button className="buttonedit">Xac nhan</button>
                        <button className="buttonreport" type="button" onClick={this.Tat}>Huy bo</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Week3;