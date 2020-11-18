import React, {Component} from 'react';

class Papination extends Component {
    state = {
        totalPages: [],
    }
    render() {

        let pages = []

        for (let i = 1; i <= 20; i++){
            pages.push(i);
        }

        return (
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        {
                            pages.map((value, index) => {
                                return <li className="page-item"><a className="page-link" href="#" onClick={this.props.pagenumber}>{value}</a></li>
                            })
                        }

                    </ul>
                </nav>
            </div>
        );
    }
}

export default Papination;
