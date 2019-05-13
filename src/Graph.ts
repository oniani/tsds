/*
 * A graph data structure.
 * Author: David Oniani
 * License: GNU General Public License v3.0
 * 
*/

import Queue = require('./Queue');
import Stack = require('./Stack');

// A graph class
class Graph {
    // Represeting a graph as an adjacency list
    private _graph: { [key: number]: number[] } | { [key: string]: string[] };

    // A graph constructor
    public constructor() {
        this._graph = {};
    }

    // Get the vertices
    getAllVertices(): number[] | string[] {
        let keys = new Set();
        for (let key in this._graph) {
            keys.add(key);
        }
        return Array.from(keys).sort();
    }

    // Get all connecting vertices
    public getConnectingVertices(vertex: number | string): number[] | string[] {
        return this._graph[vertex];
    }

    // Add a vertex to the graph
    public addVertex(newVertex: number | string, oldVertex: number | string): void {
        if (this._graph[oldVertex] === undefined) {
            this._graph[oldVertex] = [newVertex];
            this._graph[newVertex] = [oldVertex];
        }
        else {
            this._graph[oldVertex].push(newVertex);
            this._graph[newVertex] = [oldVertex];
        }
    }

    // Delete a vertex from the graph
    public deleteVertex(vertex: number | string): void {
        delete this._graph[vertex];
        for (let key in this._graph) {
            if (this._graph[key].includes(vertex)) {
                let index = this._graph[key].indexOf(vertex);
                if (index !== -1) {
                    this._graph[key].splice(index, 1);
                }
            }
        }
    }

    // Show the graph
    public show(): void {
        console.log("Graph", this._graph);
    }

    
}


function testGraph() {
    console.log("Testing...");

    let graph = new Graph();
    graph.addVertex('A', 'B');

    graph.show();
    
    console.log(graph.getAllVertices());

    console.log("\n");

    graph.deleteVertex('A');

    graph.show()

    console.log(graph.getAllVertices());

    console.log("\n");

    let newGraph = new Graph();
}


testGraph();
