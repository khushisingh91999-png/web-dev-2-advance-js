import React from 'react'

// function Sample({count,setCount}) {
//     return (
//         <div>
//             <h2>Trending topics</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//             <button
//                 className="counter"
//                 onClick={() => setCount((count) => count + 1)}
//             >
//                 Count is {count}
//             </button>
//         </div>
//     )
// }


class Sample extends React.Component {
    constructor(props) {
        super(props)
    }   
    render() {
        return (
            <div>
            <h2>Trending topics</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button
                className="counter"
                onClick={() => this.props.setCount((count) => count + 1)}
            >
                Count is {this.props.count}
            </button>

            </div>
        )
    }
}

export default Sample