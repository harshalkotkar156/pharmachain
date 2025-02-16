import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";
import Stock from './Stock';
import bytedata from '../contractData/MedicineStock.json';

export const Data = () => {
    
    const [stockVal, setStock] = useState(0);
    const [account, setAccount] = useState("Not-Connected");
    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null
    });

    useEffect(() => {
        const connectWallet = async () => {
            try {
                // 0xfFac919967a37990139dEaB1b9eF3Acb140604f8
                const contractAddress="0xBf37c9aDB601DFfbcDb066A9D623a0E82e27d64a";
                const contractABI = bytedata.abi;
                
                // console.log("Thisis Contrct abi : ",contractABI);
                
                const { ethereum } = window;

                if (!ethereum) {
                    alert("Please install MetaMask!");
                    return;
                }

                const accounts = await ethereum.request({ method: "eth_requestAccounts" });
                setAccount(accounts[0]); // Store the first account

                const provider = new ethers.BrowserProvider(ethereum); // Reading 
                const signer = await provider.getSigner(); // Writing
                const contract = new ethers.Contract(contractAddress, contractABI, signer);
                // console.log("provider : ",provider);
                // console.log("signer: ",signer);
                // console.log("gaslimit : ",contract.gasLimit);
                // console.log("Contract initialized:", contract);
                setState({ provider, signer, contract});

            } catch (error) {
                alert("Error connecting to MetaMask: " + error.message);
            }
        };

        connectWallet();
    }, []);

    async function getStock() {
        try {
            const { contract } = state;
            if (!contract) {
                alert("Contract not initialized!");
                return;
            }

            const stock = await contract.getStock(); // Returns a BigInt
            // console.log("This is Stock : ",stock);
            const stockValue = Number(stock); // Convert BigInt to Number
            setStock(stockValue); // Update React state
            console.log("Current Stock:", stockValue);

        } catch (error) {

            console.error("Error fetching stock:", error);
            alert("Error fetching stock: " + error.message);

        }
    }
    async function incrementStock() {
        try {
            const { contract } = state;
            if (!contract) {
                alert("Contract not initialized!");
                return;
            }
    
            const inputElement = document.getElementById("increaseStockInput");
            const increaseAmount = parseInt(inputElement.value, 10);
    
            if (isNaN(increaseAmount) || increaseAmount <= 0) {
                alert("Please enter a valid positive number");
                return;
            }
    
            console.log("Increasing stock by:", increaseAmount);
    
            const tx = await contract.increaseStock(increaseAmount, { gasLimit: 6721975 });
            console.log("Transaction sent:", tx);
    
            await tx.wait(); // Wait for transaction confirmation
            alert("Stock increased!");
            getStock();
        } catch (error) {
            console.error("Error increasing stock:", error);
            alert("Error increasing stock: " + (error.reason || error.message));
        }
    }
    
    async function decrementStock() {
        try {
            const { contract } = state;
            if (!contract) {
                alert("Contract not initialized!");
                return;
            }
    
            const inputElement = document.getElementById("decreaseStockInput");
            const decreaseAmount = parseInt(inputElement.value, 10); // Convert to integer
    
            if (isNaN(decreaseAmount) || decreaseAmount <= 0) {
                alert("Please enter a valid positive number");
                return;
            }
    
            const tx = await contract.reduceStock(decreaseAmount, { gasLimit: 3000000 });
            console.log("Transaction sent:", tx);
    
            await tx.wait(); // Wait for transaction confirmation
            console.log("Transaction done:", tx);
            alert("Stock decreased!");
    
            getStock(); // Refresh stock value
        } catch (error) {
            console.error("Error decreasing stock:", error);
            alert("Error decreasing stock: " + (error.reason || error.message));
        }
    }

    

    return (
        <div>
            <p>Connected Account: {account}</p>
{/*             
            <button onClick={getStock}>Fetch Stock</button>
            <p>Current Stock: {stockVal}</p>

            <div>
                <input id="increaseStockInput" type="number" placeholder="Enter amount" />
                <button onClick={incrementStock}>Increase Stock</button>
            </div>

            <br />

            <div>
                <input id="decreaseStockInput" type="number" placeholder="Enter amount" />
                <button onClick={decrementStock}>Decrease Stock</button>
            </div> */}

            <div className='bg-slate-500 mt-3'>From here </div>

            <Stock state={state} ></Stock>

        </div>
    );
};


// 0xa754d1178ed3892412da7778c56fccd622ffc095c3393602afe7308cf7140c5c
// a754d1178ed3892412da7778c56fccd622ffc095c3393602afe7308cf7140c5c



