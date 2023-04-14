// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Counter {
    uint private total;
    uint private subtracted;
    uint private multiplied;
    uint private divided;

    function add(uint value1, uint value2) public {
        total = value1 + value2;
    }

    function subtract(uint value1, uint value2) public {
        require(value1 >= value2, "Cannot subtract a larger number from a smaller number");
        subtracted = value1 - value2;
    }

    function multiply(uint value1, uint value2) public {
        multiplied = value1 * value2;
    }

    function divide(uint value1, uint value2) public {
        require(value2 > 0, "Cannot divide by zero");
        divided = value1 / value2;
    }

    // View functions to return the values of the state variables
  function getTotal() public view returns (uint256) {
    return total;
  }

  function getSubtracted() public view returns (uint256) {
    return subtracted;
  }

  function getMultiplied() public view returns (uint256) {
    return multiplied;
  }

  function getDivided() public view returns (uint256) {
    return divided;
  }
}