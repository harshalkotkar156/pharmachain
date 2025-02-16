// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MedicineStock {
    struct Medicine {
        string name;
        uint256 quantity;
    }

    mapping(uint256 => Medicine) public medicines; // Medicine ID → Details
    uint256 public medicineCount; // Total medicines added

    event MedicineAdded(uint256 indexed id, string name, uint256 quantity);
    event StockIncreased(uint256 indexed id, uint256 newQuantity);
    event StockDecreased(uint256 indexed id, uint256 newQuantity);

    // Add a new medicine
    function addMedicine(string memory _name, uint256 _quantity) public {
        require(_quantity > 0, "Quantity must be greater than zero");
        medicines[medicineCount] = Medicine(_name, _quantity);
        emit MedicineAdded(medicineCount, _name, _quantity);
        medicineCount++;
    }

    // Increase stock of a medicine
    function increaseStock(uint256 _id, uint256 _amount) public {
        require(_id < medicineCount, "Medicine ID does not exist");
        medicines[_id].quantity += _amount;
        emit StockIncreased(_id, medicines[_id].quantity);
    }

    // Decrease stock on sale
    function decreaseStock(uint256 _id, uint256 _amount) public {
        require(_id < medicineCount, "Medicine ID does not exist");
        require(medicines[_id].quantity >= _amount, "Not enough stock");
        medicines[_id].quantity -= _amount;
        emit StockDecreased(_id, medicines[_id].quantity);
    }

    // Get medicine details
    function getMedicine(uint256 _id) public view returns (string memory, uint256) {
        require(_id < medicineCount, "Medicine ID does not exist");
        return (medicines[_id].name, medicines[_id].quantity);
    }

    
    function getAllMedicines() public view returns (string[] memory, uint256[] memory) {
        string[] memory names = new string[](medicineCount);
        uint256[] memory quantities = new uint256[](medicineCount);

        for (uint256 i = 0; i < medicineCount; i++) {
            names[i] = medicines[i].name;
            quantities[i] = medicines[i].quantity;
        }

        return (names, quantities);
    }

}
