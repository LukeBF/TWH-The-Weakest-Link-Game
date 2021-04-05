const main = () =>
{
    //VARIABLES
    const moneyTreeRound1 = [0,1000,5000,10000,50000,75000,125000,250000,500000]
    //let moneyTreeItem = ``;
    let currentMoneyTreeIndex = 0;
    
    //TARGET ELEMENTS
    const moneyTreeNode = document.querySelector(".money-tree-container")

    //GENERATE THE MONEY TREE DYNAMICALLY
    for(let i=moneyTreeRound1.length-1; i>=0; i--)
    {
        currentMoneyTreeIndex = i
        moneyTreeNode.innerHTML += `<div class="grid money-tree-item">${moneyTreeRound1[i]}</div>`;
        
    }

}
main();