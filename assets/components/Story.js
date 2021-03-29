import React from 'react'
import {  StyleSheet } from 'react-native'
import '../css/Story.css'

export default function Story(props) {

    const styles = StyleSheet.create({
       
        img: {
          width: 70,
          height: 70,
          margin: 5,
          shadowRadius: 3,
          backgroundImage: `uri: ${props.icon}`,
        },
        btn: {
          color: 'red',
        }
        
      });

    

    return (
      <>
      <div className="story"  onClick={props.function} >
        <i class="fas fa-file-image    "></i>
      
      </div>
      
      </>
        
    )
}


