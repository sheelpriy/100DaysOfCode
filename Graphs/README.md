## Graph Basics
A graph is a data structure where a *node* can have zero or more adjacent elements.
The connection between two nodes is called *edge*. Nodes can also be called *vertices*.


The *degree* is the number of edges connected to a vertex.
 E.g., the purple vertex has a degree of 3 while the blue one has a degree of 1.


## Type of graphs:

### directions
If the edges are bi-directional, then we have an *undirected graph*. 
If the edges have a direction, then we have a directed graph or di-graph for short. 
You can think of it as a one-way street (directed) or two-way street (undirected)

### cycles
A graph can have cycles, which means you could get the same node more than once.
The graph without cycles is called acyclic graph.

### connections
Not all vertices have to be connected in the graph. 
You might have isolated nodes or even separated subgraphs. 
If all nodes have at least one edge, then we have a connected graph. 
When all nodes are connected to all other nodes, then we have a complete graph.

## Application of Graphs
When edges have values/cost assigned to them, we say we have a weighted graph. If the weight is absent, we can assume it’s 1.
To name a few:

    Airline Traffic (image above)
        Node/vertex = Airport
        Edges = direct flights between two airports
        Weight = miles between two airports

    GPS Navigation
        Node = road intersection
        Edge = road
        Weight = time required to go from one intersection to another

    Networks routing
        Node = server
        Edge = data link
        Weight = connection speed

    In general, graphs have many real-world applications like:

    Electronic circuits
    Flight reservations
    Driving directions
    Telcom: Cell tower frequency planning
    Social networks. E.g., Facebook uses a graph for suggesting friends
    Recommendations: Amazon/Netflix uses graphs to make suggestions for products/movies
    Graphs help to plan the logistics of delivering goods


## Representing graphs
There are two primary ways of representing a graph:
    Adjacency list
    Adjacency Matrix