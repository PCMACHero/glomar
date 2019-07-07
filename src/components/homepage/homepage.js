import React from 'react'
import {Link} from 'react-router-dom'
import { Parallax} from 'react-parallax';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShopIcon from '@material-ui/icons/Shop';
import './homepage.css'
import MediaCard from '../card'
import SvgIcon from '@material-ui/core/SvgIcon';
import { InView } from 'react-intersection-observer'



import MyCarousel from '../carousel';



export default class HomePage extends React.Component{
panelClass="animated fadeInRight "
panelClassOut="animated fadeOut slow"
threshold=.8
componentDidMount(){
  window.scrollTo(0, 0)
  
}
   
    render(){
      
        return (
            <div className="homepage">
            <div className="color-over"></div>   
            <Parallax
            // blur={2}
            bgImage={require('./img/glomar-bg-recolored.jpg')}
            bgImageAlt="the cat"
            strength={400}
        >
            <div className="homepage-start">

<SvgIcon className="animated heartBeat slow"  viewBox="0" color="secondary" style={{width:"80%", height:"200px", zIndex:"2"}}>
  <svg id="logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1456.3 575.3"><title>logo</title><path 
  d="M727.1,386.7v52.1c0,11,.1,22,.4,33,.1,3-.4,4.3-4,4.2q-21-.3-42,0c-2.8,0-3.6-.7-3.6-3.5q.15-68,0-136c0-2.8.7-3.6,3.6-3.6,22.7.1,45.3.1,68,0,2.6,0,3.6.9,4.5,3.3,9.6,25.3,19.4,50.5,29.1,75.7.8,2,1.7,3.9,2.7,6.3,2.7-3.5,3.6-7.1,5-10.5,9.6-23.5,19-47.1,28.4-70.7,1.1-2.9,2.5-4,5.7-4,21.3.2,42.7.2,64,0,3.7,0,4.2,1.2,4.2,4.5Q893,393.75,893,450v4.7c.3.1.6.1.9.2,3.6-7.8,7.3-15.7,10.9-23.5,14.4-31.5,28.9-63,43.2-94.6,1.3-2.8,2.9-3.8,6-3.8,16.2.2,32.3.2,48.5,0,3.9-.1,5.8,1.1,7.4,4.6,17.7,38.4,35.6,76.7,53.4,115,.6,1.3,1.3,2.5,2.7,4.9v-6.3c0-37.5.1-75-.1-112.5,0-4.3.7-5.8,5.5-5.8,25.2.3,50.3-.1,75.5.2,12.6.1,25.2,1.4,36.8,7.1,12.7,6.3,20.5,15.8,20.5,30.8,0,15.3-6.6,26.5-20.5,32.9-3.8,1.7-4.4,2.7-1,5.6,3.2,2.7,4.8,6.7,6.5,10.5,7.7,17.7,15.5,35.4,23.2,53,.3.7.6,1.5,1,2.4-1.5,1-3,.6-4.4.6-14.2,0-28.3-.1-42.5.1-4.1.1-6-1-7.5-5-4.3-11.8-8.3-23.7-13.9-34.9-5.9-11.8-13.3-15.5-26.3-14.2-3.4.3-2.5,2.5-2.5,4.2-.1,15-.1,30,.1,45,0,3.7-.7,5-4.8,5-29.3-.2-58.7-.2-88,0-3.5,0-4.9-1.1-6.1-4.1-2.8-7.2-6.1-14.3-8.9-21.5-1-2.5-2.1-3.6-5-3.5-17.2.1-34.3.1-51.5,0-2.6,0-3.8,1-4.7,3.2-3.2,7.6-6.8,15-10,22.6-.9,2.2-1.9,3.3-4.6,3.3q-42.75-.15-85.5,0c-3.4,0-3.6-1.3-3.6-4.1.1-28.8,0-57.6,0-86.7-2.2,3.1-3.2,6.9-4.6,10.4-10.3,25.5-20.6,51-30.7,76.6-1.1,2.7-2.2,3.8-5.2,3.7-12.2-.2-24.3-.2-36.5,0-3.4.1-4.8-.9-6-4.1-10.4-27.5-20.9-54.8-31.4-82.2C728.6,388.7,728.4,387.7,727.1,386.7Zm389-9.4v10c0,1.3-.3,2.8,1.8,2.8,9.4-.3,18.9,1.1,28.1-2.1,5.8-2,7.8-5.1,8-10.5.3-5.9-3.5-8.2-8.1-9.8-5.5-1.9-11.3-2.4-17-2.6C1116.1,364.7,1116.1,364.7,1116.1,377.3ZM994.1,415c-5.2-14-10.2-27.6-15.7-42.5-5.9,14.9-11.3,28.4-16.9,42.5h32.6Z" 
  transform="translate(-4.4 -16.4)"/><path d="M1160.9,194h59.7c16.5,0,33-.1,49.5.1,3.2,0,4.5-.8,5.5-4q17.55-55.65,35.5-111.2c.1-.4.3-.8.9-2.3,2.9,8.6,5.5,16.3,8,24.1,9.5,29.8,19,59.6,28.3,89.5,1,3.3,2.8,4,6.1,4,35-.1,70-.1,106.3-.1-6.1,4.7-11.4,8.8-16.7,12.8-22.9,17.5-45.6,35-68.6,52.3-3.4,2.5-4.1,4.4-2.6,8.4,12.1,33.1,23.9,66.4,35.8,99.6a4.36,4.36,0,0,1,.4,3.3q-18.45-12-36.7-23.8c-18.8-12.2-37.6-24.3-56.3-36.7-3.1-2-4.9-1.9-7.9.1-29,19.3-58.2,38.4-87.2,57.6-1.4.9-2.8,1.8-5.2,3.3,1.8-6.3,3.2-11.6,4.8-16.8,8.9-29,17.7-57.9,26.7-86.8,1.2-3.7.2-5.5-2.7-7.7C1216.8,237.9,1189.4,216.3,1160.9,194Z" transform="translate(-4.4 -16.4)"/><path d="M505,443.8c0,10.4-.2,19.3.1,28.2.1,3.3-.9,4.1-4.1,4.1q-55.2-.15-110.4,0c-3.4,0-4-1-4-4.2q.15-67.5,0-134.9c0-3.3,1-4.1,4.1-4.1,13.7.2,27.3.3,41-.1,4.5-.1,5,1.4,4.9,5.3-.2,33.2,0,66.3-.2,99.5,0,4.4,1,5.5,5.4,5.5,20.6-.3,41.3-.1,62.5-.1-3.5-7.7-6.5-15.2-7.8-23.2-6.1-38.2,8.7-76.3,56.2-85.9,25.4-5.1,50.5-4.7,74.6,5.6,22.6,9.6,35.4,27,38.8,51.3,2.7,19.4.9,38.1-10.1,54.9s-27,25.4-46.1,29.4c-24.1,5-48,4.5-71.4-4.1C524.9,466,513.8,457.3,505,443.8Zm42.1-38.9a44,44,0,0,0,2,16.3c4.2,14.2,15.3,23.5,28.4,23.9,19,.5,30.1-6.3,35.5-22.4a55.17,55.17,0,0,0-.8-38.4c-4.9-12.8-15.3-19.9-29.1-20.2-16-.3-26.7,6-32.4,19.1A46.5,46.5,0,0,0,547.1,404.9Z" transform="translate(-4.4 -16.4)"/><path d="M355.8,354.8a102.61,102.61,0,0,0-37.1-11.2c-21.5-2.2-42.7-1-62.7,8.3-17,7.9-26,21.4-25.8,40.2s9.5,32,26.3,40.1c15.1,7.2,31,9,47.5,6.9,3-.4,4.4-1.7,4.2-5.1q-.45-9,0-18c.1-3-.6-4-3.8-3.9-8,.3-16,0-24,.1-2.6.1-3.4-.6-3.3-3.3.2-10.5.1-21,0-31.5,0-2.4.4-3.5,3.2-3.5q41.25.15,82.5,0c3,0,3.4,1.1,3.4,3.7q-.15,45,0,90c0,2.8-.6,4-3.6,4.6a362.28,362.28,0,0,1-74.1,7.3c-26.4,0-52.1-3.9-75.9-16.4s-39.8-31.3-43.1-58.3c-4.7-38.9,8.7-71.2,49.8-88.8,16.9-7.2,34.7-10.4,52.9-12a304.45,304.45,0,0,1,52.3.2,174.08,174.08,0,0,1,33.6,6c2.5.7,3.4,1.9,3,4.6C359.1,327.8,357.5,341,355.8,354.8Z" transform="translate(-4.4 -16.4)"/><path d="M988.8,289c8.4-27.7,16.6-54.5,24.7-81.3,3.1-10.3,3.2-10.4-5-16.8-20.9-16.5-41.9-32.8-62.8-49.3-.5-.4-.9-.8-2.2-1.9,2.6-.1,4.3-.3,6-.3,28.2,0,56.3-.1,84.5.1,3.6,0,5.1-1,6.2-4.4,10-31.5,20.1-63,30.4-95.3,5.3,16.4,10.5,32.1,15.5,47.8,5.1,16,10.2,32,15.1,48,.9,3,2.4,3.9,5.6,3.9,27.5-.2,55-.1,82.5-.1h6.9c-7.5,5.7-13.8,10.6-20.2,15.5-17.3,13.2-34.6,26.5-51.9,39.6-2.6,2-3.3,3.5-2.1,6.9,10.3,28.3,20.4,56.8,30.5,85.2.2.6.6,1.2.2,1.9-26.1-17-52.3-33.9-78.4-51-2.7-1.8-4.4-2-7.2-.1C1041.3,254.6,1015.5,271.5,988.8,289Z" 
  transform="translate(-4.4 -16.4)"/><path d="M839.6,17.1c4.9,15.3,9.7,30,14.4,44.7,4.5,13.9,9,27.9,13.2,41.9,1.2,3.8,2.7,5.4,7.1,5.4,24.8-.3,49.6-.1,74.5-.1H955c-10.3,7.9-19.6,15-28.8,22.1-12.4,9.5-24.7,19.1-37.3,28.4-3,2.2-3,3.9-1.9,6.9,9.3,25.5,18.4,51.1,27.6,76.7.2.6.3,1.2.8,3-8-5.2-15.3-9.8-22.5-14.5-16.7-10.8-33.4-21.6-50-32.6-2.4-1.6-3.9-1.7-6.4,0-23.6,15.7-47.4,31.2-71.9,47.4,3-10.1,5.7-19.4,8.5-28.7,5.1-16.7,9.9-33.5,15.4-50,1.5-4.5.4-6.7-3-9.3-20.8-16.1-41.4-32.3-62.2-48.5,1.4-1.5,3.2-.8,4.7-.8q39-.15,78,0c3,0,4.5-.5,5.6-3.9C820.6,75.9,830.1,46.8,839.6,17.1Z" transform="translate(-4.4 -16.4)"/><path d="M627.6,16.4C634.8,39,642,61.4,649,83.9c.9,2.9,2.6,3.1,5.1,3.1,21-.1,42,0,64.3,0-5.6,4.3-10.2,8-15,11.6-12.3,9.4-24.5,18.8-36.9,28.1-2.5,1.9-3.1,3.3-1.9,6.4,7.1,19.2,13.8,38.4,20.7,57.7.5,1.3.9,2.6,1.6,4.8-19-12.4-37.3-24.1-55.3-36.1-3.4-2.3-5.7-2.1-9.1.1-17.1,11.5-34.3,22.7-51.5,34-.8.5-1.6,1-3.1,1.8,6.3-20.7,12.1-40.7,18.5-60.6,1.4-4.4.6-6.6-2.9-9.3-16.2-12.4-32.2-25.1-48.4-37.8,1.3-1.4,2.9-.7,4.2-.7,19.7-.1,39.3-.2,59,.1,4.4.1,6.3-1.1,7.6-5.4,6.5-21.1,13.3-42.1,20-63.2A2.89,2.89,0,0,1,627.6,16.4Z" transform="translate(-4.4 -16.4)"/><path d="M534.6,110.9c-14.4,11-27.7,21.2-41.2,31.3-2.6,2-3.3,3.6-2.1,6.9,6.1,16.3,11.9,32.8,18.2,50.3-11.9-7.8-22.9-14.9-33.9-22.1-3.9-2.5-7.9-4.9-11.6-7.6-2.5-1.8-4.4-1.8-7,0-14.7,9.9-29.6,19.6-45.1,29.8,5-16.5,9.7-32.4,14.9-48.2,1.7-5,.5-7.6-3.5-10.6-11.8-8.7-23.1-17.9-34.6-27-.8-.7-2-1.1-2.3-2.7,16.7,0,33.3-.2,49.9.1,4,.1,5.7-1.1,6.9-4.9,5.1-16.7,10.6-33.3,15.9-49.9.4-1.2.9-2.5,1.5-4.3,6,18.6,11.9,36.5,17.4,54.5,1.2,3.8,2.9,4.7,6.6,4.6C500.7,110.8,517,110.9,534.6,110.9Z" transform="translate(-4.4 -16.4)"/><path d="M333.7,535c6.5-5.1,11.7-9.8,18.7-11.5a17,17,0,0,1,5.9-.4c5.4.5,6.8,2.4,6.7,9.7,5.4-3.8,10.3-8,16.9-9.3a23.24,23.24,0,0,1,6.4-.4c7,.6,9.2,4.5,6.1,10.8-2.6,5.2-5.5,10.2-8.2,15.3-2.4,4.6-1.7,5.7,3.7,5.8h5.5c3.4,0,5.4-.8,5.2-5.1s2.4-8.1,5.2-11.5a41.77,41.77,0,0,1,29.1-15.3,29.28,29.28,0,0,1,5.9.4c3.6.3,6.8,2.9,10.9-.9,2.6-2.4,8-.7,11.7,1.6,2.4,1.5.9,3.1-.1,4.6-4.2,6-8.6,11.8-11.6,18.5-3.1,7-2.6,7.9,5,7.7a19.43,19.43,0,0,0,5.9-.6c1.6-.5,2.6-.9,2.6-2.9.1-13.9,9.7-20.3,20.5-25.5a34,34,0,0,1,23.3-2.3c2.6.6,3.6-.6,4.5-2.5,2.7-5.3,5.4-10.6,8.3-15.8,3.4-6.1,9.3-8.1,16.2-6,4.4,1.3,3.8,3.6,1.8,6.6-7.1,10.6-14.2,21.2-20.2,32.5a80.15,80.15,0,0,0-4.8,10.3c-1.5,4.1-.2,5.8,4.3,6a38,38,0,0,0,14.5-1.5,45.58,45.58,0,0,1-2-5.9q-2.25-11.7,7.5-18.6a33.28,33.28,0,0,1,24.6-5.8c8.8,1.2,12.3,8.9,7.8,16.6-3.5,5.9-9.1,9.5-14.8,13.5,3.7,2.8,7.8,1.2,11.5,2-2.3,7.6-2.3,7.4-10.2,7a47.5,47.5,0,0,1-13.5-2.6c-4.5-1.6-8.6,1.3-12.9,1.9a96.46,96.46,0,0,1-23.4.4c-5-.5-6.7-2.5-8-8.1-7.2,6.1-15.2,10.5-24.6,8.1-7.1-1.8-13.5.2-20.2.9a46,46,0,0,1-14.8-1.4c-3.5-.8-5.1-3.5-4.8-7.9-5.8,4.6-11.4,8.3-18.3,9.1-2.2.3-4.5.9-6.4,0-5.9-2.7-11.6-.8-17.5-.1a49.16,49.16,0,0,1-18.7-1.5c-6.6-1.7-8.1-5.6-5.1-11.7,1.7-3.4,3.9-6.5,5.8-9.8,1-1.7,2.5-3.2,2-5.6-1.8-.3-3,.8-4.2,1.8-7.2,5.5-14.1,11.4-18.4,19.4-3.5,6.5-8.4,8.1-15.3,7.1-4.2-.6-4.1-2.4-2.4-5.3,3.4-5.7,6.8-11.4,10.1-17.1.4-.7.8-1.5,1.2-2.2.7-1.3,2-2.9.9-4-1.5-1.5-3,.3-4.3,1.1a61.49,61.49,0,0,0-20.3,21.5c-3.2,5.7-7.2,8-13.4,5.9-4-1.4-7.3.1-10.9,0-1.6,0-4.5,1.4-4.4-.8s.2-5.8,3.7-6.2c8.6-.8,13-6.5,16-13.7,1.7-4.1,3.1-8.4,4.8-12.5,2.4-5.8,10.6-8.7,15.9-5.7,1.7.9,1.6,2.3.8,3.8A63.36,63.36,0,0,1,333.7,535Zm86.8,19c.5-.1,1.3-.3,2.1-.5,9.7-3.3,15.3-11.2,20.8-19.1,1.8-2.6-1-2.3-2.5-2.4-8.8-.5-21.9,8.9-24.4,17.4C415.5,552.9,417.1,554,420.5,554Zm87.3-22c-11.8-.5-18.8,5.8-24.9,13.8-1.5,1.9-3.2,4.5-1.3,6.8s5,1.2,7.3,0C497.4,548,502.4,540.3,507.8,532Zm39.7,11.5c.4,1.3.2,3,1.6,3.9,1.6.9,2.7-.6,3.8-1.3a22.28,22.28,0,0,0,8.9-9.1c.7-1.4,2-3,.3-4.5a5.14,5.14,0,0,0-4.6-1.2C552.3,532.2,547.3,538.2,547.5,543.5Z" transform="translate(-4.4 -16.4)"/><path d="M289.7,226.8c3.9-12.9,7.5-25.9,11.8-38.6,1.7-5,1.1-7.8-3.4-11.1-10.7-7.8-20.8-16.2-32.3-25.2,15.5,0,29.6-.2,43.7.1,4.1.1,5.6-1.3,6.7-5.1,4.6-14.9,9.5-29.7,14.8-46,2.9,9,5.5,16.7,8,24.4,2.4,7.5,4.9,15.1,7.1,22.7.9,3,2.4,4,5.6,4,14-.2,28-.1,42.2-.1-.3,1.8-1.7,2.4-2.8,3.2-10.3,7.9-20.5,15.8-31,23.5-2.7,2-3.4,3.7-2.1,7,5.2,13.7,10,27.5,15,41.5-1.1,1.1-1.7-.2-2.3-.5-12-7.7-24-15.4-35.8-23.4-2.9-2-5-1.8-7.8.1-12.1,8.2-24.3,16.1-36.5,24.1Z" transform="translate(-4.4 -16.4)"/><path d="M156.3,195c15,0,28.8-.1,42.6.1,3.1,0,4.5-.6,5.5-4,4.3-14.3,9.1-28.5,14.1-43.8,4.3,13.4,8.4,25.7,12.3,38.1,3.1,9.6,3,9.6,12.7,9.6h36.1c-11.6,8.8-21.9,17-32.6,24.8-3.6,2.6-4.2,4.8-2.6,8.9,4.9,12.5,9.2,25.3,14.1,39-12.8-8.3-24.6-15.9-36.3-23.7-2.8-1.9-4.7-1.9-7.4,0-11.6,7.9-23.4,15.5-35.8,23.7,4.2-14,8.1-27.2,12.3-40.4,1-3.1.4-4.7-2.1-6.6C178.4,212.5,167.9,204.1,156.3,195Z" transform="translate(-4.4 -16.4)" /><path d="M68.4,251c12.2,0,23.3-.1,34.4.1,3.2.1,4.4-1.1,5.3-4,3.5-11.6,7.4-23.2,11.4-35.6,4,12.3,8,23.7,11.3,35.3,1.1,3.7,2.7,4.4,6.1,4.4,10.5-.2,21-.1,31.6-.1.2,1.8-1.4,2.1-2.3,2.8-7.9,6.1-15.7,12.3-23.8,18.1-2.6,1.9-2.6,3.4-1.6,6.1,3.9,10.4,7.5,21,11.7,32.8-10.2-6.6-19.5-12.4-28.5-18.6-3.2-2.2-5.4-2.5-8.7-.1-9,6.4-18.4,12.2-28.4,18.8,3.6-11.6,6.7-22.3,10.2-32.9.9-2.9.3-4.3-2-6.1C86.3,265.3,77.8,258.4,68.4,251Z" transform="translate(-4.4 -16.4)"/><path d="M837.9,555.5c-2.3,8.3-2.3,8.3-10.3,7.1-3.3-.5-6.6-.4-9.8-1.5-6.9-2.3-9-6.3-6.8-13.3.8-2.6,1.8-5.2,2.9-8.5-4.6,4.4-8.5,8.7-13,12.3-9.8,7.9-20.7,13.2-33.9,10.5-6.6-1.3-8.8-5.7-5.8-11.8,4.9-9.8,10.1-19.3,15.2-28.9a9.41,9.41,0,0,0,1.2-2.2c.6-2.8,3.9-5.4,1.7-8.3-2.5-3.2-6.6-2.4-9.8-1.6a15.68,15.68,0,0,0-11.8,11c-.8,2.6-.9,4.9,1.1,6.9,2.4,2.5.8,3.3-1.5,4a11.43,11.43,0,0,1-11.6-2.4c-3.2-3-3.5-7-2.4-11,2.9-10.5,11.6-14.5,20.8-17.2,8.2-2.4,16.7-2.9,24.9.4,7.3,2.9,9.3,7.4,7.1,15-2.7,9.5-8.7,17.4-12.7,26.2-.5,1-1.1,2-1.6,3.1-1,2-3.4,4.8-2.1,6.1,2.1,2,5.1-.2,7.2-1.5,17.6-11.1,30.3-26.6,39.1-45.3a11.29,11.29,0,0,1,16.5-5c2.7,1.7,1.6,3.9.7,6.1-5.2,13.9-10.4,27.8-15.3,41.8-2,5.8-.7,7.3,5.5,7.6C835,555.1,836.5,554.6,837.9,555.5Z" transform="translate(-4.4 -16.4)"/><path d="M60.5,288.3c4,12.3,7.7,23.3,11.1,34.5.9,3,2.1,3.9,5.1,3.8,10.1-.2,20.3-.1,32-.1-5.4,4.2-9.8,7.6-14.1,11-4.1,3.1-8.1,6.4-12.3,9.3-1.9,1.4-2.4,2.4-1.5,4.9,3.9,10.3,7.4,20.7,11.5,32.2-4.8-3.1-8.9-5.6-12.9-8.2-5.1-3.3-10.4-6.6-15.4-10.2-2.6-1.9-4.4-1.7-7,.1-8.7,6-17.7,11.7-27,17.9.2-5.2,2.3-9.4,3.5-13.7,1.6-5.7,3.4-11.4,5.3-17,1-2.8.6-4.7-2-6.6a265.88,265.88,0,0,1-23.7-19.7h8.6c7.3,0,14.7-.2,22,.1,3.6.1,5.3-.9,6.3-4.4C53.1,311.2,56.7,300.2,60.5,288.3Z" transform="translate(-4.4 -16.4)"/><path d="M79.6,475.3c-9.3-6-17.7-11.1-25.7-16.7-3.2-2.2-5.2-1.8-8.2.2-7.9,5.5-16,10.7-24.9,16.5,3-10,5.5-19.2,8.5-28.2,1.2-3.4.8-5.3-2.1-7.4-7.4-5.5-14.6-11.3-22.8-17.8,10.8,0,20.3-.2,29.9.1,3.3.1,4.7-1,5.6-4,3.1-10.1,6.3-20.1,9.5-30.2,2.4.1,1.8,2.2,2.2,3.3q4.5,13,8.4,26.4c.9,3.1,2.2,4.5,5.8,4.4,9.3-.3,18.6-.1,29.1-.1-8.5,6.5-15.9,12.5-23.6,18-3,2.1-3.1,3.9-1.9,6.9C72.7,455.8,75.9,465,79.6,475.3Z" transform="translate(-4.4 -16.4)"/><path d="M1000.6,555.3c-2.5,2.7-1.3,7.6-5.5,7.5-6.2-.1-12.8.5-17.8-4.6-3-3-.1-6.2.4-9.8-7.4,5.5-14.4,10.9-23.2,13-5,1.2-9.9,2.1-15.2.7-9.2-2.3-13.5-9-11-18.2s8.9-15.8,16-21.7c16.4-13.4,35.6-20.7,56.4-24.2,3.3-.5,5.8,1.1,8,3.2,1.2,1.1,1.9,2.6,1.2,4a3.56,3.56,0,0,1-3.4,1.6c-17.7.6-31.8,9.1-45.1,19.8-5.2,4.2-10,8.8-13.6,14.5-1.8,2.8-4.4,6-1.6,9.5,2.6,3.2,6.2,2.5,9.7,1.6,6.8-1.7,12.2-5.8,17.3-10.3A111.79,111.79,0,0,0,995.6,514c3.7-6.4,6.7-7.5,13.5-5,3.1,1.1,4.6,2.5,2.2,6.1-5.3,8-10.1,16.4-15,24.6-.9,1.6-1.7,3.2-2.5,4.9C989.3,554.3,989.4,554.4,1000.6,555.3Z" transform="translate(-4.4 -16.4)"/><path d="M910.6,554.6c2.6.3,4.5.4,6.4.6-.8,5.4-3.2,8.2-8.9,6.8-3.9-.9-7.2.8-10.7,2.4-15.6,7.1-31.7,7.6-47.8,2-4.5-1.5-8.5-4-8.7-9.7s3.8-9.3,11.3-9.8c10.9-.8,21.4,1.8,32,3.5,2.4.4,4.9.9,7.3,1.4,3.2.8,5.5-.1,6.8-3.2s1.3-6.2-1.7-8.5-6.7-3.6-10.2-5c-3.8-1.6-7.7-2.9-11.2-5.1-9-5.7-9.9-15.8-2-23,5.1-4.6,11.5-6.5,18-7.8a51.25,51.25,0,0,1,25.5.8,17.11,17.11,0,0,1,6.6,3.3c2.5,2.2,3.7,4.9,2.3,8s-4.3,3.8-7.5,3.7c-1,0-1.8,0-2.2-1.3-1.3-4.3-4.9-5.2-8.8-6a30.63,30.63,0,0,0-19.8,2.7c-5.7,2.8-5.8,7.6-.5,11.1,3.9,2.6,8.5,3.6,12.7,5.5,6.1,2.7,12,5.6,14.6,12.5C916.2,545.1,914,549.5,910.6,554.6Zm-26.1,4.7c-8.7-2.2-17.5-4.1-26.6-4.3-1.4,0-3.7-1.2-4,1.4-.2,2.1,2,2.5,3.5,3A43.3,43.3,0,0,0,884.5,559.3Z" transform="translate(-4.4 -16.4)"/><path d="M669.5,535.3c7.9-5.7,14.6-11,23.6-11.9a16,16,0,0,1,7.3.9c2.9,1.3,4.4,3.6,3,7.3-2.2,5.8-5.8,10.8-8.5,16.2-3.3,6.4-3,7,4.4,7.2a7.72,7.72,0,0,1,1.5.2c-2.3,7.6-2.3,7.6-10.6,7-14.2-1-16.7-5.8-9.5-17.9,1.9-3.1,3.7-6.3,5.6-9.6-2.4-1.3-3.9.2-5.5,1.1-8.2,4.9-14.3,11.9-18.9,20.1-3,5.3-7.4,7.6-12.7,6.4-4.9-1.1-9.3.1-14,.1-6.5,0-13.4,1.4-19-3.6-1.6-1.4-2.6.2-3.5.6a24.85,24.85,0,0,1-14.5,2.9c1.1-4,1.9-7.2,7.2-7.8s8.7-5.2,11.4-9.6c2.9-4.6,4.5-9.8,6.4-15,2-5.5,11.2-9.1,16.4-6.5,3,1.5,1.8,3.7.7,5.9-3.4,6.8-7,13.5-10.2,20.3-2.1,4.3-1.3,5.1,3.3,5.5,7.1.6,12.1-2.6,15.8-8.3,3.4-5,5.2-10.7,7.1-16.3,2.6-7.3,8.6-10.1,15.8-7.4,2.4.9,2.2,2.4,1.2,4.3C672.2,529.6,671.1,532,669.5,535.3Z" transform="translate(-4.4 -16.4)"/><path d="M134.3,495c-7.4,5.6-13.6,10.6-20,15.2-2.8,2-3.3,3.7-2.1,6.8,2.7,6.6,4.9,13.3,7.3,20a3.67,3.67,0,0,1,.2,3.1c-7-4.5-14-8.9-20.8-13.5-2.5-1.7-4.1-1.7-6.6,0-6.8,4.7-13.8,9.1-21.7,14.3,2.7-8.8,4.8-16.6,7.4-24.3,1-2.9.5-4.4-1.9-6.2-6.4-4.7-12.6-9.7-19.9-15.5,9.1,0,17.1-.2,25.1.1,3.4.1,4.9-.8,5.8-4.2,2.5-8.5,5.4-16.9,8.4-26,2.9,9,5.9,17.4,8.3,25.9,1,3.6,2.6,4.5,6.1,4.3C117.7,494.8,125.3,495,134.3,495Z" transform="translate(-4.4 -16.4)"/><path d="M185.7,547.9c-7,5.4-12.8,10.1-18.9,14.4-2.7,1.9-3,3.6-1.8,6.6,2.8,7.2,5.2,14.5,8.2,22.8-7.4-4.8-14.2-9.1-20.7-13.6-2.5-1.7-4.3-1.9-6.9,0-6.4,4.6-13.1,8.8-20.4,13.6,2.5-8.6,4.6-16.4,7.2-23.9.8-2.5.3-3.4-1.6-4.8-6.1-4.6-11.9-9.4-19-15,8.6,0,16-.3,23.3.1,3.8.2,5.1-1.4,6.1-4.6a174.79,174.79,0,0,1,8.4-23.2c2.5,7.9,5.2,15.8,7.5,23.8.9,3.1,2.3,4.1,5.5,4C169.8,547.7,177,547.9,185.7,547.9Z" transform="translate(-4.4 -16.4)"/>
  <path d="M1268.6,462.8c.9-3.1,2.1-6.2,2.5-9.4.7-5.6,4.7-4.4,8-4.3,4.3.1,2.1,3.5,2.2,5.2.3,6,0,12,.2,18,.1,2.6-1.1,2.9-3.2,2.9-2.3,0-2.8-.8-2.7-2.9a64.28,64.28,0,0,0-.4-9.8c-2.4,3.1-2.8,6.8-3.7,10.3-.6,2.1-1.5,2.4-3.4,2.5s-3.1-.4-3.6-2.4c-.8-3.5-1.8-7-2.9-11.1-1.7,3.7-.9,7.1-1,10.3,0,2.3-.5,3.2-3,3.2s-3-1-3-3.2c.1-6.5,0-13,.1-19.5,0-1.4-.9-4,2-3.4,2.7.5,6.5-2.5,7.9,2.3,1.1,3.7,2,7.5,3,11.3A1.7,1.7,0,0,1,1268.6,462.8Z" transform="translate(-4.4 -16.4)" /><path d="M1228,464.8c0-2.3-.1-4.7,0-7,.1-2.1-.1-3.7-2.8-3.3s-2.1-1.8-2.2-3.3c-.2-1.9.8-2.2,2.4-2.2,3.8.1,7.7,0,11.5,0,1.4,0,2.8-.2,2.6,1.9-.1,1.6.5,3.7-2.2,3.5-3.4-.3-3.2,1.9-3.2,4.2.1,4.5-.1,9,.1,13.5.1,2.3-.5,3.2-3,3.1-2.2-.1-3.5-.3-3.2-2.9S1228,467.3,1228,464.8Z" transform="translate(-4.4 -16.4)"/><path d="M641.5,499c5,.1,8,2.5,7.9,6.3-.1,4.4-4.6,7.7-10.4,7.7-5.2,0-8-2-8-6C630.9,502.3,635.4,498.9,641.5,499Z" transform="translate(-4.4 -16.4)"/><path d="M1246.1,472.1c.2,1.9,0,3.1-2.4,3.1-2.8.1-2.8-1.3-2.8-3.3,0-1.8,0-3,2.5-3.1C1246.1,468.7,1246.4,470,1246.1,472.1Z" transform="translate(-4.4 -16.4)"/><path d="M1291.1,472.2c.3,2-.2,2.9-2.5,3-2.9.1-2.7-1.5-2.7-3.4s.2-2.9,2.6-3C1291.3,468.7,1291.3,470.2,1291.1,472.2Z" transform="translate(-4.4 -16.4)"/></svg>
</SvgIcon>    
<div className=" animated fadeIn  delay-2s" style={{zIndex:"3", marginTop:"100px"}}>
<Link to={"/shop"} style={{ textDecoration: 'none' }}>
<Button variant="contained" color="secondary"  className={styles.button}>
                Shop Now
                <ShopIcon className={styles.rightIcon} />
          </Button>
</Link>

            
</div>

  
</div>
            
        </Parallax> 
        <div className="center">
          
          <div className="col hp-section">
              <InView >
                {({ inView, ref }) => {
                  console.log("my ref 1", ref)
                  return(

                  <div ref={ref} style={{height:"100%"}}>
                    <h1 className={inView?"animated fadeIn slow delay-1s":""} style={{color:"white", fontSize:"3em"}}>WELCOME TO GLOMAR PRO BATS</h1>
                  </div>
                )}}
              </InView>
              
               
                
              </div>
              <InView threshold={this.threshold}>
                {({ inView, ref }) => {
                  console.log("my ref 2", ref)
                  return(

                  <div ref={ref} style={{height:"450px", display:"flex",justifyContent:"center", alignItems:"center"}}>
                    <Typography className={inView?"animated fadeIn slow delay-1s":this.panelClassOut} variant="h5" color="primary" style={{width:"80%", color:"white", margin: "24px 0px",}}>
                      They have been used by professionals and trusted by professionals for years.  
                      Each bat is examined for quality assurance and top notch craftsmanship, they are made of the finest wood to ensure that they are strong enough for the pros, and the backyard.  
                      Glomar bats, a sure hit!
                    </Typography>                   
                  </div>
                )}}
              </InView>
               
        </div>
            
            
                <InView threshold={this.threshold}
                // triggerOnce={true}
                >
                  {({inView,ref})=>{ 
                    
                return (
                  <div className="const-panel" ref={ref}>
                  <div className={inView?this.panelClass:this.panelClassOut}>
                  <MediaCard  title="CUSTOMIZABLE" image={require('./img/bat1.jpg')} p="Choose the wood, length, finish, and engraving."/>
                    
    
                  </div>
    
                  </div>
                    )
                    }
                    }
                </InView >
              
            
            
            <InView threshold={this.threshold}
            // triggerOnce={true}
            >
              {({inView,ref})=>{ 
                
            return (
              <div className="const-panel" ref={ref}>
              <div 
               className={inView?this.panelClass:this.panelClassOut} 
              >
              <MediaCard title="A BAT FOR EVERY LEVEL" image={require('./img/softball.jpeg')} p="Bats for youth, softball, and pros."/>
                

              </div>

              </div>
                )
                }
                }
            </InView>
            <InView threshold={this.threshold}
            // triggerOnce={true}
            >
              {({inView,ref})=>{ 
                
            return (
              <div className="const-panel" ref={ref}>
              <div 
               className={inView?this.panelClass:this.panelClassOut} 
              >
              <MediaCard title="BULK PRICING" image={require('./img/team.jpeg')} p="Perfect for leagues, teams, and families."/>
                

              </div>

              </div>
                )
                }
                }
            </InView>
            
                
            

            <InView threshold={this.threshold}>
                {({ inView, ref }) => {
                  console.log("my ref 2", ref)
                  return(

                  <div ref={ref} style={{height:"450px", display:"flex",justifyContent:"center", alignItems:"center"}}>
                    <Typography className={inView?"animated fadeIn slow delay-1s":this.panelClassOut} variant="h5" color="primary" style={{width:"80%", color:"white", margin: "24px 0px",}}>
                      PLAYERS THAT HAVE USED GLOMAR
                    </Typography>                   
                  </div>
                )}}
              </InView>
            
            
          
          <div className="rowy" style={{marginBottom:"100px"}}>
            <MyCarousel/>
          </div>

          <Link to={"/shop"} style={{ textDecoration: 'none'}}>
<Button variant="contained" color="secondary"  className={styles.button}>
                Shop Now
                <ShopIcon className={styles.rightIcon} />
          </Button>
</Link>
                <div className="margin"></div>
          
         
          </div>
        )
    }
}

const styles = theme => ({
    button: {
      
      margin: theme.spacing.unit,
      width: "150px",
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
    rightIcon: {
      marginLeft: 20,
    },
    iconSmall: {
      fontSize: 20,
    },
  });