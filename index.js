function createNode(value = null,nextNode = null){
    return {
        value: value,
        nextNode: nextNode
    }
};

function createLinkedList(){
    return {
        head: null,

        append(value){
            if(!this.head){
                this.head = createNode(value)
            }else {
                if(!this.head.nextNode){
                    this.head.nextNode = createNode(value)
                }else{
                    tail = this.head.nextNode;
                    while(tail.nextNode){
                        tail = tail.nextNode;
                    }
                    tail.nextNode = createNode(value);
                }
            }
        },
        getHead(){
            return this.head;
        },

        tail(){
            let tail = this.head.nextNode;
            while(tail.nextNode){
                tail = tail.nextNode
            }
            return tail;
        },

        prepend(value){},

        size(){},

        at(index){},

        pop(){},

        contains(value){},

        find(value){},

        toString(){}
    }
}

const list = createLinkedList();
list.append(2);
list.append(3);
list.append(1)
console.log()
