import React, {Component} from 'react';

class Pager extends Component{
    render(){
        return(
            <div>
                <ul className="pager">
                    <li><a disable className="privious disable">Privious</a></li>
                    <li><a className="next">Next</a></li>

                </ul>
            </div>
        )
    }
}
export default Pager;