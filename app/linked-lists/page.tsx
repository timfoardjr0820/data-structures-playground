'use client'

import React, { useState, useRef, useEffect } from 'react';
import Node from '@/app/ui/node';
import Connector from '@/app/ui/connector';
import {
  NodeType,
} from '@/app/lib/definitions';

interface IConnectionType {
  startX: any,
  startY: any,
  endX: any,
  endY: any,
}


export default function Page() {
  const [nodes, setNodes] : [nodes: Array<NodeType>, setNodes: Function] = useState([
    {value: "1", next:undefined},
    {value: "2", next:undefined},
    {value: "3", next:undefined},
    {value: "4", next:undefined},
    {value: "5", next:undefined},
    {value: "6", next:undefined}
  ]);
  
  
  const nodeRefs = useRef([]);
  nodeRefs.current = nodes.map((_, i) => nodeRefs.current[i] || React.createRef());

  const parentRef = useRef(null);

  const [connections, setConnections] : [any[], Function] = useState([]);

  useEffect(() => {
    let newConnections : any[] = [];
    const offset = parentRef.current?.getBoundingClientRect();

    for(let index=0; index<nodes.length - 1; index++) {   
      const startNode = nodeRefs.current[index];
      const endNode = nodeRefs.current[index + 1];
      
      const startPos = startNode.current?.getBoundingClientRect();
      const endPos = endNode.current?.getBoundingClientRect();
      
      newConnections.push({
        startX: startPos.right - offset.x,
        startY: ((startPos.top + startPos.height)/2) - offset.y,
        endX: endPos.left - offset.x,
        endY: ((endPos.top + endPos.height)/2) - offset.y,
      });
    }
  
    setConnections(
      newConnections
    );
  }, [nodes]);

  return (
    <div className="" ref={parentRef}>
      <h1 className="text-4xl text-center">Linked Lists</h1>
      <div className="flex shrink-0 gap-8">
        {nodes.map((node, index) => (
          <React.Fragment key={index}>
            <Node ref={nodeRefs.current[index]} node={node} />
          </React.Fragment> 
        ))}

        {connections.map((connection, index) => (
          <Connector key={index} {...connection} />
        ))}
      </div>
    </div>
  );
}