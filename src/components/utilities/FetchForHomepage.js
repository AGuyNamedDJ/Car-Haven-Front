// Import
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

// State
    // Establish new state;
    const [inventory, setInventory] = useState([]);
    const [bentley, setBentley] = useState([]);
    const [bugatti, setBugatti] = useState([]);
    const [ferrari, setFerrari] = useState([]);
    const [koenigsegg, setKoenigsegg] = useState([]);
    const [lamborghini, setLamborhgini] = useState([]);
    const [mclaren, setMclaren] = useState([]);
    const [porsche, setPorsche] = useState([]);
    const [rollsRoyce, setRollsRoyce] = useState([]);

    const contextObject = {
        inventoryState: [inventory, setInventory],
        bentleyState: [bentley, setBentley],
        bugattiState: [bugatti, setBugatti],
        ferrariState: [ferrari, setFerrari],
        koenigseggState: [koenigsegg, setKoenigsegg],
        lamborghiniState: [lamborghini, setLamborhgini],
        mclarenState: [mclaren, setMclaren],
        porscheState: [porsche, setPorsche],
        rollsRoyceState: [rollsRoyce, setRollsRoyce]
    }

    // useEffects
        // fetchManufacturer
        useEffect(() => {
            async function fetchManufacturer () {
                try {
                    const response = await fetch ("https://github.com/DJRobertson95/Car-Haven-Back/api/manufacturer"), {
                        headers: {
                            'Content-Type' : 'application/json'
                        }
                    })
                } catch (error) {
                    console.log ("Error fetching Data!")
                    console.log(error)
                    
                }
            }
        })