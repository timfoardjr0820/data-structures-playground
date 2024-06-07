import { InputHTMLAttributes, forwardRef } from 'react';
import {
    NodeType,
  } from '@/app/lib/definitions';


type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & { node: NodeType };

const Node = forwardRef <Ref, CustomInputProps>(
    ({ node }, ref) => {
    return (
        <div className="size-24 rounded border-black border-solid border-2 bg-orange-400 text-center p-3 shrink-0 grow-0"
             ref={ref}
        >
            <div className="pt-4 leading-10 text-clip overflow-hidden">
                {node.value}
            </div>
        </div>
    );
  });

export default Node;