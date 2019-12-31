#Uses python3
#SUCCESSFUL

import sys
import queue


def dijkstra(nodeDict, costDict, S, n, Infinite):

    # Array of distance for node at index i from origin S
    dist = [Infinite for node in range(n)]
    # print('dist:', dist)
    # Array of 'parent' node for node at index i from origin S
    prev = [None for node in range(n)]

    dist[S] = 0  # Initialize distance from S to S as 0

    H = queue.PriorityQueue()  # Instantiate the priority queue for

    H.put_nowait((dist[S], S))  # Initialize S in H

    # for edge in list(zip(dist, range(len(dist)-1, -1, -1))): H.put_nowait(edge)      #Add (dist[v], v) tuples to H

    while not H.empty():
        uDist, u = H.get_nowait()
        # print('u:', u)
        # print('uDist:', uDist)
        uChildren = nodeDict[u]
        # print('uChildren:', uChildren)
        uCosts = costDict[u]
        for v in range(len(uChildren)):
            # print('v:', v)
            # print('uchildren[v]:', uChildren[v])
            # print('dist:', dist)
            if dist[uChildren[v]] > dist[u] + uCosts[v]:  # If this edge can be relaxed, relax it
                # print('dist[uChildren[v]]', dist[uChildren[v]])
                # print('dist[u]:', dist[u])
                # print('uCosts[v]:', uCosts[v])
                dist[uChildren[v]] = dist[u] + uCosts[v]
                prev[uChildren[v]] = u
                # print('dist[v]', dist[v])
                # print('dist[u]', dist[u])
                # Change priority of v in H
                H.put_nowait((dist[v], uChildren[v]))
            # print('dist:', dist)

    return dist


def distance(adj, cost, S, t, n, Infinite):

    nodeDict = dict(enumerate(adj))  # Instantiate a dictionary to house edges
    # Instantiate a dictionary to house edge costs (index-correlated to nodeDict edges)
    costDict = dict(enumerate(cost))

    # Relax all edges, fill in dists
    dist = dijkstra(nodeDict, costDict, S, n, Infinite)

    # print('dist:', dist)

    if dist[t] != Infinite:
        return dist[t]
    else:
        return -1


if __name__ == '__main__':

    # input = open("/Users/jonathanolson/Documents/GitHub/UCSD-Algorithms/Course-3/test_1", "r")
    # input = open("/Users/jonathanolson/Documents/GitHub/UCSD-Algorithms/Course-3/test_2", "r")
    # input = open("/Users/jonathanolson/Documents/GitHub/UCSD-Algorithms/Course-3/test_3", "r")
    # input = open("/Users/jonathanolson/Documents/GitHub/UCSD-Algorithms/Course-3/test_4", "r")
    # input = input.read()

    input = sys.stdin.read()

    data = list(map(int, input.split()))
    n, m = data[0:2]
    data = data[2:]
    edges = list(
        zip(zip(data[0:(3 * m):3], data[1:(3 * m):3]), data[2:(3 * m):3]))
    data = data[3 * m:]
    adj = [[] for _ in range(n)]
    cost = [[] for _ in range(n)]
    for ((a, b), w) in edges:
        adj[a - 1].append(b - 1)
        cost[a - 1].append(w)
    # print('ajd:', adj)
    # print('cost:', cost)
    s, t = data[0] - 1, data[1] - 1
    # Infinite = sum([item for sublist in cost for item in sublist])+1 #Instantiate 'Infinite'; 1 greater than total weights summed
    Infinite = 1e8 + 1
    print(distance(adj, cost, s, t, n, Infinite))
