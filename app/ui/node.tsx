import {
    NodeType,
  } from '@/app/lib/definitions';

export default function Node({ node }: { node: NodeType; }) {
    return (
        <div className="size-24 rounded bg-orange-400 text-center p-3 shrink-0 grow-0">
            <div className="pt-4 leading-10 text-clip overflow-hidden">
                {node.name}
            </div>
        </div>
    );
  }