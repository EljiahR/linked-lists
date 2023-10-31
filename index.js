function createNode(value = null,nextNode = null){
    return {
        value: value,
        nextNode: nextNode
    }
};

function createLinkedList(){
    return {
        root: null,

        append(value){
            if(!this.root){
                this.root = createNode(value)
            }else {
                if(!this.root.nextNode){
                    this.root.nextNode = createNode(value)
                }else{
                    tail = this.root.nextNode;
                    while(tail.nextNode){
                        tail = tail.nextNode;
                    }
                    tail.nextNode = createNode(value);
                }
            }
        },
        head(){
            return this.root;
        },

        tail(){
            let tail = this.root.nextNode;
            while(tail.nextNode){
                tail = tail.nextNode
            }
            return tail;
        },

        prepend(value){
            const newHead = createNode(value);
            [newHead.nextNode, this.root]= [this.root, newHead];
        },

        size(){
            let size = 0;
            if(this.root){
                size++;
                let tail = this.root.nextNode;
                while(tail){
                    tail = tail.nextNode
                    size++
                }
            }
            return size;
        },

        at(index){
            let currentIndex = 0;
            let value = this.root;
            while(index != currentIndex){
                value = value.nextNode;
                currentIndex++
            }
            return value;
        },

        pop(){
           
            let previous = null
            let tail = this.root;
            while(tail.nextNode){
                [tail,previous] = [tail.nextNode,tail]
            }
            previous.nextNode = null
            
        },

        contains(value){
            if(this.root.value === value) return true;
            let tail = this.root.nextNode;
            while(tail){
                if(tail.value === value) return true;
                tail = tail.nextNode;
            }
            return false;
        },

        find(value){},

        toString(){}
    }
}

const list = createLinkedList();
list.append(2);
list.append(3);
list.append(1);
list.prepend(8);
list.pop();
console.log(list.contains(6))
