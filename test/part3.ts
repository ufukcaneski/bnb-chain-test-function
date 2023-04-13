import { expect } from "chai";
import hre from "hardhat";
import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ethers } from "hardhat";

describe("Lock", function () {
  // We define a fixture to reuse the same setup in every test.
  async function deployOneYearLockFixture() {
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const ONE_GWEI = 1_000_000_000;

    const lockedAmount = ONE_GWEI;
    const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Lock = await ethers.getContractFactory("Lock");
    const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

    return { lock, unlockTime, lockedAmount, owner, otherAccount };
  }

  describe("withdraw", function () {
    it("Should revert with the right error if called too soon", async function () {
      const { lock } = await loadFixture(deployOneYearLockFixture);
      await expect(lock.withdraw()).to.be.revertedWith("You can't withdraw yet");
    });
  })
  describe("token", function () {
    it("Should transfer tokens", async function () {
      // Deploy the contract and get a reference to the contract object
      const Lock = await ethers.getContractFactory("token");
      const lock = await Lock.deploy(1);
    });
  });
});