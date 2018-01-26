import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
    constructor() {
        super();
        this.state = {
            gifts: [],
            name: ""
        };
    }

    addGift = () => {
        const { gifts, name } = this.state;
        
        const ids = this.state.gifts.map(gift => gift.id);
        if( name.length === 0 ) {
        alert("please Enter Name:");
        return;
        }
        
        const max_id = name.length > 0 && ids.length > 0 ? Math.max(...ids) : 0 ;
        
        gifts.push({ id: max_id + 1, name: name});
        
        this.setState({ gifts});
    };

    nameChange = (e) => {
        //const newName = this.state.name + val
        this.setState({name: e.target.value});
    }
    render() {
        return (
            <div> 
                <h2> Gift Giver </h2>
                <div className='gift-list'>
                {
                    this.state.gifts.map(gift => {
                    return <div key={gift.id}> {gift.id} {gift.name} </div>
                    })
                }
                </div>
                Please Enter Name: <input type='text' onChange= {this.nameChange} value={this.state.name} />
                <Button className='btn-add' onClick = { this.addGift }>Add Gift</Button>
            </div>
        );
    }
}

export default App;