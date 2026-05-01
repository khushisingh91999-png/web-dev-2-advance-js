import React,{Component, useState, useEffect} from 'react'
import style from '../css/Sample.module.css'
import style1 from '../css/Homepage.module.css'
//import styled from 'styled-components'
import styled from '@emotion/styled'
import { css } from '@emotion/react'


function Sample(props) {
    const [name,setName]=useState("Khushi")
    const [age,setAge]=useState(20)

    useEffect(()=>{
        console.log("Component Mounted")
        return()=>{
            console.log("Component Unmounted")
        }
    },[name])

  return (
  <div>
    <h2>Trending topics</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae maiores, nobis laboriosam non commodi quia consequuntur vitae dolore facere deserunt quas recusandae iste harum in, provident aut reprehenderit temporibus.</p>
    <h3>{name}</h3>
    <button onClick={()=>{
        setName("Alex")
        }}>Name Change</button>
        <button
        className="counter"
        onClick={() => props.setCount((count) => count + 1)}
        >
            Count is {props.count}
            </button>
            <div>
                <Button >First</Button>
                <Button green>Second</Button>
                <button css={{buttonStyle}}>Third</button>
                <button className='bg-red-500 text-white w-24 h-10 rounded-lg'>Fourth</button>
                </div>
                </div>
                )
}

export default Sample

const buttonStyle=css`
    background-color: orange;
    color: white;
    width: 100px;
    height: 35px;
    border-radius: 10px;
    border: none;
`   


const Button = styled.button`
    background-color: ${(props) => props.green ? "green" : "red"};
    color: white;
    width: 100px;
    height: 35px;
    border: none;
    border-radius: 10px;
`


 {/* class Sample extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"Khushi",
            age:23
        }
    }


    componentDidMount(){
        console.log("Component Did Mount")
    }

    shouldComponentUpdate(nextProps,nextState){  //tels whether to update or not
        if(nextProps.count===1){
            return false
        }
        console.log("Component Should Update")
        return true
    }

    componentDidUpdate(){
        console.log("Component Did Update")
    }

     componentWillUnmount(){
        console.log("Component Will Unmount")
    }


    render(){
        return (
            <div>
            <h2>Trending topics</h2>
            <h3>{this.state.name}</h3>
            <button onClick={()=>{
                this.setState({name:"Alex"})
                   }}>Name Change</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae maiores, nobis laboriosam non commodi quia consequuntur vitae dolore facere deserunt quas recusandae iste harum in, provident aut reprehenderit temporibus.</p>
            <button
                className="counter"
                onClick={() => this.props.setCount((count) => count + 1)}
            >
                Count is {this.props.count}
            </button>
            <div>
                <button style={{backgroundColor:"indigo", color:"white", width:"100px", height:"30px"}}>First</button>
                <button style={{backgroundColor:"green", color:"white", width:"100px", height:"30px"}}>Second</button>
            </div>
            </div>
        )
    }

}
export default Sample

 */}
