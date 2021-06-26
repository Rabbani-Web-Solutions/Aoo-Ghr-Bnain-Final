import React from 'react';
import axios from 'axios';
import {state , 
        setState  , 
        setPrice , 
        setTitle ,
        setImage ,
        setPrice2 , 
        setTitle2 ,
        setImage2 ,
        setPrice3 , 
        setTitle3 ,
        setImage3 ,
        setSteelPrice , 
        setSteelTitle ,
        setSteelImage ,
        setSteelPrice2 , 
        setSteelTitle2 ,
        setSteelImage2 ,
        setSteelPrice3 , 
        setSteelTitle3 ,
        setSteelImage3 ,
        setLoading,
         } from "./sketch"

export const scrapMe = () => {

    setLoading(true);
    

        axios.get('http://localhost:5000/scrap')
            .then((res) => {

                setLoading(false);
                console.log(res.data)

                setImage(res.data.products[0].image);
                setPrice(res.data.products[0].price);
                setTitle(res.data.products[0].title);

                setImage2(res.data.products[1].image);
                setPrice2(res.data.products[1].price);
                setTitle2(res.data.products[1].title);

                setImage3(res.data.products[2].image);
                setPrice3(res.data.products[2].price);
                setTitle3(res.data.products[2].title);

            })
                        
            .catch(err => {
                console.error(err.status);
                alert(err.status);
            },{
                withCredentials: true,
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
            }});

            axios.get('http://localhost:5000/scrapSteel')
            .then((res) => {

                // setLoading(false);
                console.log(res)

                setSteelImage(res.data.products[0].image);
                setSteelPrice(res.data.products[0].price);
                setSteelTitle(res.data.products[0].title);

                setSteelImage2(res.data.products[1].image);
                setSteelPrice2(res.data.products[1].price);
                setSteelTitle2(res.data.products[1].title);

                setSteelImage3(res.data.products[2].image);
                setSteelPrice3(res.data.products[2].price);
                setSteelTitle3(res.data.products[2].title);

                console.log(res.data.products[0].image);
                console.log(res.data.products[0].price);
                console.log(res.data.products[0].title);

                console.log(res.data.products[1].image);
                console.log(res.data.products[1].price);
                console.log(res.data.products[1].title);

                console.log(res.data.products[2].image);
                console.log(res.data.products[2].price);
                console.log(res.data.products[2].title);

            })
                        
            .catch(err => {
                console.error(err.status);
                alert(err.status);
                
            },{
                withCredentials: true,
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
            }});

            setState({ ...state, ["bottom"]: true });
            document.getElementById("est").click() ;

        }
