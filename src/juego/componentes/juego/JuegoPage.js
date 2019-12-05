import React from 'react';

import Menu from '../menu/Menu'

import Juego from './Juego'

//import { userService } from '../_services';

class JuegoPage extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            users: []
        };
    }

    componentDidMount() {
        this.setState({ 
            user: JSON.parse(localStorage.getItem('user')),
            users: { loading: true }
        });
      //  userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        
        return (
            <div>
                <div><Menu></Menu></div>
                <div> <Juego /> </div>
                
            </div>
            /*
ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<Home />, document.getElementById('home'));
ReactDOM.render(<Slider />, document.getElementById('slider'));
*/
        );
    }
}

export default JuegoPage;