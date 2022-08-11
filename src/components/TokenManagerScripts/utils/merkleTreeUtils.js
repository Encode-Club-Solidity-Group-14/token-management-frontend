import keccak256 from "keccak256";
import MerkleTree from "merkletreejs";

export function createMerkleRoot(addresses){
    const leafNodes = addresses.map((a) => keccak256(a));
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
    const rootHash = merkleTree.getRoot();
    return rootHash;
}

export function createProof(addresses, address){
  const leafNodes = addresses.map((a) => keccak256(a));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  const proof = merkleTree.getHexProof(keccak256(address));
  return proof;
}