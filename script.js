 const prod = [
    {
        id: 1,
        name: "Black-jacket",
        tag: "black jack",
        price: 3000,
        inCart: 0,
        Description:
            "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    },
    {
        id: 2,
        name: "Pink-fur",
        tag: "pink fur",
        price: 1200,
        inCart: 0,
        Description:
            "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    },
    {
        id: 3,
        name: "Blue-Denim",
        tag: "black jack",
        price: 7000,
        inCart: 0,
        Description:
            "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    },
    {
        id: 4,
        name: "Orange-Alert",
        tag: "black jack",
        price: 1200,
        inCart: 0,
        Description:
            "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    },

    {
        id: 5,
        name: "Red-jacket",
        tag: "black jack",
        price: 6000,
        inCart: 0,
        Description:
            "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    },
    {
        id: 6,
        name: "Stylish Coral Jacket",
        tag: "pink fur",
        price: 3200,
        inCart: 0,
        Description:
            "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    },
    {
        id: 7,
        name: "Green With Fur",
        tag: "black jack",
        price: 6000,
        inCart: 0,
        Description:
            "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    },
    {
        id: 8,
        name: "Yellow-Alert",
        tag: "black jack",
        price: 9200,
        inCart: 0,
        Description:
            "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    },
];

let order = [];
const CartBox = document.getElementById("cart");

function addtocart(id) {
    const products = prod.find((p) => p.id == id);
    const ProdObj = {
        id: id,
        quantity: 0,
        amount: products.price,
    };
    order.push(ProdObj);

    const prodDisplay = document.createElement("div");

    const prodTitle = document.createElement("text");
    const prodDesc = document.createElement("text");
    const prodPrice = document.createElement("text");
    const itemQuantity = document.createElement("text");
    const incrementButton = document.createElement("button");
    const decrementButton = document.createElement("button");
    const titleTag = "<span class='tit'>Title: </span>";
    const desc = "<span class='desc'>Description: </span>";
    const pkr = "<span class='pkr'>Amount: </span>";
    // const items = "<span class='items'>Items</span>";
    const i = "<span class='in'>Increment </span>";
    const d = "<span class='de'>Decrement</span>";
    incrementButton.className="inc";
    decrementButton.className="dec";
    // const quantit = "<span class='qty'> Quantity</span>";

    prodDisplay.append(
        prodTitle,
        prodDesc,
        prodPrice,
        itemQuantity,
        incrementButton,
        decrementButton
    );

    prodTitle.setAttribute("id", "Title" + products.id);
    prodTitle.className = "product-title";
    prodDesc.setAttribute("id", "Description" + products.id);
  
    incrementButton.setAttribute("id", "Plus" + products.id);
    decrementButton.setAttribute("id", "minus" + products.id);
  

    prodTitle.innerHTML = titleTag + products.name;
    prodDesc.innerHTML = desc + products.Description;
    prodPrice.innerHTML = "<span class='pkr'>Amount</span> <span id='Price" + products.id + "'> " + products.price + "</span>";
    incrementButton.innerHTML = i ;
    decrementButton.innerHTML = d ;
    itemQuantity.innerHTML = "<span class='qty'>Quantity</span> <span id='quantity" + products.id + "'> " + 0 + "</span>";
    
    incrementButton.addEventListener("click", (e) => {
        AddItem(id);
    });
    decrementButton.addEventListener("click", (e) => {
        removeItem(id);
    });

    CartBox.append(prodDisplay);
}
let checkout = document.getElementById("Final-price");
let itemsprice = document.getElementById("Item-price");
let calculateQuantity = document.getElementById("cal-quantity");

function AddItem(id) {
    const ClickedID = order.find((q) => q.id == id);
    const TotalItem = ClickedID.quantity + 1;
    ClickedID.quantity = ClickedID.quantity + 1;

    const quanElement = document.getElementById("quantity" + id);
    const PriceElement = document.getElementById("Price" + id);
    PriceElement.innerText = ClickedID.quantity * ClickedID.amount;
    quanElement.innerText = ClickedID.quantity;
    const ck = document.createElement("text");
    const TotalPrice = TotalItem * ClickedID.amount;
    // ck.innerText = TotalPrice;
    itemsprice.append(ck);
    let sum = 0;
    for (let i = 0; i < order.length; i++) {
        const Tprice = order[i].quantity * order[i].amount;
        sum = sum + Tprice;
        checkout.innerText = sum;
    }
}

function removeItem(id) {
    const ClickedID = order.find((q) => q.id == id);

    const TotalItem = ClickedID.quantity;
    if (TotalItem <= 0) {
        alert("not possible");
    } else {
        ClickedID.quantity = ClickedID.quantity - 1;

        const quanElement = document.getElementById("quantity" + id);
        const PriceElement = document.getElementById("Price" + id);

        PriceElement.innerText = ClickedID.quantity * ClickedID.amount;
        quanElement.innerText = ClickedID.quantity;
        const ck = document.createElement("text");
        // const TotalPrice = TotalItem * ClickedID.amount;
        // ck.innerText = TotalPrice;
        itemsprice.append(ck);
        let sum = 0;
        for (let i = 0; i < order.length; i++) {
            const Tprice = order[i].quantity * order[i].amount;
            sum = sum + Tprice;
            checkout.innerText = sum;
        }
    }
}