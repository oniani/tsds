/*
 * Module: A trie data structure
 * Author: David Oniani
 * License: MIT
 * 
*/

// A class to represent the nodes of the trie
class TrieNode {
    private _children: any[];
    private _endOfWord: boolean;

    public constructor() {
        this._children = new Array(26);
        this._endOfWord = false;
    }

    public get children(): any[] {
        return this._children;
    }

    public set children(newChildren: any[]) {
        this._children = newChildren;
    }

    public get endOfWord(): boolean {
        return this._endOfWord;
    }

    public set endOfWord(newEndOfWord) {
        this._endOfWord = newEndOfWord;
    }
}


// A class for the trie
class Trie {
    // The root of the trie
    private _root: TrieNode;

    // A trie constructor
    public constructor() {
        this._root = new TrieNode();
    }

    // Get the index of a character
    private _characterToIndex(character: string): number {
        return character.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    // Insert the key to the trie
    public insert(key: string) {
        let current = this._root;
        let length = key.length;

        for (let level = 0; level < length; level++) {
            let index = this._characterToIndex(key[level]);
            
            if (!current.children[index]) {
                current.children[index] = new TrieNode();
            }
            current = current.children[index];
        }
        current.endOfWord = true;
    }

    // Find the key in the trie
    public find(key: string) {
        let current = this._root;
        let length = key.length;

        for (let level = 0; level < length; level++) {
            let index = this._characterToIndex(key[level]);

            if (!current.children[index]) {
                current.children[index] = new TrieNode();
            }
            current = current.children[index];
        }

        return current !== null && current.endOfWord;
    }
}


function testTrie() {
    console.log("Testing...");
    let trie = new Trie();

    let words = ["sexy", "rexy", "lexy", "hexy"]
    for (let element of words) {
        trie.insert(element);
    }

    console.log(trie.find("rexy"));
    console.log(trie.find("vexy"));
    console.log(trie.find("sexy"));
    console.log(trie.find("dexy"));
}


testTrie();
