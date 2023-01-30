import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner  from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState,useEffect } from 'react';




// export class News extends Component {
  export default function News (props){
 
 const [State,setState]=useState({ 
  articles: [],
  loading: true,
  page:1,
  pagesize:6,
  totalresult:null})
  
 

const  Capitalise= (word) =>{
    return word.charAt(0).toUpperCase()+word.slice(1);
  }
  
  document.title=`${Capitalise(props.category)}-NewsMonkey`;
  
 
 const  updatenow=  async ()=>{
    // props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&page=${State.pagesize}&pageSize=${State.pagesize}&category=${props.category}`;
    // let url="https:youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCeVMnSShP_Iviwkknt83cww&maxResults=25&key=AIzaSyAzB3Vn1VJnI1TiRCxqq9Vn3T6ptsmZsGA";
    // let url=" https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyAzB3Vn1VJnI1TiRCxqq9Vn3T6ptsmZsGA&part=snippet,contentDetails,statistics,status";
    // let url=" https:youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Cid%2Csnippet&playlistId=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&key=AIzaSyAzB3Vn1VJnI1TiRCxqq9Vn3T6ptsmZsGA";
    // const url="https:youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCeVMnSShP_Iviwkknt83cww&key=AIzaSyBh4lRx5VN58DOjET7LyEUEWtD2bzFhbsU";
    let data = await fetch(url);
    let parsedata = await data.json();
    // console.log(parsedata.items[0].snippet);
    // console.log(State.page)
    // console.log(State.pagesize)
    setState({totalresult:parsedata.totalResults});
   
    setState({ articles: parsedata.articles,loading:false });
  //  console.log(State.articles)
   
   
  
    // props.setProgress(100);
  }
  useEffect(  () => {
    updatenow();
   },[]);

  // async componentDidMount() {
  // updatenow();
  // }
 
  
  // const handleprevious = async () => {
  //   setState({
  //     page: State.page - 1,
  //     loading:true

  //   })

  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&pageSize=${State.pagesize}&page=${State.page}&category=${props.category}`;
  //   let data = await fetch(url);
  //   let parsedata = await data.json();
  //   console.log(parsedata);
  //   setState({
  //     articles: parsedata.articles,
  //     loading:false

  //   })
  // }


const fetchMoreData=async ()=>{
 
  console.log(State.page)
  console.log(State.pagesize)

let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&pageSize=${State.pagesize}&page=${State.page+1}&category=${props.category}`;
let data = await fetch(url);
let parsedata = await data.json();
// console.log(parsedata);
setState({
  articles: State.articles.concat(parsedata.articles),
   page:State.page + 1

})//setstate is an aync fun takes time to increse page ,hence in url use state.page+1 and then increase state.page in below 
console.log(State.articles)
console.log("hllo")
  }

 
//  const  handlenext = async () => {
   
//     setState({
//       page: State.page + 1,
//     loading:true
//     })

//     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&pageSize=${State.pagesize}&page=${State.page}&category=${props.category}`;
//     let data = await fetch(url);
//     let parsedata = await data.json();
//     console.log(parsedata);
//     setState({
//       articles: parsedata.articles,
//       loading:false

//     })




//   }

  // render() {{Capitalise(props.category)}
    return (

      <div style={{ margin: " 0px 127px" }}>
        <h1 style={{margin:"128px 10px 26px 0px",textAlign:"center"}}>NewsMonkey : Top {Capitalise(props.category)} Updates</h1>
        {/* {State.loading && <Spinner/>} */}
        
        <InfiniteScroll
          dataLength={State.articles.length}
          next={fetchMoreData}
          hasMore={State.articles.length!=State.totalresult}
          loader= {<div style={{display:"flex",justifyContent:"center"}}><Spinner/></div>}
        >

        
     {/* <Spinner/> */}
        < div style={{ display: 'grid', gridTemplateColumns: "auto auto auto", justifyContent: "space-between",backgroundColor:"rgb(188 191 199)",fontFamily:"sans-serif" }}>
          {State.articles.map((e) => {
            return <Newsitem source={e.source.name} author={e.author?e.author:"Unknown"} date={e.publishedAt} title={e.title?e.title.substring(0, 71):""} key={e.url} description={e.description?e.description.substring(0, 70):""} imageurl={e.urlToImage} newsUrl={e.url} />

          })
          }
        </div>
        </InfiniteScroll>
        {/* <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}> */}
          {/* <button type="button" disabled={State.page <= 1} onClick={handleprevious} className="btn btn-dark">Previous</button> */}
       
          {/* <button type="button" disabled={State.page>=(State.totalresult)/(State.pagesize)} onClick={handlenext} className="btn btn-dark">Next </button> */}
        {/* </div> */}
        



      </div>
    )
  }
  News.defaultProps = {
    country:"in",
    category:"sports"
    
   }
   News.propTypes={
     country:PropTypes.string,
     category:PropTypes.string
   }


