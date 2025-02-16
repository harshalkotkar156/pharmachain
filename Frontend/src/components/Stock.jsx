import React, { useState, useEffect } from "react";

const Stock = ({ state }) => {
    const [medicines, setMedicines] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [stock, setStock] = useState(null);
    const [searchName, setSearchName] = useState("");
    
    useEffect(() => {
        if (state.contract) {
            fetchMedicines();
        }
    }, [state.contract]);

    const fetchMedicines = async () => {
        try {
            const meds = await state.contract.getAllMedicines();
            setMedicines(meds);
        } catch (error) {
            console.error("Error fetching medicines: ", error);
        }
    };

    const addMedicine = async () => {
        try {
            console.log(`medicine ${name}  -> ${quantity}`);
            const tx = await state.contract.addMedicine(name, quantity);
            await tx.wait();

            alert("Medicine added successfully");
            fetchMedicines();
        } catch (error) {
            console.error("Error adding medicine: ", error);
        }
    };

    const increaseStock = async (medName, qty) => {
        try {
            const tx = await state.contract.increaseStock(medName, qty);
            await tx.wait();
            alert("Stock increased successfully");
            fetchMedicines();
        } catch (error) {
            console.error("Error increasing stock: ", error);
        }
    };

    const decreaseStock = async (medName, qty) => {
        try {
            const tx = await state.contract.decreaseStock(medName, qty);
            await tx.wait();
            alert("Stock decreased successfully");
            fetchMedicines();
        } catch (error) {
            console.error("Error decreasing stock: ", error);
        }
    };

    const checkStock = async () => {
        try {
            const qty = await state.contract.getStock(searchName);
            setStock(qty.toString());
        } catch (error) {
            console.error("Error checking stock: ", error);
        }
    };

    return (
        <div className="flex flex-col justify-between h-[200px] bg-red-300">
            <h2>Medicine Stock Management</h2>
            <div>
                <input type="text" placeholder="Medicine Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <button onClick={addMedicine}>Add Medicine</button>
            </div>
            <div>
                <h3>Medicines List</h3>
                <ul>
                    {medicines.map((med, index) => (
                        <li key={index}>
                            {med.name} - {med.quantity}
                            <br />
                            <button onClick={() => increaseStock(med.name, 1)}>+1</button>
                            <button onClick={() => decreaseStock(med.name, 1)}>-1</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <input type="text" placeholder="Check stock for medicine" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
                <button onClick={checkStock}>Check Stock</button>
                {stock !== null && <p>Stock: {stock}</p>}
            </div>
        </div>
    );
};

export default Stock;
