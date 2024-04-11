// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract AirspaceNFT is ERC721 {
    uint256 private _nextTokenId;
    address private _owner;

    struct PlotMetadata {
        string external_url;
        string trait_type1;
        string trait_type2;
        string trait_type3;
        string trait_type4;
    }

    mapping(uint256 => PlotMetadata) private _plotMetadata;

    constructor() ERC721("ADRRESS - Layer 2", "ADDRESSL2") {
        _owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == _owner, "Only contract owner can call this function");
        _;
    }

    function safeMint(
        address to,
        string memory external_url,
        string memory trait_type1,
        string memory trait_type2,
        string memory trait_type3,
        string memory trait_type4
    ) public onlyOwner {
        uint256 tokenId = _nextTokenId;
        _nextTokenId++;
        _mint(to, tokenId);
        _plotMetadata[tokenId] = PlotMetadata(external_url, trait_type1, trait_type2, trait_type3, trait_type4);
    }

    function getPlotMetadata(uint256 tokenId) public view returns (PlotMetadata memory) {
        return _plotMetadata[tokenId];
    }

    function _mintt(address to, uint256 tokenId) internal {
        _safeMint(to, tokenId);
        emit Transfer(address(0), to, tokenId);
    }
}
