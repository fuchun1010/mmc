const node = (value,parentNode = {},index=-1) => {

	let isLeaf = !isNaN(value)

	let obj = {parentNode:parentNode,leaves:[],nextNodes:[],index:index,value:value}

	if(isLeaf)
	{
		delete obj.leaves
		delete obj.nextNodes
	}

	return obj

}

const root = node('root',undefined)

const findInsertNode = (cursor,cell) => {
	return cursor.nextNodes.find(node=>{return node.value === cell})
}

export function createDataTree(records) {

	records.forEach(record=>{
		let cursor = root
		record.forEach((cell,index)=>{

			let isCategory = isNaN(cell)
			if (isCategory){
				let target = findInsertNode(cursor,cell)
				if(!target){
					target = node(cell,undefined,index)
					target.parentNode = cursor
					cursor.nextNodes.push(target)
				}
				cursor = target

			} else {
				cursor.leaves.push(cell)
			}
			
		});
	});
	console.log(root)
}