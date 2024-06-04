import Node from '@/app/ui/node';

export default function Page() {
    return (
      <div className="">
        <h1 className="text-4xl text-center">Linked Lists</h1>
        <div className="flex space-x-10">
          <Node node={{name: "1"}}/>
          <Node node={{name: "2"}}/>
          <Node node={{name: "3"}}/>
          <Node node={{name: "3"}}/>
          <Node node={{name: "3"}}/>
          <Node node={{name: "3"}}/>
          <Node node={{name: "3"}}/>
        </div>
      </div>
    );
  }
  