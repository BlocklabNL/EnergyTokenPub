// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../node_modules/@openzeppelin/contracts/access/AccessControl.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";


contract EnergyToken is Ownable, ERC721Enumerable {
    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {}

    using Strings for uint256;
    
    // Optional mapping for token URIs
    mapping (uint256 => string) private _tokenURIs;

    // Base URI
    string private _baseURIextended;
    
    function setBaseURI(string memory baseURI_) external onlyOwner() {
        _baseURIextended = baseURI_;
    }
    
    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }
    
    function _baseURI() internal view virtual override returns (string memory) {
        return _baseURIextended;
    }
    
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory _tokenURI = _tokenURIs[tokenId];
        string memory base = _baseURI();
        
        // If there is no base URI, return the token URI.
        if (bytes(base).length == 0) {
            return _tokenURI;
        }
        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).
        if (bytes(_tokenURI).length > 0) {
            return string(abi.encodePacked(base, _tokenURI));
        }
        // If there is a baseURI but no tokenURI, concatenate the tokenID to the baseURI.
        return string(abi.encodePacked(base, tokenId.toString()));
    }

    function mintToken(
        address _to,
        uint256 _tokenId,
        string memory tokenURI_
    ) public onlyOwner(){
        _mint(_to, _tokenId);
        _setTokenURI(_tokenId, tokenURI_);
    }

    function burn(
        uint256 tokenId
    ) public onlyOwner() {
        _burn(tokenId);
    }

    function tokensOfContract() public view returns(uint256[] memory contractTokens) {
        uint256 totalTokens = totalSupply();
        uint256[] memory result = new uint256[](totalTokens);
        
        // We count on the fact that all tokens have IDs starting at 0 and increasing
        // sequentially up to the total Token count.
        for (uint256 tokenId = 0; tokenId < totalTokens; tokenId++) {
            result[tokenId] = super.tokenByIndex(tokenId);
        }

        return result;
    }

    function getAllAddressesOfOwners() public view returns(address[] memory ownerAddresses) {
        uint256[] memory tokens = tokensOfContract();
        address[] memory result = new address[](tokens.length);

        uint256 resultIndex = 0;

        for(uint256 tokenId = 1; tokenId <= tokens.length; tokenId++){
            result[resultIndex] = ownerOf(tokenId);
            resultIndex++;
        }

        return result;
    }
}