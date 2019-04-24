function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget(){
  return document.getElementById("nested").querySelector(".target");
};

function increaseRankBy(n) {
  const lis = document
  .getElementById('app')
  .querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n);
  };
};



function deepestChild() {
  const root = document.getElementById('grand-node');
  let result = { depth: 0, element: root};
  let queue = [];

  //helper function that adds the children of a given node to the queue
  function addChildrenToQueue(node) {
    let nodeChildren = node.children;
    for (let i = 0; i < nodeChildren.length; i++) {
      queue.push(nodeChildren[i]);
    };
  };

  root.depth = 0;
  addChildrenToQueue(root);

  while (queue.length > 0){
    let ele = queue.shift(); //grab next node off queue
    ele.depth = ele.parentNode.depth + 1; //add depth
    debugger;

    //update the deepest node
    if (ele.depth > result.depth) {
      result.depth = ele.depth;
      result.element = ele;
    }

    addChildrenToQueue(ele);
  };

  return result.element;
}
