/*
 * Module: A bloom filter data structure
 * Author: David Oniani
 * License: GNU General Public License v3.0
 * 
*/

// A bloom filter class
class BloomFilter {
    // A bit vector for the bloom filter
    private _bitVector: number[];

    // A bloom filter constructor
    public constructor() {
        this._bitVector = new Array<number>(50).fill(0);
    }

    // A hash function
    private _hash0(key: string): number {
        return key.charCodeAt(0);
    }

    // A hash function
    private _hash1(key: string): number {
        let hash = 32768;
        let length = key.length;
  
        while(length) {
            hash = (hash * 32) ^ key.charCodeAt(--length);
        }
        return hash >> 0;
    }
    
    // A hash function
    private _hash2(key: string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash ^= key.charCodeAt(i);
        }
        return hash;
    }

    // Insert the key to the trie
    public insert(key: string): void {
        this._bitVector[this._hash0(key) % this._bitVector.length] = 1;
        this._bitVector[this._hash1(key) % this._bitVector.length] = 1;
        this._bitVector[this._hash2(key) % this._bitVector.length] = 1;
    }

    // Find if the given key is in the trie
    public find(key: string): boolean | string {
        if (this._bitVector[this._hash0(key) % this._bitVector.length] == 0) {
            return false;
        }

        if (this._bitVector[this._hash1(key) % this._bitVector.length] == 0) {
            return false;
        }

        if (this._bitVector[this._hash2(key) % this._bitVector.length] == 0) {
            return false;
        }

        return "Maybe - probability of false positives!";
    }

    // Show the bit vector
    public show(): void {
        console.log(this._bitVector);
    }

}


function testBloomFilter() {
    console.log("Testing...");
    let bf = new BloomFilter();
    let words = ["bat", "hat", "rat"]

    for (let entry of words) {
        bf.insert(entry);
    }

    bf.show();

    console.log("\n");

    console.log(bf.find("hat"));

    console.log("\n");

    console.log(bf.find("gat"));

    console.log("\n");

    console.log(bf.find("fat"));

    console.log("\n");

    console.log(bf.find("bat"));

    console.log("\n");

    console.log(bf.find("rat"));

    console.log("\n");

    console.log(bf.find("cat"));
}


testBloomFilter();
