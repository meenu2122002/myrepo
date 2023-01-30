import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

// export class Newsitem extends Component {

  // render() {
    export default function Newsitem (props){
    //  let {title,description,imageurl,newsUrl,author,date,source}=this.props;
    return (
      <div >
        <span style={{left:45}} className="position-relative  translate-middle badge rounded-pill bg-danger">
    {props.source}
  </span>
       <div className="card" style={{width: "18rem"}}>
  <img src={props.imageurl?props.imageurl:"https://tse1.mm.bing.net/th?id=OIP.59vGWUUShJvh6hhXcVh4CAHaF-&pid=Api&rs=1&c=1&qlt=95&w=152&h=123"}/>
  <div className="card-body">          
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <div className="card-footer text-muted my-3">By {props.author} on {new Date(props.date).toDateString()} {new Date(props.date).toTimeString()}</div>
    <a href={props.newsUrl} className="btn btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  }



